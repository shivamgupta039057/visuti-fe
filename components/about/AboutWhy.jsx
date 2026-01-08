import React from "react";

const AboutWhy = () => {
  return (
    <section className="md:py-16 py-10 bg-[#F6F7F9]">
      <div className="max-w-7xl mx-auto lg:px-6 px-4">
        <div className="">
          {/* Heading with Diamond Icon */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-4 h-4 bg-primary transform rotate-45 flex-shrink-0"></div>
            <h2 className="text-secondary font-bold md:text-5xl sm:text-4xl text-3xl">
              Why Visuti Careers
            </h2>
          </div>

          {/* Body Text - Four Paragraphs */}
          <div className="space-y-6 text-[#666666] md:text-xl sm:text-base text-sm leading-relaxed">
            <p>
             We know that a team is only as good as the people who make it up. Everyone brings something different to the party – and everyone is respected for their individual skills and who they are. But we all have one thing in common: a shared passion and commitment to making things better.
            </p>
            <p>
            We welcome the curious, the creative, the visionaries, the makers and doers. Everyone has a place here – as long as you want to make a difference.
            </p>
            <p>
            That’s what’s fuelled our growth. But we’re not where we want to be yet. We have big plans and a clear purpose. And you could be the person that helps us reach that next stage of development.
            </p>
            <p>
              So If You'd Like To Work At The Cutting Edge Of Fintech With A Smashing Bunch 
              Of People Who You Can Inspire And Learn From, Get In Touch Today – And Take Your 
              First Step Towards A Great Career At <span className="font-bold text-secondary">Visuti Career</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhy;

