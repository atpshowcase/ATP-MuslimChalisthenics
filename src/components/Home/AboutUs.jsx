import React from "react";
import Container from "../Container";

export default function AboutUs() {
  return (
    <section className="my-14">
      <Container>
        {/* <SectionTitle title="About Us" /> */}

        <div className="bg-[#423D36] bg-opacity-50 px-8 py-14 rounded-lg mt-8">
          <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl py-4 font-bold">
            Muslim Calisthenics Jakarta is more than just a fitness community; 
            it's a vibrant movement dedicated to empowering individuals through 
            physical strength and mental resilience. Together, we embrace the 
            beauty of staying fit while upholding our values and faith. Join us 
            in this journey of health, unity, and personal growth, where every 
            push-up and pull-up brings us closer to our goals—both on and off the mat.
          </p>
        </div>
      </Container>
    </section>
  );
}
