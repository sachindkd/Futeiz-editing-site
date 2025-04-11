import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-primary/10"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent opacity-20 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyJTIwZWRpdGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
                alt="Football editing workspace" 
                className="relative z-10 rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-auto" 
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bebas tracking-wide mb-6 text-white">
              <span className="text-accent">About</span> Me
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              I'm a passionate football edit creator who transforms ordinary match footage into extraordinary visual experiences. 
              With a keen eye for detail and a unique creative style, I specialize in creating dynamic football edits that 
              capture the emotion and intensity of the beautiful game.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Through my Discord community, I collaborate with fellow editors, share resources, and provide assets to help 
              others develop their skills and create stunning football content.
            </p>
            
            <div className="flex items-center gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-4xl font-bold text-accent mb-1">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-accent mb-1">200+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </motion.div>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-4xl font-bold text-accent mb-1">1K+</div>
                <div className="text-sm text-gray-400">Community Members</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
