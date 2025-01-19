import React from "react";
import ReactPlayer from "react-player"; // Import ReactPlayer for video handling
import { video_1, video_2, video_3, video_4 } from "../../assets/muscal"; // Import video files

const videoCards = [
  {
    id: 1,
    price: "234,378,123",
    date: "14.05.24",
    topic:
      "Call topic - IOT in automated vehicles for fishing purposes. This topic will delve deep into the applications of IoT in autonomous vehicles, specifically focused on its use for optimizing fishing practices, reducing waste, and improving efficiency. The technology integrates advanced sensors and real-time data analysis to improve vehicle navigation and fish tracking.",
    videoUrl: video_1,
    circleText: "VISIT Link",
  },
  {
    id: 2,
    price: "103,000",
    date: "14.05.24",
    topic:
      "Initiative Proposition - Creating AI driven buses for a better connected Europe. Needed expertise in AI. With growing urban populations and the demand for sustainable transportation, we explore the potential of AI-driven buses that could drastically reduce traffic congestion while providing a smarter, more eco-friendly public transport option across Europe.",
    videoUrl: video_2,
    circleText: "VISIT LINK",
  },
  {
    id: 3,
    price: "25,000,000",
    date: "14.05.24",
    topic:
      "The annual integration of communication systems in the new Thales networking system, as part of ECOMSE & Horizon 2020. A comprehensive look into how communication systems are upgraded yearly as part of larger networking frameworks. Thales integrates secure communication solutions as part of the Horizon 2020 program, which aims to improve European infrastructure.",
    videoUrl: video_3,
    circleText: "VISIT LINK",
  },
  {
    id: 4,
    price: "3,120,000",
    date: "14.05.24",
    topic:
      "Program life us expanding its offers for call for proposals. The program focuses on expanding funding opportunities for new innovative technologies and research projects in various sectors. We are opening more calls for proposals, encouraging organizations to submit their cutting-edge ideas for collaboration and funding.",
    videoUrl: video_4,
    circleText: "VISIT LINK",
  },
];

export default function FundCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-14 gap-4">
      {videoCards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center text-center p-4 rounded-md shadow-lg" style={{ backgroundColor: "#423D36" }}
        >
          {/* Video Player */}
          <ReactPlayer
            url={card.videoUrl}
            controls
            width="100%" // Makes the video container responsive
            height="auto" // Adjust the height to maintain aspect ratio
            className="mb-4 rounded-md"
          />
          {/* Card Information */}
          <div className="mt-2">
            <p className="text-lg font-bold break-words">{card.topic}</p> {/* Ensure text wraps properly */}
            <p className="text-sm text-gray-600">{card.date}</p>
            <p className="text-xl font-semibold text-amber-500">${card.price}</p>
          </div>
          {/* Circular Text */}
          <button className="mt-4 py-2 px-4 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600">
            {card.circleText}
          </button>
        </div>
      ))}
    </article>
  );
}
