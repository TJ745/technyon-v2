"use client";

const stats = [
  { icon: "✦", number: "100%", label: "Customer Satisfaction Rate" },
  { icon: "★", number: "5.0", label: "Average Review Score" },
  { icon: "◈", number: "500+", label: "Premium Products Curated" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      style={{
        padding: "80px 5vw",
        position: "relative",
        borderTop: "1px solid rgba(200,151,63,0.18)",
        borderBottom: "1px solid rgba(200,151,63,0.18)",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, transparent, rgba(200,151,63,0.04), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
        }}
      >
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function StatCard({
  icon,
  number,
  label,
}: {
  icon: string;
  number: string;
  label: string;
}) {
  return (
    <div
      className="reveal gold-border-card"
      style={{
        padding: "50px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow =
          "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(200,151,63,0.08)";
        const bar = el.querySelector(".stat-top-bar") as HTMLElement | null;
        if (bar) bar.style.opacity = "1";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
        const bar = el.querySelector(".stat-top-bar") as HTMLElement | null;
        if (bar) bar.style.opacity = "0";
      }}
    >
      {/* Top border glow */}
      <div
        className="stat-top-bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background:
            "linear-gradient(90deg, transparent, var(--color-gold-base), transparent)",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      />

      <span
        style={{ fontSize: "1.8rem", marginBottom: "1rem", display: "block" }}
      >
        {icon}
      </span>

      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "3.2rem",
          fontWeight: 900,
          background:
            "linear-gradient(135deg, var(--color-gold-base), var(--color-gold-pale))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          marginBottom: "0.5rem",
          display: "block",
        }}
      >
        {number}
      </span>

      <span
        style={{
          fontSize: "0.8rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
    </div>
  );
}
