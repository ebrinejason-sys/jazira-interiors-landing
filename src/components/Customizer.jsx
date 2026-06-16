import { AnimatePresence, motion } from "framer-motion";
import { Check, Palette, Ruler, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { customizerGroups } from "../data/siteData.js";
import SectionIntro from "./SectionIntro.jsx";

const defaultGroup = "beds";

function initialSelections(groupKey) {
  return Object.fromEntries(
    Object.entries(customizerGroups[groupKey].options).map(([key, values]) => [key, values[0]]),
  );
}

export default function Customizer() {
  const [active, setActive] = useState(defaultGroup);
  const [selections, setSelections] = useState(initialSelections(defaultGroup));
  const activeGroup = customizerGroups[active];

  const summary = useMemo(() => {
    const firstChoice = Object.values(selections)[0];
    return {
      product: activeGroup.product,
      feature: firstChoice,
      material: selections.material || selections.finish || "Custom finish",
      color: selections.color || selections.finish || "To be selected",
    };
  }, [activeGroup, selections]);

  const selectGroup = (groupKey) => {
    setActive(groupKey);
    setSelections(initialSelections(groupKey));
  };

  return (
    <section id="customize" className="bg-midnight py-24 text-white md:py-32">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Customization"
          title="Let customers shape their dream piece before they call."
          copy="This demo turns choices into a clear inquiry summary, ready for a future pricing engine, quote request database, and WhatsApp automation."
          tone="light"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[8px] border border-white/12 bg-white/[0.06] p-4 shadow-luxury md:p-6">
            <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
              {Object.entries(customizerGroups).map(([key, group]) => (
                <button
                  key={key}
                  onClick={() => selectGroup(key)}
                  className={`focus-ring shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${
                    active === key ? "bg-bronze text-white" : "bg-white/10 text-white/75 hover:bg-white/16"
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[0.8fr_1fr]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeGroup.image}
                  src={activeGroup.image}
                  alt={activeGroup.product}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="h-72 w-full rounded-[8px] object-cover xl:h-full"
                />
              </AnimatePresence>

              <div className="space-y-5">
                {Object.entries(activeGroup.options).map(([option, values]) => (
                  <div key={option} className="rounded-[8px] border border-white/10 bg-white/[0.05] p-4">
                    <div className="mb-3 flex items-center gap-2">
                      {option.includes("color") ? <Palette size={17} className="text-bronze" /> : option.includes("size") || option.includes("chairs") || option.includes("seaters") ? <Ruler size={17} className="text-bronze" /> : <Sparkles size={17} className="text-bronze" />}
                      <p className="text-sm font-bold capitalize text-white">{option}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {values.map((value) => {
                        const selected = selections[option] === value;
                        return (
                          <button
                            key={value}
                            onClick={() => setSelections((current) => ({ ...current, [option]: value }))}
                            className={`focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                              selected
                                ? "border-bronze bg-bronze text-white"
                                : "border-white/12 bg-white/8 text-white/76 hover:bg-white/14"
                            }`}
                          >
                            {selected && <Check size={15} />}
                            {value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[8px] bg-ivory p-6 text-ink shadow-luxury md:p-8"
          >
            <p className="eyebrow">Your custom design</p>
            <h3 className="mt-3 font-display text-4xl font-semibold">{summary.product}</h3>
            <div className="mt-7 space-y-3">
              {Object.entries(selections).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between gap-5 border-b border-ink/10 pb-3">
                  <span className="text-sm font-bold capitalize text-ink/58">{key}</span>
                  <span className="text-right font-semibold">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[8px] border border-bronze/28 bg-white p-5">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-clay">Estimated quote</p>
              <p className="mt-2 font-display text-3xl font-semibold">Contact for price</p>
              <p className="mt-3 text-sm leading-6 text-ink/64">
                Final pricing can later calculate from product type, material, size, delivery location, and deposit terms.
              </p>
            </div>
            <a
              href={`https://wa.me/256700000000?text=Hello%20Jazira%20Interiors%2C%20I%20want%20a%20quote%20for%20${encodeURIComponent(summary.product)}%20-%20${encodeURIComponent(summary.feature)}%2C%20${encodeURIComponent(summary.color)}%2C%20${encodeURIComponent(summary.material)}.`}
              className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-4 font-bold text-white transition hover:bg-moss"
            >
              Send Custom Inquiry
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
