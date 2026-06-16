import { motion } from "framer-motion";
import { MessageCircle, SlidersHorizontal } from "lucide-react";
import { products } from "../data/siteData.js";
import SectionIntro from "./SectionIntro.jsx";

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-mist py-24 md:py-32">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Featured products"
          title="Signature pieces ready for homes, offices, and hospitality spaces."
          copy="Explore refined furniture options, request a quote, or customize the details to match your interior."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[8px] bg-white shadow-soft"
            >
              <div className="relative overflow-hidden">
                <img src={product.image} alt={product.name} className="h-60 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72" />
                {product.customizable && (
                  <span className="absolute left-4 top-4 rounded-full bg-ink/82 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                    Customizable
                  </span>
                )}
              </div>
              <div className="p-6">
                <p className="text-sm font-bold text-clay">{product.category}</p>
                <h3 className="mt-2 font-display text-3xl font-semibold">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/65 md:min-h-16">{product.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-5">
                  <span className="font-bold text-ink">{product.startingPrice}</span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <a href="#customize" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-bold text-white transition hover:bg-moss">
                    <SlidersHorizontal size={16} /> Customize
                  </a>
                  <a
                    href={`https://wa.me/256700000000?text=Hello%20Jazira%20Interiors%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}.`}
                    className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-ink/12 px-4 py-3 text-sm font-bold text-ink transition hover:border-bronze hover:text-clay"
                  >
                    <MessageCircle size={16} /> Inquire
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
