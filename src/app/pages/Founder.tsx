import speakingImage from "../../assets/20cc2aba3c906db2ee33f2a540b765d0a86861a5.png";
import ctaBgImage from "../../assets/a0d4390c2945003b874154c82cdac36add966b14.png";
import founderHeroImage from "../../assets/92c7e11080608c4eb3b2463efdd0d6e53be12024.png";
import heroBgImage from "../../assets/bd923d6e638a0a0e3b9d51bab0fcdf51f62ab618.png";
import collageImage from "../../assets/c77580dfb2088d663fd2adbc03fd38659026145f.png";
import imgTonyRobbins from "../../assets/08f38c29b2d2ca08e050e7942cf8170e54499e6b.png";
import svgQuote from "../../imports/svg-wutzeoxowk";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import FeaturedOn from "../../imports/FeaturedOn";

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

export function Founder() {
  return (
    <div style={{ background: "#FDFAF6" }}>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section
        className="pt-32 pb-0 px-6 lg:px-16 overflow-hidden relative"
        style={{ background: "#1A2A2A" }}
      >
        {/* Background crowd image */}
        <img
          src={heroBgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl py-12 lg:py-24 space-y-7">
            <p style={{ ...eyebrow, color: "#C9A96E" }}>Meet the Founder</p>
            <h1
              className="text-white"
              style={serif("clamp(3rem, 6vw, 5.5rem)", "1.0")}
            >
              Built from
              <br />
              <em style={{ fontStyle: "italic", color: "#7DD4D4" }}>
                lived experience.
              </em>
            </h1>
            <p className="text-white/70" style={sans({ fontSize: "1.1rem" })}>
              Why prevention became personal.
            </p>

            {/* Gold rule */}
            <div className="h-px max-w-[60px]" style={{ background: "#C9A96E" }} />

            {/* Name + title block */}
            <div>
              <p style={serif("1.55rem", "1.2")} className="text-white">
                Alessia Minkus
              </p>
              <p
                style={{
                  ...sans({ fontSize: "0.68rem", letterSpacing: "0.25em" }),
                  color: "#C9A96E",
                  textTransform: "uppercase",
                  marginTop: "0.4rem",
                }}
              >
                Entrepreneur · Educator · Global Speaker · Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CREDIBILITY STRIP
      ════════════════════════════════════════ */}
      <section
        className="py-10 px-6 lg:px-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A3A3A 0%, #2A7A7A 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center">
            {/* Scale down on mobile so all 6 logos fit comfortably */}
            <div className="scale-[0.55] xs:scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-center">
              <FeaturedOn />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FOUNDER STORY
      ════════════════════════════════════════ */}
      <section className="py-28 px-6 lg:px-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left: Story copy */}
          <div className="space-y-8">
            <p style={eyebrow}>Her Story</p>

            <h2
              className="text-[#1A2A2A]"
              style={serif("clamp(2.2rem, 3.5vw, 3.2rem)", "1.1")}
            >
              Longevity Lounge was founded by{" "}
              <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>
                Alessia Minkus
              </em>
            </h2>

            <p
              className="text-[#5A6B6B] leading-relaxed"
              style={sans({ fontSize: "0.95rem" })}
            >
              Entrepreneur, educator, and global speaker — Alessia began this
              journey after navigating periods of fatigue and health challenges
              while building a demanding career.
            </p>

            {/* Dividing line */}
            <div
              className="h-px"
              style={{ background: "linear-gradient(90deg, #C9A96E 0%, transparent 60%)" }}
            />

            {/* The pivotal moment */}
            <div className="space-y-5">
              <p
                className="text-[#1A2A2A]"
                style={serif("1.4rem", "1.55")}
              >
                <em style={{ fontStyle: "italic" }}>
                  When her cousin was diagnosed with breast cancer and passed
                  away shortly after, it changed everything.
                </em>
              </p>

              <p
                className="text-[#5A6B6B] leading-relaxed"
                style={sans({ fontSize: "0.9rem" })}
              >
                By the time it was discovered, it was too late. Doctors said
                earlier detection could have changed the outcome.
              </p>
            </div>

            {/* Science context */}
            <div
              className="rounded-2xl p-6 border-l-2"
              style={{
                background: "rgba(42,122,122,0.04)",
                borderColor: "#2A7A7A",
              }}
            >
              <p
                className="text-[#3D4D4D] leading-relaxed"
                style={sans({ fontSize: "0.875rem" })}
              >
                Longevity science shows that most chronic diseases develop
                silently,{" "}
                <strong className="text-[#1A2A2A]">
                  years before symptoms appear.
                </strong>
              </p>
            </div>

            <p
              className="text-[#5A6B6B] leading-relaxed"
              style={sans({ fontSize: "0.9rem" })}
            >
              Longevity Lounge was created to make science-backed prevention
              accessible — so individuals can protect their vitality long before
              crisis appears.
            </p>
          </div>

          {/* Right: Secondary image + closing statements */}
          <div className="space-y-10 lg:pt-14">
            {/* Image */}
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[3rem] rotate-1 opacity-35"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,165,165,0.3), rgba(201,169,110,0.15))",
                }}
              />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/3]">
                <ImageWithFallback
                  src={speakingImage}
                  alt="Alessia Minkus speaking on stage — educator and global speaker"
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(23,40,40,0.35) 100%)",
                  }}
                />
              </div>
            </div>

            {/* Closing philosophy — two lines separated by dividers */}
            <div
              className="space-y-0"
              style={{ borderTop: "1px solid rgba(201,169,110,0.2)" }}
            >
              {[
                "Health doesn't break down overnight.",
                "And it doesn't rebuild overnight either.",
              ].map((line) => (
                <div
                  key={line}
                  className="py-5"
                  style={{ borderBottom: "1px solid rgba(201,169,110,0.2)" }}
                >
                  <p
                    className="text-[#1A2A2A]"
                    style={serif("1.25rem", "1.4")}
                  >
                    <em style={{ fontStyle: "italic" }}>{line}</em>
                  </p>
                </div>
              ))}

              <div className="py-7">
                <p
                  className="text-[#2A7A7A]"
                  style={serif("1.2rem", "1.55")}
                >
                  <em style={{ fontStyle: "italic" }}>
                    But with clarity, support, and consistent action —{" "}
                    <strong style={{ fontStyle: "normal", color: "#1A2A2A" }}>
                      it can improve.
                    </strong>
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TONY ROBBINS QUOTE
      ════════════════════════════════════════ */}
      <section className="pt-20 pb-0 px-6 lg:px-16 overflow-hidden" style={{ background: "#FDFAF6" }}>
        <div className="max-w-6xl mx-auto">
          <div className="relative flex flex-col lg:flex-row items-stretch gap-0">

            {/* ── White quote card ── */}
            <div
              className="relative z-10 w-full lg:w-[58%] rounded-3xl p-10 lg:p-14 flex flex-col gap-7 self-center mb-8 lg:mb-0"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 20px 60px rgba(26,42,42,0.08), 0 4px 16px rgba(26,42,42,0.04)",
              }}
            >
              {/* Gold quote marks using imported SVG path */}
              <div className="w-9 opacity-50">
                <svg viewBox="0 0 33 24" fill="none" className="w-full h-auto">
                  <path d={svgQuote.pf109b80} fill="#C9A96E" />
                </svg>
              </div>

              {/* Main italic quote — Cormorant Garamond */}
              <p
                className="text-[#1A2A2A]"
                style={serif("clamp(1.35rem, 2.5vw, 1.75rem)", "1.45")}
              >
                <em style={{ fontStyle: "italic" }}>
                  The most capable, driven people I knew were often the ones
                  quietly putting their health last.
                </em>
              </p>

              {/* Attribution — DM Sans, teal with bold names */}
              <p className="text-[#2A7A7A] leading-relaxed" style={sans({ fontSize: "0.9rem" })}>
                After spending time with leaders like{" "}
                <strong className="text-[#2A7A7A]">Tony Robbins and Sir Richard Branson</strong>
                , one pattern became undeniable:
              </p>

              {/* Two-line statements */}
              <div className="space-y-3">
                <p className="text-[#1A2A2A]" style={sans({ fontSize: "1rem", lineHeight: "1.6" })}>
                  They don't treat health as a side conversation.
                </p>
                <p className="text-[#1A2A2A]" style={sans({ fontSize: "1rem", lineHeight: "1.6" })}>
                  They treat it as a{" "}
                  <em style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", color: "#2A7A7A" }}>
                    strategic priority.
                  </em>
                </p>
              </div>

              {/* Gold hairline divider */}
              <div
                className="h-px w-4/5"
                style={{ background: "linear-gradient(90deg, rgba(201,169,110,0.5) 0%, transparent 100%)" }}
              />

              {/* Closing line */}
              <p className="text-[#5A6B6B] leading-relaxed" style={sans({ fontSize: "0.9rem" })}>
                This is where Alessia shares how that mindset actually works.
              </p>
            </div>

            {/* ── Tony Robbins photo — overlaps card on desktop ── */}
            <div className="relative w-full lg:w-[46%] lg:-ml-12 flex-shrink-0 flex items-end justify-center self-end">
              <img
                src={imgTonyRobbins}
                alt="Tony Robbins and Alessia Minkus"
                className="w-full h-auto object-contain object-bottom block"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          COLLAGE IMAGE
      ════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <img
            src={collageImage}
            alt="Alessia Minkus — speaking engagements and events collage"
            className="w-full h-auto object-contain"
            style={{ maxHeight: "320px", objectFit: "contain" }}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="relative py-28 px-6 lg:px-16 overflow-hidden">
        {/* Background image */}
        <img
          src={ctaBgImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay so text stays legible */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(18, 34, 34, 0.78)" }}
        />

        <div className="relative max-w-3xl mx-auto text-center space-y-5">

          {/* Thin ornament */}
          <div className="flex items-center justify-center gap-4">
            <div
              className="h-px flex-1 max-w-[80px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.6))" }}
            />
            <span
              style={{
                ...sans({ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#B8965A" }),
                textTransform: "uppercase",
              }}
            >
              Take the First Step
            </span>
            <div
              className="h-px flex-1 max-w-[80px]"
              style={{ background: "linear-gradient(90deg, rgba(201,169,110,0.6), transparent)" }}
            />
          </div>

          <h2
            className="text-white whitespace-nowrap"
            style={serif("clamp(1.8rem, 4vw, 3.2rem)", "1.05")}
          >
            Prevention starts before the crisis.
          </h2>

          <p
            className="leading-relaxed max-w-md mx-auto"
            style={sans({ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)" })}
          >
            Alessia built Longevity Lounge so others wouldn't have to face what
            her family faced. The Prevention Guide is where it starts.
          </p>

          <Link
            to="/prevention-guide"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white tracking-wide hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            style={{
              ...sans({ fontSize: "0.8rem", letterSpacing: "0.07em" }),
              background: "linear-gradient(135deg, #C9A96E 0%, #D4B896 100%)",
              boxShadow: "0 8px 32px rgba(201,169,110,0.38)",
            }}
          >
            Get the Longevity Lounge Prevention Guide
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DISCLOSURE
      ════════════════════════════════════════ */}
      <section className="py-14 px-6 lg:px-16" style={{ background: "#FDFAF6" }}>
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
              provides educational information only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}