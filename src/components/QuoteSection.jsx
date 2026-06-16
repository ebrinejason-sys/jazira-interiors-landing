import { motion } from "framer-motion";
import { BadgeDollarSign, Banknote, CreditCard, MapPin, Smartphone } from "lucide-react";
import { useMemo, useState } from "react";
import { products } from "../data/siteData.js";
import SectionIntro from "./SectionIntro.jsx";

const payments = ["Mobile Money", "Bank transfer", "Cash on delivery", "Card payments", "Deposit + balance"];

export default function QuoteSection() {
  const [form, setForm] = useState({
    name: "Customer Name",
    phone: "+256 700 000 000",
    product: products[0].name,
    summary: "7-seater sofa, beige velvet, wide armrest",
    location: "Kampala",
    payment: payments[0],
  });

  const invoiceNumber = useMemo(() => `JAZ-${new Date().getFullYear()}-0142`, []);

  const update = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <section id="quote" className="bg-ivory py-24 md:py-32">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            align="left"
            eyebrow="Quote and billing"
            title="Turn interest into a clean, trackable inquiry."
            copy="The website can collect a customer’s preferred product, customization summary, delivery location, and payment preference before Jazira follows up."
          />

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[8px] bg-white p-5 shadow-luxury md:p-7"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-bold text-ink/70">Customer name</span>
                <input value={form.name} onChange={(event) => update("name", event.target.value)} className="focus-ring w-full rounded-[8px] border border-ink/12 bg-ivory px-4 py-3" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-bold text-ink/70">Phone / WhatsApp</span>
                <input value={form.phone} onChange={(event) => update("phone", event.target.value)} className="focus-ring w-full rounded-[8px] border border-ink/12 bg-ivory px-4 py-3" />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-bold text-ink/70">Product selected</span>
                <select value={form.product} onChange={(event) => update("product", event.target.value)} className="focus-ring w-full rounded-[8px] border border-ink/12 bg-ivory px-4 py-3">
                  {products.map((product) => (
                    <option key={product.id}>{product.name}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-bold text-ink/70">Customization summary</span>
                <textarea value={form.summary} onChange={(event) => update("summary", event.target.value)} rows="3" className="focus-ring w-full resize-none rounded-[8px] border border-ink/12 bg-ivory px-4 py-3" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-bold text-ink/70">Delivery location</span>
                <input value={form.location} onChange={(event) => update("location", event.target.value)} className="focus-ring w-full rounded-[8px] border border-ink/12 bg-ivory px-4 py-3" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-bold text-ink/70">Preferred payment</span>
                <select value={form.payment} onChange={(event) => update("payment", event.target.value)} className="focus-ring w-full rounded-[8px] border border-ink/12 bg-ivory px-4 py-3">
                  {payments.map((payment) => (
                    <option key={payment}>{payment}</option>
                  ))}
                </select>
              </label>
            </div>
            <a
              href={`https://wa.me/256700000000?text=Hello%20Jazira%20Interiors%2C%20please%20prepare%20a%20quote.%0AName%3A%20${encodeURIComponent(form.name)}%0AProduct%3A%20${encodeURIComponent(form.product)}%0ASummary%3A%20${encodeURIComponent(form.summary)}%0ALocation%3A%20${encodeURIComponent(form.location)}%0APayment%3A%20${encodeURIComponent(form.payment)}`}
              className="focus-ring mt-5 inline-flex w-full items-center justify-center rounded-full bg-bronze px-6 py-4 font-bold text-white transition hover:bg-clay"
            >
              Request Quote
            </a>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[8px] bg-midnight p-6 text-white shadow-luxury md:p-8"
          >
            <p className="eyebrow text-bronze">Future payment support</p>
            <div className="mt-6 grid gap-3">
              {[
                [Smartphone, "Mobile Money"],
                [Banknote, "Bank transfer"],
                [MapPin, "Cash on delivery"],
                [CreditCard, "Card payments"],
                [BadgeDollarSign, "Deposit payments"],
              ].map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.06] p-4">
                  <Icon size={20} className="text-bronze" />
                  <span className="font-semibold text-white/86">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-[8px] border border-ink/10 bg-white p-6 shadow-soft md:p-8"
          >
            <div className="flex flex-col justify-between gap-4 border-b border-ink/10 pb-6 sm:flex-row">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Mock quote preview</p>
                <h3 className="mt-2 font-display text-4xl font-semibold">Jazira Interiors</h3>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-bold">{invoiceNumber}</p>
                <p className="text-sm text-ink/58">Valid for 7 days</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <PreviewRow label="Customer" value={form.name} />
              <PreviewRow label="Phone" value={form.phone} />
              <PreviewRow label="Product" value={form.product} />
              <PreviewRow label="Location" value={form.location} />
              <div className="md:col-span-2">
                <PreviewRow label="Customization" value={form.summary} />
              </div>
            </div>
            <div className="mt-7 rounded-[8px] bg-mist p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold text-ink/62">Quote status</span>
                <span className="rounded-full bg-bronze px-4 py-2 text-sm font-bold text-white">Contact for price</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-ink/64">
                This preview can later become a downloadable invoice, dashboard lead, or payment request.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PreviewRow({ label, value }) {
  return (
    <div className="rounded-[8px] border border-ink/10 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">{label}</p>
      <p className="mt-2 font-semibold text-ink">{value}</p>
    </div>
  );
}
