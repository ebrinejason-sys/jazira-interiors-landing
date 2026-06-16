import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/siteData.js";
import SectionIntro from "./SectionIntro.jsx";

export default function Testimonials() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Client stories"
          title="Trust signals for a premium local brand."
          copy="Real reviews can be added later from completed orders, WhatsApp conversations, or Google Business Profile feedback."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="rounded-[8px] bg-white p-7 shadow-soft"
            >
              <Quote className="text-bronze" size={30} />
              <p className="mt-5 text-lg leading-8 text-ink/76">"{testimonial.quote}"</p>
              <div className="mt-7 border-t border-ink/10 pt-5">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-ink/52">{testimonial.location}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
