'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SuccessStories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const stories = [
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },
    { name: 'Kirti Verma', score: 'AIR 152 | JEE Main 2022', text: 'The term below need to be checked and allocated to the definitions (senses) of the headword above', image: '/arihant/assets/successStory1-C75h6RHp.svg' },

    // ... repeat other stories
  ];

  return (
    <section className="bg-[#f5f8ff] size-full sm:pt-16 pt-7  sm:pb-10">
      <div className="max-w-7xl h-full px-4 sm:px-8 lg:px-4 mx-auto relative group">
      <div className="text-secondary font-semibold  md:text-5xl sm:text-4xl text-3xl text-center capitalize">
      See what<span className="font-bold text-primary"> our students </span>{" "}
      are saying
        </div>
        {/* Paragraph */}
        <div className="md:font-medium md:text-base sm:text-sm text-xs text-muted text-center sm:mt-4 mt-1 max-w-2xl mx-auto leading-relaxed">
        Hear from students who turned their dreams into reality with our expert guidance.
        </div>

        <div className=" md:px-10 lg:px-14 relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={3}
            loop={true}
            centeredSlides={true}
            grabCursor={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="flex !items-stretch relative !h-auto [&_.swiper-slide]:sm:scale-90 [&_.swiper-slide]:sm:grayscale sm:[&_.swiper-slide-active]:sm:!scale-110 [&_.swiper-slide-active]:sm:!grayscale-0 [&_.swiper-slide-active]:z-20"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index} className="relative group !h-auto pt-20 sm:pb-10">
                <div className="flex flex-col items-center bg-white sm:shadow-[0px_0px_15px_#8a8788] shadow-gray-300 rounded-4xl py-16 px-8 relative h-full">
                  <div className="size-24 ring-[8px] ring-white shadow-[0px_0px_10px_6px_#8a8788] shadow-gray-400 rounded-full overflow-hidden -mt-28">
                    <img className="size-full object-cover" loading="lazy" fetchPriority="low" src="/user.png" alt={story.name} width="256" height="256"/>
                  </div>
                  <div className="flex flex-col items-center pb-5 px-3 pt-5">
                    <div className="text-center font-semibold text-[#474747] md:text-2xl text-xl">{story.name}</div>
                    <div className="text-center text-[#8a8788] md:text-base text-sm">{story.score}</div>
                  </div>
                  <div className="w-full text-center text-[#898788] text-base grow">{story.text}</div>
                  <div className="flex mx-auto w-full max-w-16 pt-4">
                    <div className="w-1/2 h-1 bg-[#8b92fd]"></div>
                    <div className="w-1/2 h-1 bg-[#ff981f]"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Keep your exact design for buttons */}
          <div className="flex gap-3 items-center justify-center pt-10 max-md:!hidden">
            <div ref={prevRef} className="swiper-button-prev !opacity-100 !inset-auto !pointer-events-auto !cursor-pointer !relative rounded-full flex items-center justify-center duration-300 bg-white !text-black p-2 border-4 border-gray-100 !size-12 *:!size-full" tabIndex={0}>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
            </div>
            <div ref={nextRef} className="swiper-button-next after:hidden !opacity-100 !inset-auto !pointer-events-auto !cursor-pointer !relative rounded-full flex items-center justify-center duration-300 bg-white !text-black p-2 border-4 border-gray-100 !size-12 *:!size-full">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
              </svg>
            </div>
          </div>

          <div className="swiper-pagination swiper-pagination-1 !bottom-0 pt-6 md:hidden block !relative swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
        </div>
      </div>
    </section>
  );
}
