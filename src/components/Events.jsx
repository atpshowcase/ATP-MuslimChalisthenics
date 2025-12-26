import React from "react";
import { motion } from "framer-motion";

function Events() {
  const events = [
    {
      title: "Advanced Training Session",
      subtitle: "Morning",
      date: "25 OCT 2025",
      time: "08:00 - 10:00",
      location: "Fitparq Bintaro",
    },
    {
      title: "Advanced Training Session",
      subtitle: "Evening",
      date: "25 OCT 2025",
      time: "16:00 - 17:50",
      location: "Fitparq Bintaro",
    },
    {
      title: "Community Training",
      subtitle: "Open Session",
      date: "26 OCT 2025",
      time: "19:00 - 21:00",
      location: "Taman Menteng",
    },
  ];

  return (
    <section id="events" className="relative bg-black py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#F1CE06 1px, transparent 1px),
                           linear-gradient(90deg, #F1CE06 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-0.5 w-16 bg-[#F1CE06]"></div>
            <span className="text-[#F1CE06] text-sm font-bold uppercase tracking-widest">
              Upcoming Events
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            JOIN THE
            <br />
            <span className="text-[#F1CE06]">MOVEMENT</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl">
            Train with <span className="text-[#F1CE06] font-bold">600+</span> dedicated athletes
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-sm border-2 border-white/10 p-8 transition-all duration-500 hover:border-[#F1CE06] hover:bg-[#F1CE06]/5"
            >
              {/* Event Number */}
              <div className="absolute top-8 right-8 text-8xl font-black text-white/5 group-hover:text-[#F1CE06]/10 transition-all duration-500">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              <div className="relative z-10">
                {/* Date Badge */}
                <div className="inline-block mb-6 px-4 py-2 bg-[#F1CE06] text-black text-xs font-bold uppercase tracking-wider">
                  {event.date}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                  {event.title}
                </h3>
                <p className="text-[#F1CE06] text-lg font-semibold mb-6">
                  {event.subtitle}
                </p>

                {/* Details */}
                <div className="space-y-3 text-white/60">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#F1CE06]"></div>
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#F1CE06]"></div>
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-8 flex items-center gap-2 text-[#F1CE06] text-sm font-bold uppercase tracking-wider group/btn"
                >
                  Register Now
                  <span className="transform transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-[#F1CE06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-transparent border-2 border-[#F1CE06] text-[#F1CE06] text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#F1CE06] hover:text-black"
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Events;