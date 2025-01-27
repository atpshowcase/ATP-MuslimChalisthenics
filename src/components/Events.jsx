import React from "react";

function Events() {
  return (
    <section id="events" className="bg-white py-20 font-poppins">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">
          Upcoming Events
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Join our vibrant community of <span className="font-bold text-black">600+</span> members and growing!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-black mb-4">
              Advanced Training Session Morning
            </h3>
            <p className="text-gray-700 mb-2">Date: October 25, 2023</p>
            <p className="text-gray-700 mb-2">Time: 8:00 AM - 10:00 AM</p>
            <p className="text-gray-700">Location: Fitparq Bintaro</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-black mb-4">
              Advanced Training Session Evening
            </h3>
            <p className="text-gray-700 mb-2">Date: October 25, 2025</p>
            <p className="text-gray-700 mb-2">Time: 16:00 PM - 17:50 PM</p>
            <p className="text-gray-700">Location: Fitparq Bintaro</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold text-black mb-4">
              Community Training
            </h3>
            <p className="text-gray-700 mb-2">Date: October 26, 2025</p>
            <p className="text-gray-700 mb-2">Time: 7:00 PM - 9:00 PM</p>
            <p className="text-gray-700">Location: Taman Menteng</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
