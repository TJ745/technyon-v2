"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AMAZON_URL =
  "https://www.amazon.co.uk/s?me=A161RUNEUG288T&marketplaceID=A1F83G8C2ARO7P";

const categories = [
  "All",
  "Smart Home",
  "Electronics",
  "Entertainment",
  "Kitchen",
  "Audio",
  "Gadgets",
];

const products = [
  {
    id: 1,
    category: "Smart Home",
    name: "Smart LED Lighting Kit",
    desc: "Voice-controlled ambient lighting system compatible with Alexa and Google Home.",
    img: "",
  },
  {
    id: 2,
    category: "Electronics",
    name: "Wireless Charging Pad Pro",
    desc: "15W fast wireless charger with multi-device support and LED indicator.",
    img: "",
  },
  {
    id: 3,
    category: "Entertainment",
    name: "4K Streaming Media Player",
    desc: "Ultra HD streaming with HDR10+, Dolby Atmos, and built-in voice remote.",
    img: "",
  },
  {
    id: 4,
    category: "Kitchen",
    name: "Smart Air Fryer 5.5L",
    desc: "Digital touchscreen air fryer with 12 preset programmes and app connectivity.",
    img: "",
  },
  {
    id: 5,
    category: "Audio",
    name: "True Wireless Earbuds Elite",
    desc: "Active noise cancellation, 30-hour battery life, and premium spatial audio.",
    img: "",
  },
  {
    id: 6,
    category: "Gadgets",
    name: "Portable Power Station 300W",
    desc: "Compact 288Wh power bank with AC outlet, USB-C PD, and solar charging input.",
    img: "",
  },
  {
    id: 7,
    category: "Smart Home",
    name: "Smart Security Camera 4K",
    desc: "Outdoor/indoor 4K camera with colour night vision, motion alerts, and local storage.",
    img: "",
  },
  {
    id: 8,
    category: "Electronics",
    name: "Mechanical Keyboard TKL",
    desc: "Tenkeyless layout, RGB per-key backlight, hot-swappable switches.",
    img: "",
  },
  {
    id: 9,
    category: "Entertainment",
    name: "Portable Projector 1080p",
    desc: '800 ANSI lumens, built-in speaker, HDMI + USB-C, up to 120" screen.',
    img: "",
  },
  {
    id: 10,
    category: "Kitchen",
    name: "Espresso Machine Barista Pro",
    desc: "15-bar pump pressure, built-in milk frother, and programmable shot temperature.",
    img: "",
  },
  {
    id: 11,
    category: "Audio",
    name: "Over-Ear Headphones Studio",
    desc: "40mm neodymium drivers, foldable design, 50-hour playtime, USB-C fast charge.",
    img: "",
  },
  {
    id: 12,
    category: "Gadgets",
    name: "Smart Tracker Tag 4-Pack",
    desc: "Ultra-wideband precision finding, replaceable battery, works with Find My.",
    img: "",
  },
];

export default function AllProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg-void)" }}>
      {/* ── PAGE HEADER ── */}
      <div
        style={{
          paddingTop: "120px",
          paddingBottom: "60px",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          borderBottom: "1px solid rgba(200,151,63,0.18)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(200,151,63,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,151,63,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "2rem",
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
            }}
          >
            <Link
              href="/"
              style={{
                color: "var(--color-text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-gold-bright)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-text-muted)")
              }
            >
              Home
            </Link>
            <span style={{ color: "var(--color-gold-dim)" }}>›</span>
            <span style={{ color: "var(--color-gold-base)" }}>
              All Products
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "0.7rem",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--color-gold-base)",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "28px",
                    height: "1px",
                    background: "var(--color-gold-base)",
                  }}
                />
                Curated Collection
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                All{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-gold-base), var(--color-gold-pale), var(--color-gold-base))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    backgroundSize: "200% auto",
                    animation: "shimmer 4s linear infinite",
                  }}
                >
                  Products
                </span>
              </h1>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  color: "var(--color-text-muted)",
                }}
              >
                {filtered.length} of {products.length} products
              </span>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "11px 28px", fontSize: "0.78rem" }}
              >
                Shop All on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── CATEGORY FILTER BAR ── */}
      <div
        style={{
          borderBottom: "1px solid rgba(200,151,63,0.18)",
          paddingLeft: "5vw",
          paddingRight: "5vw",
          background: "rgba(10,22,40,0.6)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: "72px",
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            gap: 0,
            overflowX: "auto",
          }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "18px 22px",
                  background: "transparent",
                  border: "none",
                  borderBottom: isActive
                    ? "2px solid var(--color-gold-base)"
                    : "2px solid transparent",
                  color: isActive
                    ? "var(--color-gold-bright)"
                    : "var(--color-text-muted)",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "none",
                  whiteSpace: "nowrap",
                  transition: "color 0.25s, border-color 0.25s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-gold-bright)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--color-text-muted)";
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── PRODUCTS GRID ── */}
      <div style={{ padding: "60px 5vw 120px" }}>
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "2px",
          }}
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            style={{
              maxWidth: "1300px",
              margin: "0 auto",
              textAlign: "center",
              padding: "80px 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
              }}
            >
              No products in this category yet
            </p>
          </div>
        )}
      </div>

      {/* ── CTA BANNER ── */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto 100px",
          padding: "0 5vw",
        }}
      >
        <div
          style={{
            background: "var(--color-bg-card)",
            border: "1px solid rgba(200,151,63,0.18)",
            padding: "60px 5vw",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            borderRadius: "2px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background:
                "linear-gradient(90deg, transparent, var(--color-gold-base), var(--color-gold-bright), var(--color-gold-base), transparent)",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-gold-base)",
              marginBottom: "1rem",
            }}
          >
            Trusted Checkout
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              marginBottom: "1rem",
            }}
          >
            All Products Available on{" "}
            <span style={{ color: "var(--color-gold-bright)" }}>Amazon UK</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.95rem",
              maxWidth: "500px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Shop with confidence through Amazon&apos;s trusted and secure
            checkout. Fast delivery, easy returns, and buyer protection on every
            order.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.85rem", padding: "15px 44px" }}
          >
            Visit Our Amazon Store →
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <div
      className="gold-border-card"
      style={{
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow =
          "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(200,151,63,0.12)";
        const img = el.querySelector(".pc-img") as HTMLElement | null;
        if (img) img.style.transform = "scale(1.04)";
        const cta = el.querySelector(".pc-cta") as HTMLElement | null;
        if (cta) {
          cta.style.background =
            "linear-gradient(135deg, var(--color-gold-base), var(--color-gold-bright))";
          cta.style.color = "var(--color-bg-void)";
          cta.style.borderColor = "transparent";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        const img = el.querySelector(".pc-img") as HTMLElement | null;
        if (img) img.style.transform = "scale(1)";
        const cta = el.querySelector(".pc-cta") as HTMLElement | null;
        if (cta) {
          cta.style.background = "transparent";
          cta.style.color = "var(--color-gold-bright)";
          cta.style.borderColor = "var(--color-gold-dim)";
        }
      }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        <Image
          src={product.img}
          alt={product.name}
          width={600}
          height={380}
          className="pc-img"
          style={{
            width: "100%",
            aspectRatio: "16/10",
            objectFit: "cover",
            display: "block",
            filter: "saturate(0.75) brightness(0.88)",
            transition: "transform 0.5s ease",
          }}
        />
        {/* Category badge */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            padding: "5px 12px",
            background: "rgba(3,8,15,0.85)",
            border: "1px solid rgba(200,151,63,0.3)",
            borderRadius: "2px",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-gold-base)",
            backdropFilter: "blur(8px)",
          }}
        >
          {product.category}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px 28px 28px" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--color-text-white)",
            marginBottom: "10px",
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "0.85rem",
            lineHeight: 1.65,
            fontWeight: 300,
            marginBottom: "22px",
          }}
        >
          {product.desc}
        </p>

        <div className="gold-line" style={{ marginBottom: "22px" }} />

        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pc-cta"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 22px",
            border: "1px solid var(--color-gold-dim)",
            color: "var(--color-gold-bright)",
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "2px",
            transition: "background 0.3s, color 0.3s, border-color 0.3s",
          }}
        >
          View on Amazon →
        </a>
      </div>
    </div>
  );
}
