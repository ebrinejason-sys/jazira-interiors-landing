import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, MessageCircle, MousePointerClick, Sparkles } from "lucide-react";
import { showroomJourney, showroomStats } from "../data/siteData.js";

export default function ShowroomValue() {
  return (
    <section className="relative bg-ink py-20 text-white md:py-28">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            <p className="eyebrow text-bronze">The business case</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] sm:text-5xl md:text-6xl">
              A website that makes Jazira look established before the first message.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              This is more than a catalogue. It gives every advert, referral, and WhatsApp conversation a premium destination where customers can see the quality, understand the options, and ask for exactly what they want.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {showroomStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                  className="rounded-[8px] border border-white/10 bg-white/[0.06] p-5"
                >
                  <p className="font-display text-4xl font-semibold text-bronze">{stat.value}</p>
                  <p className="mt-2 font-bold text-white">{stat.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/58">{stat.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[8px] border border-white/10 bg-ivory p-4 text-ink shadow-luxury sm:p-5"
          >
            <div className="overflow-hidden rounded-[8px] bg-white">
              <div className="relative h-56 overflow-hidden sm:h-72">
                <img
                  src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=88"
                  alt="Premium Jazira furniture room presentation"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-bronze">Customer view</p>
                  <p className="mt-1 font-display text-3xl font-semibold">Luxury living room set</p>
                </div>
              </div>

              <div className="grid gap-4 p-5 md:grid-cols-[1fr_0.9fr]">
                <div className="space-y-3">
                  {showroomJourney.map((step, index) => (
                    <div key={step} className="flex gap-3 rounded-[8px] bg-mist p-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm font-semibold leading-6 text-ink/72">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[8px] border border-ink/10 bg-ivory p-4">
                  <div className="flex items-center gap-2 text-clay">
                    <MousePointerClick size={18} />
                    <span className="text-sm font-bold uppercase tracking-[0.12em]">Inquiry ready</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    <PreviewItem icon={Sparkles} label="Product" value="Royal Comfort Sofa" />
                    <PreviewItem icon={BadgeCheck} label="Finish" value="Beige velvet, 7-seater" />
                    <PreviewItem icon={MessageCircle} label="Action" value="Send to WhatsApp" />
                  </div>
                  <a
                    href="#quote"
                    className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bronze px-5 py-3 text-sm font-bold text-white transition hover:bg-clay"
                  >
                    See quote flow <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PreviewItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-[8px] bg-white p-3">
      <Icon size={17} className="shrink-0 text-bronze" />
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/42">{label}</p>
        <p className="font-semibold text-ink">{value}</p>
      </div>
    </div>
  );
}
