import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { benefits } from "../data/siteData.js";
import SectionIntro from "./SectionIntro.jsx";

export default function BusinessBenefits() {
  return (
    <section className="bg-midnight py-24 text-white md:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionIntro
            align="left"
            eyebrow="The Jazira standard"
            title="Designed for comfort, trust, and lasting beauty."
            copy="Every piece is presented with a clear path from inspiration to customization, quote request, delivery planning, and after-sale confidence."
            tone="light"
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="flex gap-3 rounded-[8px] border border-white/10 bg-white/[0.06] p-4"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-bronze" />
                <span className="font-semibold leading-6 text-white/82">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
