import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Collections", "#collections"],
  ["Customize", "#customize"],
  ["Products", "#products"],
  ["Quote", "#quote"],
  ["Gallery", "#gallery"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 text-white backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#top" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-bronze/60 bg-bronze/20 font-display text-xl font-bold">
            J
          </span>
          <span>
            <span className="block font-display text-xl font-semibold leading-none">Jazira</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/58">Interiors</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} className="focus-ring rounded-full text-sm font-semibold text-white/78 transition hover:text-white" href={href}>
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/256700000000?text=Hello%20Jazira%20Interiors%2C%20I%20would%20like%20to%20request%20a%20furniture%20quote."
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-ivory"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/18 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-4 pb-5 lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl px-3 py-3 font-semibold text-white/82 hover:bg-white/8"
              >
                {label}
              </a>
            ))}
            <a
              href="https://wa.me/256700000000?text=Hello%20Jazira%20Interiors%2C%20I%20would%20like%20to%20request%20a%20furniture%20quote."
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-bronze px-5 py-3 font-bold text-white"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
