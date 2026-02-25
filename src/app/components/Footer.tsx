import { Link } from "react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
import logoImg from "../../assets/807f885fa72b7ecbd447e415c09330fff63efc7f.png";

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #1E5F5F 0%, #163F3F 100%)",
      }}
      className="text-white"
    >
      {/* Gold divider */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={logoImg}
                alt="Longevity Lounge"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-sm text-white/60 leading-relaxed mt-4"
            >
              A sanctuary for women who want to age with intention, vitality, and grace.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-5"
            >
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About", external: false },
                { href: "/founder", label: "Meet the Founder", external: false },
                { href: "https://events.longevityloungecommunity.com/founding-member#row-Xgsg_XwqhW", label: "Membership", external: true },
                { href: "https://longevityloungecommunity.gethealthy.store/", label: "Shop", external: true },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-5"
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                "Prevention Guide",
                "Longevity Blog",
                "Podcast",
                "Free Resources",
                "Partner Clinics",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-5"
            >
              Stay Connected
            </h4>
            <p
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className="text-sm text-white/60 mb-4 leading-relaxed"
            >
              Weekly longevity insights, directly to your inbox.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="w-full px-4 py-2.5 rounded-full text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#C9A96E]"
              />
              <button
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  background: "linear-gradient(135deg, #C9A96E, #D4B896)",
                }}
                className="w-full px-4 py-2.5 rounded-full text-sm text-white tracking-wide hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Band */}
        <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[11px] text-[#C9A96E] tracking-[0.15em] uppercase mb-1"
              >
                Educational Disclaimer
              </p>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-white/40 leading-relaxed"
              >
                Longevity Lounge, operated by Industry Rockstar Thrive, LLC, provides educational content only and does not offer medical advice or treatment. No provider-client relationship is formed.
              </p>
            </div>
            <div>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-[11px] text-[#C9A96E] tracking-[0.15em] uppercase mb-1"
              >
                Store Disclaimer
              </p>
              <p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-white/40 leading-relaxed"
              >
                Store purchases are made through a separate platform. We are not responsible for third-party product claims or transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-xs text-white/40"
          >
            © Industry Rockstar Thrive, LLC
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              { label: "Terms & Conditions", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Refund Policy", href: "#" },
              { label: "Contact", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}