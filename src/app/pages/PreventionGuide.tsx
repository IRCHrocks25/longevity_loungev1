import { useState } from "react";
import heroBg from "../../assets/403abd6f598a84f8e25a6ebc2bcab5b2b3fc6733.png";
import { Check, ArrowRight, Sparkles, BookOpen, Shield, Heart, Leaf, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImage = "https://images.unsplash.com/photo-1762112211843-e75e0c16a407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHdvbWFuJTIwY2FsbSUyMG5hdHVyYWwlMjBsaWdodCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTYwNzQ4OHww&ixlib=rb-4.1.0&q=80&w=1080";
const foodImage = "https://images.unsplash.com/photo-1738220542905-6e477c1f1c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbiUyMGNvbG9yZnVsJTIwdmVnZXRhYmxlcyUyMGFudC1hZ2lubmd8ZW58MXx8fHwxNzcxNjA3NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const insideGuide = [
  { icon: Shield, title: "Longevity Biomarkers Checklist", desc: "The 12 blood tests every woman over 35 should track — and how to interpret them." },
  { icon: Leaf, title: "Anti-Inflammatory Nutrition Protocol", desc: "A 7-day template with hormone-supporting, anti-aging meal ideas and recipes." },
  { icon: Heart, title: "Hormonal Health Deep Dive", desc: "Perimenopause, estrogen dominance, cortisol balance — what you need to know now." },
  { icon: BookOpen, title: "Sleep Optimization Blueprint", desc: "Evidence-based strategies to repair your cells while you sleep, starting tonight." },
];

const testimonials = [
  { name: "Rachel W.", quote: "I downloaded the guide expecting general tips. Instead, I got an entirely new understanding of my body. Dr. Nouri explains things in a way that's caring, not clinical." },
  { name: "Priya S.", quote: "This guide led me to discover I had suboptimal Vitamin D and ferritin. My doctor was impressed I came in so prepared." },
  { name: "Diane M.", quote: "I've shared this with every woman in my life over 40. It's that good." },
];

export function PreventionGuide() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  return (
    <div style={{ background: "#FDFAF6" }}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 px-6 lg:px-10 overflow-hidden"
      >
        {/* Full-bleed background photo */}
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        {/* Gradient overlay — dark teal left, lighter right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(100deg, rgba(20,55,55,0.92) 0%, rgba(20,55,55,0.72) 48%, rgba(20,55,55,0.35) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div className="pb-4 lg:pb-16 space-y-7">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(201,169,110,0.18)", border: "1px solid rgba(201,169,110,0.45)" }}
            >
              <Sparkles size={11} color="#C9A96E" />
              <span
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs tracking-[0.15em] uppercase text-[#C9A96E]"
              >
                Free Download — No Credit Card Required
              </span>
            </div>
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.6rem, 5vw, 4.2rem)", lineHeight: "1.15" }}
              className="text-white"
            >
              Your Personal
              <br />
              <em style={{ color: "#D4B896" }}>Longevity Prevention Guide</em>
            </h1>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-white/70 text-sm leading-relaxed max-w-md"
            >
              A 40-page, physician-authored resource covering everything you need to protect your health, extend your vitality, and take proactive control of how you age — starting today.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["A", "S", "L", "M"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs border-2 border-white/30"
                    style={{ background: i % 2 === 0 ? "#C9A96E" : "#3D9B9B" }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} fill="#C9A96E" color="#C9A96E" />
                  ))}
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-xs text-white/60 mt-0.5">
                  80,000+ downloads
                </p>
              </div>
            </div>
          </div>

          {/* Right: intentionally empty — photo fills the background */}
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div
            className="rounded-3xl p-8 lg:p-10 shadow-xl border border-[#E8D5C4]/40 bg-white sticky top-28"
          >
            {!submitted ? (
              <>
                <h2
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", lineHeight: "1.3" }}
                  className="text-[#1A3A3A] mb-2"
                >
                  Get Your Free Guide
                </h2>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[#7A8B8B] text-sm mb-7"
                >
                  Delivered instantly to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-xs text-[#5A6B6B] mb-1.5 block tracking-wide"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your first name"
                      required
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[#E8D5C4]/60 bg-[#FDFAF6] text-[#1A3A3A] placeholder-[#B0B0B0] focus:outline-none focus:border-[#2A7A7A] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-xs text-[#5A6B6B] mb-1.5 block tracking-wide"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@email.com"
                      required
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[#E8D5C4]/60 bg-[#FDFAF6] text-[#1A3A3A] placeholder-[#B0B0B0] focus:outline-none focus:border-[#2A7A7A] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-xs text-[#5A6B6B] mb-1.5 block tracking-wide"
                    >
                      Life Stage (optional)
                    </label>
                    <select
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="w-full px-4 py-3 rounded-xl text-sm border border-[#E8D5C4]/60 bg-[#FDFAF6] text-[#5A6B6B] focus:outline-none focus:border-[#2A7A7A] transition-colors appearance-none"
                    >
                      <option value="">Select your stage</option>
                      <option>Early 30s — Building my foundation</option>
                      <option>Late 30s — Getting proactive</option>
                      <option>Perimenopause (40–50)</option>
                      <option>Menopause & beyond</option>
                      <option>Post-menopause — Thriving</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm tracking-wide text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mt-2"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      background: "linear-gradient(135deg, #C9A96E 0%, #D4B896 100%)",
                      boxShadow: "0 4px 20px rgba(201,169,110,0.35)",
                    }}
                  >
                    Send Me the Free Guide
                    <ArrowRight size={15} />
                  </button>
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[10px] text-center text-[#B0B0B0] mt-2"
                  >
                    We respect your privacy. No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: "rgba(42,122,122,0.1)" }}
                >
                  <Check size={28} color="#2A7A7A" strokeWidth={2} />
                </div>
                <h2
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem" }}
                  className="text-[#1A3A3A]"
                >
                  You're all set, {name}!
                </h2>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-[#5A6B6B] text-sm leading-relaxed"
                >
                  Your Prevention Guide is on its way to <strong>{email}</strong>. Check your inbox in the next few minutes.
                </p>
                <div
                  className="rounded-2xl p-5 text-left"
                  style={{ background: "rgba(42,122,122,0.06)", border: "1px solid rgba(42,122,122,0.15)" }}
                >
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-xs text-[#2A7A7A] mb-3 tracking-wide uppercase"
                  >
                    While you wait...
                  </p>
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-sm text-[#5A6B6B]"
                  >
                    Explore our membership options for ongoing support, live Q&As, and a full library of longevity protocols.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Inside the guide */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10" style={{ background: "#C9A96E" }} />
                <span
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className="text-xs tracking-[0.2em] uppercase text-[#B8965A]"
                >
                  What's Inside
                </span>
              </div>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.7rem, 2.5vw, 2.5rem)", lineHeight: "1.2" }}
                className="text-[#1A3A3A] mb-2"
              >
                40 pages of the longevity wisdom
                <em className="text-[#2A7A7A]"> you deserve to have.</em>
              </h2>
            </div>

            <div className="space-y-4">
              {insideGuide.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl border border-[#E8D5C4]/40 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(42,122,122,0.1)" }}
                  >
                    <item.icon size={18} color="#2A7A7A" />
                  </div>
                  <div>
                    <h4
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}
                      className="text-[#1A3A3A] mb-1"
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-xs text-[#7A8B8B] leading-relaxed"
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="space-y-4 pt-2">
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs tracking-[0.2em] uppercase text-[#B8965A]"
              >
                Reader Stories
              </p>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5"
                  style={{ background: "linear-gradient(135deg, rgba(42,122,122,0.04) 0%, rgba(212,165,165,0.04) 100%)", border: "1px solid rgba(232,213,196,0.5)" }}
                >
                  <div className="flex gap-0.5 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={10} fill="#C9A96E" color="#C9A96E" />
                    ))}
                  </div>
                  <p
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", lineHeight: "1.6" }}
                    className="text-[#3D3D3D] mb-2"
                  >
                    "{t.quote}"
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-xs text-[#9A9A9A]">
                    — {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom image section */}
      <section className="pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-[2.5rem] overflow-hidden relative"
            style={{ minHeight: "300px" }}
          >
            <ImageWithFallback
              src={foodImage}
              alt="Nourishing longevity foods"
              className="w-full h-full object-cover absolute inset-0"
              style={{ minHeight: "300px" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(26,58,58,0.85) 0%, rgba(26,58,58,0.5) 100%)" }}
            />
            <div className="relative z-10 p-12 lg:p-16 text-center space-y-5">
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-[#C9A96E] tracking-[0.2em] uppercase"
              >
                One last thing
              </p>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 3.5vw, 3rem)", lineHeight: "1.2" }}
                className="text-white max-w-2xl mx-auto"
              >
                The best time to start investing in your longevity was ten years ago.
                <br />
                <em style={{ color: "#D4B896" }}>The second best time is right now.</em>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}