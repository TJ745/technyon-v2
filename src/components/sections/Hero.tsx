// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Hero() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const ringRef = useRef<HTMLDivElement>(null);

//   /* ── Cursor ── */
//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const ring = ringRef.current;
//     if (!cursor || !ring) return;

//     let mx = 0,
//       my = 0,
//       rx = 0,
//       ry = 0,
//       raf = 0;

//     const onMove = (e: MouseEvent) => {
//       mx = e.clientX;
//       my = e.clientY;
//     };

//     const animate = () => {
//       cursor.style.left = mx + "px";
//       cursor.style.top = my + "px";
//       rx += (mx - rx) * 0.12;
//       ry += (my - ry) * 0.12;
//       ring.style.left = rx + "px";
//       ring.style.top = ry + "px";
//       raf = requestAnimationFrame(animate);
//     };

//     const onEnter = () => {
//       cursor.classList.add("hovered");
//       ring.classList.add("hovered");
//     };
//     const onLeave = () => {
//       cursor.classList.remove("hovered");
//       ring.classList.remove("hovered");
//     };

//     document.addEventListener("mousemove", onMove);
//     document.querySelectorAll("a, button, input, textarea").forEach((el) => {
//       el.addEventListener("mouseenter", onEnter);
//       el.addEventListener("mouseleave", onLeave);
//     });

//     animate();
//     return () => {
//       cancelAnimationFrame(raf);
//       document.removeEventListener("mousemove", onMove);
//     };
//   }, []);

//   /* ── Canvas particles ── */
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d")!;

//     let W = 0,
//       H = 0,
//       raf = 0;

//     interface P {
//       x: number;
//       y: number;
//       r: number;
//       vx: number;
//       vy: number;
//       alpha: number;
//       gold: boolean;
//       reset(): void;
//       update(): void;
//       draw(): void;
//     }

//     const makeParticle = (): P => ({
//       x: 0,
//       y: 0,
//       r: 0,
//       vx: 0,
//       vy: 0,
//       alpha: 0,
//       gold: false,
//       reset() {
//         this.x = Math.random() * W;
//         this.y = Math.random() * H;
//         this.r = Math.random() * 1.5 + 0.3;
//         this.vx = (Math.random() - 0.5) * 0.2;
//         this.vy = (Math.random() - 0.5) * 0.2;
//         this.alpha = Math.random() * 0.6 + 0.1;
//         this.gold = Math.random() > 0.65;
//       },
//       update() {
//         this.x += this.vx;
//         this.y += this.vy;
//         if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
//       },
//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//         ctx.fillStyle = this.gold
//           ? `rgba(200,151,63,${this.alpha})`
//           : `rgba(100,140,200,${this.alpha * 0.4})`;
//         ctx.fill();
//       },
//     });

//     const resize = () => {
//       W = canvas.width = window.innerWidth;
//       H = canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const particles: P[] = Array.from({ length: 160 }, () => {
//       const p = makeParticle();
//       p.reset();
//       return p;
//     });

//     const drawConnections = () => {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const d = Math.sqrt(dx * dx + dy * dy);
//           if (d < 120) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.strokeStyle = `rgba(200,151,63,${(1 - d / 120) * 0.12})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     const loop = () => {
//       ctx.clearRect(0, 0, W, H);
//       drawConnections();
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });
//       raf = requestAnimationFrame(loop);
//     };
//     loop();

//     return () => {
//       cancelAnimationFrame(raf);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   /* ── Reveal observer ── */
//   useEffect(() => {
//     const els = document.querySelectorAll(".reveal");
//     const obs = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e, i) => {
//           if (e.isIntersecting)
//             setTimeout(() => e.target.classList.add("visible"), i * 80);
//         });
//       },
//       { threshold: 0.1 },
//     );
//     els.forEach((el) => obs.observe(el));
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Canvas background */}
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "fixed",
//           inset: 0,
//           zIndex: 0,
//           pointerEvents: "none",
//           opacity: 0.45,
//         }}
//       />

//       {/* Custom cursor */}
//       <div ref={cursorRef} className="cursor-dot" />
//       <div ref={ringRef} className="cursor-ring" />

//       {/* Hero section */}
//       <section
//         id="home"
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           padding: "120px 5vw 80px",
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
//               linear-gradient(rgba(200,151,63,0.04) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(200,151,63,0.04) 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//             maskImage:
//               "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
//             pointerEvents: "none",
//           }}
//         />

//         <div
//           style={{
//             maxWidth: "1300px",
//             margin: "0 auto",
//             width: "100%",
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "6rem",
//             alignItems: "center",
//           }}
//         >
//           {/* Left */}
//           <div className="reveal">
//             {/* Tag */}
//             <div
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 fontSize: "0.72rem",
//                 letterSpacing: "0.26em",
//                 textTransform: "uppercase",
//                 color: "var(--color-gold-base)",
//                 border: "1px solid rgba(200,151,63,0.18)",
//                 padding: "7px 16px",
//                 borderRadius: "2px",
//                 marginBottom: "2rem",
//                 background: "rgba(200,151,63,0.05)",
//               }}
//             >
//               <span
//                 style={{
//                   width: "5px",
//                   height: "5px",
//                   background: "var(--color-gold-bright)",
//                   borderRadius: "50%",
//                   animation: "pulse-dot 1.8s infinite",
//                   display: "inline-block",
//                   flexShrink: 0,
//                 }}
//               />
//               London, United Kingdom · Est. 2024
//             </div>

//             {/* Headline */}
//             <h1
//               style={{
//                 fontFamily: "var(--font-display)",
//                 fontSize: "clamp(2.8rem, 5vw, 5rem)",
//                 fontWeight: 900,
//                 lineHeight: 1.0,
//                 letterSpacing: "-0.02em",
//                 marginBottom: "1.5rem",
//               }}
//             >
//               <span className="gold-text" style={{ display: "block" }}>
//                 Precision Tech.
//               </span>
//               <span
//                 style={{ display: "block", color: "var(--color-text-white)" }}
//               >
//                 Curated for
//               </span>
//               <span
//                 style={{ display: "block", color: "var(--color-text-white)" }}
//               >
//                 Modern Life.
//               </span>
//             </h1>

//             {/* Sub */}
//             <p
//               style={{
//                 color: "var(--color-text-muted)",
//                 fontSize: "1rem",
//                 lineHeight: 1.75,
//                 maxWidth: "480px",
//                 marginBottom: "2.5rem",
//                 fontWeight: 300,
//               }}
//             >
//               We source only what excels — premium electronics and smart
//               appliances, rigorously selected for performance, reliability, and
//               lasting value. Your trusted gateway to intelligent living.
//             </p>

//             {/* Actions */}
//             <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
//               <Link href="#products" className="btn-primary">
//                 Explore Products
//               </Link>
//               <a
//                 href="https://www.amazon.co.uk/s?me=A161RUNEUG288T&marketplaceID=A1F83G8C2ARO7P"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-secondary"
//               >
//                 Shop on Amazon
//               </a>
//             </div>
//           </div>

//           {/* Right – floating image */}
//           <div
//             className="reveal"
//             style={{ display: "flex", justifyContent: "center" }}
//           >
//             <div
//               style={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: "520px",
//                 animation: "float 5s ease-in-out infinite",
//               }}
//             >
//               {/* Gold border frame */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: "-2px",
//                   borderRadius: "6px",
//                   background:
//                     "linear-gradient(135deg, #C8973F, transparent, #7A5A20)",
//                   zIndex: -1,
//                   opacity: 0.5,
//                 }}
//               />
//               <Image
//                 src=""
//                 alt="Technyon Products"
//                 width={828}
//                 height={600}
//                 priority
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   borderRadius: "4px",
//                   filter: "drop-shadow(0 20px 60px rgba(200,151,63,0.2))",
//                   display: "block",
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: "36px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "8px",
//             color: "var(--color-text-muted)",
//             fontSize: "0.7rem",
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//           }}
//         >
//           <span>Scroll</span>
//           <div
//             style={{
//               width: "1px",
//               height: "50px",
//               background:
//                 "linear-gradient(to bottom, var(--color-gold-base), transparent)",
//               animation: "scroll-line 2s ease-in-out infinite",
//             }}
//           />
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Canvas particles ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = 0,
      H = 0,
      raf = 0;

    interface P {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      alpha: number;
      gold: boolean;
      reset(): void;
      update(): void;
      draw(): void;
    }

    const makeParticle = (): P => ({
      x: 0,
      y: 0,
      r: 0,
      vx: 0,
      vy: 0,
      alpha: 0,
      gold: false,
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.5 + 0.3;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.alpha = Math.random() * 0.6 + 0.1;
        this.gold = Math.random() > 0.65;
      },
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      },
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.gold
          ? `rgba(200,151,63,${this.alpha})`
          : `rgba(100,140,200,${this.alpha * 0.4})`;
        ctx.fill();
      },
    });

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: P[] = Array.from({ length: 160 }, () => {
      const p = makeParticle();
      p.reset();
      return p;
    });

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(200,151,63,${(1 - d / 120) * 0.12})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      drawConnections();
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ── Reveal observer ── */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting)
            setTimeout(() => e.target.classList.add("visible"), i * 80);
        });
      },
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.45,
        }}
      />

      {/* Hero section */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 5vw 80px",
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
              linear-gradient(rgba(200,151,63,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,151,63,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div className="reveal">
            {/* Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.72rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--color-gold-base)",
                border: "1px solid rgba(200,151,63,0.18)",
                padding: "7px 16px",
                borderRadius: "2px",
                marginBottom: "2rem",
                background: "rgba(200,151,63,0.05)",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  background: "var(--color-gold-bright)",
                  borderRadius: "50%",
                  animation: "pulse-dot 1.8s infinite",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              London, United Kingdom · Est. 2024
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              <span className="gold-text" style={{ display: "block" }}>
                Precision Tech.
              </span>
              <span
                style={{ display: "block", color: "var(--color-text-white)" }}
              >
                Curated for
              </span>
              <span
                style={{ display: "block", color: "var(--color-text-white)" }}
              >
                Modern Life.
              </span>
            </h1>

            {/* Sub */}
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "1rem",
                lineHeight: 1.75,
                maxWidth: "480px",
                marginBottom: "2.5rem",
                fontWeight: 300,
              }}
            >
              We source only what excels — premium electronics and smart
              appliances, rigorously selected for performance, reliability, and
              lasting value. Your trusted gateway to intelligent living.
            </p>

            {/* Actions */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="#products" className="btn-primary">
                Explore Products
              </Link>
              <a
                href="https://www.amazon.co.uk/s?me=A161RUNEUG288T&marketplaceID=A1F83G8C2ARO7P"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Shop on Amazon
              </a>
            </div>
          </div>

          {/* Right – floating image */}
          <div
            className="reveal"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "520px",
                animation: "float 5s ease-in-out infinite",
              }}
            >
              {/* Gold border frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "-2px",
                  borderRadius: "6px",
                  background:
                    "linear-gradient(135deg, #C8973F, transparent, #7A5A20)",
                  zIndex: -1,
                  opacity: 0.5,
                }}
              />
              <Image
                src=""
                alt="Technyon Products"
                width={828}
                height={600}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  filter: "drop-shadow(0 20px 60px rgba(200,151,63,0.2))",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "var(--color-text-muted)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          <span>Scroll</span>
          <div
            style={{
              width: "1px",
              height: "50px",
              background:
                "linear-gradient(to bottom, var(--color-gold-base), transparent)",
              animation: "scroll-line 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>
    </>
  );
}
