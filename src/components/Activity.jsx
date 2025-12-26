import React from "react";
import { motion } from "framer-motion";
import { train_1, train_2, train_3, train_4 } from "../assets/muscal";

const activities = [
  {
    id: 1,
    image: train_1,
    title: "Morning Workout",
    description: "Start your day with energy",
    tag: "Daily"
  },
  {
    id: 2,
    image: train_2,
    title: "Evening Stretch",
    description: "Relax and unwind",
    tag: "Daily"
  },
  {
    id: 3,
    image: train_3,
    title: "Calisthenics Challenge",
    description: "Push your limits",
    tag: "Weekly"
  },
  {
    id: 4,
    image: train_4,
    title: "Group Session",
    description: "Train together",
    tag: "Weekly"
  },
];

function Activity() {
  return (
    <section id="activity" className="relative bg-[#F1CE06] py-32 overflow-hidden">
      {/* Diagonal Background Element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-0 w-1/2 h-full bg-black/5 transform rotate-12"></div>
        <div className="absolute -left-1/4 bottom-0 w-1/2 h-full bg-black/5 transform -rotate-12"></div>
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
            <div className="h-0.5 w-16 bg-black"></div>
            <span className="text-black text-sm font-bold uppercase tracking-widest">
              Highlights
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tighter">
            PEAK
            <br />
            MOMENTS
          </h2>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-black cursor-pointer"
            >
              {/* Image */}
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="self-start"
                >
                  <span className="inline-block px-3 py-1 bg-[#F1CE06] text-black text-xs font-bold uppercase tracking-wider">
                    {activity.tag}
                  </span>
                </motion.div>

                {/* Title & Description */}
                <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                    {activity.title}
                  </h3>
                  <p className="text-[#F1CE06] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {activity.description}
                  </p>
                  
                  {/* Arrow */}
                  <motion.div
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="flex items-center gap-2 text-[#F1CE06] text-sm font-bold">
                      <span>View</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Number Indicator */}
              <div className="absolute top-6 right-6 text-6xl font-black text-white/10 group-hover:text-[#F1CE06]/20 transition-all duration-500">
                {activity.id}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl md:text-3xl font-black text-black">
            Every rep counts. Every moment matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Activity;