import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import random from "../../assets/random.png";

const NewsCard = ({ text }) => (
  <div className="w-[320px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px] mb-6">{text}</p>
    <div className="flex items-center gap-3">
      <img src={random} alt="person" className="w-12 h-12 rounded-full" />
      <div>
        <h1 className="font-medium text-[14px] text-[#333]">Joy Arnold</h1>
        <p className="text-[#BFBFC8] text-[12px]">@Joy Arnold222</p>
      </div>
    </div>
  </div>
);

const RegistrationCard = ({ title, description, linkText, href }) => (
  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-xl shadow-lg text-white text-center hover:scale-105 transition-transform">
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-lg mb-6">{description}</p>
    <a
      href={href}
      className="inline-block bg-white text-amber-600 px-6 py-3 rounded-full shadow-md font-medium hover:bg-gray-100 transition"
    >
      {linkText}
    </a>
  </div>
);

export default function Stories() {
  return (
    <section className="py-14 bg-black">
      <Container>
        {/* Stories Section */}
        
        {/* Registration Section */}
        <div className="mt-16">
          <SectionTitle title="Register Now" />
          <p className="text-[#5B6469] text-center mb-10">
            Join us today and be a part of our vibrant community. Choose your preferred session and register now!
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <RegistrationCard
              title="Morning Registration"
              description="Start your day with an energizing session."
              linkText="Register Morning"
              href="/register/morning"
            />
            <RegistrationCard
              title="Evening Registration"
              description="Unwind and learn in a relaxing evening session."
              linkText="Register Evening"
              href="/register/evening"
            />
          </div>
        </div>
        {/* Additional Information Section */}
        <div className="mt-12 bg-gray-800 p-8 rounded-lg text-white text-center shadow-md">
            <h4 className="text-xl font-semibold mb-4">Location</h4>
            <p className="text-lg mb-6">📍 Jakarta Selatan</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://chat.whatsapp.com/example-group-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow-md font-medium hover:bg-green-600 transition"
              >
                Join WhatsApp Group
              </a>
              <a
                href="https://instagram.com/example-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full shadow-md font-medium hover:bg-pink-600 transition"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
      </Container>
    </section>
  );
}
