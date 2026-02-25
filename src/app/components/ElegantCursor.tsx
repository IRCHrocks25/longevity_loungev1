import { useEffect, useRef, useState } from "react";

export function ElegantCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const tailRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const tailPos = useRef({ x: -200, y: -200 });
  const rafRef = useRef<number>(0);

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [role='button'], input, select, textarea, label")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);

    const animate = () => {
      // Ring follows with 10% ease
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;
      // Tail follows with 6% ease (more lag)
      tailPos.current.x += (mouse.current.x - tailPos.current.x) * 0.06;
      tailPos.current.y += (mouse.current.y - tailPos.current.y) * 0.06;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      if (tailRef.current) {
        tailRef.current.style.transform = `translate(${tailPos.current.x}px, ${tailPos.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const opacity = visible ? 1 : 0;

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>

      {/* ── Outermost aura ── */}
      <div
        ref={tailRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? "90px" : "72px",
          height: hovering ? "90px" : "72px",
          marginLeft: hovering ? "-45px" : "-36px",
          marginTop: hovering ? "-45px" : "-36px",
          borderRadius: "50%",
          border: "1px solid rgba(201,169,110,0.18)",
          pointerEvents: "none",
          zIndex: 99996,
          opacity,
          transition: "opacity 0.4s ease, width 0.5s cubic-bezier(0.23,1,0.32,1), height 0.5s cubic-bezier(0.23,1,0.32,1), margin 0.5s cubic-bezier(0.23,1,0.32,1)",
          willChange: "transform",
        }}
      />

      {/* ── Mid ring ── */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: clicking ? "24px" : hovering ? "50px" : "34px",
          height: clicking ? "24px" : hovering ? "50px" : "34px",
          marginLeft: clicking ? "-12px" : hovering ? "-25px" : "-17px",
          marginTop: clicking ? "-12px" : hovering ? "-25px" : "-17px",
          borderRadius: "50%",
          border: `1.5px solid ${hovering ? "rgba(42,122,122,0.55)" : "rgba(201,169,110,0.75)"}`,
          background: hovering
            ? "rgba(201,169,110,0.06)"
            : clicking
            ? "rgba(201,169,110,0.18)"
            : "transparent",
          pointerEvents: "none",
          zIndex: 99997,
          opacity,
          transition:
            "opacity 0.3s ease, width 0.35s cubic-bezier(0.23,1,0.32,1), height 0.35s cubic-bezier(0.23,1,0.32,1), margin 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.3s ease, background 0.3s ease",
          willChange: "transform",
          backdropFilter: hovering ? "blur(1px)" : "none",
        }}
      />

      {/* ── Center dot ── */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: clicking ? "4px" : hovering ? "4px" : "6px",
          height: clicking ? "4px" : hovering ? "4px" : "6px",
          marginLeft: clicking ? "-2px" : hovering ? "-2px" : "-3px",
          marginTop: clicking ? "-2px" : hovering ? "-2px" : "-3px",
          borderRadius: "50%",
          background: hovering
            ? "rgba(42,122,122,0.9)"
            : "linear-gradient(135deg, #C9A96E 0%, #2A7A7A 100%)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity,
          transition:
            "opacity 0.3s ease, width 0.2s ease, height 0.2s ease, margin 0.2s ease, background 0.3s ease",
          willChange: "transform",
          mixBlendMode: "multiply",
        }}
      />
    </>
  );
}
