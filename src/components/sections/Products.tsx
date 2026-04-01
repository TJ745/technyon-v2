"use client";

import { AMAZON_URL, products } from "@/constants/products";
import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <section id="products" className="px-[5vw] py-20 md:py-[120px]">
      {/* Header */}
      <div className="reveal max-w-[1300px] mx-auto mb-10 md:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5">
        <div>
          <div className="section-label">Curated Collection</div>
          <h2
            className="font-display font-extrabold leading-[1.1]"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Tech That <span className="text-gold-bright">Elevates</span> Every
            Day
          </h2>
        </div>
        <Link href="/allproducts" className="btn-secondary shrink-0">
          Browse All
        </Link>
      </div>

      {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
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
    <div className="reveal gold-border-card relative overflow-hidden transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(200,151,63,0.25)] hover:z-[2]">
      <Image
        src={img}
        alt={alt}
        width={600}
        height={450}
        className="w-full object-cover block transition-all duration-400 group-hover:saturate-100 group-hover:brightness-100"
        style={{ aspectRatio: "4/3", filter: "saturate(0.8) brightness(0.9)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-void/90 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <div className="text-[0.68rem] tracking-[0.22em] uppercase text-gold-base mb-1.5">
          {category}
        </div>
        <div className="font-display font-bold text-base md:text-[1.1rem] text-text-white mb-3">
          {name}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-gradient-to-br from-gold-base to-gold-bright text-bg-void font-display font-bold text-[0.72rem] tracking-[0.14em] uppercase no-underline rounded-[2px] translate-y-2.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        >
          View on Amazon
        </a>
      </div>
    </div>
  );
}
