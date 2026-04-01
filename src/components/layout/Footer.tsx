"use client";

import Link from "next/link";
import { companyLinks, legalLinks, socialLinks } from "@/constants/footer";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020609] border-t border-border pt-14 pb-8 px-[5vw] relative z-2">
      {/* Top grid — stacks on mobile, 2-col on tablet, 4-col on desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-border mb-8">
        {/* Brand */}
        <div>
          <span className="block font-display font-black text-[1.4rem] tracking-[0.2em] gold-text mb-4">
            TECHNYON
          </span>
          <p className="text-text-muted text-sm leading-relaxed font-light max-w-72 mb-6">
            Curated technology for modern living. Products selected with
            precision, delivered with care.
          </p>
          {/* Newsletter */}
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-0 bg-bg-card border border-border border-r-0 px-3.5 py-2.5 text-text-white font-body text-sm rounded-[2px_0_0_2px] outline-none focus:border-gold-base transition-colors duration-300"
            />
            <button className="btn-primary rounded-[0_2px_2px_0] px-4 py-2.5 text-xs shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        <FooterCol title="Company" links={companyLinks} />
        <FooterCol title="Legal" links={legalLinks} />
        <FooterCol title="Follow Us" links={socialLinks} />
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-text-muted text-xs text-center sm:text-left">
          © {currentYear} <span className="text-gold-dim">TECHNYON</span>. All
          Rights Reserved.
        </p>
        <p className="text-text-muted text-xs text-center sm:text-right">
          Designed with ❤️ · London, UK
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gold-base mb-5">
        {title}
      </div>
      <ul className="list-none space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-text-muted no-underline text-sm hover:text-gold-bright transition-colors duration-250"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
