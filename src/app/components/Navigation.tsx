import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/807f885fa72b7ecbd447e415c09330fff63efc7f.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Pages where the hero is dark — nav should use white text when unscrolled
  const darkHeroPages = ["/founder"];
  const isDarkHero = darkHeroPages.includes(location.pathname) && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/founder", label: "Founder" },
  ];

  const membershipHref =
    "https://events.longevityloungecommunity.com/founding-member#row-Xgsg_XwqhW";

  const storeHref = "https://longevityloungecommunity.gethealthy.store/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E8D5C4]/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Longevity Lounge"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? isDarkHero ? "text-[#7DD4D4]" : "text-[#2A7A7A]"
                      : isDarkHero
                      ? "text-white/90 hover:text-white"
                      : scrolled
                      ? "text-[#3D3D3D] hover:text-[#2A7A7A]"
                      : "text-[#3D3D3D] hover:text-[#2A7A7A]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {/* Membership — external direct redirect, same tab */}
            <a
              href={membershipHref}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                isDarkHero
                  ? "text-white/90 hover:text-white"
                  : "text-[#3D3D3D] hover:text-[#2A7A7A]"
              }`}
            >
              Membership
            </a>
            {/* Store — external direct redirect, same tab */}
            <a
              href={storeHref}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                isDarkHero
                  ? "text-white/90 hover:text-white"
                  : "text-[#3D3D3D] hover:text-[#2A7A7A]"
              }`}
            >
              Store
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/prevention-guide"
              className="px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: "linear-gradient(135deg, #C9A96E 0%, #D4B896 50%, #C9A96E 100%)",
                color: "#fff",
                letterSpacing: "0.04em",
              }}
            >
              Get the Prevention Guide
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden p-2 ${isDarkHero ? "text-white" : "text-[#2A7A7A]"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)" }}
      >
        <nav className="flex flex-col px-6 pb-6 pt-2 gap-4 border-t border-[#E8D5C4]/40">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              className={({ isActive }) =>
                `text-sm tracking-wide py-2 border-b border-[#E8D5C4]/30 ${
                  isActive ? "text-[#2A7A7A]" : "text-[#3D3D3D]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          {/* Membership — external direct redirect, same tab */}
          <a
            href={membershipHref}
            onClick={() => setIsOpen(false)}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-sm tracking-wide py-2 border-b border-[#E8D5C4]/30 text-[#3D3D3D]"
          >
            Membership
          </a>
          {/* Store — external direct redirect, same tab */}
          <a
            href={storeHref}
            onClick={() => setIsOpen(false)}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-sm tracking-wide py-2 border-b border-[#E8D5C4]/30 text-[#3D3D3D]"
          >
            Store
          </a>
          <Link
            to="/prevention-guide"
            onClick={() => setIsOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-full text-sm tracking-wide text-white"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "linear-gradient(135deg, #C9A96E 0%, #D4B896 100%)",
            }}
          >
            Get the Prevention Guide
          </Link>
        </nav>
      </div>
    </header>
  );
}