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
      className="px-[5vw] py-16 md:py-20 relative border-t border-border border-b border-b-border"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,151,63,0.04), transparent)",
        }}
      />
      {/* Single col on mobile, 3 cols on md+ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
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
    <div className="reveal gold-border-card relative px-8 md:px-10 py-10 md:py-[50px] text-center overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(200,151,63,0.08)]">
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-gold-base), transparent)",
        }}
      />
      <span className="text-[1.6rem] md:text-[1.8rem] mb-3 md:mb-4 block">
        {icon}
      </span>
      <span className="block font-display font-black text-[2.6rem] md:text-[3.2rem] leading-none mb-2 gold-text">
        {number}
      </span>
      <span className="text-[0.75rem] md:text-[0.8rem] tracking-[0.18em] uppercase text-text-muted font-medium">
        {label}
      </span>
    </div>
  );
}
