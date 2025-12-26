import React from "react";
import { motion } from "framer-motion";

function About() {
  const principles = [
    {
      number: "01",
      title: "Faith First",
      description: "We start and end with Allah SWT"
    },
    {
      number: "02",
      title: "Community",
      description: "Together we grow stronger"
    },
    {
      number: "03",
      title: "Excellence",
      description: "Push beyond your limits"
    },
    {
      number: "04",
      title: "Discipline",
      description: "Consistency builds champions"
    }
  ];

  return (
    <section id="about" className="relative bg-[#F1CE06] py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-0.5 w-16 bg-black"></div>
              <span className="text-black text-sm font-bold uppercase tracking-widest">
                Our Story
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-black mb-8 tracking-tighter leading-none">
              BUILT ON
              <br />
              FAITH &
              <br />
              FITNESS
            </h2>
          </motion.div>

          {/* Right Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
              We are a community-driven calisthenics group dedicated to helping individuals achieve their fitness goals through bodyweight training.
            </p>
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed">
              Whether you're a beginner or an advanced athlete, we welcome you to join us and experience growth together.
            </p>
            <div className="pt-6">
              <div className="w-full h-1 bg-black mb-6"></div>
              <p className="text-3xl md:text-4xl font-black text-black italic">
                "We Are Nothing Without Allah"
              </p>
            </div>
          </motion.div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-black p-8 transition-all duration-500 hover:bg-black/90"
            >
              {/* Number */}
              <div className="text-8xl font-black text-[#F1CE06]/20 mb-4 group-hover:text-[#F1CE06]/30 transition-colors duration-500">
                {principle.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-[#F1CE06] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="bg-black p-12 lg:p-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center border-b md:border-b-0 md:border-r border-[#F1CE06]/30 pb-8 md:pb-0">
                <div className="text-6xl md:text-7xl font-black text-[#F1CE06] mb-4">
                  600+
                </div>
                <div className="text-white/60 uppercase tracking-widest text-sm font-bold">
                  Active Members
                </div>
              </div>
              <div className="text-center border-b md:border-b-0 md:border-r border-[#F1CE06]/30 pb-8 md:pb-0">
                <div className="text-6xl md:text-7xl font-black text-[#F1CE06] mb-4">
                  5+
                </div>
                <div className="text-white/60 uppercase tracking-widest text-sm font-bold">
                  Years Strong
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-black text-[#F1CE06] mb-4">
                  100+
                </div>
                <div className="text-white/60 uppercase tracking-widest text-sm font-bold">
                  Events Hosted
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;