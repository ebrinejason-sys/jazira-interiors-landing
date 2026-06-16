import { motion } from "framer-motion";

export default function SectionIntro({ eyebrow, title, copy, align = "center", tone = "dark" }) {
  const isLight = tone === "light";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`mx-auto max-w-3xl ${align === "left" ? "mx-0 text-left" : "text-center"}`}
    >
      <p className={`eyebrow ${isLight ? "text-bronze" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-4xl font-semibold leading-[1.02] md:text-6xl ${isLight ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {copy && <p className={`mt-5 text-base leading-8 md:text-lg ${isLight ? "text-white/68" : "text-ink/70"}`}>{copy}</p>}
    </motion.div>
  );
}
