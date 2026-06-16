import { motion } from "framer-motion";
import { galleryImages } from "../data/siteData.js";
import SectionIntro from "./SectionIntro.jsx";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ivory py-24 md:py-32">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Inspiration"
          title="A visual grid customers can imagine themselves inside."
          copy="Furniture sells faster when people can see the room, the mood, and the lifestyle around it."
        />

        <div className="mt-14 grid auto-rows-[260px] gap-4 md:grid-cols-4">
          {galleryImages.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.04 }}
              className={`group relative overflow-hidden rounded-[8px] shadow-soft ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 2 ? "md:col-span-2" : ""}`}
            >
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/76 to-transparent p-5 font-display text-2xl font-semibold text-white">
                {item.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
