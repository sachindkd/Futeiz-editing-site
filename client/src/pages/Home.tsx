import { useEffect, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeatureSection from '@/components/FeatureSection';
import DiscordSection from '@/components/DiscordSection';
import ConnectSection from '@/components/ConnectSection';
import Footer from '@/components/Footer';

export default function Home() {
  // Reference for all reveal sections
  const revealSections = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Initialize sections to be revealed on scroll
    revealSections.current = Array.from(document.querySelectorAll('.reveal-section'));
    
    // Check for sections in view and reveal them
    const checkReveal = () => {
      const triggerBottom = window.innerHeight * 0.8;
      
      revealSections.current.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < triggerBottom) {
          section.classList.add('revealed');
        }
      });
    };
    
    // Add event listeners
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('resize', checkReveal);
    
    // Initial check
    checkReveal();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('resize', checkReveal);
    };
  }, []);
  
  return (
    <div className="bg-background text-white font-inter custom-scrollbar">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <DiscordSection />
      <ConnectSection />
      <Footer />
    </div>
  );
}
