"use client";

import React from "react";
import Image from "next/image";

const BlogDetailContent = () => {
  return (
    <article className="max-w-none">
      {/* Article Content */}
      <div className="space-y-6 text-[#3B3C4A] leading-relaxed">
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Traveling is an enriching experience that opens up new horizons, exposes us to different
          cultures, and creates memories that last a lifetime. However, traveling can also be stressful
          and overwhelming, especially if you don't plan and prepare adequately. In this blog article,
          we'll explore tips and tricks for a memorable journey and how to make the most of your
          travels.
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          One of the most rewarding aspects of traveling is immersing yourself in the local culture and
          customs. This includes trying local cuisine, attending cultural events and festivals, and
          interacting with locals. Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>

        {/* Research Your Destination Section */}
        <h2 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl mt-8 mb-4">
          Research Your Destination
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Before embarking on your journey, take the time to research your destination. This includes
          understanding the local culture, customs, and laws, as well as identifying top attractions,
          restaurants, and accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
          ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis
          eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
        </p>

        {/* Plan Your Itinerary Section */}
        <h2 className="text-secondary font-text-lg sm:text-xl md:text-2xl mt-8 mb-4">
          Plan Your Itinerary
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          While it's essential to leave room for spontaneity and unexpected adventures, having a rough
          itinerary can help you make the most of your time and budget. Identify the must-see sights
          and experiences and prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.
        </p>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla.
          Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut
          etiam sit amet.
        </p>

        {/* Quote Box */}
        <div className="bg-gray-50 border-l-4 border-gray-300 p-6 my-8 rounded-r-lg">
          <p className="text-gray-800 italic text-lg leading-relaxed">
            " Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. "
          </p>
        </div>

        {/* Advertisement */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 my-8 text-center">
          <p className="text-gray-500 text-sm mb-2">Advertisement</p>
          <p className="text-gray-700 font-semibold text-lg">You can place ads</p>
          <p className="text-gray-500 text-sm mt-1">750x100</p>
        </div>

        {/* Pack Lightly and Smartly Section */}
        <h2 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl mt-8 mb-4">
          Pack Lightly and Smartly
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Packing can be a daunting task, but with some careful planning and smart choices, you can
          pack light and efficiently. Start by making a packing list and sticking to it, focusing on
          versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage
          and packing organizers to maximize space and minimize wrinkles.
        </p>

        {/* Stay Safe and Healthy Section */}
        <h2 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl mt-8 mb-4">
          Stay Safe and Healthy
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Traveling can expose you to new environments and potential health risks, so it's crucial to
          take precautions to stay safe and healthy. This includes researching any required vaccinations
          or medications, staying hydrated, washing your hands frequently, and using sunscreen and
          insect repellent. It's also essential to keep your valuables safe and secure and to be aware of
          your surroundings at all times.
        </p>

        {/* Immerse Yourself in the Local Culture Section */}
        <h2 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl mt-8 mb-4">
          Immerse Yourself in the Local Culture
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          One of the most rewarding aspects of traveling is immersing yourself in the local culture and
          customs. This includes trying local cuisine, attending cultural events and festivals, and
          interacting with locals. Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>

        {/* Capture Memories Section */}
        <h2 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl mt-8 mb-4">
          Capture Memories
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Finally, don't forget to capture memories of your journey. Whether it's through photographs,
          journaling, or souvenirs, preserving the moments and experiences of your travels can bring
          joy and nostalgia for years to come. However, it's also essential to be present in the moment
          and not let technology distract you from the beauty of your surroundings.
        </p>

        {/* Conclusion Section */}
        <h2 className="text-secondary font-bold text-lg sm:text-xl md:text-2xl mt-8 mb-4">
          Conclusion:
        </h2>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By
          following these tips and tricks, you can make the most of your journey and create memories
          that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.
        </p>
      </div>
    </article>
  );
};

export default BlogDetailContent;

