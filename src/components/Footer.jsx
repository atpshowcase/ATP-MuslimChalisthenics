import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

function Footer() {
  const socialLinks = [
    { name: "Instagram", url: "#", icon: Instagram },
    { name: "Facebook", url: "#", icon: Facebook },
    { name: "Twitter", url: "#", icon: Twitter },
    { name: "YouTube", url: "#", icon: Youtube }
  ];

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Events", id: "events" },
    { name: "Trainers", id: "trainer" },
    { name: "Contact", id: "home" }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Top Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-5xl font-black text-[#F1CE06] mb-6 tracking-tighter">
              MUSCAL
            </h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Muslim Calisthenics Jakarta - Building strength, faith, and community through bodyweight mastery.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-1 w-16 bg-[#F1CE06]"></div>
              <span className="text-white/40 text-sm uppercase tracking-wider">
                Est. 2020
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-xl font-black text-white mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center gap-3 text-white/60 hover:text-[#F1CE06] transition-colors duration-300"
                  >
                    <span className="w-0 h-0.5 bg-[#F1CE06] group-hover:w-6 transition-all duration-300"></span>
                    <span className="text-lg font-medium">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-xl font-black text-white mb-6 uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="space-y-4 mb-8">
              <p className="text-white/60">
                <span className="text-[#F1CE06] font-bold">Email:</span><br />
                info@muscaljakarta.com
              </p>
              <p className="text-white/60">
                <span className="text-[#F1CE06] font-bold">Location:</span><br />
                Jakarta, Indonesia
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 border-2 border-white/20 flex items-center justify-center hover:border-[#F1CE06] hover:bg-[#F1CE06] transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#F1CE06] to-transparent mb-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white/40 text-sm"
          >
            © 2025 Muslim Calisthenics Jakarta. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-8 text-sm"
          >
            <a href="#" className="text-white/40 hover:text-[#F1CE06] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-[#F1CE06] transition-colors duration-300">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 text-[20vw] font-black text-white/5 leading-none pointer-events-none">
        MCJ
      </div>
    </footer>
  );
}

export default Footer;