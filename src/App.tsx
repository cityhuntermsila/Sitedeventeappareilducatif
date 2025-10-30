import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Specifications } from "./components/Specifications";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Products } from "./components/Products";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("principal");

  const renderPage = () => {
    switch (currentPage) {
      case "principal":
        return (
          <>
            <Hero />
            <Features />
            <Specifications />
            <Testimonials />
            <Pricing />
          </>
        );
      case "produits":
        return <Products />;
      case "apropos":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Specifications />
            <Testimonials />
            <Pricing />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
