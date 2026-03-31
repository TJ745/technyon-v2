"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <section
      id="contact"
      style={{ padding: "120px 5vw", position: "relative", overflow: "hidden" }}
    >
      {/* Ambient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,151,63,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        {/* Left info */}
        <div className="reveal" style={{ paddingTop: "1rem" }}>
          <div className="section-label">Get in Touch</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Start a{" "}
            <span style={{ color: "var(--color-gold-bright)" }}>
              Conversation
            </span>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              lineHeight: 1.85,
              fontSize: "0.98rem",
              fontWeight: 300,
              marginBottom: "3rem",
            }}
          >
            Whether you have a product question, a suggestion, or a business
            inquiry — our team is ready to assist with the same precision we
            apply to every product we list.
          </p>

          {[
            {
              icon: "📍",
              label: "Address",
              value: "395 Strand, London\nUnited Kingdom",
            },
            { icon: "✉", label: "Email", value: "argrouplondon7@gmail.com" },
            { icon: "◎", label: "Response Time", value: "Within 24 hours" },
          ].map((d) => (
            <div
              key={d.label}
              style={{
                display: "flex",
                gap: "1.2rem",
                alignItems: "flex-start",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  flexShrink: 0,
                  border: "1px solid rgba(200,151,63,0.18)",
                  background: "var(--color-bg-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  borderRadius: "2px",
                }}
              >
                {d.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-gold-base)",
                    marginBottom: "4px",
                  }}
                >
                  {d.label}
                </div>
                <div
                  style={{
                    color: "var(--color-text-white)",
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {d.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="reveal">
          <div
            style={{
              background: "var(--color-bg-card)",
              border: "1px solid rgba(200,151,63,0.18)",
              padding: "48px 44px",
              position: "relative",
              borderRadius: "2px",
            }}
          >
            {/* Top gold bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent, var(--color-gold-base), var(--color-gold-bright), var(--color-gold-base), transparent)",
              }}
            />

            {state.message && (
              <div
                style={{
                  marginBottom: "1.5rem",
                  padding: "14px 18px",
                  borderRadius: "2px",
                  background: state.success
                    ? "rgba(200,151,63,0.1)"
                    : "rgba(200,80,80,0.1)",
                  border: `1px solid ${state.success ? "var(--color-gold-dim)" : "rgba(200,80,80,0.3)"}`,
                  color: state.success ? "var(--color-gold-bright)" : "#f87171",
                  fontSize: "0.88rem",
                }}
              >
                {state.message}
              </div>
            )}

            <form action={formAction}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <FormField
                  label="First Name"
                  name="firstName"
                  placeholder="John"
                  error={state.errors?.firstName?.[0]}
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  placeholder="Doe"
                  error={state.errors?.lastName?.[0]}
                />
              </div>
              <FormField
                label="Email Address"
                name="email"
                placeholder="john@example.com"
                error={state.errors?.email?.[0]}
              />
              <FormField
                label="Subject"
                name="subject"
                placeholder="Product enquiry, support…"
                error={state.errors?.subject?.[0]}
              />

              {/* Message */}
              <div style={{ marginBottom: "1rem" }}>
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us how we can help..."
                />
                {state.errors?.message && (
                  <p
                    style={{
                      color: "#f87171",
                      fontSize: "0.75rem",
                      marginTop: "4px",
                    }}
                  >
                    {state.errors.message[0]}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={pending}
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "15px",
                  fontSize: "0.85rem",
                  letterSpacing: "0.2em",
                  marginTop: "0.5rem",
                  opacity: pending ? 0.7 : 1,
                  cursor: pending ? "wait" : "none",
                  borderRadius: "2px",
                }}
              >
                {pending ? "Sending…" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label className="form-label">{label}</label>
      <input
        type={name === "email" ? "email" : "text"}
        name={name}
        className="form-input"
        placeholder={placeholder}
      />
      {error && (
        <p style={{ color: "#f87171", fontSize: "0.75rem", marginTop: "4px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
