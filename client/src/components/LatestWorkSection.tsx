import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export default function LatestWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const featureItems: FeatureItem[] = [
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
    }
  ];

  return (
    <section 
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
            Latest <span className="text-accent">Work</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Check out my most recent football edit, showcasing my latest techniques and creative approach.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl mx-auto max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-[500px]"
              src="https://www.youtube.com/embed/videoseries?list=PLsAXDXMotrWHDv6U8Xw7AxQ7R3i5wHKjX" 
              title="Latest Football Edits by Itz_futeiz" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
        
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            {featureItems.map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-surface p-6 rounded-lg text-center transition hover:bg-surface/70"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <i className={`fas fa-${item.icon} text-accent text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
