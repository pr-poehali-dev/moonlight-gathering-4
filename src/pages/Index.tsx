import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Services from "@/components/Services";
import Promo from "@/components/Promo";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Services />
      <Promo />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
