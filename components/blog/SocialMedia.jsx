import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const SocialMedia = () => (
  <div className="border border-gray-200 p-2 sm:p-4 rounded-2xl">
    <h3 className="text-secondary font-bold text-base sm:text-lg mb-3 sm:mb-4">SOCIAL MEDIA</h3>
    <div className="flex gap-2 sm:gap-3">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">
        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">
        <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition cursor-pointer">
        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer">
        <span className="text-xs font-bold">V</span>
      </div>
    </div>
  </div>
);

export default SocialMedia;
