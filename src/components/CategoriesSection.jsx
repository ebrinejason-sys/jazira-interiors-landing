import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/siteData.js";
import SectionIntro from "./SectionIntro.jsx";

export default function CategoriesSection() {
  return (
    <section id="collections" className="bg-ivory py-24 md:py-32">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Collections"
          title="Furniture families presented like a curated showroom."
          copy="Browse by room, lifestyle, and finish, then move naturally from inspiration to a personal quote."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.04 }}
              className={`group relative overflow-hidden rounded-[8px] bg-white shadow-soft ${
                index === 0 || index === 6 ? "lg:col-span-2" : ""
              }`}
            >
              <img src={category.image} alt={category.name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <h3 className="font-display text-3xl font-semibold">{category.name}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">{category.description}</p>
                  </div>
                  <a
                    href="#products"
                    aria-label={`View ${category.name} designs`}
                    className="focus-ring grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-ink transition group-hover:bg-bronze group-hover:text-white"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
