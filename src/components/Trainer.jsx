import React from "react";
import { motion } from "framer-motion";
import { profile_idam, profile_adam, profile_reza, profile_raihan } from "../assets/muscal";

const trainers = [
  {
    id: 1,
    image: profile_idam,
    name: "Idam",
    specialty: "Strength & Power",
  },
  {
    id: 2,
    image: profile_raihan,
    name: "Raihan",
    specialty: "Mobility & Flow",
  },
  {
    id: 3,
    image: profile_adam,
    name: "Adam",
    specialty: "Skills & Balance",
  },
  {
    id: 4,
    image: profile_reza,
    name: "Reza",
    specialty: "Endurance & Core",
  },
];

function Trainer() {
  return (
    <section id="trainer" className="relative bg-black py-32 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border-4 border-[#F1CE06] transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-4 border-[#F1CE06] transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 w-16 bg-[#F1CE06]"></div>
            <span className="text-[#F1CE06] text-sm font-bold uppercase tracking-widest">
              Meet The Team
            </span>
            <div className="h-0.5 w-16 bg-[#F1CE06]"></div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            <span className="text-[#F1CE06]">ELITE</span>
            <br />
            TRAINERS
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Learn from the best. Train with masters.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-square mb-6 overflow-hidden">
                {/* Border Frame */}
                <div className="absolute inset-0 border-4 border-[#F1CE06] transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 z-10"></div>
                
                {/* Image */}
                <div className="absolute inset-4 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-4 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Number */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#F1CE06] flex items-center justify-center z-20">
                  <span className="text-3xl font-black text-black">
                    {trainer.id}
                  </span>
                </div>

                {/* Specialty Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="absolute bottom-8 left-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <div className="bg-black/90 backdrop-blur-sm px-4 py-2 border-l-4 border-[#F1CE06]">
                    <p className="text-[#F1CE06] text-xs font-bold uppercase tracking-wider">
                      {trainer.specialty}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Name */}
              <div className="text-center">
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#F1CE06] transition-colors duration-300">
                  {trainer.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-0.5 w-8 bg-[#F1CE06] transform origin-left transition-all duration-500 group-hover:w-16"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-8xl text-[#F1CE06] font-black mb-4">"</div>
            <p className="text-2xl md:text-3xl font-light text-white/80 italic mb-6">
              Excellence is not a skill, it's an attitude
            </p>
            <div className="h-1 w-24 bg-[#F1CE06] mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Trainer;