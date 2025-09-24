import React from 'react'

const Header = () => {
  return (
    <>
    <div className="group/ns">
  <header
    id="mainHeader"
    className="w-full z-[1010] bg-white transition-all duration-300 shadow-none  "
  >
    {/* top header  */}
    <div className="bg-primary text-white py-3 max-md:hidden group-[.scrolled]/ns:fixed group-[.scrolled]/ns:shadow-md group-[.scrolled]/ns:animate-fixed-nav w-full z-[1010] ">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justifybetween gap-4">
        {/* Left: Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white">
          {/* Call Section */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              <img
                src="/call.png"
                alt="call"
                className="size-full"
              />
            </span>
            <span>
              <div className="lg:text-sm/5 text-xs font-semibold sprinkle-text text-nowrap">
                Call for counselling:
              </div>
              <div className="lg:text-lg/5 text-md/4 font-semibold sprinkle-text text-nowrap">
                +91 9145879646
              </div>
            </span>
          </div>
          {/* WhatsApp Section */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
              <img
                src="/Whatsapp.png"
                alt="WhatsApp"
                className="size-full"
              />
            </span>
            <span>
              <div className="lg:text-sm/5 text-xs font-semibold sprinkle-text text-nowrap">
                whatsapp us on
              </div>
              <div className="lg:text-lg/5 text-md/4 font-semibold sprinkle-text text-nowrap">
                +91 9145879646
              </div>
            </span>
          </div>
          {/* Center: Search Bar */}
          <div className="w-full lg:w-[450px] md:w-[300px] sm:w-[250px] max-md:hidden">
            <div className="flex items-center bg-white rounded-xl shadow-md border border-[#226E49]/20  overflow-hidden">
              {/* Left Icon */}
              <span className="pl-4 flex items-center">
                <img
                  src="/University.png"
                  alt="icon"
                  className="w-5 h-5"
                />
              </span>
              {/* Input Field */}
              <input
                type="text"
                placeholder="Search For Colleges, Universities, Courses & etc..."
                className="flex-1 px-4 py-2 text-gray-700 text-sm focus:outline-none"
              />
              {/* Search Button */}
              <button className="bg-[#20B486] text-white p-2 rounded-full transition m-1 size-8 flex items-center justify-center">
                <img
                  src="/search.png"
                  alt="search"
                  className="size-full"
                />
              </button>
            </div>
          </div>
        </div>
        {/* Right: Icons + Login */}
        {/* Login Button */}
        <button className="bg-white text-nowrap text-black px-5 py-2 rounded-full text-sm font-medium ms-auto">
          Log in
        </button>
      </div>
    </div>
    {/* bottom header  */}
    <div className="bg-white shadow-md sticky top-0 z-50 py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Logo.png"
              alt="Logo"
              className="md:h-16 sm:h-14 h-10"
            />
          </div>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 font-medium">
            <a
              href="#"
              className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-primary"
            >
              Home
            </a>
            {/* Dropdown our services*/}
            <div className="relative group/dd">
              <button
                type="button"
                className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-black duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
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
              <div className="absolute left-1/2 right-0 max-w-xl w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-10 overflow-hidden bg-white/40 rounded-3xl backdrop-blur-lg transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                  <div className="w-full flex flex-col overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-lg font-semibold text-[#9A98A9]"
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
                          <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-3 text-black text-sm">
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
                      <div className=" flex gap-10 p-2 xl:p-4  text-black text-sm font-medium">
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
            {/*  Dropdown  college predictor*/}
            <div className="relative group/dd">
              <button
                type="button"
                className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-black duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
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
              <div className="absolute left-1/2 right-0 max-w-xl w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-10 overflow-hidden bg-white/40 rounded-3xl backdrop-blur-lg transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                  <div className="w-full flex flex-col overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-lg font-semibold text-[#9A98A9]"
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
                          <div className="mt-6 grid grid-cols-2 capitalize gap-x-12 gap-y-3 text-black text-sm">
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
                      <div className=" flex gap-10 p-2 xl:p-4  text-black text-sm font-medium">
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
            {/* MBBS Admission for NRI Quota */}
            <div className="relative group/dd">
              <button
                type="button"
                className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-black duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
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
              <div className="absolute left-1/2 right-0 max-w-xl w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-10 overflow-hidden bg-white/40 rounded-3xl backdrop-blur-lg transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                  <div className="w-full flex flex-col overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-lg font-semibold text-[#9A98A9]"
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
                          <div className="mt-6 grid grid-cols-2 capitalize gap-x-12 gap-y-3 text-black text-sm">
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
                      <div className=" flex gap-10 p-2 xl:p-4  text-black text-sm font-medium">
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
            {/* MBBS Admission for Abroad */}
            <div className="relative group/dd">
              <button
                type="button"
                className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-black duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
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
              <div className="absolute left-1/2 right-0 max-w-xl w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-10 overflow-hidden bg-white/40 rounded-3xl backdrop-blur-lg transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                  <div className="w-full flex flex-col overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-3xl text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <a
                        href="#"
                        className="inline-flex items-center text-lg font-semibold text-[#9A98A9]"
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
                          <div className="mt-6 grid grid-cols-2 capitalize gap-x-12 gap-y-3 text-black text-sm">
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
                      <div className=" flex gap-10 p-2 xl:p-4  text-black text-sm font-medium">
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
            <a
              href="#"
              className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-black duration-200 capitalize hover:lg:text-black"
            >
              NRI quota
            </a>
            <a
              href="#"
              className="xl:text-sm lg:text-xs text-sm font-medium leading-6 text-black duration-200 capitalize hover:lg:text-black"
            >
              counseling plans
            </a>
            {/* More Dropdown */}
            <div className="relative group/dd">
              <button
                type="button"
                className="flex items-center gap-x-1 xl:text-sm lg:text-xs text-sm font-medium leading-6 text-black duration-200 capitalize hover:lg:text-black group-hover/dd:before:absolute group-hover/dd:before:-bottom-[34px] group-hover/dd:before:left-0 group-hover/dd:before:h-10 group-hover/dd:before:w-full group-hover/dd:before:z-[1]"
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
              <div className="absolute left-2/5 right-0 max-w-32 w-screen xl:top-[47px] group-hover/ns:xl:top-[49px] lg:top-[40px] group-hover/ns:lg:top-[45px] z-10 overflow-hidden bg-white/40 rounded-3xl backdrop-blur-lg transition ease-out duration-200 opacity-100 group-hover/dd:opacity-100 origin-top [transform:rotateX(90deg)_translateX(-50%)] group-hover/dd:[transform:rotateX(0deg)_translateX(-50%)]">
                <div className="grid grid-cols-1 flex-wrap w-full gap-4 p-1 items-stretch">
                  <div className="w-full flex flex-col overflow-hidden xl:rounded-3xl lg:rounded-2xl rounded-2 text-xs xl:text-sm leading-6 bg-white/70 backdrop-blur-lg shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      <div className="flex justify-between items-start gap-6">
                        {/* Left Column */}
                        <div className="flex-1">
                          {/* States List */}
                          <div className="grid grid-cols-1 capitalize gap-x-12 gap-y-3 text-black text-sm">
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
</div>

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
    className="fixed inset-0 -z-[1011] backdrop-blur-xl bg-[#009245]/10 overflow-hidden peer-checked/sideToggle:z-[1010] peer-checked/sideToggle:opacity-100 opacity-0 duration-100"
  />
  <div className="fixed flex flex-col h-screen inset-y-0 right-0 z-[1011] w-full overflow-y-auto bg-white overflow-hidden backdrop-blur-lg select-none text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black/10 peer-checked/sideToggle:translate-x-0 peer-checked/sideToggle:opacity-100 translate-x-full opacity-0 duration-300">
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
        className="-m-2.5 rounded-md p-2.5 text-black"
      >
        <span className="sr-only">Close menu</span>
        <svg
          className="h-6 w-6 text-black"
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
    <div className=" mt-1 grow flex flex-fill overflow-auto">
      <div className=" divide-y divide-black w-full">
        <div className="space-y-1 w-full">
          <div className="flex flex-col gap-5 items-center w-full">
            <div className="flex flex-col w-full gap-y-2 divide-y divide-grey-400">
              <a
                href="#"
                className="lg:text-sm md:text-xs text-sm font-semibold text-black active [.active]:text-[#20B486] pt-2"
              >
                Home
              </a>
              {/* our services  */}
              <div className="relative flex flex-col gap-y-3 pt-3">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="ourservices"
                />
                <label
                  htmlFor="ourservices"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-black"
                >
                  our services
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
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
                <div className="w-full peer-checked/mm:block hidden">
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
              <div className="relative flex flex-col gap-y-3 pt-3">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="collegepredictor"
                />
                <label
                  htmlFor="collegepredictor"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-black"
                >
                  college predictor
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
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
                <div className="w-full peer-checked/mm:block hidden">
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
              <div className="relative flex flex-col gap-y-3 pt-3">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="mbbsindia"
                />
                <label
                  htmlFor="mbbsindia"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-black"
                >
                  MBBS india
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
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
                <div className="w-full peer-checked/mm:block hidden">
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
              <div className="relative flex flex-col gap-y-3 pt-3">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="mbbsabroad"
                />
                <label
                  htmlFor="mbbsabroad"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-black"
                >
                  mBBS abroad
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
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
                <div className="w-full peer-checked/mm:block hidden">
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
                className="lg:text-sm md:text-xs text-sm font-semibold text-black active [.active]:text-[#20B486] pt-2"
              >
                NRI quota
              </a>
              <a
                href="#"
                className="lg:text-sm md:text-xs text-sm font-semibold text-black active [.active]:text-[#20B486] pt-2"
              >
                counseling plans
              </a>
              {/* Others */}
              <div className="relative flex flex-col gap-y-3 pt-3">
                <input
                  className="peer/mm hidden"
                  type="checkbox"
                  name="mmMenu"
                  id="Others"
                />
                <label
                  htmlFor="Others"
                  className="flex capitalize items-center gap-x-0.5 lg:text-sm md:text-xs text-sm font-semibold text-black"
                >
                  Others
                  <svg
                    className="xl:size-5 lg:size-4 size-5 flex-none ml-auto transition-transform duration-500 group-hover/dd:[transform:rotateX(180deg)]"
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
                <div className="w-full peer-checked/mm:block hidden">
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