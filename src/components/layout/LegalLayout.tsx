// import Link from "next/link";
// import { ReactNode } from "react";

// const legalNav = [
//   { label: "Terms & Conditions", href: "/terms" },
//   { label: "Privacy Policy", href: "/privacy" },
//   { label: "Legal Information", href: "/legal" },
// ];

// export default function LegalLayout({
//   title,
//   subtitle,
//   lastUpdated,
//   currentHref,
//   children,
// }: {
//   title: string;
//   subtitle: string;
//   lastUpdated: string;
//   currentHref: string;
//   children: ReactNode;
// }) {
//   return (
//     <div style={{ minHeight: "100vh", background: "var(--color-bg-void)" }}>
//       {/* ── HEADER ── */}
//       <div
//         style={{
//           paddingTop: "120px",
//           paddingBottom: "60px",
//           paddingLeft: "5vw",
//           paddingRight: "5vw",
//           borderBottom: "1px solid rgba(200,151,63,0.18)",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         {/* Grid bg */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundImage: `
//               linear-gradient(rgba(200,151,63,0.03) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(200,151,63,0.03) 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//             maskImage:
//               "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
//             pointerEvents: "none",
//           }}
//         />

//         <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
//           {/* Breadcrumb */}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               marginBottom: "2rem",
//               fontSize: "0.78rem",
//               letterSpacing: "0.1em",
//             }}
//           >
//             <Link
//               href="/"
//               style={{
//                 color: "var(--color-text-muted)",
//                 textDecoration: "none",
//                 transition: "color 0.2s",
//               }}
//               onMouseEnter={(e) =>
//                 ((e.currentTarget as HTMLElement).style.color =
//                   "var(--color-gold-bright)")
//               }
//               onMouseLeave={(e) =>
//                 ((e.currentTarget as HTMLElement).style.color =
//                   "var(--color-text-muted)")
//               }
//             >
//               Home
//             </Link>
//             <span style={{ color: "var(--color-gold-dim)" }}>›</span>
//             <span style={{ color: "var(--color-gold-base)" }}>{title}</span>
//           </div>

//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "10px",
//               fontSize: "0.7rem",
//               letterSpacing: "0.28em",
//               textTransform: "uppercase",
//               color: "var(--color-gold-base)",
//               marginBottom: "1rem",
//             }}
//           >
//             <span
//               style={{
//                 display: "block",
//                 width: "28px",
//                 height: "1px",
//                 background: "var(--color-gold-base)",
//               }}
//             />
//             Legal
//           </div>

//           <h1
//             style={{
//               fontFamily: "var(--font-display)",
//               fontWeight: 900,
//               fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
//               lineHeight: 1.05,
//               letterSpacing: "-0.02em",
//               marginBottom: "1rem",
//             }}
//           >
//             <span
//               style={{
//                 background:
//                   "linear-gradient(90deg, var(--color-gold-base), var(--color-gold-pale), var(--color-gold-base))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 backgroundSize: "200% auto",
//                 animation: "shimmer 4s linear infinite",
//               }}
//             >
//               {title}
//             </span>
//           </h1>

//           <p
//             style={{
//               color: "var(--color-text-muted)",
//               fontSize: "0.95rem",
//               fontWeight: 300,
//               marginBottom: "0.6rem",
//             }}
//           >
//             {subtitle}
//           </p>
//           <p
//             style={{
//               fontSize: "0.72rem",
//               letterSpacing: "0.14em",
//               textTransform: "uppercase",
//               color: "var(--color-gold-dim)",
//             }}
//           >
//             Last updated: {lastUpdated}
//           </p>
//         </div>
//       </div>

//       {/* ── BODY ── */}
//       <div
//         style={{
//           maxWidth: "1300px",
//           margin: "0 auto",
//           padding: "80px 5vw 120px",
//           display: "grid",
//           gridTemplateColumns: "220px 1fr",
//           gap: "5rem",
//           alignItems: "start",
//         }}
//       >
//         {/* Sidebar nav */}
//         <aside
//           style={{
//             position: "sticky",
//             top: "100px",
//           }}
//         >
//           <p
//             style={{
//               fontSize: "0.68rem",
//               letterSpacing: "0.22em",
//               textTransform: "uppercase",
//               color: "var(--color-gold-base)",
//               marginBottom: "1.2rem",
//             }}
//           >
//             Legal Pages
//           </p>
//           <ul style={{ listStyle: "none" }}>
//             {legalNav.map((item) => {
//               const isActive = item.href === currentHref;
//               return (
//                 <li key={item.href} style={{ marginBottom: "4px" }}>
//                   <Link
//                     href={item.href}
//                     style={{
//                       display: "block",
//                       padding: "10px 16px",
//                       fontSize: "0.85rem",
//                       color: isActive
//                         ? "var(--color-gold-bright)"
//                         : "var(--color-text-muted)",
//                       textDecoration: "none",
//                       borderLeft: isActive
//                         ? "2px solid var(--color-gold-base)"
//                         : "2px solid transparent",
//                       background: isActive
//                         ? "rgba(200,151,63,0.06)"
//                         : "transparent",
//                       borderRadius: "0 2px 2px 0",
//                       fontWeight: isActive ? 600 : 400,
//                       transition:
//                         "color 0.2s, border-color 0.2s, background 0.2s",
//                     }}
//                     onMouseEnter={(e) => {
//                       if (!isActive) {
//                         (e.currentTarget as HTMLElement).style.color =
//                           "var(--color-gold-bright)";
//                         (e.currentTarget as HTMLElement).style.borderLeftColor =
//                           "rgba(200,151,63,0.3)";
//                       }
//                     }}
//                     onMouseLeave={(e) => {
//                       if (!isActive) {
//                         (e.currentTarget as HTMLElement).style.color =
//                           "var(--color-text-muted)";
//                         (e.currentTarget as HTMLElement).style.borderLeftColor =
//                           "transparent";
//                       }
//                     }}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Contact card */}
//           <div
//             style={{
//               marginTop: "2.5rem",
//               padding: "20px",
//               background: "var(--color-bg-card)",
//               border: "1px solid rgba(200,151,63,0.18)",
//               borderRadius: "2px",
//             }}
//           >
//             <p
//               style={{
//                 fontFamily: "var(--font-display)",
//                 fontWeight: 700,
//                 fontSize: "0.82rem",
//                 color: "var(--color-gold-bright)",
//                 marginBottom: "8px",
//               }}
//             >
//               Have questions?
//             </p>
//             <p
//               style={{
//                 color: "var(--color-text-muted)",
//                 fontSize: "0.8rem",
//                 lineHeight: 1.6,
//                 marginBottom: "14px",
//               }}
//             >
//               Contact our team for any legal enquiries.
//             </p>
//             <Link
//               href="/#contact"
//               style={{
//                 display: "inline-block",
//                 padding: "8px 16px",
//                 border: "1px solid var(--color-gold-dim)",
//                 color: "var(--color-gold-bright)",
//                 fontFamily: "var(--font-display)",
//                 fontSize: "0.72rem",
//                 letterSpacing: "0.14em",
//                 textTransform: "uppercase",
//                 textDecoration: "none",
//                 borderRadius: "2px",
//                 transition: "background 0.25s, box-shadow 0.25s",
//               }}
//               onMouseEnter={(e) => {
//                 (e.currentTarget as HTMLElement).style.background =
//                   "rgba(200,151,63,0.08)";
//                 (e.currentTarget as HTMLElement).style.boxShadow =
//                   "0 0 20px rgba(200,151,63,0.2)";
//               }}
//               onMouseLeave={(e) => {
//                 (e.currentTarget as HTMLElement).style.background =
//                   "transparent";
//                 (e.currentTarget as HTMLElement).style.boxShadow = "none";
//               }}
//             >
//               Get in Touch
//             </Link>
//           </div>
//         </aside>

//         {/* Main content */}
//         <main>{children}</main>
//       </div>
//     </div>
//   );
// }

// /* ── REUSABLE CONTENT PRIMITIVES ── */

// export function Section({
//   title,
//   children,
// }: {
//   title: string;
//   children: ReactNode;
// }) {
//   return (
//     <div style={{ marginBottom: "3rem" }}>
//       <h2
//         style={{
//           fontFamily: "var(--font-display)",
//           fontWeight: 700,
//           fontSize: "1.2rem",
//           color: "var(--color-gold-bright)",
//           marginBottom: "1rem",
//           paddingBottom: "10px",
//           borderBottom: "1px solid rgba(200,151,63,0.15)",
//           letterSpacing: "0.04em",
//         }}
//       >
//         {title}
//       </h2>
//       {children}
//     </div>
//   );
// }

// export function Para({ children }: { children: ReactNode }) {
//   return (
//     <p
//       style={{
//         color: "var(--color-text-muted)",
//         fontSize: "0.95rem",
//         lineHeight: 1.85,
//         fontWeight: 300,
//         marginBottom: "1rem",
//       }}
//     >
//       {children}
//     </p>
//   );
// }

// export function List({ items }: { items: string[] }) {
//   return (
//     <ul style={{ listStyle: "none", marginBottom: "1rem" }}>
//       {items.map((item, i) => (
//         <li
//           key={i}
//           style={{
//             display: "flex",
//             alignItems: "flex-start",
//             gap: "12px",
//             color: "var(--color-text-muted)",
//             fontSize: "0.95rem",
//             lineHeight: 1.75,
//             fontWeight: 300,
//             marginBottom: "0.5rem",
//           }}
//         >
//           <span
//             style={{
//               color: "var(--color-gold-base)",
//               fontSize: "0.6rem",
//               marginTop: "7px",
//               flexShrink: 0,
//             }}
//           >
//             ◆
//           </span>
//           {item}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export function Highlight({ children }: { children: ReactNode }) {
//   return (
//     <div
//       style={{
//         padding: "20px 24px",
//         background: "rgba(200,151,63,0.05)",
//         border: "1px solid rgba(200,151,63,0.2)",
//         borderLeft: "3px solid var(--color-gold-base)",
//         borderRadius: "0 2px 2px 0",
//         marginBottom: "1.5rem",
//       }}
//     >
//       <p
//         style={{
//           color: "var(--color-gold-pale)",
//           fontSize: "0.9rem",
//           lineHeight: 1.75,
//           fontWeight: 300,
//         }}
//       >
//         {children}
//       </p>
//     </div>
//   );
// }

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
    <div className="min-h-screen bg-bg-void">
      {/* ── HEADER ── */}
      <div className="pt-[120px] pb-12 md:pb-16 px-[5vw] border-b border-border relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(200,151,63,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,151,63,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 text-xs tracking-widest">
            <Link
              href="/"
              className="text-text-muted hover:text-gold-bright transition-colors duration-200 no-underline"
            >
              Home
            </Link>
            <span className="text-gold-dim">›</span>
            <span className="text-gold-base">{title}</span>
          </div>

          <div className="inline-flex items-center gap-2.5 text-[0.7rem] tracking-[0.28em] uppercase text-gold-base mb-4">
            <span className="block w-7 h-px bg-gold-base" />
            Legal
          </div>

          <h1
            className="font-display font-black leading-[1.05] tracking-tight mb-3"
            style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
          >
            <span className="gold-text">{title}</span>
          </h1>

          <p className="text-text-muted text-sm md:text-[0.95rem] font-light mb-2">
            {subtitle}
          </p>
          <p className="text-[0.72rem] tracking-[0.14em] uppercase text-gold-dim">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* ── BODY ── */}
      {/* Sidebar stacks on top on mobile, moves to side on lg+ */}
      <div className="max-w-[1300px] mx-auto px-[5vw] py-12 md:py-20 flex flex-col lg:grid lg:grid-cols-[220px_1fr] lg:gap-20 lg:items-start gap-10">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-gold-base mb-4">
            Legal Pages
          </p>

          {/* Horizontal scroll on mobile, vertical list on desktop */}
          <ul className="list-none flex flex-row lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0">
            {legalNav.map((item) => {
              const isActive = item.href === currentHref;
              return (
                <li key={item.href} className="shrink-0 lg:shrink">
                  <Link
                    href={item.href}
                    className={[
                      "block px-4 py-2.5 text-sm no-underline rounded-[2px] lg:rounded-[0_2px_2px_0] transition-all duration-200 whitespace-nowrap",
                      "border-b-2 lg:border-b-0 lg:border-l-2",
                      isActive
                        ? "text-gold-bright border-gold-base bg-gold-base/[0.06] font-semibold"
                        : "text-text-muted border-transparent font-normal hover:text-gold-bright hover:border-gold-base/30",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact card — hidden on mobile to save space */}
          <div className="hidden lg:block mt-10 p-5 bg-bg-card border border-border rounded-[2px]">
            <p className="font-display font-bold text-[0.82rem] text-gold-bright mb-2">
              Have questions?
            </p>
            <p className="text-text-muted text-[0.8rem] leading-relaxed mb-4">
              Contact our team for any legal enquiries.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-4 py-2 border border-gold-dim text-gold-bright font-display font-semibold text-[0.72rem] tracking-[0.14em] uppercase no-underline rounded-[2px] transition-all duration-200 hover:bg-gold-base/10 hover:shadow-[0_0_20px_rgba(200,151,63,0.2)]"
            >
              Get in Touch
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-10 md:mb-12">
      <h2 className="font-display font-bold text-base md:text-[1.2rem] text-gold-bright mb-4 pb-2.5 border-b border-gold-base/15 tracking-wide">
        {title}
      </h2>
      {children}
    </div>
  );
}

export function Para({ children }: { children: ReactNode }) {
  return (
    <p className="text-text-muted text-sm md:text-[0.95rem] leading-[1.85] font-light mb-4">
      {children}
    </p>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="list-none mb-4 space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-text-muted text-sm md:text-[0.95rem] leading-[1.75] font-light"
        >
          <span className="text-gold-base text-[0.6rem] mt-[7px] shrink-0">
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
    <div className="p-4 md:p-5 px-5 md:px-6 bg-gold-base/5 border border-gold-base/20 border-l-[3px] border-l-gold-base rounded-[0_2px_2px_0] mb-6">
      <p className="text-gold-pale text-sm md:text-[0.9rem] leading-[1.75] font-light">
        {children}
      </p>
    </div>
  );
}
