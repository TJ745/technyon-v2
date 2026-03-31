"use client";

import { companyLinks, legalLinks, socialLinks } from "@/constants/footer";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#020609",
        borderTop: "1px solid rgba(200,151,63,0.18)",
        padding: "60px 5vw 30px",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Top grid */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(200,151,63,0.18)",
          marginBottom: "2rem",
        }}
      >
        {/* Brand */}
        <div>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "1.4rem",
              letterSpacing: "0.2em",
              background: "linear-gradient(135deg, #C8973F, #F7E09A)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "1rem",
            }}
          >
            TECHNYON
          </span>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: "280px",
              marginBottom: "1.5rem",
            }}
          >
            Curated technology for modern living. Products selected with
            precision, delivered with care.
          </p>
          {/* Newsletter */}
          <div style={{ display: "flex" }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                background: "var(--color-bg-card)",
                border: "1px solid rgba(200,151,63,0.18)",
                borderRight: "none",
                padding: "10px 14px",
                color: "var(--color-text-white)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                borderRadius: "2px 0 0 2px",
                outline: "none",
              }}
            />
            <button
              className="btn-primary"
              style={{
                borderRadius: "0 2px 2px 0",
                padding: "10px 18px",
                fontSize: "0.75rem",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Company */}
        <FooterCol title="Company" links={companyLinks} />
        {/* Legal */}
        <FooterCol title="Legal" links={legalLinks} />
        {/* Social */}
        <FooterCol title="Follow Us" links={socialLinks} external />
      </div>

      {/* Bottom */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
          © 2025{" "}
          <span style={{ color: "var(--color-gold-dim)" }}>TECHNYON</span>. All
          Rights Reserved.
        </p>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem" }}>
          Designed with precision · London, UK
        </p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  external,
}: {
  title: string;
  links: { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "0.8rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--color-gold-base)",
          marginBottom: "1.4rem",
        }}
      >
        {title}
      </div>
      <ul style={{ listStyle: "none" }}>
        {links.map((l) => (
          <li key={l.href} style={{ marginBottom: "0.8rem" }}>
            <Link
              href={l.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              style={{
                color: "var(--color-text-muted)",
                textDecoration: "none",
                fontSize: "0.88rem",
                transition: "color 0.25s",
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
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
