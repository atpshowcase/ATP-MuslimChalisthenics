import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            #F1CE06 35px,
            #F1CE06 37px
          )`
        }}></div>
      </div>

      {/* Yellow Accent Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#F1CE06]/5 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-[#F1CE06]/5 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2 bg-[#F1CE06]/10 border border-[#F1CE06] text-[#F1CE06] text-sm font-bold uppercase tracking-widest">
            Muslim Calisthenics Jakarta
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tighter"
        >
          TRAIN
          <br />
          <span className="text-[#F1CE06]">TOGETHER</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light"
        >
          Build strength, discipline, and faith through bodyweight mastery
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#F1CE06" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#F1CE06] text-black text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-[#F1CE06]/50"
          >
            Join Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 border-2 border-white text-white text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "4", label: "Trainers" },
            { number: "1000+", label: "Members" },
            { number: "50+", label: "Events" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="border-l-4 border-[#F1CE06] pl-6 text-left"
            >
              <div className="text-4xl md:text-5xl font-black text-[#F1CE06] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#F1CE06] rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-[#F1CE06] rounded-full"
          />
        </div>
      </motion.div> */}
    </section>
  );
}

export default Hero;