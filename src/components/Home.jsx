import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="relative py-80 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1587938745570-681161dcfe17?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }} // Apply the background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Join Our Muslim Calisthenics Jakarta
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Build strength, flexibility, and community with like-minded fitness enthusiasts.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

export default Hero;
