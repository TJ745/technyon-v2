"use client";

import Image from "next/image";
import Link from "next/link";

const AMAZON_URL =
  "https://www.amazon.co.uk/s?me=A161RUNEUG288T&marketplaceID=A1F83G8C2ARO7P";

const products = [
  {
    category: "Smart Home",
    name: "Intelligent Appliances",
    img: "",
    alt: "Smart Home Device",
  },
  {
    category: "Electronics",
    name: "Premium Gadgets",
    img: "",
    alt: "Electronics",
  },
  {
    category: "Entertainment",
    name: "Audio & Visual Systems",
    img: "",
    alt: "Entertainment Tech",
  },
];

export default function Products() {
  return (
    <section id="products" style={{ padding: "120px 5vw" }}>
      {/* Header */}
      <div
        className="reveal"
        style={{
          maxWidth: "1300px",
          margin: "0 auto 4rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <div className="section-label">Curated Collection</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
            }}
          >
            Tech That{" "}
            <span style={{ color: "var(--color-gold-bright)" }}>Elevates</span>{" "}
            Every Day
          </h2>
        </div>
        <Link href="/allproducts" className="btn-secondary">
          Browse All
        </Link>
      </div>

      {/* Grid */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.name} {...p} href={AMAZON_URL} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  category,
  name,
  img,
  alt,
  href,
}: {
  category: string;
  name: string;
  img: string;
  alt: string;
  href: string;
}) {
  return (
    <div
      className="reveal gold-border-card"
      style={{
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow =
          "0 24px 80px rgba(0,0,0,0.5), 0 0 40px rgba(200,151,63,0.25), 0 0 80px rgba(200,151,63,0.10)";
        el.style.zIndex = "2";
        const overlay = el.querySelector(".p-overlay") as HTMLElement | null;
        if (overlay) overlay.style.opacity = "1";
        const cta = el.querySelector(".p-cta") as HTMLElement | null;
        if (cta) {
          cta.style.transform = "translateY(0)";
          cta.style.opacity = "1";
        }
        const img = el.querySelector("img") as HTMLElement | null;
        if (img) img.style.filter = "saturate(1) brightness(1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        el.style.zIndex = "auto";
        const overlay = el.querySelector(".p-overlay") as HTMLElement | null;
        if (overlay) overlay.style.opacity = "0.7";
        const cta = el.querySelector(".p-cta") as HTMLElement | null;
        if (cta) {
          cta.style.transform = "translateY(10px)";
          cta.style.opacity = "0";
        }
        const img = el.querySelector("img") as HTMLElement | null;
        if (img) img.style.filter = "saturate(0.8) brightness(0.9)";
      }}
    >
      <Image
        src={img}
        alt={alt}
        width={600}
        height={450}
        style={{
          width: "100%",
          aspectRatio: "4/3",
          objectFit: "cover",
          display: "block",
          filter: "saturate(0.8) brightness(0.9)",
          transition: "filter 0.4s",
        }}
      />

      {/* Dark overlay */}
      <div
        className="p-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(3,8,15,0.9) 30%, transparent 70%)",
          opacity: 0.7,
          transition: "opacity 0.3s",
          pointerEvents: "none",
        }}
      />

      {/* Body */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px",
        }}
      >
        <div
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-gold-base)",
            marginBottom: "6px",
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--color-text-white)",
            marginBottom: "12px",
          }}
        >
          {name}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-cta"
          style={{
            display: "inline-block",
            padding: "9px 22px",
            background:
              "linear-gradient(135deg, var(--color-gold-base), var(--color-gold-bright))",
            color: "var(--color-bg-void)",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textDecoration: "none",
            borderRadius: "2px",
            transform: "translateY(10px)",
            opacity: 0,
            transition: "transform 0.3s, opacity 0.3s",
          }}
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
}
