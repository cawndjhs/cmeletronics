import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => (
  <div id="inicio" className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Products />
    <Features />
    <About />
    <Footer />
  </div>
);

export default Index;
