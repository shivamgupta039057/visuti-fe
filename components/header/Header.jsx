'use client'
import React, { useEffect, useState } from 'react'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'
import { Headphones } from 'lucide-react'

const Header = () => {
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      <header
        id="mainHeader"
        className={`w-full z-[1010] bg-white transition-all duration-300 fixed top-0 left-0 ${
        isScrolled ? 'shadow-md' : 'shadow-none'
      }`}
      >
             <div
        className={`overflow-hidden transition-all duration-300 ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-[100px] opacity-100'
        }`}
      >
        <TopHeader />
      </div>
      <div className="border-t border-gray-200">
        <BottomHeader />
      </div>
        {/* bottom header  */}
        <div className={`bg-white border-b border-black/5 w-full max-lg:hidden overflowhidden transition-all duration-300 ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-[60px] opacity-100'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-12">
            
              {/* Desktop Menu */}
              <nav className="hidden lg:flex space-x-3 font-medium">
                <a
                  href="#"
                  className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-primary"
                >
                  Home
                </a>
                <span className="hidden h-5 w-px bg-gray-200 last:hidden md:block" aria-hidden="true"></span>
                {/* Dropdown our services*/}
                <div className="relative group/dd">
                  <button
                    type="button"
                    className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-accent duration-200 capitalize hover:lg:text-accent group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
                  >
                    our services
                    <svg
                      className="size-3 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
                      width={9}
                      height={5}
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_18_3317)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.131659 0.166081C-0.0438423 0.350172 -0.0438423 0.647899 0.131659 0.831536L3.85046 4.72381C3.93243 4.81094 4.03109 4.88031 4.14044 4.92772C4.24979 4.97512 4.36754 4.99957 4.48653 4.99957C4.60553 4.99957 4.72328 4.97512 4.83263 4.92772C4.94198 4.88031 5.04064 4.81094 5.12261 4.72381L8.86886 0.803354C8.95258 0.714378 8.99964 0.59655 9.00048 0.473798C9.00131 0.351046 8.95586 0.232575 8.87336 0.142445C8.83262 0.0977954 8.78323 0.0620702 8.72827 0.0374813C8.6733 0.0128923 8.61392 -3.68573e-05 8.55381 -0.000505581C8.49369 -0.000974304 8.43412 0.0110274 8.37879 0.0347563C8.32345 0.0584852 8.27353 0.0934361 8.23211 0.137445L4.80446 3.72563C4.76347 3.76923 4.71413 3.80394 4.65943 3.82767C4.60474 3.85139 4.54583 3.86363 4.48631 3.86363C4.42678 3.86363 4.36788 3.85139 4.31319 3.82767C4.25849 3.80394 4.20915 3.76923 4.16816 3.72563L0.767509 0.166081C0.726558 0.122495 0.677253 0.0877848 0.622595 0.0640655C0.567938 0.0403462 0.509072 0.0281141 0.449584 0.0281141C0.390095 0.0281141 0.331229 0.0403462 0.276571 0.0640655C0.221913 0.0877848 0.172608 0.122495 0.131659 0.166081Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_3317">
                          <rect
                            width={5}
                            height={9}
                            fill="white"
                            transform="matrix(0 1 -1 0 9 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div className="absolute left-56 -right-0 max-w-xl w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-50 overflow-hidden bg-white/40 rounded-[10px] backdrop-[10px] transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                    <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                      <div className="w-full flex flex-col overflow-hidden rounded-[10px] text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          <a
                            href="#"
                            className="inline-flex items-center text-lg font-semibold text-muted"
                          >
                            our services
                            <img
                              src="/Arrowright.png"
                              alt="Arrowright"
                              className="size-6 ms-3"
                            />
                          </a>
                          <div className="flex justify-between items-start gap-6">
                            {/* Left Column */}
                            <div className="flex-1">
                              {/* States List */}
                              <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-3 text-accent text-sm">
                                <p>college view</p>
                                <p>neet predictor</p>
                                <p>MBBS abroad</p>
                                <p>compare college</p>
                                <p>counseling notification</p>
                                <p>choice filling maker</p>
                                <p>document builder</p>
                              </div>
                            </div>
                            {/* Right Ad Section */}
                            <div className="w-68">
                              <div>
                                <img
                                  src="/dropdown-banner.png"
                                  alt="dropdown-banner"
                                />
                              </div>
                              <button className="bg-primary px-2 py-2 mt-5 rounded-md text-xs text-white flex items-center gap-1">
                                Get Started{" "}
                                <img
                                  src="/arrow-up-01-sharp.png"
                                  alt="Arrow"
                                  className="size-3"
                                />{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Bottom Navigation */}
                        <div className="rounded-b-lg bg-[#F6F6F6]">
                          <div className=" flex gap-10 p-2 xl:p-4  text-accent text-sm font-medium">
                            <button className="flex items-center gap-1">
                              <span className="text-xl">+</span> Explore States
                            </button>
                            <button className="flex items-center gap-1">
                              <span className="text-xl">+</span> Download App
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="hidden h-5 w-px bg-gray-200 last:hidden md:block" aria-hidden="true"></span>
                {/*  Dropdown  college predictor*/}
                <div className="relative group/dd">
                  <button
                    type="button"
                    className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-accent duration-200 capitalize hover:lg:text-accent group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
                  >
                    College Predictor
                    <svg
                      className="size-3 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
                      width={9}
                      height={5}
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_18_3317)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.131659 0.166081C-0.0438423 0.350172 -0.0438423 0.647899 0.131659 0.831536L3.85046 4.72381C3.93243 4.81094 4.03109 4.88031 4.14044 4.92772C4.24979 4.97512 4.36754 4.99957 4.48653 4.99957C4.60553 4.99957 4.72328 4.97512 4.83263 4.92772C4.94198 4.88031 5.04064 4.81094 5.12261 4.72381L8.86886 0.803354C8.95258 0.714378 8.99964 0.59655 9.00048 0.473798C9.00131 0.351046 8.95586 0.232575 8.87336 0.142445C8.83262 0.0977954 8.78323 0.0620702 8.72827 0.0374813C8.6733 0.0128923 8.61392 -3.68573e-05 8.55381 -0.000505581C8.49369 -0.000974304 8.43412 0.0110274 8.37879 0.0347563C8.32345 0.0584852 8.27353 0.0934361 8.23211 0.137445L4.80446 3.72563C4.76347 3.76923 4.71413 3.80394 4.65943 3.82767C4.60474 3.85139 4.54583 3.86363 4.48631 3.86363C4.42678 3.86363 4.36788 3.85139 4.31319 3.82767C4.25849 3.80394 4.20915 3.76923 4.16816 3.72563L0.767509 0.166081C0.726558 0.122495 0.677253 0.0877848 0.622595 0.0640655C0.567938 0.0403462 0.509072 0.0281141 0.449584 0.0281141C0.390095 0.0281141 0.331229 0.0403462 0.276571 0.0640655C0.221913 0.0877848 0.172608 0.122495 0.131659 0.166081Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_3317">
                          <rect
                            width={5}
                            height={9}
                            fill="white"
                            transform="matrix(0 1 -1 0 9 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div className="absolute left-52 right-0 max-w-xl w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-50 overflow-hidden bg-white/40 rounded-[10px] backdrop-[10px] transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                    <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                      <div className="w-full flex flex-col overflow-hidden rounded-[10px] text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          <a
                            href="#"
                            className="inline-flex items-center text-lg font-semibold text-muted"
                          >
                            MBBS Admission for Abroad
                            <img
                              src="/Arrowright.png"
                              alt="Arrowright"
                              className="size-6 ms-3"
                            />
                          </a>
                          <div className="flex justify-between items-start gap-6">
                            {/* Left Column */}
                            <div className="flex-1">
                              {/* States List */}
                              <div className="mt-6 grid grid-cols-2 capitalize gap-x-12 gap-y-3 text-accent text-sm">
                                <p>russia</p>
                                <p>kazakhstan</p>
                                <p>georgia</p>
                                <p>uzbekistan</p>
                                <p>mauritius</p>
                                <p>nepal</p>
                                <p>bangladesh</p>
                                <p>kyrgystan</p>
                                <p>philippines</p>
                                <p>italy</p>
                                <p>germany</p>
                                <p>egypt</p>
                                <p>china</p>
                                <p>america</p>
                                <p>london</p>
                                <p>singapore</p>
                              </div>
                            </div>
                            {/* Right Ad Section */}
                            <div className="w-68">
                              <div>
                                <img
                                  src="/dropdown-banner.png"
                                  alt="dropdown-banner"
                                />
                              </div>
                              <button className="bg-primary px-2 py-2 mt-5 rounded-md text-xs text-white flex items-center gap-1">
                                Get Started{" "}
                                <img
                                  src="/arrow-up-01-sharp.png"
                                  alt="Arrow"
                                  className="size-3"
                                />{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Bottom Navigation */}
                        <div className="rounded-b-lg bg-[#F6F6F6]">
                          <div className=" flex gap-10 p-2 xl:p-4  text-accent text-sm font-medium">
                            <button className="flex items-center gap-1">
                              <span className="text-xl">+</span> Explore Countries
                            </button>
                            <button className="flex items-center gap-1">
                              <span className="text-xl">+</span> Download App
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="hidden h-5 w-px bg-gray-200 last:hidden md:block" aria-hidden="true"></span>
                {/* MBBS Admission for NRI Quota */}
                <div className="relative group/dd">
                  <button
                    type="button"
                    className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-accent duration-200 capitalize hover:lg:text-accent group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
                  >
                    MBBS india
                    <svg
                      className="size-3 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
                      width={9}
                      height={5}
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_18_3317)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.131659 0.166081C-0.0438423 0.350172 -0.0438423 0.647899 0.131659 0.831536L3.85046 4.72381C3.93243 4.81094 4.03109 4.88031 4.14044 4.92772C4.24979 4.97512 4.36754 4.99957 4.48653 4.99957C4.60553 4.99957 4.72328 4.97512 4.83263 4.92772C4.94198 4.88031 5.04064 4.81094 5.12261 4.72381L8.86886 0.803354C8.95258 0.714378 8.99964 0.59655 9.00048 0.473798C9.00131 0.351046 8.95586 0.232575 8.87336 0.142445C8.83262 0.0977954 8.78323 0.0620702 8.72827 0.0374813C8.6733 0.0128923 8.61392 -3.68573e-05 8.55381 -0.000505581C8.49369 -0.000974304 8.43412 0.0110274 8.37879 0.0347563C8.32345 0.0584852 8.27353 0.0934361 8.23211 0.137445L4.80446 3.72563C4.76347 3.76923 4.71413 3.80394 4.65943 3.82767C4.60474 3.85139 4.54583 3.86363 4.48631 3.86363C4.42678 3.86363 4.36788 3.85139 4.31319 3.82767C4.25849 3.80394 4.20915 3.76923 4.16816 3.72563L0.767509 0.166081C0.726558 0.122495 0.677253 0.0877848 0.622595 0.0640655C0.567938 0.0403462 0.509072 0.0281141 0.449584 0.0281141C0.390095 0.0281141 0.331229 0.0403462 0.276571 0.0640655C0.221913 0.0877848 0.172608 0.122495 0.131659 0.166081Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_3317">
                          <rect
                            width={5}
                            height={9}
                            fill="white"
                            transform="matrix(0 1 -1 0 9 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div className="absolute left-1/2 right-0 max-w-xl w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-50 overflow-hidden bg-white/40 rounded-[10px] backdrop-[10px] transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                    <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                      <div className="w-full flex flex-col overflow-hidden rounded-[10px] text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          <a
                            href="#"
                            className="inline-flex items-center text-lg font-semibold text-muted"
                          >
                            MBBS Admission for NRI Quota
                            <img
                              src="/Arrowright.png"
                              alt="Arrowright"
                              className="size-6 ms-3"
                            />
                          </a>
                          <div className="flex justify-between items-start gap-6">
                            {/* Left Column */}
                            <div className="flex-1">
                              {/* States List */}
                              <div className="mt-6 grid grid-cols-2 capitalize gap-x-12 gap-y-3 text-accent text-sm">
                                <p>russia</p>
                                <p>kazakhstan</p>
                                <p>georgia</p>
                                <p>uzbekistan</p>
                                <p>mauritius</p>
                                <p>nepal</p>
                                <p>bangladesh</p>
                                <p>kyrgystan</p>
                                <p>philippines</p>
                                <p>italy</p>
                                <p>germany</p>
                                <p>egypt</p>
                                <p>china</p>
                                <p>america</p>
                                <p>london</p>
                                <p>singapore</p>
                              </div>
                            </div>
                            {/* Right Ad Section */}
                            <div className="w-68">
                              <div>
                                <img
                                  src="/dropdown-banner.png"
                                  alt="dropdown-banner"
                                />
                              </div>
                              <button className="bg-primary px-2 py-2 mt-5 rounded-md text-xs text-white flex items-center gap-1">
                                Get Started{" "}
                                <img
                                  src="/arrow-up-01-sharp.png"
                                  alt="Arrow"
                                  className="size-3"
                                />{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Bottom Navigation */}
                        <div className="rounded-b-lg bg-[#F6F6F6]">
                          <div className=" flex gap-10 p-2 xl:p-4  text-accent text-sm font-medium">
                            <button className="flex items-center gap-1">
                              <span className="text-xl">+</span> Explore Countries
                            </button>
                            <button className="flex items-center gap-1">
                              <span className="text-xl">+</span> Download App
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="hidden h-5 w-px bg-gray-200 last:hidden md:block" aria-hidden="true"></span>
                {/* MBBS Admission for Abroad */}
                <div className="relative group/dd">
                  <button
                    type="button"
                    className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-accent duration-200 capitalize hover:lg:text-accent group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
                  >
                    MBBS abroad
                    <svg
                      className="size-3 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
                      width={9}
                      height={5}
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_18_3317)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.131659 0.166081C-0.0438423 0.350172 -0.0438423 0.647899 0.131659 0.831536L3.85046 4.72381C3.93243 4.81094 4.03109 4.88031 4.14044 4.92772C4.24979 4.97512 4.36754 4.99957 4.48653 4.99957C4.60553 4.99957 4.72328 4.97512 4.83263 4.92772C4.94198 4.88031 5.04064 4.81094 5.12261 4.72381L8.86886 0.803354C8.95258 0.714378 8.99964 0.59655 9.00048 0.473798C9.00131 0.351046 8.95586 0.232575 8.87336 0.142445C8.83262 0.0977954 8.78323 0.0620702 8.72827 0.0374813C8.6733 0.0128923 8.61392 -3.68573e-05 8.55381 -0.000505581C8.49369 -0.000974304 8.43412 0.0110274 8.37879 0.0347563C8.32345 0.0584852 8.27353 0.0934361 8.23211 0.137445L4.80446 3.72563C4.76347 3.76923 4.71413 3.80394 4.65943 3.82767C4.60474 3.85139 4.54583 3.86363 4.48631 3.86363C4.42678 3.86363 4.36788 3.85139 4.31319 3.82767C4.25849 3.80394 4.20915 3.76923 4.16816 3.72563L0.767509 0.166081C0.726558 0.122495 0.677253 0.0877848 0.622595 0.0640655C0.567938 0.0403462 0.509072 0.0281141 0.449584 0.0281141C0.390095 0.0281141 0.331229 0.0403462 0.276571 0.0640655C0.221913 0.0877848 0.172608 0.122495 0.131659 0.166081Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_3317">
                          <rect
                            width={5}
                            height={9}
                            fill="white"
                            transform="matrix(0 1 -1 0 9 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div className="absolute left-1/2 right-0 max-w-xl w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-50 overflow-hidden bg-white/40 rounded-[10px] backdrop-[10px] transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                    <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                      <div className="w-full flex flex-col overflow-hidden rounded-[10px] text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          <a
                            href="#"
                            className="inline-flex items-center text-lg font-semibold text-muted"
                          >
                            MBBS Admission for Abroad
                            <img
                              src="/Arrowright.png"
                              alt="Arrowright"
                              className="size-6 ms-3"
                            />
                          </a>
                          <div className="flex justify-between items-start gap-6">
                            {/* Left Column */}
                            <div className="flex-1">
                              {/* States List */}
                              <div className="mt-6 grid grid-cols-2 capitalize gap-x-12 gap-y-3 text-accent text-sm">
                                <p>russia</p>
                                <p>kazakhstan</p>
                                <p>georgia</p>
                                <p>uzbekistan</p>
                                <p>mauritius</p>
                                <p>nepal</p>
                                <p>bangladesh</p>
                                <p>kyrgystan</p>
                                <p>philippines</p>
                                <p>italy</p>
                                <p>germany</p>
                                <p>egypt</p>
                                <p>china</p>
                                <p>america</p>
                                <p>london</p>
                                <p>singapore</p>
                              </div>
                            </div>
                            {/* Right Ad Section */}
                            <div className="w-68">
                              <div>
                                <img
                                  src="/dropdown-banner.png"
                                  alt="dropdown-banner"
                                />
                              </div>
                              <button className="bg-primary px-2 py-2 mt-5 rounded-md text-xs text-white flex items-center gap-1">
                                Get Started{" "}
                                <img
                                  src="/arrow-up-01-sharp.png"
                                  alt="Arrow"
                                  className="size-3"
                                />{" "}
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* Bottom Navigation */}
                        <div className="rounded-b-lg bg-[#F6F6F6]">
                          <div className=" flex gap-10 p-2 xl:p-4  text-accent text-sm font-medium">
                            <button className="flex items-center gap-1">
                              <span className="text-xl">+</span> Explore Countries
                            </button>
                            <button className="flex items-center gap-1">
                              <span className="text-xl">+</span> Download App
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="hidden h-5 w-px bg-gray-200 last:hidden md:block" aria-hidden="true"></span>
                <a
                  href="#"
                  className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-accent duration-200 capitalize hover:text-primary transition-colors"
                >
                  NRI quota
                </a>
                <span className="hidden h-5 w-px bg-gray-200 last:hidden md:block" aria-hidden="true"></span>
                <a
                  href="#"
                  className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-accent duration-200 capitalize hover:text-primary transition-colors"
                >
                  counseling plans
                </a>
                <span className="hidden h-5 w-px bg-gray-200 last:hidden md:block" aria-hidden="true"></span>
                {/* More Dropdown */}
                <div className="relative group/dd">
                  <button
                    type="button"
                    className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-accent duration-200 capitalize hover:lg:text-accent group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
                  >
                    Others
                    <svg
                      className="size-3 flex-none transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
                      width={9}
                      height={5}
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_18_3317)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.131659 0.166081C-0.0438423 0.350172 -0.0438423 0.647899 0.131659 0.831536L3.85046 4.72381C3.93243 4.81094 4.03109 4.88031 4.14044 4.92772C4.24979 4.97512 4.36754 4.99957 4.48653 4.99957C4.60553 4.99957 4.72328 4.97512 4.83263 4.92772C4.94198 4.88031 5.04064 4.81094 5.12261 4.72381L8.86886 0.803354C8.95258 0.714378 8.99964 0.59655 9.00048 0.473798C9.00131 0.351046 8.95586 0.232575 8.87336 0.142445C8.83262 0.0977954 8.78323 0.0620702 8.72827 0.0374813C8.6733 0.0128923 8.61392 -3.68573e-05 8.55381 -0.000505581C8.49369 -0.000974304 8.43412 0.0110274 8.37879 0.0347563C8.32345 0.0584852 8.27353 0.0934361 8.23211 0.137445L4.80446 3.72563C4.76347 3.76923 4.71413 3.80394 4.65943 3.82767C4.60474 3.85139 4.54583 3.86363 4.48631 3.86363C4.42678 3.86363 4.36788 3.85139 4.31319 3.82767C4.25849 3.80394 4.20915 3.76923 4.16816 3.72563L0.767509 0.166081C0.726558 0.122495 0.677253 0.0877848 0.622595 0.0640655C0.567938 0.0403462 0.509072 0.0281141 0.449584 0.0281141C0.390095 0.0281141 0.331229 0.0403462 0.276571 0.0640655C0.221913 0.0877848 0.172608 0.122495 0.131659 0.166081Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_18_3317">
                          <rect
                            width={5}
                            height={9}
                            fill="white"
                            transform="matrix(0 1 -1 0 9 0)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <div className="absolute left-2/5 right-0 max-w-32 w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-50 overflow-hidden bg-white/40 rounded-[10px] backdrop-[10px] transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                    <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                      <div className="w-full flex flex-col overflow-hidden rounded-[10px] rounded-2 text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          <div className="flex justify-between items-start gap-6">
                            {/* Left Column */}
                            <div className="flex-1">
                              {/* States List */}
                              <div className="grid grid-cols-1 capitalize gap-x-12 gap-y-3 text-accent text-sm">
                                <p>contact us</p>
                                <p>about us</p>
                                <p>FAQs</p>
                                <p>blog</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
               <div className="flex items-center space-x-2">
                {/* Icon */}
                <div className="text-black">
                 <svg className='blink-text' width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.4375 17.9091V17.6794C35.4271 13.8608 33.9001 10.2027 31.1925 7.5099C28.485 4.81711 24.8186 3.31018 21 3.32063C17.1814 3.33107 13.5233 4.85802 10.8305 7.56558C8.13773 10.2731 6.63081 13.9395 6.64125 17.7581V17.8894C5.67512 18.1587 4.82371 18.7369 4.217 19.5356C3.6103 20.3342 3.28165 21.3095 3.28125 22.3125V23.625C3.28125 24.8433 3.76523 26.0118 4.62673 26.8733C5.48822 27.7348 6.65666 28.2188 7.875 28.2188H8.56406C8.72927 30.3601 9.69607 32.3604 11.2714 33.8202C12.8468 35.28 14.9148 36.0919 17.0625 36.0938H21C21.8702 36.0938 22.7048 35.7481 23.3202 35.1327C23.9355 34.5173 24.2812 33.6827 24.2812 32.8125V32.1563C24.2812 31.9822 24.2121 31.8153 24.089 31.6922C23.966 31.5691 23.799 31.5 23.625 31.5H18.375C18.201 31.5 18.034 31.5691 17.911 31.6922C17.7879 31.8153 17.7188 31.9822 17.7188 32.1563V34.7813H17.0625C15.148 34.7813 13.3119 34.0207 11.9581 32.6669C10.6043 31.3132 9.84375 29.477 9.84375 27.5625V18.375C9.84375 18.201 9.77461 18.034 9.65154 17.911C9.52847 17.7879 9.36155 17.7188 9.1875 17.7188H7.95375C7.94853 14.2482 9.32218 10.9178 11.7725 8.46005C14.2229 6.00233 17.5492 4.61866 21.0197 4.61344C24.4902 4.60822 27.8207 5.98187 30.2784 8.43221C32.7361 10.8825 34.1198 14.2089 34.125 17.6794V17.7188H32.8125C32.6385 17.7188 32.4715 17.7879 32.3485 17.911C32.2254 18.034 32.1562 18.201 32.1562 18.375V27.5625C32.1562 27.7365 32.2254 27.9035 32.3485 28.0265C32.4715 28.1496 32.6385 28.2188 32.8125 28.2188H34.125C34.7283 28.2188 35.3256 28.0999 35.8829 27.8691C36.4403 27.6382 36.9467 27.2998 37.3733 26.8733C37.7998 26.4467 38.1382 25.9403 38.3691 25.383C38.5999 24.8256 38.7188 24.2283 38.7188 23.625V22.3125C38.719 21.323 38.3998 20.3599 37.8085 19.5665C37.2173 18.7731 36.3857 18.1918 35.4375 17.9091ZM19.0312 32.8125H22.9688C22.9688 33.3346 22.7613 33.8354 22.3921 34.2046C22.0229 34.5738 21.5221 34.7813 21 34.7813H19.0312V32.8125ZM8.53125 26.9063H7.875C7.4441 26.9063 7.01742 26.8214 6.61932 26.6565C6.22122 26.4916 5.8595 26.2499 5.55481 25.9452C5.25011 25.6405 5.00842 25.2788 4.84352 24.8807C4.67862 24.4826 4.59375 24.0559 4.59375 23.625V22.3125C4.59375 21.4423 4.93945 20.6077 5.55481 19.9923C6.17016 19.377 7.00476 19.0313 7.875 19.0313H8.53125V26.9063ZM37.4062 23.625C37.4062 24.0559 37.3214 24.4826 37.1565 24.8807C36.9916 25.2788 36.7499 25.6405 36.4452 25.9452C36.1405 26.2499 35.7788 26.4916 35.3807 26.6565C34.9826 26.8214 34.5559 26.9063 34.125 26.9063H33.4688V19.0313H34.125C34.9952 19.0313 35.8298 19.377 36.4452 19.9923C37.0605 20.6077 37.4062 21.4423 37.4062 22.3125V23.625Z" fill="black"/>
                 </svg>

                </div>

                {/* Text Section */}
                <div className="flex flex-col leading-tight">
                  <span className="text-primary font-semibold text-sm">
                    Call us now
                  </span>
                  <span className="text-black font-bold text-sm">
                    +91 9145879646
                  </span>
                </div>
              </div>
              {/* Mobile Hamburger */}
              <div className="flex gap-2 lg:hidden">
                <label
                  htmlFor="sideToggle"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    stroke="currentColor"
                    fill="black"
                    strokeWidth={0}
                    viewBox="0 0 512 512"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
                  </svg>
                </label>
                <button className="bg-black text-white px-3.5 py-2 rounded-full text-sm font-medium md:hidden">
                  Log in
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
        </div>
      </header>
    {/* </div> */}

{/* mobiel view in mobile  */}

<div>
  <input
    type="checkbox"
    className="peer/sideToggle hidden"
    name="sideToggle"
    id="sideToggle"
  />
  <label
    htmlFor="sideToggle"
    className="fixed inset-0 -z-[1011] backdrop-blur-sm bg-black/30 overflow-hidden peer-checked/sideToggle:z-[1010] peer-checked/sideToggle:opacity-100 opacity-0 transition-all duration-300 ease-out"
  />
  <div className="fixed flex flex-col h-screen inset-y-0 right-0 z-[1011] w-full overflow-y-auto bg-white overflow-hidden select-none text-white px-6 py-6 sm:max-w-sm shadow-2xl peer-checked/sideToggle:translate-x-0 translate-x-full transition-transform duration-500 ease-out">
    <div className="flex items-center justify-between border-b pb-3 border-b-[#DADADA]/70">
      <div className="h-10 flex">
        <a href="javascript:;" className="-ml-1.5 flex items-center">
          <img
            src="/Logo.png"
            alt="logo"
            className="size-full h-10"
          />
        </a>
      </div>
      <label
        htmlFor="sideToggle"
        type="button"
        className="-m-2.5 rounded-md p-2.5 text-accent"
      >
        <span className="sr-only">Close menu</span>
        <svg
          className="h-6 w-6 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </label>
    </div>
    <div className="mt-1 grow flex flex-fill overflow-auto scrollbar-hide scroll-smooth">
      <div className="divide-y divide-black/5 w-full">
        <div className="space-y-1 w-full">
          <div className="flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col w-full gap-y-2 divide-y divide-gray-200">
              <a
                href="#"
                className="lg:text-sm md:text-xs text-sm font-semibold text-accent active [.active]:text-primary pt-2 hover:text-primary transition-colors duration-200 py-3"
              >
                Home
              </a>
              {/* our services  */}
              <div className="relative flex flex-col gap-y-3 pt-3  ">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="ourservices"
                />
                <label
                  htmlFor="ourservices"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-accent cursor-pointer hover:text-primary transition-colors duration-200"
                >
                  our services
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-300 ease-out peer-checked/mm:rotate-45"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                </label>
                <div className="w-full peer-checked/mm:max-h-[1000px] peer-checked/mm:opacity-100 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                    <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            college view
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            neet predictor
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            target="_blank"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            MBBS abroad
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            compare college
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            counseling notification
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            choice filling maker
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            document builder
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* college predictor */}
              <div className="relative flex flex-col gap-y-3 pt-3 ">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="collegepredictor"
                />
                <label
                  htmlFor="collegepredictor"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-accent cursor-pointer hover:text-primary transition-colors duration-200"
                >
                  college predictor
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-300 ease-out peer-checked/mm:rotate-45"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                </label>
                <div className="w-full peer-checked/mm:max-h-[800px] peer-checked/mm:opacity-100 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                    <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            NEET UG Predictor
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            target="_blank"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            NEET PG Predictor
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            IIT Predictor
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* MBBS india */}
              <div className="relative flex flex-col gap-y-3 pt-3 ">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="mbbsindia"
                />
                <label
                  htmlFor="mbbsindia"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-accent cursor-pointer hover:text-primary transition-colors duration-200"
                >
                  MBBS india
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-300 ease-out peer-checked/mm:rotate-45"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                </label>
                <div className="w-full peer-checked/mm:max-h-[1500px] peer-checked/mm:opacity-100 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                    <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            punjab
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            target="_blank"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            haryana
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            himachal pradesh
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            karnataka
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            chandigarh
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            rajasthan
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            uttar pradesh
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            delhi
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* mBBS abroad */}
              <div className="relative flex flex-col gap-y-3 pt-3 ">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="mbbsabroad"
                />
                <label
                  htmlFor="mbbsabroad"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-accent cursor-pointer hover:text-primary transition-colors duration-200"
                >
                  mBBS abroad
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-300 ease-out peer-checked/mm:rotate-45"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                </label>
                <div className="w-full peer-checked/mm:max-h-[2000px] peer-checked/mm:opacity-100 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                    <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            russia
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            target="_blank"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            kazakhstan
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            georgia
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            uzbekistan
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            mauritius
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            nepal
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            bangladesh
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            kyrgystan
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            philippines
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            italy
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            china
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            egypt
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="lg:text-sm md:text-xs text-sm font-semibold text-accent [.active]:text-primary pt-2 hover:text-primary transition-colors duration-200 py-3"
              >
                NRI quota
              </a>
              <a
                href="#"
                className="lg:text-sm md:text-xs text-sm font-semibold text-accent [.active]:text-primary pt-2 hover:text-primary transition-colors duration-200 py-3"
              >
                counseling plans
              </a>
              {/* Others */}
              <div className="relative flex flex-col gap-y-3 pt-3 ">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="Others"
                />
                <label
                  htmlFor="Others"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-accent cursor-pointer hover:text-primary transition-colors duration-200"
                >
                  Others
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-300 ease-out peer-checked/mm:rotate-45"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                </label>
                <div className="w-full peer-checked/mm:max-h-[600px] peer-checked/mm:opacity-100 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="grid grid-cols-1 flex-wrap w-full gap-4">
                    <div className="w-full text-sm md:text-xs xl:text-sm *:flex *:items-center *:gap-x-3 *:py-1.5 *:relative">
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            contact us
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            target="_blank"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            about us
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            FAQs
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="size-4 opacity-90 group-hover/db:opacity-80 shrink-0"
                          stroke="#1e2939"
                          fill="#1e2939"
                          strokeWidth={0}
                          viewBox="0 0 1024 1024"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8zM512 837.5l-256-93.1V184h512v560.4l-256 93.1zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8-.1-4.3-3.7-7.9-8.1-7.9z" />
                        </svg>
                        <div className="flex-auto">
                          <a
                            href="#"
                            className="block font-semibold opacity-80 capitalize text-gray-800"
                          >
                            blog
                            <span className="absolute inset-0 z-[1]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Header