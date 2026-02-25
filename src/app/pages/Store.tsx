import { useState } from "react";
import { ShoppingBag, Star, Filter, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const supplementsImage = "https://images.unsplash.com/photo-1617175093766-18ed657a5c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwc3VwcGxlbWVudHMlMjB2aXRhbWlucyUyMHdlbGxuZXNzJTIwcHJvZHVjdHMlMjBmbGF0bGF5fGVufDF8fHx8MTc3MTYwNzQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const foodImage = "https://images.unsplash.com/photo-1738220542905-6e477c1f1c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbiUyMGNvbG9yZnVsJTIwdmVnZXRhYmxlcyUyMGFudGktYWdpbmd8ZW58MXx8fHwxNzcxNjA3NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const spaImage = "https://images.unsplash.com/photo-1714648775477-a15cc5aed21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB0cmVhdG1lbnQlMjByb29tJTIwc29mdCUyMGxpZ2h0fGVufDF8fHx8MTc3MTYwNzQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080";

const categories = ["All", "Supplements", "Programs", "Books & Guides", "Tools"];

const products = [
  {
    id: 1,
    name: "Longevity Foundation Stack",
    category: "Supplements",
    price: 89,
    originalPrice: 109,
    rating: 4.9,
    reviews: 312,
    badge: "Bestseller",
    badgeColor: "#C9A96E",
    desc: "Dr. Nouri's curated daily supplement protocol — NAD+, Omega-3, Magnesium Glycinate & more.",
    image: supplementsImage,
  },
  {
    id: 2,
    name: "The Hormone Reset Program",
    category: "Programs",
    price: 149,
    originalPrice: null,
    rating: 5.0,
    reviews: 198,
    badge: "New",
    badgeColor: "#2A7A7A",
    desc: "A 12-week guided program to naturally balance hormones through nutrition, movement & sleep.",
    image: foodImage,
  },
  {
    id: 3,
    name: "Cellular Renewal Serum",
    category: "Supplements",
    price: 67,
    originalPrice: null,
    rating: 4.8,
    reviews: 145,
    badge: null,
    badgeColor: null,
    desc: "A topical anti-aging serum formulated with peptides, hyaluronic acid, and CoQ10.",
    image: spaImage,
  },
  {
    id: 4,
    name: "Longevity Lab Handbook",
    category: "Books & Guides",
    price: 34,
    originalPrice: null,
    rating: 4.9,
    reviews: 267,
    badge: null,
    badgeColor: null,
    desc: "Understand your biomarkers, order the right tests, and interpret your results like a pro.",
    image: supplementsImage,
  },
  {
    id: 5,
    name: "Sleep & Recovery Bundle",
    category: "Supplements",
    price: 74,
    originalPrice: 94,
    rating: 4.7,
    reviews: 89,
    badge: "Sale",
    badgeColor: "#D4A5A5",
    desc: "Magnesium, L-Theanine & Ashwagandha — a clinically-backed trio for restorative sleep.",
    image: foodImage,
  },
  {
    id: 6,
    name: "Metabolic Vitality Course",
    category: "Programs",
    price: 199,
    originalPrice: null,
    rating: 5.0,
    reviews: 54,
    badge: "Expert Pick",
    badgeColor: "#2A7A7A",
    desc: "Dr. Nouri's comprehensive course on metabolic health, insulin sensitivity & longevity.",
    image: spaImage,
  },
];

export function Store() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<number[]>([]);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const addToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
  };

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
            The Longevity
            <br />
            <em className="text-[#2A7A7A]">Wellness Shop</em>
          </h1>
          <p
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[#5A6B6B] text-sm leading-relaxed max-w-lg mx-auto"
          >
            Physician-curated products, programs, and resources — every single item hand-selected by Dr. Nouri for its evidence base and quality.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 lg:px-10 sticky top-20 z-30 backdrop-blur-md" style={{ background: "rgba(253,250,246,0.95)", borderBottom: "1px solid rgba(232,213,196,0.4)" }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 items-center">
          <Filter size={14} color="#9A9A9A" className="mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full text-xs tracking-wide transition-all duration-200"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background:
                  activeCategory === cat
                    ? "linear-gradient(135deg, #2A7A7A, #3D9B9B)"
                    : "transparent",
                border: activeCategory === cat ? "none" : "1px solid rgba(232,213,196,0.6)",
                color: activeCategory === cat ? "#fff" : "#5A6B6B",
              }}
            >
              {cat}
            </button>
          ))}

          {cart.length > 0 && (
            <div className="ml-auto flex items-center gap-2">
              <ShoppingBag size={16} color="#2A7A7A" />
              <span style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-xs text-[#2A7A7A]">
                {cart.length} item{cart.length > 1 ? "s" : ""}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Products */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl border border-[#E8D5C4]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(42,122,122,0.1)" }}
                  />
                  {/* Badge */}
                  {product.badge && (
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        background: product.badgeColor || "#C9A96E",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={11}
                          fill={s <= Math.round(product.rating) ? "#C9A96E" : "transparent"}
                          color="#C9A96E"
                        />
                      ))}
                    </div>
                    <span
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                      className="text-xs text-[#9A9A9A]"
                    >
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem" }}
                    className="text-[#1A3A3A] mb-2 leading-snug"
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                    className="text-[#7A8B8B] text-xs leading-relaxed mb-5"
                  >
                    {product.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        className="text-2xl text-[#2A7A7A]"
                      >
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                          className="text-sm text-[#9A9A9A] line-through"
                        >
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product.id)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs tracking-wide transition-all duration-200 hover:shadow-md ${
                        cart.includes(product.id)
                          ? "bg-[#2A7A7A] text-white"
                          : ""
                      }`}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        background: cart.includes(product.id)
                          ? "#2A7A7A"
                          : "linear-gradient(135deg, #C9A96E, #D4B896)",
                        color: "#fff",
                      }}
                    >
                      {cart.includes(product.id) ? (
                        <>✓ Added</>
                      ) : (
                        <>
                          <ShoppingBag size={12} />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section
        className="py-12 px-6 lg:px-10"
        style={{ background: "linear-gradient(135deg, rgba(42,122,122,0.06) 0%, rgba(212,165,165,0.06) 100%)", borderTop: "1px solid rgba(232,213,196,0.4)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { val: "100%", label: "Physician-approved" },
              { val: "Third-party", label: "Lab tested" },
              { val: "Free", label: "Shipping over $80" },
              { val: "30-day", label: "Satisfaction guarantee" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl text-[#2A7A7A]">
                  {item.val}
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-xs text-[#7A8B8B] mt-0.5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
