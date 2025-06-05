
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import MenuSection from '@/components/MenuSection';
import TableBooking from '@/components/TableBooking';
import SpecialOffers from '@/components/SpecialOffers';
import LocationMap from '@/components/LocationMap';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'booking', 'offers', 'location', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Navigation activeSection={activeSection} />
      <section id="home">
        <Hero />
      </section>
      <section id="menu">
        <MenuSection />
      </section>
      <section id="booking">
        <TableBooking />
      </section>
      <section id="offers">
        <SpecialOffers />
      </section>
      <section id="location">
        <LocationMap />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
