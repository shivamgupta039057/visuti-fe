 'use client';
import React, { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      {/* Show thumbnail until play button is clicked */}
      {!isPlaying ? (
        <>
          <img
            src="https://img.youtube.com/vi/G7oJc_uLaJE/sddefault.jpg"
            alt="Video Thumbnail"
            className="w-full rounded-2xl"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute  inset-0 flex justify-center items-center bg-black/30 hover:bg-black/40 transition"
          >
            <span className="bg-white p-4 border-4 size-20 flex items-center justify-center border-black/40 rounded-full shadow-md hover:scale-110 transition">
              <svg
                width="40"
                height="40"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 5V23L23 14L7 5Z" fill="#20B486" />
              </svg>
            </span>
          </button>
        </>
      ) : (
        <iframe
          width="100%"
          height="415"
          src="https://www.youtube.com/embed/G7oJc_uLaJE?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      )}
    </div>
  );
}
