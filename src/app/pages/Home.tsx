import heroBackground from "../../assets/ca2d9aa64e3ec18061ebfc14695394ca9be72d1c.png";
import memberBenefitsBg from "../../assets/170d423cba3e40c1c9ec8011d4fb432199a0fec0.png";
import storeImage from "../../assets/c3ecfce36f1994b58b7739ac29045f00c36e9ef0.png";
import expertsImage from "../../assets/7f8e3bb079110f6c3793e66481b8ef8475cce6e7.png";
import leaf1 from "../../assets/f1c9f089f99c2652bb1aba884dddd2fa763379ad.png";
import leaf2 from "../../assets/2ca92bff752e790968997c5d5d029ad3118a5440.png";
import whyNowImage1 from "../../assets/aedaaf8ebd1e9d302ff8c4d9ec98a7b6db82c450.png";
import whyNowImage2 from "../../assets/756fba5fc2ea91cfcfc631698b40ff5ed351e737.png";
import coupleImage from "../../assets/6b48c99ba4ba08ef605a87a3ee8261312d4b2fda.png";
import successBg from "../../assets/8dbab603bd02598f647e33e605cf43339b199846.png";
import kaneAlessiaBg from "../../assets/d1b172e283240559b8295965d807f61d10d91d1e.png";
import kaneAlessiaPortrait from "../../assets/90bc108eba634c588c28681d23156c1ec831bea3.png";
import imgPremioTurismo from "../../assets/cebfc6007d21aaf9d1a30a97939bd1f56c226d8f.png";
import imgTwbfGeneric1 from "../../assets/9fe12500b25ab83aaa8ec9fa9681025c65e9a802.png";
import imgInc5000 from "../../assets/13f797a2346dfbb2fde7d3cff71fb14b8afb893a.png";
import imgAstoi from "../../assets/39106d5364b1189cd2fcd78b35d267bc279dd20c.png";
import imgDineyLogo from "../../assets/ed1ae6df8a4d1103f400686063db1d22f0f2782e.png";
import imgPowerPartners from "../../assets/6eb28d95036a4411ce34e78f0ef33203f9fb30d7.png";
import imgTourismeFrance from "../../assets/a17012a509749a9ab5b57cfde3355ba3e3492c6f.png";
import imgAlitalia from "../../assets/85442a5cb3ba45c8f32add5c21dd2968e7c7e2d6.png";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const wellnessImage = coupleImage;
const activeImage = whyNowImage2;

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

export function Home() {
  return (
    <div style={{ background: "#FDFAF6" }}>

      {/* ════════════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] lg:object-center"
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{ background: "rgba(253,250,246,0.90)" }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(100deg, rgba(253,250,246,0.97) 0%, rgba(253,250,246,0.88) 38%, rgba(253,250,246,0.45) 62%, rgba(253,250,246,0.05) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(180deg, transparent, rgba(253,250,246,0.6))" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-28 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-8">
              <p style={eyebrow}>A Modern Longevity Community</p>
              <h1 className="text-[#1A2A2A]" style={serif("clamp(2.4rem, 4.4vw, 4rem)")}>
                Live Younger.
                <br />
                <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>Feel Stronger.</em>
                <br />
                Protect Your Future.
              </h1>
              <p className="text-[#5A6B6B] leading-relaxed max-w-md" style={sans({ fontSize: "1rem" })}>
                Science-backed longevity made accessible — so you can prevent disease, preserve
                vitality, and stay strong for the life and people you love.
              </p>
              <p className="text-[#4A5B5B] leading-relaxed max-w-md" style={sans({ fontSize: "0.875rem" })}>
                A modern longevity community built on one powerful belief: most chronic disease is
                preventable — and people deserve the tools to prevent it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/prevention-guide"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white tracking-wide hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  style={{
                    ...sans({ fontSize: "0.8rem", letterSpacing: "0.06em" }),
                    background: "linear-gradient(135deg, #C9A96E 0%, #D4B896 100%)",
                    boxShadow: "0 6px 28px rgba(201,169,110,0.35)",
                  }}
                >
                  Get the Longevity Lounge Prevention Guide
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <div className="h-px flex-1 max-w-[50px]" style={{ background: "#C9A96E" }} />
                <p style={sans({ fontSize: "0.75rem", color: "#7A8A8A" })}>
                  We bring together science, expert guidance, personalized tools, and community support.
                </p>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MISSION — Large Display Statement
      ════════════════════════════════════════ */}
      <section className="py-16 px-6 lg:px-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p style={eyebrow} className="mb-3">Our Mission</p>
            <h2 className="text-[#1A2A2A]" style={serif("clamp(2.5rem, 5vw, 4.5rem)", "1.08")}>
              Prevention changes{" "}
              <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>everything.</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-[#5A6B6B] leading-relaxed" style={sans({ fontSize: "0.9rem" })}>
                Research shows that up to{" "}
                <strong className="text-[#1A2A2A]">80% of chronic diseases and premature death</strong>{" "}
                are preventable through lifestyle-based interventions like nutrition, movement, sleep,
                and stress management.
              </p>
              <p className="text-[#7A8B8B]" style={sans({ fontSize: "0.875rem" })}>
                Yet most people do not have access to:
              </p>
              <ul className="space-y-4">
                {[
                  "Clear, science-backed guidance",
                  "Practical tools they can actually use",
                  "Ongoing support to stay consistent",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span style={{ color: "#C9A96E", fontSize: "1rem" }}>—</span>
                    <span className="text-[#3D3D3D]" style={sans({ fontSize: "0.875rem" })}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-7">
              <p className="text-[#1A2A2A]" style={serif("1.55rem", "1.55")}>
                <em style={{ fontStyle: "italic" }}>Our mission is to change that.</em>
              </p>
              <p className="text-[#5A6B6B] leading-relaxed" style={sans({ fontSize: "0.875rem" })}>
                Longevity Lounge exists to make evidence-based longevity science, tools, and strategies
                available to as many people as possible — so fewer families are torn apart by diseases
                that never had to happen.
              </p>
              <div
                className="h-px w-full"
                style={{ background: "linear-gradient(90deg, #C9A96E 0%, transparent 70%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY NOW — Overlapping Image Grid
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-16 overflow-hidden" style={{ background: "#FDFAF6" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                  <ImageWithFallback
                    src={wellnessImage}
                    alt="Longevity lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg mt-10">
                  <ImageWithFallback
                    src={activeImage}
                    alt="Active healthy lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-7">
              <p style={eyebrow}>Why Longevity — Why Now</p>
              <h2 className="text-[#1A2A2A]" style={serif("clamp(2rem, 3.5vw, 3rem)", "1.1")}>
                Waiting for a health crisis
                <br />
                <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>is not a plan.</em>
              </h2>
              <p className="text-[#5A6B6B] leading-relaxed" style={sans({ fontSize: "0.9rem" })}>
                Many high-achieving adults do all the right things, yet quietly feel:
              </p>
              <ul className="space-y-3">
                {[
                  "Exhausted",
                  "Stressed",
                  "Disconnected from their bodies",
                  "Concerned about aging and long-term health",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span style={{ color: "#C9A96E", marginTop: "0.1em" }}>—</span>
                    <span className="text-[#3D3D3D]" style={sans({ fontSize: "0.9rem" })}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="h-px w-12" style={{ background: "#C9A96E" }} />
              <p className="text-[#5A6B6B] leading-relaxed" style={sans({ fontSize: "0.9rem" })}>
                Chronic disease does not appear overnight.
                <br />
                It develops slowly — through small, repeated gaps in care.
              </p>
              <p className="text-[#1A2A2A]" style={serif("1.3rem", "1.55")}>
                <em style={{ fontStyle: "italic" }}>
                  Longevity Lounge helps you close those gaps before they become irreversible.
                </em>
              </p>
              <Link
                to="/prevention-guide"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  ...sans({ fontSize: "0.78rem", letterSpacing: "0.05em" }),
                  background: "linear-gradient(135deg, #C9A96E, #D4B896)",
                  boxShadow: "0 4px 18px rgba(201,169,110,0.35)",
                }}
              >
                Get the Prevention Guide <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WEAKEST LINK — Large Centered Statement
      ════════════════════════════════════════ */}
      <section className="py-32 px-6 lg:px-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={eyebrow} className="mb-3">Core Philosophy</p>
          <h2 className="text-[#1A2A2A] mb-4" style={serif("clamp(2.5rem, 5vw, 4.5rem)", "1.08")}>
            You are only as strong as
            <br />
            <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>your weakest link.</em>
          </h2>
          <p className="text-[#5A6B6B] leading-relaxed max-w-2xl mx-auto mb-8" style={sans({ fontSize: "0.9rem", lineHeight: "1.5" })}>
            Longevity is not about doing everything perfectly.
            <br /><br />
            It is about identifying the one area quietly undermining your health — and strengthening it.
            <br /><br />
            That weakest link might be:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Sleep",
              "Stress",
              "Metabolic Health",
              "Hormonal Balance",
              "Inflammation",
              "Movement",
              "Emotional Resilience",
              "Environment",
            ].map((item) => (
              <WeaknessTag key={item} label={item} />
            ))}
          </div>
          <div
            className="h-px max-w-xs mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }}
          />
          <p className="text-[#5A6B6B] leading-relaxed max-w-2xl mx-auto mb-5" style={sans({ fontSize: "0.9rem", lineHeight: "1.5" })}>
            Until it is addressed, progress elsewhere stalls.
          </p>
          <p className="text-[#2A7A7A] max-w-2xl mx-auto" style={serif("1.25rem", "1.35")}>
            <em style={{ fontStyle: "italic" }}>
              Longevity Lounge helps you find that weakest link and build a simple, sustainable plan
              to strengthen it — step by step.
            </em>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          KANE & ALESSIA MINKUS — Founder Split
      ════════════════════════════════════════ */}
      <section className="relative pt-28 pb-0 px-6 lg:px-16 overflow-hidden">
        {/* Background image — no overlay */}
        <img
          src={kaneAlessiaBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto" style={{ paddingLeft: "8rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">

            {/* LEFT — text content */}
            <div className="space-y-8 pb-28" style={{ marginTop: "-4rem" }}>
              <div className="space-y-2">
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3.2rem, 5vw, 4.8rem)", lineHeight: "1.0", color: "#1A2A2A", whiteSpace: "nowrap" }}>
                  Alessia Minkus
                </h2>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)", lineHeight: "1.4", color: "#2A7A7A", fontStyle: "italic" }}>
                  With life and business partner Kane Minkus
                </p>
              </div>

              {/* Gold divider */}
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }} />

              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.15rem)", color: "#2A3A3A", lineHeight: "1.7" }}>
                Award-winning serial entrepreneurs,<br />
                International bestselling authors,<br />
                and world-renowned business mentors.
              </p>

              <a
                href="https://kaneandalessia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  background: "linear-gradient(135deg, #C9A96E 0%, #D4B896 100%)",
                  boxShadow: "0 6px 24px rgba(201,169,110,0.3)",
                }}
              >
                Meet Kane &amp; Alessia Minkus
                <ArrowRight size={14} />
              </a>
            </div>

            {/* RIGHT — portrait flush to bottom */}
            <div className="flex justify-center lg:justify-start items-end">
              <img
                src={kaneAlessiaPortrait}
                alt="Kane and Alessia Minkus"
                style={{
                  display: "block",
                  maxHeight: "720px",
                  width: "auto",
                  objectFit: "contain",
                  objectPosition: "bottom",
                  filter: "drop-shadow(0 20px 48px rgba(0,0,0,0.18))",
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS STRIP
      ════════════════════════════════════════ */}
      <section
        className="py-16 px-6 lg:px-16"
        style={{ background: "#FDFAF6", borderTop: "1px solid rgba(201,169,110,0.15)", borderBottom: "1px solid rgba(201,169,110,0.15)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className="text-center mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
              lineHeight: "1.2",
              background: "linear-gradient(160deg, #C9A96E 0%, #D4B896 55%, #B8965A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
            }}
          >
            A lifetime dedicated to improving the lives of business owners.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-0">
            {[
              { value: "50,000+", label: "Business Owners\nTrained Monthly" },
              { value: "5M+",     label: "Professionals\nImpacted" },
              { value: "5,500+",  label: "Presentations in\n80 Countries" },
              { value: "20+",     label: "Portfolio\nCompanies" },
              { value: "30+",     label: "Company Portfolio\nValued at $500M" },
            ].map((stat, i) => (
              <div
                key={stat.value}
                className="flex flex-col items-center text-center px-4 relative"
              >
                {i > 0 && (
                  <div
                    className="hidden lg:block absolute left-0 top-[10%] h-[80%] w-px"
                    style={{ background: "linear-gradient(180deg, transparent, rgba(201,169,110,0.45) 30%, rgba(201,169,110,0.45) 70%, transparent)" }}
                  />
                )}
                <span
                  className="block mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                    lineHeight: "1",
                    letterSpacing: "-0.03em",
                    background: "linear-gradient(160deg, #C9A96E 0%, #D4B896 55%, #B8965A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>
                <p
                  className="text-[#5A6B6B] whitespace-pre-line"
                  style={sans({ fontSize: "0.78rem", lineHeight: "1.55" })}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DIFFERENTIATORS — Editorial Numbered Grid
      ════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-16" style={{ background: "#FDFAF6" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p style={eyebrow} className="mb-3">What Makes Longevity Lounge Different</p>
            <h2 className="text-[#1A2A2A]" style={serif("clamp(2.5rem, 4.5vw, 4rem)", "1.08")}>
              A human approach to{" "}
              <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>longevity.</em>
            </h2>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: "rgba(201,169,110,0.2)" }}
          >
            {[
              {
                num: "01",
                title: "Science-Backed,\nNot Trend-Driven",
                desc: "Everything we teach is grounded in credible research and expert insight.",
              },
              {
                num: "02",
                title: "Accessible,\nNot Exclusive",
                desc: "We believe prevention should not be reserved for a few — it should be available to everyone.",
              },
              {
                num: "03",
                title: "Personalized,\nNot Overwhelming",
                desc: "AI-powered tools help you focus on what matters most — without information overload.",
              },
              {
                num: "04",
                title: "Supportive,\nNot Isolating",
                desc: "Longevity is easier when you are not doing it alone.",
              },
            ].map((item) => (
              <DiffCard key={item.num} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHAT MEMBERS RECEIVE — Dark Teal
      ════════════════════════════════════════ */}
      <section className="relative py-28 px-6 lg:px-16 overflow-hidden">
        <img
          src={memberBenefitsBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(110deg, rgba(10,28,28,0.92) 0%, rgba(10,28,28,0.80) 50%, rgba(10,28,28,0.70) 100%)" }}
        />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT — eyebrow, headline, description, CTA */}
            <div className="space-y-6">
              <p style={{ ...eyebrow, color: "#C9A96E" }}>Member Benefits</p>
              <h2 className="text-white" style={serif("clamp(2.5rem, 4vw, 3.8rem)", "1.08")}>
                Everything you need,
                <br />
                <em style={{ fontStyle: "italic", color: "#D4B896" }}>in one place.</em>
              </h2>
              <p className="leading-relaxed max-w-md" style={sans({ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" })}>
                Longevity Lounge members gain access to a curated ecosystem of tools, experts, and community designed to help you live longer and better.
              </p>
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white tracking-wide hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  ...sans({ fontSize: "0.8rem", letterSpacing: "0.06em" }),
                  background: "linear-gradient(135deg, #C9A96E 0%, #D4B896 100%)",
                  boxShadow: "0 6px 24px rgba(201,169,110,0.3)",
                }}
              >
                Explore Membership
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* RIGHT — checklist */}
            <div className="space-y-2">
              {[
                "Expert interviews and masterclasses",
                "Live longevity challenges and replays",
                "Personalized AI tools to assess and optimize health",
                "Clear guidance across sleep, movement, nutrition, stress, and more",
                "A supportive, high-quality community",
                "Exclusive discounts in our Health and Longevity Store, featuring premium, science-backed supplements and cutting-edge wellness products",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <CheckCircle2 size={16} color="#C9A96E" className="shrink-0 mt-0.5" />
                  <span className="leading-relaxed" style={sans({ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" })}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CREDIBILITY — Editorial Split
      ════════════════════════════════════════ */}
      <section className="py-28 px-6 lg:px-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <ImageWithFallback
              src={expertsImage}
              alt="Longevity and health experts"
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
          <div className="space-y-8">
            <p style={eyebrow}>Expert Guidance</p>
            <h2 className="text-[#1A2A2A]" style={serif("clamp(2rem, 3.5vw, 3.2rem)", "1.15")}>
              Guided by experts.
              <br />
              <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>Built on trust.</em>
            </h2>
            <p className="text-[#5A6B6B] leading-relaxed" style={sans({ fontSize: "0.9rem" })}>
              Each year, Longevity Lounge hosts dozens of health and longevity experts, including
              doctors, scientists, nutritionists, and specialists across preventive and functional
              medicine.
            </p>
            <div
              className="grid grid-cols-2 gap-0 border-t border-l"
              style={{ borderColor: "rgba(201,169,110,0.2)" }}
            >
              {[
                "Preventive Medicine",
                "Functional Medicine",
                "Nutritional Science",
                "Sleep Medicine",
                "Metabolic Health",
                "Longevity Research",
              ].map((discipline) => (
                <div
                  key={discipline}
                  className="py-4 px-5 border-b border-r"
                  style={{ borderColor: "rgba(201,169,110,0.2)" }}
                >
                  <p style={sans({ fontSize: "0.8rem", color: "#3D4D4D" })}>{discipline}</p>
                </div>
              ))}
            </div>
            <div className="pl-6 border-l-2" style={{ borderColor: "#C9A96E" }}>
              <p className="text-[#1A2A2A]" style={serif("1.2rem", "1.6")}>
                <em style={{ fontStyle: "italic" }}>
                  We do not just share information. We help you apply it — consistently and
                  sustainably.
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TRACK RECORD — Award Carousel
      ════════════════════════════════════════ */}
      <SuccessCarousel />

      {/* ════════════════════════════════════════
          FINAL CTA — Large Display + Disclosure
      ════════════════════════════════════════ */}
      <section className="relative py-32 px-6 lg:px-16 overflow-hidden" style={{ background: "#FDFAF6" }}>
        <style>{`
          @keyframes floatLeaf1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(20px, -30px) rotate(5deg); }
            50% { transform: translate(-10px, -50px) rotate(-3deg); }
            75% { transform: translate(15px, -35px) rotate(4deg); }
          }
          @keyframes floatLeaf2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-25px, 25px) rotate(-6deg); }
            50% { transform: translate(15px, 45px) rotate(4deg); }
            75% { transform: translate(-20px, 30px) rotate(-5deg); }
          }
        `}</style>
        <img
          src={leaf1}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ top: "8%", left: "5%", width: "180px", opacity: 1, animation: "floatLeaf1 25s ease-in-out infinite" }}
        />
        <img
          src={leaf2}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{ top: "12%", right: "8%", width: "160px", opacity: 1, animation: "floatLeaf2 28s ease-in-out infinite" }}
        />
        <div className="relative max-w-3xl mx-auto text-center space-y-10">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg, transparent, #C9A96E)" }} />
            <span style={{ ...sans({ fontSize: "0.65rem", letterSpacing: "0.3em", color: "#B8965A" }), textTransform: "uppercase" as const }}>
              Start Here
            </span>
            <div className="h-px flex-1 max-w-[80px]" style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
          </div>
          <h2 className="text-[#1A2A2A]" style={serif("clamp(2.8rem, 5.5vw, 5rem)", "1.0")}>
            Invest in prevention.
            <br />
            <em style={{ fontStyle: "italic", color: "#2A7A7A" }}>Protect your future.</em>
          </h2>
          <p className="text-[#5A6B6B] leading-relaxed max-w-md mx-auto" style={sans({ fontSize: "1rem" })}>
            Your health supports everything you love.
            <br />
            Do not wait until it is fragile to protect it.
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
          <div
            className="mt-14 rounded-2xl p-7 text-left"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(201,169,110,0.18)" }}
          >
            <p
              className="mb-2"
              style={{ ...sans({ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#B8965A" }), textTransform: "uppercase" as const }}
            >
              Educational Notice
            </p>
            <p className="leading-relaxed" style={sans({ fontSize: "0.75rem", color: "#8A9A9A" })}>
              Longevity Lounge is operated by Industry Rockstar Thrive, LLC and provides educational
              information only. Nothing on this site or within our programs constitutes medical advice,
              diagnosis, or treatment. No provider-patient relationship is formed. We do not diagnose,
              treat, or cure disease. We make no guarantees regarding health outcomes. Always consult a
              licensed healthcare professional before making health decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Helper: Weakness tag with hover ────────────────────────────────────────
function WeaknessTag({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className="px-6 py-3 rounded-full cursor-default transition-all duration-300"
      style={{
        ...sans({ fontSize: "0.8rem", letterSpacing: "0.02em" }),
        border: "1px solid rgba(42,122,122,0.28)",
        background: hovered ? "#2A7A7A" : "rgba(42,122,122,0.05)",
        color: hovered ? "#fff" : "#2A7A7A",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  );
}

// ─── Helper: Differentiator card ─────────────────────────────────────────────
function DiffCard({ item }: { item: { num: string; title: string; desc: string } }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="p-8 lg:p-10 transition-all duration-300 cursor-default"
      style={{
        background: hovered ? "#172828" : "#FDFAF6",
        transform: hovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: hovered ? "0 28px 64px rgba(23,40,40,0.28)" : "none",
        position: "relative",
        zIndex: hovered ? 2 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className="mb-5 select-none transition-colors duration-300"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "2.8rem",
          lineHeight: "1",
          color: hovered ? "rgba(201,169,110,0.3)" : "rgba(42,122,122,0.12)",
        }}
      >
        {item.num}
      </p>
      <h3
        className="mb-3 whitespace-pre-line transition-colors duration-300"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.3rem",
          lineHeight: "1.25",
          color: hovered ? "#FFFFFF" : "#1A2A2A",
        }}
      >
        {item.title}
      </h3>
      <p
        className="leading-relaxed transition-colors duration-300"
        style={sans({ fontSize: "0.8rem", color: hovered ? "rgba(255,255,255,0.6)" : "#6A7A7A" })}
      >
        {item.desc}
      </p>
    </div>
  );
}

// ─── Helper: Track Record award carousel ─────────────────────────────────────
const AWARD_CARDS = [
  {
    img: imgPremioTurismo,
    imgW: "213px",
    imgH: "60px",
    title: "Premio Turismo Primavera 2004",
    desc: "Creativity in marketing Italian travel experiences.",
  },
  {
    img: imgTwbfGeneric1,
    imgW: "109px",
    imgH: "106px",
    title: "Brand Lorette Award",
    desc: "Celebrates innovation, leadership, and global brand impact.",
  },
  {
    img: imgInc5000,
    imgW: "109px",
    imgH: "109px",
    title: "Inc. 5000 Award",
    desc: "Honors America's fastest-growing innovative private companies.",
  },
  {
    img: imgAstoi,
    imgW: "232px",
    imgH: "65px",
    title: "ASTOI Award",
    desc: "Travel companies showing professionalism and reliability.",
  },
  {
    img: imgDineyLogo,
    imgW: "222px",
    imgH: "58px",
    title: "Disney Partners in Excellence",
    desc: "Recognition awarded to under 2% for exceptional service and commitment to Disney values.",
  },
  {
    img: imgPowerPartners,
    imgW: "163px",
    imgH: "164px",
    title: "Inc. Power Partner",
    desc: "Promoting the companies that entrepreneurs and small businesses trust the most.",
  },
  {
    img: imgTourismeFrance,
    imgW: "258px",
    imgH: "67px",
    title: "Medaille du Tourisme",
    desc: "Recognizes advancing French culture and tourism.",
  },
  {
    img: imgAlitalia,
    imgW: "229px",
    imgH: "65px",
    title: "Leonardo Prize",
    desc: "Honors Italian firms for global excellence.",
  },
];

function SuccessCarousel() {
  const [paused, setPaused] = useState(false);

  // Duplicate cards for a seamless infinite loop
  const allCards = [...AWARD_CARDS, ...AWARD_CARDS];

  return (
    <section
      className="relative pt-80 pb-28 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <img
        src={successBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      <style>{`
        @keyframes trackSlide {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .award-track {
          animation: trackSlide 32s linear infinite;
        }
        .award-track.is-paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <p
            className="mb-5"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase" as const,
              color: "#ffffff",
            }}
          >
            Track Record
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)",
              lineHeight: "1.2",
              color: "#ffffff",
            }}
          >
            Proven. Recognized. Awarded.
          </h2>
        </div>
      </div>

      {/* Marquee track — full bleed, no side padding */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.35), transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, rgba(0,0,0,0.35), transparent)" }}
        />

        <div
          className={`award-track flex gap-4${paused ? " is-paused" : ""}`}
          style={{ width: "max-content", paddingLeft: "16px" }}
        >
          {allCards.map((card, i) => (
            <div
              key={`${card.title}-${i}`}
              className="flex flex-col items-center text-center gap-4 rounded-[18px] shrink-0"
              style={{
                width: "220px",
                padding: "36px 22px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(28px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.22)",
              }}
            >
              {/* Logo */}
              <div
                className="flex items-center justify-center"
                style={{ width: "176px", height: "84px", overflow: "hidden", flexShrink: 0 }}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  style={{
                    maxWidth: card.imgW,
                    maxHeight: card.imgH,
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    transform: "scale(0.82)",
                  }}
                />
              </div>
              {/* Gold divider */}
              <div style={{ width: "28px", height: "1px", background: "#C9A96E", opacity: 0.55, flexShrink: 0 }} />
              {/* Title */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.05rem",
                  lineHeight: "1.25",
                  color: "#ffffff",
                }}
              >
                {card.title}
              </p>
              {/* Description */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: "1.6",
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}