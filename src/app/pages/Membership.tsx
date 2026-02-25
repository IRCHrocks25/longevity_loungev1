import { useState } from "react";
import { Link } from "react-router";
import { Check, Sparkles, ArrowRight, Star } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    tagline: "Your foundation for longevity",
    price: { monthly: 29, annual: 23 },
    color: "#2A7A7A",
    gradient: "linear-gradient(135deg, rgba(42,122,122,0.08) 0%, rgba(42,122,122,0.04) 100%)",
    border: "rgba(42,122,122,0.3)",
    features: [
      "Prevention Guide (PDF)",
      "Monthly longevity newsletter",
      "Access to resource library (50+ guides)",
      "Community forum access",
      "1 monthly Q&A replay",
      "Longevity self-assessment tool",
    ],
    cta: "Start Essentials",
    popular: false,
  },
  {
    name: "Inner Circle",
    tagline: "Where transformation happens",
    price: { monthly: 79, annual: 63 },
    color: "#C9A96E",
    gradient: "linear-gradient(135deg, rgba(42,122,122,0.95) 0%, rgba(30,95,95,1) 100%)",
    border: "#C9A96E",
    features: [
      "Everything in Essentials",
      "Live monthly Q&A with Dr. Nouri",
      "Full protocol library (40+ programs)",
      "Bi-weekly group coaching calls",
      "Personalized longevity roadmap",
      "Hormone & biomarker tracking tools",
      "Early access to new content",
      "Private Inner Circle community",
    ],
    cta: "Join Inner Circle",
    popular: true,
  },
  {
    name: "VIP Concierge",
    tagline: "The white-glove longevity experience",
    price: { monthly: 249, annual: 199 },
    color: "#D4A5A5",
    gradient: "linear-gradient(135deg, rgba(212,165,165,0.12) 0%, rgba(212,165,165,0.06) 100%)",
    border: "rgba(212,165,165,0.5)",
    features: [
      "Everything in Inner Circle",
      "Quarterly 1:1 with Dr. Nouri (60 min)",
      "Custom longevity protocol design",
      "Lab interpretation & recommendations",
      "Priority concierge messaging",
      "Exclusive VIP-only retreats",
      "Complimentary store credits ($100/mo)",
      "Founding member status (grandfathered pricing)",
    ],
    cta: "Apply for VIP",
    popular: false,
  },
];

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. All monthly plans can be cancelled at any time with no fees. Annual plans are non-refundable but you keep access until the end of your billing period.",
  },
  {
    q: "Is this medically personalized advice?",
    a: "Longevity Lounge provides education and wellness guidance, not individual medical advice. We always recommend working with your personal physician alongside our resources.",
  },
  {
    q: "What if I'm new to longevity wellness?",
    a: "Essentials is perfectly designed for you. We'll guide you from the very beginning — no prior knowledge required.",
  },
  {
    q: "Do I get access immediately after joining?",
    a: "Yes — all digital content and community access is activated the moment your subscription is confirmed.",
  },
];

export function Membership() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "#FDFAF6" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 px-6 lg:px-10 text-center"
        style={{ background: "linear-gradient(160deg, #E8F4F4 0%, #FDFAF6 60%, #F4EDE8 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #C9A96E)" }} />
            <Sparkles size={12} color="#C9A96E" />
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
          </div>
          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.15" }}
            className="text-[#1A3A3A] mb-5"
          >
            Choose Your
            <br />
            <em className="text-[#2A7A7A]">Longevity Path</em>
          </h1>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[#5A6B6B] text-sm leading-relaxed max-w-lg mx-auto mb-10"
          >
            From accessible essentials to a fully concierge longevity experience, there's a membership designed for exactly where you are today.
          </p>

          {/* Toggle */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-full"
            style={{ background: "rgba(42,122,122,0.1)", border: "1px solid rgba(42,122,122,0.2)" }}
          >
            <button
              onClick={() => setAnnual(false)}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                !annual
                  ? "bg-white text-[#2A7A7A] shadow-sm"
                  : "text-[#5A6B6B] hover:text-[#2A7A7A]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-200 flex items-center gap-2 ${
                annual
                  ? "bg-white text-[#2A7A7A] shadow-sm"
                  : "text-[#5A6B6B] hover:text-[#2A7A7A]"
              }`}
            >
              Annual
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "rgba(201,169,110,0.15)", color: "#B8965A" }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 -mt-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? "shadow-2xl" : "shadow-md hover:shadow-xl"
              }`}
              style={{
                background: plan.popular ? plan.gradient : plan.gradient,
                border: `1px solid ${plan.border}`,
              }}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 py-2 text-center"
                  style={{ background: "rgba(201,169,110,0.25)", borderBottom: "1px solid rgba(201,169,110,0.3)" }}
                >
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-xs tracking-[0.15em] uppercase text-[#C9A96E] flex items-center justify-center gap-1.5"
                  >
                    <Star size={10} fill="#C9A96E" />
                    Most Popular
                    <Star size={10} fill="#C9A96E" />
                  </span>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "pt-12" : ""}`}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.75rem",
                    color: plan.popular ? "#fff" : "#1A3A3A",
                  }}
                  className="mb-1"
                >
                  {plan.name}
                </h3>
                <p
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  className={`text-xs mb-6 ${plan.popular ? "text-white/60" : "text-[#7A8B8B]"}`}
                >
                  {plan.tagline}
                </p>

                <div className="mb-7">
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "3rem",
                      color: plan.popular ? "#fff" : "#1A3A3A",
                      lineHeight: 1,
                    }}
                  >
                    ${annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className={`text-sm ml-1 ${plan.popular ? "text-white/60" : "text-[#7A8B8B]"}`}
                  >
                    /mo
                  </span>
                  {annual && (
                    <p
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className={`text-xs mt-1 ${plan.popular ? "text-[#C9A96E]" : "text-[#B8965A]"}`}
                    >
                      Billed annually
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: plan.popular
                            ? "rgba(201,169,110,0.25)"
                            : "rgba(42,122,122,0.12)",
                        }}
                      >
                        <Check
                          size={9}
                          strokeWidth={2.5}
                          color={plan.popular ? "#C9A96E" : "#2A7A7A"}
                        />
                      </div>
                      <span
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className={`text-sm ${plan.popular ? "text-white/80" : "text-[#3D3D3D]"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: plan.popular
                      ? "linear-gradient(135deg, #C9A96E, #D4B896)"
                      : plan.name === "VIP Concierge"
                      ? "linear-gradient(135deg, rgba(212,165,165,0.3), rgba(212,165,165,0.15))"
                      : "transparent",
                    border: plan.popular
                      ? "none"
                      : plan.name === "VIP Concierge"
                      ? "1px solid rgba(212,165,165,0.6)"
                      : "1px solid rgba(42,122,122,0.4)",
                    color: plan.popular
                      ? "#fff"
                      : plan.name === "VIP Concierge"
                      ? "#8B4A4A"
                      : "#2A7A7A",
                  }}
                  className="w-full py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:opacity-85 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free guide mention */}
        <div className="max-w-7xl mx-auto mt-8 text-center">
          <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-sm text-[#7A8B8B]">
            Not ready to commit?{" "}
            <Link
              to="/prevention-guide"
              className="text-[#C9A96E] hover:underline"
            >
              Start with our free Prevention Guide →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section
        className="py-20 px-6 lg:px-10"
        style={{ background: "linear-gradient(180deg, #F4EDE8 0%, #FDFAF6 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 3vw, 2.7rem)" }}
              className="text-[#1A3A3A]"
            >
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E8D5C4]/40 overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-7 py-5 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
                    className="text-[#1A3A3A]"
                  >
                    {faq.q}
                  </span>
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[#2A7A7A] transition-transform duration-200"
                    style={{
                      background: "rgba(42,122,122,0.1)",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? "200px" : "0px" }}
                >
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="px-7 pb-5 text-sm text-[#5A6B6B] leading-relaxed"
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            className="text-[#1A3A3A]"
          >
            Begin your longevity journey today.
          </h2>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[#5A6B6B] text-sm leading-relaxed"
          >
            Join 12,000+ women who are already investing in their future with Longevity Lounge.
          </p>
          <Link
            to="/prevention-guide"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm tracking-wide text-white transition-all duration-300 hover:shadow-lg"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "linear-gradient(135deg, #C9A96E, #D4B896)",
            }}
          >
            Start Free with the Prevention Guide <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
