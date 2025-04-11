import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function WorkShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Champions League Highlights",
      description: "Dynamic player highlights with motion graphics",
      imageUrl: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 2,
      title: "Team Season Recap",
      description: "Season highlights with cinematic transitions",
      imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 3,
      title: "Player Spotlight Series",
      description: "Focus on star players with custom effects",
      imageUrl: "https://images.unsplash.com/photo-1624880357913-a8539298fc27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
    }
  ];

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577223625816-5333ee3f6c2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vdGJhbGwlMjBzdGFkaXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wide mb-6 text-white">
            My <span className="text-accent">Portfolio</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Check out some of my best football edit work showcasing dynamic visuals, creative effects, and captivating storytelling.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="group hover-trigger bg-surface rounded-xl overflow-hidden transition duration-300 hover:transform hover:scale-105 hover:shadow-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                  <div className="p-6 hover-target">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
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
            <span>View More on YouTube</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
