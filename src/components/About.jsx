import React from "react";

function About() {
  return (
    <section id="about" className="bg-gray-100 py-12 font-poppins">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10 text-center">
          About Us
        </h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed mb-4">
          We are a community-driven calisthenics group dedicated to helping individuals achieve their fitness goals through bodyweight training. Whether you're a beginner or an advanced athlete, we welcome you to join us and experience growth together.
        </p>

        <p className="text-lg font-semibold text-gray-800 italic mb-4">
          "We Are Nothing Without Allah"
        </p>
      </div>
    </section>
  );
}

export default About;
