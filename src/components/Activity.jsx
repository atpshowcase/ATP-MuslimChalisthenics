import React from "react";
import { train_1, train_2, train_3, train_4 } from "../assets/muscal"; // Import images for activities

const activities = [
  {
    id: 1,
    image: train_1,
    title: "Morning Workout",
    description: "Start your day with energy.",
  },
  {
    id: 2,
    image: train_2,
    title: "Evening Stretch",
    description: "Relax and unwind in the evening.",
  },
  {
    id: 3,
    image: train_3,
    title: "Calisthenics Challenge",
    description: "Push your limits with a challenge.",
  },
  {
    id: 4,
    image: train_4,
    title: "Group Session",
    description: "Join us for a fun group workout.",
  },
];

function Activity() {
  return (
    <div className="activity-feed bg-white py-12 font-poppins">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">Highlight Activity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="activity-container w-full rounded-xl overflow-hidden shadow-lg relative transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-40 bg-gray-800 text-white text-center py-4 px-6">
              <h3 className="text-lg font-semibold">{activity.title}</h3>
              <p className="text-sm">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
