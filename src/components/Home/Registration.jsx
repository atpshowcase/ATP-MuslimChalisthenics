import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";

const ActionButton = ({ text, href, bgColor, hoverColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block ${bgColor} text-white px-6 py-3 rounded-full shadow-md font-medium transition-all hover:${hoverColor}`}
  >
    {text}
  </a>
);

export default function MinimalistInfoSection() {
  return (
    <section className="py-14 bg-gray-100 mt-10">
      <Container>
        {/* Section Title */}
        <div className="mb-10 text-center">
          <SectionTitle title="Join Us Every Sunday" />
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Start your week off right—whether you prefer a morning boost or an evening unwind, we have a session for you!
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Registration Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Register for a Session</h3>
            <p className="text-gray-600 mb-6">
              Select the session that fits your schedule. Reserve your spot today!
            </p>

            {/* Container for the sessions */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              {/* Morning Session */}
              <div className="w-full lg:w-1/2">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Morning Session</h4>
                <p className="text-sm text-gray-500 mb-4">Jumpstart your Sunday with a refreshing.</p>
                <ActionButton
                  text="Register for Morning"
                  href="/register/morning"
                  bgColor="bg-blue-500"
                  hoverColor="bg-blue-600"
                />
              </div>

              {/* Evening Session */}
              <div className="w-full lg:w-1/2">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">Evening Session</h4>
                <p className="text-sm text-gray-500 mb-4">Relax and learn in a peaceful evening setting.</p>
                <ActionButton
                  text="Register for Evening"
                  href="/register/evening"
                  bgColor="bg-indigo-500"
                  hoverColor="bg-indigo-600"
                />
              </div>
            </div>
          </div>


          {/* Location and Links */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
            <p className="text-gray-600 mb-6">
              📍 **Location:** Jakarta Selatan <br />
              🕖 **Time:** Every Sunday at 7:00 AM
            </p>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Join our community and stay updated! Connect via WhatsApp for event details, or follow us on Instagram for the latest news and photos.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <ActionButton
                text="Join WhatsApp Group"
                href="https://chat.whatsapp.com/example-group-link"
                bgColor="bg-green-500"
                hoverColor="bg-green-600"
              />
              <ActionButton
                text="Follow on Instagram"
                href="https://instagram.com/example-profile"
                bgColor="bg-pink-500"
                hoverColor="bg-pink-600"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
