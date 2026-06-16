import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/256700000000?text=Hello%20Jazira%20Interiors%2C%20I%20would%20like%20to%20request%20a%20furniture%20quote."
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="focus-ring fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-bronze text-white shadow-luxury transition hover:bg-clay sm:bottom-6 sm:right-6 sm:w-auto sm:px-5"
      aria-label="Chat with Jazira Interiors on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="ml-2 hidden text-sm font-bold sm:inline">WhatsApp</span>
    </motion.a>
  );
}
