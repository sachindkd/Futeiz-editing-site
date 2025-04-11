import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface DiscordFeature {
  id: number;
  text: string;
}

export default function DiscordSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const discordFeatures: DiscordFeature[] = [
    { id: 1, text: "Access to exclusive editing assets and resources" },
    { id: 2, text: "Community challenges and competitions" },
    { id: 3, text: "Feedback from experienced editors" },
    { id: 4, text: "Tutorials and editing tips" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-surface"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bebas tracking-wide mb-6 text-white">
              Join Our <span className="text-accent">Discord</span> Community
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Connect with fellow football edit enthusiasts, share your work, get feedback, and access exclusive resources
              to improve your editing skills.
            </p>
            <ul className="mb-8 space-y-4">
              {discordFeatures.map((feature, index) => (
                <motion.li 
                  key={feature.id}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <i className="fas fa-check text-accent text-xs"></i>
                  </div>
                  <span className="ml-3 text-gray-300">{feature.text}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.a 
              href="https://discord.com/invite/ZcGYMqkf7Z" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-animated bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-4 px-8 rounded-lg transition duration-300 inline-flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-discord mr-2 text-xl"></i>
              <span>Join Our Discord Server</span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#2F3136] rounded-xl overflow-hidden shadow-xl">
              <div className="bg-[#202225] px-4 py-3 flex items-center">
                <i className="fab fa-discord text-[#5865F2] mr-2"></i>
                <span className="font-medium">Itz_futeiz Community</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white font-bold">F</div>
                  <div className="ml-3">
                    <div className="font-semibold">Itz_futeiz</div>
                    <div className="text-xs text-gray-400">Server Owner • Online</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center px-3 py-2 bg-[#36393F] rounded">
                    <i className="fas fa-hashtag text-gray-400 mr-2"></i>
                    <span>welcome</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-[#36393F] rounded">
                    <i className="fas fa-hashtag text-gray-400 mr-2"></i>
                    <span>announcements</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-[#42464D] rounded">
                    <i className="fas fa-hashtag text-white mr-2"></i>
                    <span className="font-medium">editing-resources</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-[#36393F] rounded">
                    <i className="fas fa-hashtag text-gray-400 mr-2"></i>
                    <span>showcase</span>
                  </div>
                  <div className="flex items-center px-3 py-2 bg-[#36393F] rounded">
                    <i className="fas fa-hashtag text-gray-400 mr-2"></i>
                    <span>feedback</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 mb-4">Growing community</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
