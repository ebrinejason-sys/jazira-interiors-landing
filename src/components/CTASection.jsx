import { ArrowRight, MessageCircle, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24 text-white md:py-32">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90"
        alt="Elegant modern interior with custom furniture"
        className="absolute inset-0 h-full w-full object-cover opacity-28"
      />
      <div className="absolute inset-0 bg-midnight/72" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="section-shell relative z-10 max-w-4xl text-center"
      >
        <p className="eyebrow text-bronze">Bring Jazira online</p>
        <h2 className="mt-4 font-display text-5xl font-semibold leading-[1.02] md:text-7xl">
          Ready to bring Jazira Interiors online?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/76">
          A professional website can turn your furniture business into a digital showroom where customers discover, customize, and request quotes with ease.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#quote" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-6 py-4 font-bold text-white transition hover:bg-clay">
            <MonitorSmartphone size={18} /> Start Your Website
          </a>
          <a href="#customize" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white/16">
            Request a Demo <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/256700000000?text=Hello%2C%20I%20would%20like%20a%20demo%20for%20Jazira%20Interiors."
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 font-bold text-white transition hover:bg-white/10"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
