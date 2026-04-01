"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { allproducts, AMAZON_URL, categories } from "@/constants/products";

export default function AllProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered =
    activeCategory === "All"
      ? allproducts
      : allproducts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-bg-void">
      {/* ── HEADER ── */}
      <div className="pt-[120px] pb-12 md:pb-16 px-[5vw] border-b border-border relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(200,151,63,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,151,63,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 20%, black 40%, transparent 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs tracking-widest">
            <Link
              href="/"
              className="text-text-muted hover:text-gold-bright transition-colors duration-200 no-underline"
            >
              Home
            </Link>
            <span className="text-gold-dim">›</span>
            <span className="text-gold-base">All Products</span>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[0.7rem] tracking-[0.28em] uppercase text-gold-base mb-3">
                <span className="block w-7 h-px bg-gold-base" />
                Curated Collection
              </div>
              <h1
                className="font-display font-black leading-[1.05] tracking-tight"
                style={{ fontSize: "clamp(2rem,4vw,3.6rem)" }}
              >
                All <span className="gold-text">Products</span>
              </h1>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden sm:block font-display text-[0.78rem] tracking-[0.14em] text-text-muted">
                {filtered.length} of {allproducts.length}
              </span>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 md:px-7 py-2.5 md:py-3 text-xs md:text-[0.78rem]"
              >
                Shop on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── FILTER BAR ── */}
      <div className="border-b border-border px-[5vw] bg-bg-card/60 backdrop-blur-xl sticky top-[72px] z-50">
        <div className="max-w-7xl mx-auto flex overflow-x-auto scrollbar-hide">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "px-4 md:px-5 py-4 md:py-[18px] bg-transparent border-none border-b-2 font-display text-[0.72rem] md:text-[0.78rem] tracking-[0.12em] md:tracking-[0.14em] uppercase whitespace-nowrap transition-all duration-250 cursor-none",
                  isActive
                    ? "text-gold-bright border-gold-base font-bold"
                    : "text-text-muted border-transparent font-medium hover:text-gold-bright hover:border-gold-base/30",
                ].join(" ")}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── GRID — 1 col mobile, 2 col tablet, 3 col desktop ── */}
      <div className="px-[5vw] pt-10 md:pt-16 pb-20 md:pb-[120px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="max-w-7xl mx-auto text-center py-20">
            <p className="font-display text-base tracking-[0.2em] uppercase text-text-muted">
              No products in this category yet
            </p>
          </div>
        )}
      </div>

      {/* ── CTA BANNER ── */}
      <div className="max-w-7xl mx-auto px-[5vw] mb-20 md:mb-24">
        <div className="gold-border-card rounded-[2px] px-[5vw] py-14 md:py-[60px] text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-gold-base), var(--color-gold-bright), var(--color-gold-base), transparent)",
            }}
          />
          <p className="font-display text-[0.72rem] tracking-[0.3em] uppercase text-gold-base mb-3">
            Trusted Checkout
          </p>
          <h2
            className="font-display font-extrabold mb-4"
            style={{ fontSize: "clamp(1.4rem,3vw,2.4rem)" }}
          >
            All Products on <span className="text-gold-bright">Amazon UK</span>
          </h2>
          <p className="text-text-muted text-sm md:text-[0.95rem] max-w-[500px] mx-auto mb-8 leading-[1.7] font-light">
            Shop with confidence through Amazon&apos;s trusted checkout. Fast
            delivery, easy returns, and buyer protection on every order.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 md:px-11 py-3.5 md:py-4 text-sm md:text-[0.85rem]"
          >
            Visit Our Amazon Store →
          </a>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: (typeof allproducts)[number] }) {
  return (
    <div className="gold-border-card overflow-hidden transition-all duration-300 group relative hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(200,151,63,0.12)]">
      <div className="overflow-hidden relative">
        <Image
          src={product.img}
          alt={product.name}
          width={600}
          height={380}
          className="w-full object-cover block transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{
            aspectRatio: "16/10",
            filter: "saturate(0.75) brightness(0.88)",
          }}
        />
        <div className="absolute top-3 left-3 md:top-4 md:left-4 px-2.5 md:px-3 py-1 bg-bg-void/85 border border-gold-base/30 rounded-[2px] text-[0.62rem] md:text-[0.65rem] tracking-[0.2em] uppercase text-gold-base backdrop-blur-md">
          {product.category}
        </div>
      </div>

      <div className="p-5 md:p-7">
        <h3 className="font-display font-bold text-base md:text-[1.05rem] text-text-white mb-2 leading-[1.3]">
          {product.name}
        </h3>
        <p className="text-text-muted text-sm leading-[1.65] font-light mb-5">
          {product.desc}
        </p>
        <div className="gold-line mb-5" />
        <a
          href={AMAZON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 border border-gold-dim text-gold-bright font-display font-semibold text-xs md:text-[0.75rem] tracking-[0.14em] uppercase no-underline rounded-xs transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gold-base group-hover:to-gold-bright group-hover:text-bg-void group-hover:border-transparent"
        >
          View on Amazon →
        </a>
      </div>
    </div>
  );
}
