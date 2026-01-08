'use client';
import { FaQrcode, FaBell, FaCheckCircle } from 'react-icons/fa';

export default function CounsellingCards() {
  const cards = [
    {
      title: 'All-in-One Counselling Dashboard',
      color: 'blue',
      icon: <FaQrcode className="text-blue-600  size-12 p-3 text-2xl bg-[#EFF6FF] rounded-[10px] [box-shadow:0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]
" />,
      points: [
        'Track AIQ + all state quotas in one unified platform',
        'Real-time updates for choice filling and allotment rounds',
        'Seamless navigation across 28+ states including UP, MP, MH, RJ',
      ],
    },
    {
      title: 'Live Updates & Notifications',
      color: 'pink',
      icon: <FaBell className="text-pink-600  size-12 p-3 text-2xl bg-[#EFF6FF] rounded-[10px] [box-shadow:0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]" />,
      points: [
        'Instant alerts for schedule changes and seat allotments',
        'Centralized updates from all portals in one click',
        'WhatsApp and email notifications for every round',
      ],
    },
      {
      title: 'All-in-One Counselling Dashboard',
      color: 'blue',
      icon: <FaQrcode className="text-blue-600  size-12 p-3 text-2xl bg-[#EFF6FF] rounded-[10px] [box-shadow:0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]
" />,
      points: [
        'Track AIQ + all state quotas in one unified platform',
        'Real-time updates for choice filling and allotment rounds',
        'Seamless navigation across 28+ states including UP, MP, MH, RJ',
      ],
    },
    {
      title: 'Live Updates & Notifications',
      color: 'pink',
      icon: <FaBell className="text-pink-600  size-12 p-3 text-2xl bg-[#EFF6FF] rounded-[10px] [box-shadow:0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]" />,
      points: [
        'Instant alerts for schedule changes and seat allotments',
        'Centralized updates from all portals in one click',
        'WhatsApp and email notifications for every round',
      ],
    },
      {
      title: 'All-in-One Counselling Dashboard',
      color: 'blue',
      icon: <FaQrcode className="text-blue-600  size-12 p-3 text-2xl bg-[#EFF6FF] rounded-[10px] [box-shadow:0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]
" />,
      points: [
        'Track AIQ + all state quotas in one unified platform',
        'Real-time updates for choice filling and allotment rounds',
        'Seamless navigation across 28+ states including UP, MP, MH, RJ',
      ],
    },
       {
      title: 'All-in-One Counselling Dashboard',
      color: 'blue',
      icon: <FaQrcode className="text-blue-600  size-12 p-3 text-2xl bg-[#EFF6FF] rounded-[10px] [box-shadow:0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]
" />,
      points: [
        'Track AIQ + all state quotas in one unified platform',
        'Real-time updates for choice filling and allotment rounds',
        'Seamless navigation across 28+ states including UP, MP, MH, RJ',
      ],
    },
   
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 sm:p-6 p-4 transition hover:shadow-md"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`p-3 rounded-xl bg-${card.color}-50 flex items-center justify-center`}
            >
              {card.icon}
            </div>
            <div>
              <h3 className="font-semibold text-[#0A0A0A] sm:text-base text-sm">{card.title}</h3>
              <div
                className={`w-10 h-[2px] bg-[linear-gradient(90deg,_#2B7FFF_0%,_#00B8DB_100%)] mt-1 rounded-full`}
              ></div>
            </div>
          </div>

          {/* Points */}
          <ul className="space-y-2 text-gray-700 text-sm">
            {card.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 sm:text-base text-xs">
                    <svg className='w-4 h-4 min-w-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="url(#paint0_linear_1_12992)"/>
                    <path d="M6.5 10.5L8.5 12.5L13.5 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_12992" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2B7FFF"/>
                    <stop offset="1" stopColor="#00B8DB"/>
                    </linearGradient>
                    </defs>
                    </svg>

                <span>{point}</span>
              </li>
            ))}
          </ul>
          
        </div>
      ))}
        {/* Download App Card */}
        {/* <div className="bg-[#F2FBED] rounded-2xl p-6 flex flex-col  justify-between shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
              <div className="space-y-2">
                <h2 className="text-xl text-[#06241B]">
                  Download The <span className="font-bold">Visuti Career App</span>
                </h2>
                <p className="text-[#00802C] sm:text-base text-xs">
                  New features. New appearance. No risk and credit card required.
                </p>
              </div>

              <div className="flex gap-3 mt-3">
                <a href="#" className="block">
                  <img
                    src="/playstore.png"
                    alt="Get it on Google Play"
                    className="h-12 w-auto"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="/appstorw.png"
                    alt="Download on the App Store"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div> */}
    </div>
  );
}
