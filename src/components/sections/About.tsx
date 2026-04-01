import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="px-[5vw] py-20 md:py-[120px]"
      style={{
        background:
          "linear-gradient(180deg, var(--color-bg-void) 0%, var(--color-bg-deep) 50%, var(--color-bg-void) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Image */}
        <div className="reveal relative">
          <Image
            src="/images/aboutus.png"
            alt="About Technyon"
            width={600}
            height={500}
            className="w-full h-auto rounded-sm block"
            style={{ filter: "saturate(0.7) brightness(0.85)" }}
          />
          <div className="absolute inset-0 rounded-sm pointer-events-none bg-gradient-to-br from-gold-base/15 to-transparent" />
          {/* Corner accents — smaller on mobile */}
          <div className="absolute top-[-10px] right-[-10px] md:top-[-16px] md:right-[-16px] w-16 h-16 md:w-[120px] md:h-[120px] border-t-2 border-r-2 border-gold-base rounded-[0_4px_0_0]" />
          <div className="absolute bottom-[-10px] left-[-10px] md:bottom-[-16px] md:left-[-16px] w-16 h-16 md:w-[120px] md:h-[120px] border-b-2 border-l-2 border-gold-base rounded-[0_0_0_4px]" />
        </div>

        {/* Text */}
        <div className="reveal">
          <div className="section-label">Our Story</div>

          <h2
            className="font-display font-extrabold leading-[1.1] mb-6"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Technology Should Work{" "}
            <span className="text-gold-bright">For You</span>
          </h2>

          <p className="text-text-muted leading-[1.85] text-[0.98rem] font-light mb-5">
            At TECHNYON, we believe great technology shouldn&apos;t require
            compromise. We curate a refined selection of top-quality electronics
            that fit seamlessly into modern living — from intelligent kitchen
            systems to cutting-edge entertainment and everyday gadgets.
          </p>

          <p className="text-text-muted leading-[1.85] text-[0.98rem] font-light mb-8">
            Every product earns its place through rigorous evaluation of
            performance, reliability, and value. We connect you to trusted
            Amazon listings today — and our own direct platform is coming, built
            to offer exclusive benefits and a seamless experience.
          </p>

          {/* Pull quote */}
          <div className="p-5 md:p-6 bg-bg-card border-l-2 border-gold-base rounded-[0_2px_2px_0]">
            <p className="text-gold-pale italic text-sm md:text-[0.95rem] leading-[1.7] font-light">
              &ldquo;We choose only what we&apos;d use ourselves — quality that
              speaks before the price tag.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
