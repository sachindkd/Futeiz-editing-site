import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function FeatureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features: Feature[] = [
    {
      id: 1,
      title: "Creative Effects",
      description: "Unique visual effects and transitions that make each edit stand out",
      icon: "magic"
    },
    {
      id: 2,
      title: "Perfect Sync",
      description: "Meticulously timed edits that sync perfectly with music beats",
      icon: "music"
    },
    {
      id: 3,
      title: "Cinematic Look",
      description: "Professional color grading and cinematic treatment for every clip",
      icon: "film"
    },
    {
      id: 4,
      title: "Custom Animations",
      description: "Bespoke animated elements that enhance storytelling and impact",
      icon: "hurricane"
    },
    {
      id: 5,
      title: "Sound Design",
      description: "Expertly crafted audio elements that elevate the viewing experience",
      icon: "volume-up"
    },
    {
      id: 6,
      title: "Motion Graphics",
      description: "High-quality text animations and graphic elements for professional finish",
      icon: "chart-line"
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 bg-primary/10"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wide mb-6 text-white">
            My <span className="text-accent">Features</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Discover the professional techniques and unique style elements that make my football edits stand out.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="bg-surface p-8 rounded-xl text-center transition hover:bg-surface/70 shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <i className={`fas fa-${feature.icon} text-accent text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="https://www.youtube.com/@itz_futiez" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-animated bg-accent hover:bg-accent/80 text-white font-semibold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
          >
            <i className="fab fa-youtube mr-2 text-xl"></i>
            <span>See Examples on YouTube</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}