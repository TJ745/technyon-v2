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

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e, i) => {
          if (e.isIntersecting)
            setTimeout(() => e.target.classList.add("visible"), i * 80);
        }),
      { threshold: 0.1 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none opacity-45"
      />

      {/* Hero */}
      <section
        id="home"
        className=" flex items-center pt-32 pb-20 px-[5vw] relative overflow-hidden"
      >
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200,151,63,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,151,63,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* On mobile: single column, image first. On desktop: two columns side by side */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Image — shows first on mobile via order */}
          <div className="reveal flex justify-center order-first md:order-last">
            <div
              className="relative w-full max-w-[440px] md:max-w-[520px]"
              style={{ animation: "float 5s ease-in-out infinite" }}
            >
              <div
                className="absolute -inset-0.5 rounded-md z-[-1] opacity-50"
                style={{
                  background:
                    "linear-gradient(135deg, #C8973F, transparent, #7A5A20)",
                }}
              />
              <Image
                src="/images/hero.png"
                alt="Technyon Products"
                width={828}
                height={600}
                priority
                className="w-full h-auto rounded-sm block"
                style={{
                  filter: "drop-shadow(0 20px 60px rgba(200,151,63,0.2))",
                }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="reveal order-last md:order-first">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 text-[0.72rem] tracking-[0.26em] uppercase text-gold-base border border-border px-4 py-1.5 rounded-xs mb-6 md:mb-8 bg-gold-base/5">
              <span
                className="inline-block w-1.5 h-1.5 bg-gold-bright rounded-full shrink-0"
                style={{ animation: "pulse-dot 1.8s infinite" }}
              />
              London, United Kingdom · Est. 2024
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black leading-none tracking-tight mb-5 md:mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
            >
              <span className="block gold-text">Precision Tech.</span>
              <span className="block text-text-white">Curated for</span>
              <span className="block text-text-white">Modern Life.</span>
            </h1>

            {/* Sub */}
            <p className="text-text-muted text-base leading-[1.75] max-w-[480px] mb-8 md:mb-10 font-light">
              We source only what excels — premium electronics and smart
              appliances, rigorously selected for performance, reliability, and
              lasting value. Your trusted gateway to intelligent living.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 md:gap-4">
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
        </div>

        {/* Scroll indicator — hide on mobile */}
        <div className="hidden md:flex absolute bottom-9 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-text-muted text-[0.7rem] tracking-[0.2em] uppercase">
          <span>Scroll</span>
          <div
            className="w-px h-[50px] bg-gradient-to-b from-gold-base to-transparent"
            style={{ animation: "scroll-line 2s ease-in-out infinite" }}
          />
        </div>
      </section>
    </>
  );
}
