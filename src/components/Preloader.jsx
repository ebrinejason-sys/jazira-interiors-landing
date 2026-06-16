import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { categories, customizerGroups, galleryImages, products } from "../data/siteData.js";

const heroImages = [
  "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=2200&q=88",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=620&q=85",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=520&q=85",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=620&q=85",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
];

const imageUrls = [
  ...heroImages,
  ...categories.map((item) => item.image),
  ...products.map((item) => item.image),
  ...Object.values(customizerGroups).map((item) => item.image),
  ...galleryImages.map((item) => item.image),
];

function loadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;
  });
}

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    let mounted = true;
    const uniqueImages = [...new Set(imageUrls)];
    const timeout = window.setTimeout(() => {
      if (mounted) {
        setProgress(100);
        setVisible(false);
      }
    }, 4500);

    const fontReady = document.fonts ? document.fonts.ready : Promise.resolve();
    let loaded = 0;

    Promise.all([
      fontReady,
      ...uniqueImages.map((src) =>
        loadImage(src).then(() => {
          loaded += 1;
          if (mounted) {
            setProgress(Math.round((loaded / uniqueImages.length) * 100));
          }
        }),
      ),
    ]).then(() => {
      window.setTimeout(() => {
        if (mounted) {
          window.clearTimeout(timeout);
          setProgress(100);
          setVisible(false);
        }
      }, 300);
    });

    return () => {
      mounted = false;
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="fixed inset-0 z-[100] grid place-items-center bg-ink px-6 text-white"
        >
          <div className="w-full max-w-sm text-center">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-bronze/55 bg-bronze/15 font-display text-4xl font-bold">
              J
            </div>
            <p className="mt-6 font-display text-4xl font-semibold">Jazira Interiors</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-white/45">
              Preparing showroom
            </p>
            <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/12">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full rounded-full bg-bronze"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
