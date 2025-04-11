import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start video playback when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          className="object-cover w-full h-full" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source 
            src="https://player.vimeo.com/external/370332125.sd.mp4?s=ce49e5ccdc9bdccfe72d0f98b0bae9584b93b5d6&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div 
          className="animate-float"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black font-montserrat uppercase tracking-tight mb-4 glow-text">
            <span className="text-accent">ItzF</span>uteiz
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-8">
            Transforming Football Moments into Visual Masterpieces
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <a 
            href="#work" 
            className="btn-animated bg-accent hover:bg-accent/80 text-white font-semibold py-3 px-8 rounded-full transition duration-300 flex items-center"
          >
            <span className="mr-2">Explore My Work</span>
            <i className="fas fa-arrow-right"></i>
          </a>
          <a 
            href="#connect" 
            className="btn-animated bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            Connect With Me
          </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <a href="#about" className="inline-block animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
