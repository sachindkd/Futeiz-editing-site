import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SocialLink {
  id: number;
  platform: string;
  url: string;
  username: string;
  icon: string;
  bgClass: string;
  note?: string;
}

export default function ConnectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const socialLinks: SocialLink[] = [
    {
      id: 1,
      platform: "YouTube",
      url: "https://www.youtube.com/@itz_futiez?si=tU0MyMKQTDncdYVh",
      username: "@itz_futiez",
      icon: "fab fa-youtube",
      bgClass: "bg-gradient-to-br from-red-600 to-red-800"
    },
    {
      id: 2,
      platform: "Discord",
      url: "https://discord.com/invite/ZcGYMqkf7Z",
      username: "Join our community",
      icon: "fab fa-discord",
      bgClass: "bg-gradient-to-br from-[#5865F2] to-[#4752C4]"
    },
    {
      id: 3,
      platform: "Profile",
      url: "https://guns.lol/itz_futeiz",
      username: "guns.lol/itz_futeiz",
      icon: "fas fa-link",
      bgClass: "bg-gradient-to-br from-gray-700 to-gray-900",
      note: "(Best viewed on mobile)"
    }
  ];

  return (
    <section 
      id="connect" 
      ref={sectionRef}
      className="py-20 bg-primary/10"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bebas tracking-wide mb-6 text-white">
            Connect <span className="text-accent">With Me</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-300">
            Follow me on social media to see my latest work and connect with my community.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a 
              key={social.id}
              href={social.url}
              target="_blank" 
              rel="noopener noreferrer"
              className={`social-icon ${social.bgClass} p-6 rounded-xl text-center transition duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
              whileHover={{ 
                y: -5,
                scale: 1.05,
                transition: { type: "spring", stiffness: 400 }
              }}
            >
              <i className={`${social.icon} text-4xl mb-4`}></i>
              <h3 className="text-xl font-bold mb-2">{social.platform}</h3>
              <p className="text-sm text-gray-200">{social.username}</p>
              <div className="mt-4 text-sm font-medium">
                {social.note ? (
                  <span className="italic text-xs">{social.note}</span>
                ) : (
                  social.platform === "YouTube" ? "Subscribe Now" : "Join Server"
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
