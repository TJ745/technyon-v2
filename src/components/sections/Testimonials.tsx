"use client";

const testimonials = [
  {
    text: "Exceptional quality and fast dispatch. The smart kitchen appliance I ordered has been running flawlessly for months. TECHNYON clearly vets their products carefully before listing.",
    name: "James H.",
    loc: "London, UK",
    initials: "JH",
  },
  {
    text: "I was hesitant at first, but every product lived up to its description. The team responded within hours to my query. This is the kind of service you rarely find these days.",
    name: "Sarah R.",
    loc: "Manchester, UK",
    initials: "SR",
  },
  {
    text: "Bought three items over the past year. Every one has been exactly as described — reliable, premium, and worth every penny. TECHNYON has become my go-to for tech purchases.",
    name: "Mohammed K.",
    loc: "Birmingham, UK",
    initials: "MK",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 5vw",
        background: "var(--color-bg-deep)",
        borderTop: "1px solid rgba(200,151,63,0.18)",
      }}
    >
      {/* Header */}
      <div
        className="reveal"
        style={{
          maxWidth: "1300px",
          margin: "0 auto 4rem",
          textAlign: "center",
        }}
      >
        <div
          className="section-label"
          style={{ justifyContent: "center", display: "inline-flex" }}
        >
          Client Reviews
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            lineHeight: 1.1,
          }}
        >
          Trusted by{" "}
          <span style={{ color: "var(--color-gold-bright)" }}>Discerning</span>{" "}
          Customers
        </h2>
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
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}

function TestimonialCard({
  text,
  name,
  loc,
  initials,
}: {
  text: string;
  name: string;
  loc: string;
  initials: string;
}) {
  return (
    <div
      className="reveal gold-border-card"
      style={{
        padding: "40px 36px",
        position: "relative",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow =
          "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(200,151,63,0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Quote mark */}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "4rem",
          lineHeight: 1,
          color: "var(--color-gold-base)",
          opacity: 0.4,
          marginBottom: "1rem",
          display: "block",
        }}
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "1.2rem" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            style={{ color: "var(--color-gold-bright)", fontSize: "0.9rem" }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Text */}
      <p
        style={{
          color: "var(--color-text-muted)",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          marginBottom: "2rem",
          fontWeight: 300,
        }}
      >
        {text}
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, var(--color-gold-dim), var(--color-gold-base))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.9rem",
            color: "var(--color-bg-void)",
            flexShrink: 0,
            border: "1px solid var(--color-gold-dim)",
          }}
        >
          {initials}
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "var(--color-text-white)",
              marginBottom: "2px",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            {loc}
          </div>
        </div>
      </div>
    </div>
  );
}
