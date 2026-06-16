import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-white">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-bronze/60 bg-bronze/18 font-display text-2xl font-bold">J</span>
              <div>
                <p className="font-display text-2xl font-semibold">Jazira Interiors</p>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">Premium furniture showroom</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              Custom furniture, home interiors, office pieces, and quote-ready digital showroom experiences for modern customers.
            </p>
          </div>

          <FooterColumn title="Navigate" links={["Collections", "Customize", "Products", "Quote", "Gallery"]} />
          <FooterColumn title="Categories" links={["Dining Tables", "Living Room Seats", "Beds", "Side Tables", "Office Furniture"]} />

          <div>
            <h3 className="font-bold">Contact</h3>
            <div className="mt-4 space-y-2 text-sm text-white/62">
              <p>Kampala, Uganda</p>
              <p>+256 700 000 000</p>
              <p>hello@jazirainteriors.com</p>
            </div>
            <a
              href="https://wa.me/256700000000?text=Hello%20Jazira%20Interiors."
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-bronze px-5 py-3 text-sm font-bold text-white"
            >
              <MessageCircle size={17} /> WhatsApp CTA
            </a>
            <div className="mt-5 flex gap-3">
              {["IG", "FB", "TT"].map((label) => (
                <a key={label} href="#" aria-label={`${label} social media placeholder`} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-white/14 text-xs font-black text-white/70 transition hover:border-bronze hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/42">
          Copyright {new Date().getFullYear()} Jazira Interiors. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link}>
            <a href="#collections" className="focus-ring rounded text-sm text-white/62 transition hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
