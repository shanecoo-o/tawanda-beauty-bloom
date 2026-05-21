import { motion } from "motion/react";

export function Marquee({
  items,
  className = "",
  reverse = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
}) {
  const row = [...items, ...items, ...items];
  return (
    <div className={`relative overflow-hidden py-8 select-none ${className}`}>
      <motion.div
        className="flex gap-16 whitespace-nowrap will-change-transform"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display italic text-[12vw] md:text-[9vw] leading-none text-foreground/[0.06] tracking-tight"
          >
            {t} <span className="text-gold/30 not-italic">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
