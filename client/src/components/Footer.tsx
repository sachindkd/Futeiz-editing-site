import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <motion.h2 
              className="text-3xl font-montserrat font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent">ItzF</span>uteiz
            </motion.h2>
            <p className="text-gray-400 mt-2">Football Edit Creator</p>
          </div>
          
          <div className="flex gap-6">
            <motion.a 
              href="https://www.youtube.com/@itz_futiez?si=tU0MyMKQTDncdYVh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-accent transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -3 }}
            >
              <i className="fab fa-youtube text-xl"></i>
            </motion.a>
            <motion.a 
              href="https://discord.com/invite/ZcGYMqkf7Z" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-accent transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -3 }}
            >
              <i className="fab fa-discord text-xl"></i>
            </motion.a>
            <motion.a 
              href="https://guns.lol/itz_futeiz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-accent transition duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -3 }}
            >
              <i className="fas fa-link text-xl"></i>
            </motion.a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Itz_futeiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
