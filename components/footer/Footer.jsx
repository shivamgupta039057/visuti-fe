import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:py-12 py-10 ">
        <div>
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo-white.png" alt="" />
              {/* logo */}
            </div>
            {/* Menu */}
            <ul className="flex flex-wrap sm:gap-6 gap-2 text-sm mt-4 md:mt-0">
              <li>
                <Link
                  href="/aboutUs"
                  className="sm:text-sm text-xs text-white transtion hover:text-white/80"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="sm:text-sm text-xs text-white transtion hover:text-white/80"
                >
                  Hiring
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="sm:text-sm text-xs text-white transtion hover:text-white/80"
                >
                  Magazine
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="sm:text-sm text-xs text-white transtion hover:text-white/80"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="sm:text-sm text-xs text-white transtion hover:text-white/80"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/contactUs"
                  className="sm:text-sm text-xs text-white transtion hover:text-white/80"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="sm:text-sm text-xs text-white transtion hover:text-white/80"
                >
                  Blogs
                </Link>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-3 mt-4 md:mt-0">
              <a href="https://www.instagram.com/visuticareer/?igshid=ZDdkNTZiNTM%3D" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  className="w-6 h-6"
                  alt="Instagram"
                />
              </a>
              <a href="https://www.youtube.com/@visuticareer" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  className="w-6 h-6"
                  alt="YouTube"
                />
              </a>
              <a href="https://www.facebook.com/visuticareer?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384053.png"
                  className="w-6 h-6"
                  alt="Facebook"
                />
              </a>
              <a href="https://t.me/visuticareer" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                  className="w-6 h-6"
                  alt="Telegram"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid-cols-1 sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
          {/* College */}
          <div>
            <h4 className="text-white font-extrabold sm:text-xl text-lg sm:mb-4 mb-3">
              College
            </h4>
            <ul className="space-y-2">
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in India</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Rajasthan</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Haryana</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Chandigarh</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Uttar Pradesh</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Gujarat</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Chhattisgarh</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Kerala</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in West Bengal</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Abroad</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Russia</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Georgia</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Nepal</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Kyrgyzstan</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Kazakhstan</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Top Medical Colleges in Tajikistan</Link></li>
            </ul>
          </div>
          {/* Fee Structure */}
          <div>
            <h4 className="text-white font-extrabold sm:text-xl text-lg sm:mb-4 mb-3 max-sm:mt-6">
              Fee Structure
            </h4>
            <ul className="space-y-2">
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Rajasthan MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Haryana MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Chandigarh MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Uttar Pradesh MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Gujrat MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Chhattisgarh MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Kerala MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for West Bengal MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Assam MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Abroad MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Russia MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Georgia MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Nepal MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Kyrgyzstan MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Kazakhstan MBBS</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Fee Structure for Tajikistan MBBS</Link></li>
            </ul>
          </div>
          {/* Services + Quick Links */}
          <div>
            <h4 className="text-white font-extrabold sm:text-xl text-lg sm:mb-4 mb-3 max-sm:mt-6">
              More To Explore
            </h4>
            <ul className="space-y-2 mb-6">
              <li><Link href="/neetpredictor" className="sm:text-sm text-xs text-white transtion hover:text-white/80">NEET UG Predictor</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">NEET PG Predictor</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">IIT College Predictor</Link></li>
            </ul>
            <h4 className="text-white font-extrabold sm:text-xl text-lg sm:mb-4 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Home</Link></li>
              <li><Link href="/neet" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Neet UG</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Neet PG</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">MBBS Abroad</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">NRI Admission</Link></li>
              <li><Link href="/payment" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Plans</Link></li>
              <li><Link href="/predictor" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Predictor</Link></li>
              <li><Link href="/aboutUs" className="sm:text-sm text-xs text-white transtion hover:text-white/80">About Us</Link></li>
              <li><Link href="/contactUs" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Contact Us</Link></li>
            </ul>
          </div>
          {/* Location */}
          <div>
            {/* More To Explore */}
            <h4 className="text-white font-extrabold sm:text-xl text-lg sm:mb-4 mb-3 max-sm:mt-6">
              Services
            </h4>
            <ul className="space-y-2 mb-6">
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">College View</Link></li>
              <li><Link href="/neetpredictor" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Neet Predictor</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">MBBS Abroad</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Compare College</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Counseling Notification</Link></li>
              <li><Link href="/choicefillingmaker" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Choice Filling Maker</Link></li>
              <li><Link href="/coming-soon" className="sm:text-sm text-xs text-white transtion hover:text-white/80">Document Builder</Link></li>
            </ul>
            <h4 className="text-white font-extrabold sm:text-xl text-lg sm:mb-4 mb-3">
              Location
            </h4>
            <ul className="space-y-2">
              <li>Call : +91 9145879646</li>
              <li>Email : Contact@Visuticareer.In</li>
              <li>
                C-28, Vidhyut Nagar C,
                <br />
                Vaishali Nagar, Jaipur 302021
              </li>
            </ul>
            {/* <div className="flex items-center gap-3 mt-4">
    <a href="#" className="bg-[#2A2A2A] h-9 w-9 rounded-xl flex items-center justify-center p-2 transition hover:scale-105"><img src="/facebook.png" alt="facebook" className="size-full"></a>
    <a href="#" className="bg-[#2A2A2A] h-9 w-9 rounded-xl flex items-center justify-center p-2 transition hover:scale-105"><img src="/crome.png" alt="crome" className="size-full"></a>
    <a href="#" className="bg-[#2A2A2A] h-9 w-9 rounded-xl flex items-center justify-center p-2 transition hover:scale-105"><img src="/linkdin.png" alt="linkdin" className="size-full"></a>
    <a href="#" className="bg-[#2A2A2A] h-9 w-9 rounded-xl flex items-center justify-center p-2 transition hover:scale-105"><img src="/instagram.png" alt="instagram" className="size-full"></a>
    <a href="#" className="bg-[#2A2A2A] h-9 w-9 rounded-xl flex items-center justify-center p-2 transition hover:scale-105"><img src="/beyanse.png" alt="instagram" className="size-full"></a>

  </div> */}
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 text-xs flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p>© 2025 Visuti Edu &amp; Tech Private Limited | All Rights Reserved</p>
        <p className="mt-2 md:mt-0"><Link href="/coming-soon" className="hover:text-white/80 transition-colors">Privacy Policy &amp; Terms And Condition</Link></p>
      </div>
    </footer>

  )
}

export default Footer
