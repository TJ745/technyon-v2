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
      className="px-[5vw] py-20 md:py-[120px] bg-bg-deep border-t border-border"
    >
      {/* Header */}
      <div className="reveal max-w-[1300px] mx-auto mb-10 md:mb-16 text-center">
        <div className="section-label justify-center">Client Reviews</div>
        <h2
          className="font-display font-extrabold leading-[1.1]"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
        >
          Trusted by <span className="text-gold-bright">Discerning</span>{" "}
          Customers
        </h2>
      </div>

      {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2px]">
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
    <div className="reveal gold-border-card p-8 md:p-10 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(200,151,63,0.08)]">
      <span className="block font-display text-[3.5rem] md:text-[4rem] leading-none text-gold-base/40 mb-3">
        &ldquo;
      </span>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-gold-bright text-sm">
            ★
          </span>
        ))}
      </div>
      <p className="text-text-muted text-sm md:text-[0.95rem] leading-[1.8] font-light mb-7">
        {text}
      </p>
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 md:w-[42px] md:h-[42px] rounded-full bg-gradient-to-br from-gold-dim to-gold-base flex items-center justify-center font-display font-bold text-sm text-bg-void shrink-0 border border-gold-dim">
          {initials}
        </div>
        <div>
          <div className="font-display font-semibold text-sm text-text-white mb-0.5">
            {name}
          </div>
          <div className="text-xs text-text-muted tracking-[0.08em]">{loc}</div>
        </div>
      </div>
    </div>
  );
}
