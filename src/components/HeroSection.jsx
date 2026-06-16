import { ArrowRight, Armchair, BadgeCheck, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const floatingFurniture = [
  {
    label: "Custom sofa",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=620&q=85",
    className: "right-[4%] top-[24%] hidden w-48 md:block md:w-64 xl:w-72",
    rotate: -4,
    speed: [0, -70],
  },
  {
    label: "Dining chair",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=520&q=85",
    className: "right-[20%] bottom-[10%] hidden w-36 lg:block md:w-56",
    rotate: 5,
    speed: [0, 80],
  },
  {
    label: "Bedroom detail",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=620&q=85",
    className: "left-[6%] bottom-[6%] hidden w-52 lg:block lg:w-72",
    rotate: 3,
    speed: [0, 52],
  },
];

function FloatingPiece({ item, progress }) {
  const y = useTransform(progress, [0, 1], item.speed);
  const scale = useTransform(progress, [0, 1], [1, 1.06]);

  return (
    <motion.figure
      style={{ y, scale, rotate: item.rotate }}
      className={`absolute overflow-hidden rounded-[2rem] border border-white/20 bg-white/12 shadow-2xl backdrop-blur-md ${item.className}`}
    >
      <img src={item.image} alt={item.label} className="aspect-[4/3] h-full w-full object-cover" />
    </motion.figure>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -48]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-midnight pt-20 text-white">
      <motion.img
        style={{ y: imageY }}
        src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=2200&q=88"
        alt="Premium living room interior with elegant furniture"
        className="absolute inset-0 h-[112%] w-full object-cover opacity-[0.42]"
      />
      <div className="grain-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/72 to-ink/48" />

      {floatingFurniture.map((item) => (
        <FloatingPiece key={item.label} item={item} progress={scrollYProgress} />
      ))}

      <div className="section-shell relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-10 sm:py-14 lg:py-16">
        <motion.div style={{ y: textY }} className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-bronze"
          >
            Premium Ugandan furniture showroom
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-normal sm:text-6xl md:text-8xl lg:text-9xl"
          >
            Jazira Interiors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-2xl text-xl font-semibold leading-tight text-white sm:text-2xl md:text-4xl"
          >
            Transform your space with furniture made for your lifestyle.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base md:text-lg md:leading-8"
          >
            Explore premium dining sets, living room seats, beds, chairs, side tables, and custom interior pieces designed to bring comfort, beauty, and personality into your home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-6 py-4 font-bold text-white shadow-luxury transition hover:bg-clay" href="#collections">
              Explore Collections <ArrowRight size={18} />
            </a>
            <a className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/38 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/18" href="#customize">
              <Sparkles size={18} /> Customize Your Design
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 hidden max-w-2xl grid-cols-1 gap-3 sm:grid sm:grid-cols-3"
          >
            {["Bespoke furniture", "Custom finishes", "Flexible payment"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-full border border-white/16 bg-white/10 px-4 py-3 backdrop-blur-md">
                {item === "Bespoke furniture" ? <Armchair size={18} className="text-bronze" /> : <BadgeCheck size={18} className="text-bronze" />}
                <span className="text-sm font-bold text-white/88">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
