"use client";

import { links } from "@/constants/navbar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = [
        "home",
        "about",
        "stats",
        "products",
        "testimonials",
        "contact",
      ];
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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 h-18 flex items-center justify-between px-[5vw] border-b border-border backdrop-blur-xl transition-colors duration-300 ${scrolled ? "bg-bg-void/90" : "bg-bg-void/60"}`}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          className="font-display font-black text-xl md:text-2xl tracking-[0.22em] text-gold-bright no-underline flex items-center gap-1.5"
          style={{ textShadow: "0 0 20px rgba(200,151,63,0.3)" }}
        >
          TECHNYON
          <span
            className="inline-block w-1.5 h-1.5 bg-gold-bright rounded-full"
            style={{ animation: "pulse-dot 2s infinite" }}
          />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`no-underline text-[0.8rem] tracking-[0.14em] uppercase font-medium pb-1 border-b transition-all duration-250
                    ${
                      isActive
                        ? "text-gold-bright border-gold-base"
                        : "text-text-muted border-transparent hover:text-gold-bright hover:border-gold-base/50"
                    }`}
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
              className="px-5 py-2 border border-gold-base text-gold-bright font-display text-[0.78rem] tracking-[0.16em] uppercase no-underline rounded-xs transition-all duration-250 hover:bg-gold-base hover:text-bg-void hover:shadow-[0_0_20px_rgba(200,151,63,0.3)]"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col md:hidden gap-1.5 p-2 cursor-none relative z-101"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-gold-bright transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-gold-bright transition-all duration-300 ${menuOpen ? "opacity-0" : ""}  `}
          />
          <span
            className={`block w-6 h-[1.5px] bg-gold-bright transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`fixed top-18 left-0 right-0 z-99 md:hidden bg-bg-void/95 backdrop-blur-xl border-b border-border transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="list-none px-[5vw] py-6 flex flex-col gap-1">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={closeMenu}
                  className={`block py-3 px-4 text-sm tracking-[0.14em] uppercase font-medium no-underline border-l-2 rounded-[0_2px_2px_0] transition-all duration-200
                    ${
                      isActive
                        ? "text-gold-bright border-gold-base bg-gold-base/6"
                        : "text-text-muted border-transparent hover:text-gold-bright hover:border-gold-base/30"
                    }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-3">
            <Link
              href="#contact"
              onClick={closeMenu}
              className="block py-3 px-4 text-center border border-gold-base text-gold-bright font-display text-sm tracking-[0.16em] uppercase no-underline rounded-xs transition-all duration-250 hover:bg-gold-base hover:text-bg-void"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
