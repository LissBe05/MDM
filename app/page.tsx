import HeroCarousel from '@/components/HeroCarousel';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import ChatWidget from '@/components/ChatWidget';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MonEspaceButton from '@/components/MonEspaceButton';

export default function Home() {
  console.log("Landing page loaded");
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MonEspaceButton />
      <HeroCarousel />
      <FeaturesSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
      <ChatWidget />

      {/* Floating Presentation Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="/presentation"
          className="bg-gabon-gold hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        >
          <span>📊</span>
          <span>Voir la présentation</span>
        </a>
      </div>
    </div>
  );
}



