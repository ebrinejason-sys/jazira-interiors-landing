import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CategoriesSection from "./components/CategoriesSection.jsx";
import Customizer from "./components/Customizer.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import QuoteSection from "./components/QuoteSection.jsx";
import BusinessBenefits from "./components/BusinessBenefits.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ivory text-ink">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <Customizer />
      <FeaturedProducts />
      <QuoteSection />
      <BusinessBenefits />
      <Gallery />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
