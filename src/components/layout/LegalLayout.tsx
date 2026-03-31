import Link from "next/link";
import { ReactNode } from "react";

const legalNav = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Legal Information", href: "/legal" },
];

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  currentHref,
  children,
}: {
  title: string;
  subtitle: string;
  lastUpdated: string;
  currentHref: string;
  children: ReactNode;
}) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg-void)" }}>
      {/* ── HEADER ── */}
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
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
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
            <span style={{ color: "var(--color-gold-base)" }}>{title}</span>
          </div>

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
            Legal
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
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
              {title}
            </span>
          </h1>

          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.95rem",
              fontWeight: 300,
              marginBottom: "0.6rem",
            }}
          >
            {subtitle}
          </p>
          <p
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-gold-dim)",
            }}
          >
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* ── BODY ── */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "80px 5vw 120px",
          display: "grid",
          gridTemplateColumns: "220px 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
      >
        {/* Sidebar nav */}
        <aside
          style={{
            position: "sticky",
            top: "100px",
          }}
        >
          <p
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-gold-base)",
              marginBottom: "1.2rem",
            }}
          >
            Legal Pages
          </p>
          <ul style={{ listStyle: "none" }}>
            {legalNav.map((item) => {
              const isActive = item.href === currentHref;
              return (
                <li key={item.href} style={{ marginBottom: "4px" }}>
                  <Link
                    href={item.href}
                    style={{
                      display: "block",
                      padding: "10px 16px",
                      fontSize: "0.85rem",
                      color: isActive
                        ? "var(--color-gold-bright)"
                        : "var(--color-text-muted)",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "2px solid var(--color-gold-base)"
                        : "2px solid transparent",
                      background: isActive
                        ? "rgba(200,151,63,0.06)"
                        : "transparent",
                      borderRadius: "0 2px 2px 0",
                      fontWeight: isActive ? 600 : 400,
                      transition:
                        "color 0.2s, border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-gold-bright)";
                        (e.currentTarget as HTMLElement).style.borderLeftColor =
                          "rgba(200,151,63,0.3)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--color-text-muted)";
                        (e.currentTarget as HTMLElement).style.borderLeftColor =
                          "transparent";
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact card */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "20px",
              background: "var(--color-bg-card)",
              border: "1px solid rgba(200,151,63,0.18)",
              borderRadius: "2px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.82rem",
                color: "var(--color-gold-bright)",
                marginBottom: "8px",
              }}
            >
              Have questions?
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                lineHeight: 1.6,
                marginBottom: "14px",
              }}
            >
              Contact our team for any legal enquiries.
            </p>
            <Link
              href="/#contact"
              style={{
                display: "inline-block",
                padding: "8px 16px",
                border: "1px solid var(--color-gold-dim)",
                color: "var(--color-gold-bright)",
                fontFamily: "var(--font-display)",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "background 0.25s, box-shadow 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(200,151,63,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 20px rgba(200,151,63,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Get in Touch
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main>{children}</main>
      </div>
    </div>
  );
}

/* ── REUSABLE CONTENT PRIMITIVES ── */

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "1.2rem",
          color: "var(--color-gold-bright)",
          marginBottom: "1rem",
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(200,151,63,0.15)",
          letterSpacing: "0.04em",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

export function Para({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        color: "var(--color-text-muted)",
        fontSize: "0.95rem",
        lineHeight: 1.85,
        fontWeight: 300,
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", marginBottom: "1rem" }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            color: "var(--color-text-muted)",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            fontWeight: 300,
            marginBottom: "0.5rem",
          }}
        >
          <span
            style={{
              color: "var(--color-gold-base)",
              fontSize: "0.6rem",
              marginTop: "7px",
              flexShrink: 0,
            }}
          >
            ◆
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Highlight({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: "20px 24px",
        background: "rgba(200,151,63,0.05)",
        border: "1px solid rgba(200,151,63,0.2)",
        borderLeft: "3px solid var(--color-gold-base)",
        borderRadius: "0 2px 2px 0",
        marginBottom: "1.5rem",
      }}
    >
      <p
        style={{
          color: "var(--color-gold-pale)",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          fontWeight: 300,
        }}
      >
        {children}
      </p>
    </div>
  );
}
