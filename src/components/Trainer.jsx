import React from "react";
import { profile_idam, profile_adam, profile_reza, profile_raihan } from "../assets/muscal";

const cards = [
  {
    id: 1,
    image: profile_idam,
    title: "Idam",
  },
  {
    id: 2,
    image: profile_raihan,
    title: "Raihan",
  },
  {
    id: 3,
    image: profile_adam,
    title: "Adam",
  },
  {
    id: 4,
    image: profile_reza,
    title: "Reza",
  },
];

function Trainer() {
  return (
    <div>
      {/* Our Trainees Section */}
      <section id="trainer" className="py-16 bg-white font-poppins">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">Our Calisthenics Trainer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card) => (
              <div key={card.id} className="relative group">
                <div className="w-64 h-64 mx-auto mb-4">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800">{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainer;
