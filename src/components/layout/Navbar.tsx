"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home",         href: "#home" },
  { label: "About",        href: "#about" },
  { label: "Products",     href: "#products" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [active, setActive]   = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["home", "about", "stats", "products", "testimonials", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position:       "fixed",
        top:            0, left: 0, right: 0,
        zIndex:         100,
        height:         "72px",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        padding:        "0 5vw",
        background:     scrolled ? "rgba(3,8,15,0.92)" : "rgba(3,8,15,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom:   "1px solid rgba(200,151,63,0.18)",
        transition:     "background 0.3s",
      }}
    >
      {/* Logo */}
      <Link
        href="#home"
        style={{
          fontFamily:     "var(--font-display)",
          fontWeight:     900,
          fontSize:       "1.4rem",
          letterSpacing:  "0.22em",
          color:          "var(--color-gold-bright)",
          textDecoration: "none",
          textShadow:     "0 0 20px rgba(200,151,63,0.3)",
          display:        "flex",
          alignItems:     "center",
          gap:            "6px",
        }}
      >
        TECHNYON
        <span
          style={{
            display:      "inline-block",
            width:        "6px",
            height:       "6px",
            background:   "var(--color-gold-bright)",
            borderRadius: "50%",
            animation:    "pulse-dot 2s infinite",
          }}
        />
      </Link>

      {/* Links */}
      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {links.map((l) => {
          const isActive = active === l.href.slice(1);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                style={{
                  color:          isActive ? "var(--color-gold-bright)" : "var(--color-text-muted)",
                  textDecoration: "none",
                  fontSize:       "0.8rem",
                  letterSpacing:  "0.14em",
                  textTransform:  "uppercase",
                  fontWeight:     500,
                  paddingBottom:  "4px",
                  borderBottom:   isActive
                    ? "1px solid var(--color-gold-base)"
                    : "1px solid transparent",
                  transition: "color 0.25s, border-color 0.25s",
                }}
              >
                {l.label}
              </Link>
            </li>
          );
        })}

        {/* CTA */}
        <li>
          <Link
            href="#contact"
            style={{
              padding:        "9px 22px",
              border:         "1px solid var(--color-gold-base)",
              color:          "var(--color-gold-bright)",
              fontFamily:     "var(--font-display)",
              fontSize:       "0.78rem",
              letterSpacing:  "0.16em",
              textTransform:  "uppercase",
              textDecoration: "none",
              borderRadius:   "2px",
              transition:     "background 0.25s, box-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "var(--color-gold-base)";
              (e.currentTarget as HTMLElement).style.color =
                "var(--color-bg-void)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 20px rgba(200,151,63,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color =
                "var(--color-gold-bright)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
