import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 5vw",
        background:
          "linear-gradient(180deg, var(--color-bg-void) 0%, var(--color-bg-deep) 50%, var(--color-bg-void) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div className="reveal" style={{ position: "relative" }}>
          <Image
            src=""
            alt="About Technyon"
            width={600}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              filter: "saturate(0.7) brightness(0.85)",
              display: "block",
            }}
          />
          {/* Gold overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(200,151,63,0.15) 0%, transparent 60%)",
              borderRadius: "4px",
              pointerEvents: "none",
            }}
          />
          {/* Corner accents */}
          <div
            style={{
              position: "absolute",
              top: "-16px",
              right: "-16px",
              width: "120px",
              height: "120px",
              borderTop: "2px solid var(--color-gold-base)",
              borderRight: "2px solid var(--color-gold-base)",
              borderRadius: "0 4px 0 0",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-16px",
              left: "-16px",
              width: "120px",
              height: "120px",
              borderBottom: "2px solid var(--color-gold-base)",
              borderLeft: "2px solid var(--color-gold-base)",
              borderRadius: "0 0 0 4px",
            }}
          />
        </div>

        {/* Text */}
        <div className="reveal">
          <div className="section-label">Our Story</div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Technology Should Work{" "}
            <span style={{ color: "var(--color-gold-bright)" }}>For You</span>
          </h2>

          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.85,
              fontSize: "0.98rem",
              fontWeight: 300,
              marginBottom: "1.2rem",
            }}
          >
            At TECHNYON, we believe great technology shouldn&apos;t require
            compromise. We curate a refined selection of top-quality electronics
            that fit seamlessly into modern living — from intelligent kitchen
            systems to cutting-edge entertainment and everyday gadgets.
          </p>

          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.85,
              fontSize: "0.98rem",
              fontWeight: 300,
              marginBottom: "2rem",
            }}
          >
            Every product earns its place through rigorous evaluation of
            performance, reliability, and value. We connect you to trusted
            Amazon listings today — and our own direct platform is coming, built
            to offer exclusive benefits and a seamless experience.
          </p>

          {/* Pull quote */}
          <div
            style={{
              padding: "24px 28px",
              background: "var(--color-bg-card)",
              borderLeft: "2px solid var(--color-gold-base)",
              borderRadius: "0 2px 2px 0",
            }}
          >
            <p
              style={{
                color: "var(--color-gold-pale)",
                fontStyle: "italic",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              &ldquo;We choose only what we&apos;d use ourselves — quality that
              speaks before the price tag.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
