import { ArrowRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import React, { useState } from "react";
import aboutHeroImage from "../../assets/5d1d01f7da886e2ea4dd4c72dd6ec9c210af5ad8.png";
import leaf1Image from "../../assets/ca6b7323eebbd21a744ab9902fd4b4687d1d6ca4.png";
import leaf2Image from "../../assets/2ca92bff752e790968997c5d5d029ad3118a5440.png";
import storeAssetImage from "../../assets/c3ecfce36f1994b58b7739ac29045f00c36e9ef0.png";

const aboutImage = aboutHeroImage;
const storeImage = storeAssetImage;

const eyebrow: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.68rem",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "#B8965A",
};

const serif = (size: string, lh = "1.05"): React.CSSProperties => ({
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: size,
  lineHeight: lh,
});

const sans = (extra?: React.CSSProperties): React.CSSProperties => ({
  fontFamily: "'DM Sans', sans-serif",
  ...extra,
});

export function About() {
  return (
    <div style={{ background: "#FDFAF6" }}>

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section
        className="pt-36 pb-28 px-6 lg:px-16"
        style={{ background: "linear-gradient(105deg, #FDFAF6 50%, #F2EBE1 100%)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Copy */}
          <div className="space-y-4">
            <p style={eyebrow}>About Longevity Lounge</p>

            <h1
              className="text-[#1A2A2A]"
              style={serif("clamp(2.8rem, 5vw, 4.5rem)", "1.08")}
            >
              Longevity is about{" "}
              <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>
                staying well —
              </em>
              <br />
              <span style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.8rem)", whiteSpace: "nowrap" }}>
                not just living longer.
              </span>
            </h1>

            <p
              className="text-[#5A6B6B] leading-relaxed max-w-md"
              style={sans({ fontSize: "1rem" })}
            >
              Longevity Lounge exists to help people prevent chronic disease,
              protect their vitality, and live fully for decades to come.
            </p>

            {/* Thin rule */}
            <div
              className="h-px w-20"
              style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }}
            />
          </div>

          {/* Image */}
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-[3rem] rotate-1 opacity-40"
              style={{ background: "linear-gradient(135deg, rgba(42,122,122,0.2), rgba(212,165,165,0.15))" }}
            />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <ImageWithFallback
                src={aboutImage}
                alt="Wellness and longevity"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 60%, rgba(23,40,40,0.3) 100%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR MISSION — Large Statement
      ═══════════════════════════════════════ */}
      <section className="py-32 px-6 lg:px-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">

          <div className="mb-20">
            <p style={eyebrow} className="mb-8">Our Mission</p>
            <h2
              className="text-[#1A2A2A]"
              style={serif("clamp(3rem, 6vw, 5.5rem)", "0.98")}
            >
              We make prevention
              <br />
              <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>accessible.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left */}
            <div className="space-y-6">
              <p
                className="text-[#5A6B6B] leading-relaxed"
                style={sans({ fontSize: "0.9rem" })}
              >
                Chronic diseases — including heart disease, diabetes, and
                metabolic disorders — are among the leading causes of disability
                and early death worldwide.
              </p>
              <p
                className="text-[#5A6B6B] leading-relaxed"
                style={sans({ fontSize: "0.9rem" })}
              >
                Research shows that up to{" "}
                <strong className="text-[#1A2A2A]">
                  80% of chronic disease and premature death
                </strong>{" "}
                could be prevented through lifestyle-based interventions.
              </p>
              <p
                className="text-[#7A8B8B]"
                style={sans({ fontSize: "0.875rem" })}
              >
                Yet this information remains:
              </p>
              <ul className="space-y-4">
                {[
                  "Fragmented",
                  "Overwhelming",
                  "Difficult to implement",
                  "Inaccessible to many",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span style={{ color: "#C9A96E", fontSize: "1rem" }}>—</span>
                    <span
                      className="text-[#3D4D4D]"
                      style={sans({ fontSize: "0.875rem" })}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="space-y-8">
              {/* Pull quote */}
              <div className="pl-7 border-l-2" style={{ borderColor: "#C9A96E" }}>
                <p
                  className="text-[#1A2A2A]"
                  style={serif("1.45rem", "1.55")}
                >
                  <em style={{ fontStyle: "italic" }}>
                    Longevity Lounge was created to make science-backed
                    longevity knowledge, tools, and support accessible to as
                    many people as possible.
                  </em>
                </p>
              </div>

              {/* 80% stat */}
              <div
                className="rounded-3xl p-8"
                style={{ background: "rgba(42,122,122,0.05)", border: "1px solid rgba(42,122,122,0.12)" }}
              >
                <p
                  className="text-[#2A7A7A] mb-2"
                  style={serif("4.5rem", "1")}
                >
                  80%
                </p>
                <p
                  className="text-[#5A6B6B]"
                  style={sans({ fontSize: "0.825rem" })}
                >
                  of chronic disease and premature death could be prevented
                  through lifestyle-based interventions.
                </p>
              </div>

              <div
                className="h-px"
                style={{ background: "linear-gradient(90deg, #C9A96E 0%, transparent 70%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CORE PHILOSOPHY — Weakest Link
      ════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-16 relative overflow-hidden" style={{ background: "#FDFAF6" }}>

        <style>{`
          @keyframes leafDrift1 {
            0%   { transform: translateY(0px)   rotate(-22deg) scale(1); }
            40%  { transform: translateY(-28px) rotate(-16deg) scale(1.03); }
            100% { transform: translateY(0px)   rotate(-22deg) scale(1); }
          }
          @keyframes leafDrift2 {
            0%   { transform: translateY(0px)   rotate(155deg) scale(1); }
            50%  { transform: translateY(-20px) rotate(163deg) scale(1.04); }
            100% { transform: translateY(0px)   rotate(155deg) scale(1); }
          }
          @keyframes leafDrift3 {
            0%   { transform: translateY(0px)   rotate(35deg)  scale(1); }
            45%  { transform: translateY(-24px) rotate(28deg)  scale(1.03); }
            100% { transform: translateY(0px)   rotate(35deg)  scale(1); }
          }
          @keyframes leafDrift4 {
            0%   { transform: translateY(0px)   rotate(-135deg) scale(1); }
            50%  { transform: translateY(-18px) rotate(-128deg) scale(1.04); }
            100% { transform: translateY(0px)   rotate(-135deg) scale(1); }
          }
          @keyframes leafDrift5 {
            0%   { transform: translateY(0px)   rotate(75deg)  scale(1); }
            40%  { transform: translateY(-22px) rotate(82deg)  scale(1.03); }
            100% { transform: translateY(0px)   rotate(75deg)  scale(1); }
          }
          @keyframes leafDrift6 {
            0%   { transform: translateY(0px)   rotate(-60deg) scale(1); }
            55%  { transform: translateY(-16px) rotate(-54deg) scale(1.02); }
            100% { transform: translateY(0px)   rotate(-60deg) scale(1); }
          }
        `}</style>

        {/* Leaf 1 — top-left corner, leaf2 shape */}
        <img src={leaf2Image} aria-hidden="true" alt="" style={{
          position: "absolute", top: "-35px", left: "-50px",
          width: "200px", opacity: 1,
          animation: "leafDrift1 8s ease-in-out infinite",
          pointerEvents: "none", userSelect: "none",
        }} />

        {/* Leaf 6 — bottom-right, leaf1 shape */}
        <img src={leaf1Image} aria-hidden="true" alt="" style={{
          position: "absolute", bottom: "-25px", right: "8%",
          width: "145px", opacity: 1,
          animation: "leafDrift6 9.5s ease-in-out infinite 1.5s",
          pointerEvents: "none", userSelect: "none",
        }} />

        <div className="max-w-4xl mx-auto text-center relative" style={{ zIndex: 1 }}>

          <p style={eyebrow} className="mb-5">Our Core Philosophy</p>

          <h2
            className="text-[#1A2A2A] mb-4"
            style={serif("clamp(2.5rem, 5vw, 4.5rem)", "1.08")}
          >
            The weakest link{" "}
            <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>principle.</em>
          </h2>

          <div className="max-w-2xl mx-auto space-y-3">
            <p
              className="text-[#5A6B6B] leading-relaxed"
              style={sans({ fontSize: "0.95rem" })}
            >
              Longevity is a system.
            </p>
            <p
              className="text-[#5A6B6B] leading-relaxed"
              style={sans({ fontSize: "0.9rem" })}
            >
              You can do many things right — but if one area is neglected, it
              quietly undermines everything else.
            </p>

            {/* Divider */}
            <div
              className="h-px max-w-xs mx-auto my-4"
              style={{ background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }}
            />

            <p
              className="text-[#2A7A7A]"
              style={serif("1.3rem", "1.6")}
            >
              <em style={{ fontStyle: "italic" }}>
                We focus on identifying and strengthening your weakest link —
                the one area that matters most for your long-term health.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR APPROACH — Editorial Numbered Grid
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p style={eyebrow} className="mb-8">Our Approach</p>
            <h2
              className="text-[#1A2A2A]"
              style={serif("clamp(2.5rem, 4.5vw, 4rem)", "1.08")}
            >
              Science.{" "}
              <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>Simplicity.</em>{" "}
              Support.
            </h2>
            <p
              className="text-[#7A8B8B] max-w-lg mx-auto mt-6"
              style={sans({ fontSize: "0.875rem" })}
            >
              Because sustainable health is built over time — not overnight.
            </p>
          </div>

          {/* 2×2 editorial grid with hairline dividers */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ background: "rgba(201,169,110,0.18)" }}
          >
            {[
              {
                num: "01",
                title: "Evidence-Based Science",
                desc: "Every recommendation is grounded in credible, peer-reviewed longevity research — not trends.",
              },
              {
                num: "02",
                title: "Expert Education",
                desc: "Dozens of doctors, scientists, and specialists share their knowledge so you can apply it to your life.",
              },
              {
                num: "03",
                title: "Personalized AI Tools",
                desc: "Smart tools help you identify your unique weakest link and build a plan tailored to you.",
              },
              {
                num: "04",
                title: "Community Accountability",
                desc: "A high-quality, supportive community that helps you stay consistent and motivated over time.",
              },
            ].map((item) => (
              <ApproachCard key={item.num} item={item} serif={serif} sans={sans} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STORE SECTION
      ════════════════════════════════════════ */}
      <section className="py-28 px-6 lg:px-16" style={{ background: "#172828" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Copy */}
            <div className="space-y-8">
              <p style={{ ...eyebrow, color: "#C9A96E" }}>Members-Only Benefit</p>

              <h2
                className="text-white"
                style={serif("clamp(2.5rem, 4vw, 3.8rem)", "1.08")}
              >
                Health &amp; Longevity{" "}
                <em style={{ fontStyle: "italic", color: "#D4B896" }}>Store</em>
              </h2>

              <p
                className="leading-relaxed max-w-md"
                style={sans({ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)" })}
              >
                Members receive exclusive discounts in our Health &amp; Longevity
                Store, featuring premium wellness products vetted for quality and
                transparency.
              </p>

              <p
                style={sans({ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", fontStyle: "italic" })}
              >
                Store purchases are processed through a separate e-commerce platform.
              </p>

              <a
                href="https://longevityloungecommunity.gethealthy.store/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white tracking-wide hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  ...sans({ fontSize: "0.8rem", letterSpacing: "0.06em" }),
                  background: "linear-gradient(135deg, #C9A96E 0%, #D4B896 100%)",
                  boxShadow: "0 6px 24px rgba(201,169,110,0.3)",
                }}
              >
                Visit the Store
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[3rem] -rotate-1 opacity-30"
                style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.4), rgba(42,122,122,0.2))" }}
              />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <ImageWithFallback
                  src={storeImage}
                  alt="Premium wellness supplements"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(23,40,40,0.45) 100%)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DISCLOSURE
      ════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-16" style={{ background: "#FDFAF6" }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-7"
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(201,169,110,0.18)",
            }}
          >
            <p
              className="mb-2"
              style={{
                ...sans({ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#B8965A" }),
                textTransform: "uppercase",
              }}
            >
              Educational Notice
            </p>
            <p
              className="leading-relaxed"
              style={sans({ fontSize: "0.75rem", color: "#8A9A9A" })}
            >
              Longevity Lounge is operated by Industry Rockstar Thrive, LLC and
              provides educational information only. Nothing on this site
              constitutes medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ApproachCard({ item, serif, sans }: { item: { num: string, title: string, desc: string }, serif: (size: string, lh?: string) => React.CSSProperties, sans: (extra?: React.CSSProperties) => React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="p-12 lg:p-16 transition-all duration-300 cursor-default"
      style={{
        background: hovered ? "#172828" : "#FFFFFF",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 24px 60px rgba(23,40,40,0.22)" : "none",
        zIndex: hovered ? 2 : 1,
        position: "relative",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className="mb-8 select-none transition-colors duration-300"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "3.5rem",
          lineHeight: "1",
          color: hovered ? "rgba(201,169,110,0.35)" : "rgba(42,122,122,0.12)",
        }}
      >
        {item.num}
      </p>
      <h3
        className="mb-4 transition-colors duration-300"
        style={{ ...serif("1.6rem", "1.25"), color: hovered ? "#FFFFFF" : "#1A2A2A" }}
      >
        {item.title}
      </h3>
      <p
        className="leading-relaxed transition-colors duration-300"
        style={sans({ fontSize: "0.875rem", color: hovered ? "rgba(255,255,255,0.6)" : "#6A7A7A" })}
      >
        {item.desc}
      </p>
    </div>
  );
}