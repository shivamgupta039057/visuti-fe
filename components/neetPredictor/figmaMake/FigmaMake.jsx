import React from 'react'
import { GraduationCap, TrendingUp, MapPin, Star, Users, Award, Phone } from 'lucide-react';

function FigmaMake() {
  const predictedColleges = [
    {
      name: "All India Institute of Medical Sciences (AIIMS)",
      location: "New Delhi",
      rank: "1",
      cutoff: "720",
      admissionChance: "High",
      rating: 4.9,
      fees: {
        "2024": { tuition: 1856, hostel: 12000, mess: 36000, misc: 5000 },
        "2025": { tuition: 2042, hostel: 13200, mess: 39600, misc: 5500 },
        "2026": { tuition: 2246, hostel: 14520, mess: 43560, misc: 6050 },
        "2027": { tuition: 2471, hostel: 15972, mess: 47916, misc: 6655 }
      },
      seats: 125,
      type: "Government",
      established: "1956"
    },
    {
      name: "Armed Forces Medical College (AFMC)",
      location: "Pune, Maharashtra",
      rank: "2",
      cutoff: "715",
      admissionChance: "High",
      rating: 4.8,
      fees: {
        "2024": { tuition: 0, hostel: 0, mess: 0, misc: 0 },
        "2025": { tuition: 0, hostel: 0, mess: 0, misc: 0 },
        "2026": { tuition: 0, hostel: 0, mess: 0, misc: 0 },
        "2027": { tuition: 0, hostel: 0, mess: 0, misc: 0 }
      },
      seats: 130,
      type: "Government",
      established: "1948"
    },
    {
      name: "Lady Hardinge Medical College",
      location: "New Delhi",
      rank: "3",
      cutoff: "710",
      admissionChance: "Moderate",
      rating: 4.7,
      fees: {
        "2024": { tuition: 5550, hostel: 8000, mess: 30000, misc: 8000 },
        "2025": { tuition: 6105, hostel: 8800, mess: 33000, misc: 8800 },
        "2026": { tuition: 6716, hostel: 9680, mess: 36300, misc: 9680 },
        "2027": { tuition: 7387, hostel: 10648, mess: 39930, misc: 10648 }
      },
      seats: 150,
      type: "Government",
      established: "1916"
    },
    {
      name: "Kasturba Medical College (KMC)",
      location: "Manipal, Karnataka",
      rank: "4",
      cutoff: "680",
      admissionChance: "High",
      rating: 4.6,
      fees: {
        "2024": { tuition: 2350000, hostel: 180000, mess: 120000, misc: 50000 },
        "2025": { tuition: 2585000, hostel: 198000, mess: 132000, misc: 55000 },
        "2026": { tuition: 2843500, hostel: 217800, mess: 145200, misc: 60500 },
        "2027": { tuition: 3127850, hostel: 239580, mess: 159720, misc: 66550 }
      },
      seats: 250,
      type: "Private",
      established: "1953"
    }
  ];

  const studentProfile = {
    score: 695,
    rank: 2150,
    category: "General",
    state: "Maharashtra"
  };

  // These function variants are valid in JSX syntax (no types)
  const formatFees = (amount) => {
    if (amount === 0) return "Free";
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    return `₹${amount.toLocaleString()}`;
  };

  const getTotalFees = (fees) => {
    return fees.tuition + fees.hostel + fees.mess + fees.misc;
  };

  const getChanceColor = (chance) => {
    switch (chance) {
      case "High":
        return "bg-green-500";
      case "Moderate":
        return "bg-yellow-500";
      case "Low":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className=" p-6">
      <div className="mx-auto">
        <div className="grid lg:grid-cols-1 gap-8 items-start ml-8">
          {/* Left Side - Tablet Device */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Tablet Frame */}
              <div className="w-[600px] scrollbar-hide h-[800px] bg-gray-800 rounded-[50px] p-8 shadow-2xl ml-24 mr-auto">
                {/* Screen */}
                <div className="w-full scrollbar-hide h-full bg-white rounded-[30px] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-8 bg-blue-600 flex items-center justify-between px-6">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <div className="text-white text-xs">NEET Predictor Pro</div>
                    <div className="text-white text-xs">100%</div>
                  </div>

                  {/* App Content */}
                  <div className="h-full bg-white overflow-auto scrollbar-hide">
                    <div className="p-3">
                      {/* Student Profile Header */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 mb-3 text-white">
                        <div className="flex items-center space-x-3 mb-3">
                          {/* Student Photo */}
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              AP
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">Arjun Patel</h3>
                            <p className="text-blue-100 text-sm">NEET 2024 Aspirant</p>
                            <div className="flex items-center mt-1">
                              <Star className="w-3 h-3 text-yellow-300 fill-current mr-1" />
                              <span className="text-xs text-blue-100">
                                All India Rank: 2,150
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Course & Plan Selection */}
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-white/20 rounded-lg p-2">
                            <p className="text-blue-100 mb-1">Selected Course</p>
                            <p className="font-semibold">MBBS</p>
                          </div>
                          <div className="bg-white/20 rounded-lg p-2">
                            <p className="text-blue-100 mb-1">Plan Type</p>
                            <p className="font-semibold">Premium Analysis</p>
                          </div>
                          <div className="bg-white/20 rounded-lg p-2">
                            <p className="text-blue-100 mb-1">Score</p>
                            <p className="font-semibold">{studentProfile.score}/720</p>
                          </div>
                          <div className="bg-white/20 rounded-lg p-2">
                            <p className="text-blue-100 mb-1">State Quota</p>
                            <p className="font-semibold">Maharashtra</p>
                          </div>
                        </div>
                      </div>
                      {/* Colleges Summary Overview */}
                      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-3 mb-3 border border-green-200">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          <GraduationCap className="w-4 h-4 mr-2 text-green-600" />
                          Colleges Summary Overview
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-xl font-bold text-green-600">78</div>
                            <div className="text-gray-600">Total Eligible Colleges</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-xl font-bold text-blue-600">28</div>
                            <div className="text-gray-600">High Chance</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-xl font-bold text-orange-600">35</div>
                            <div className="text-gray-600">Moderate Chance</div>
                          </div>
                          <div className="bg-white rounded-lg p-2 text-center">
                            <div className="text-xl font-bold text-purple-600">15</div>
                            <div className="text-gray-600">Dream Colleges</div>
                          </div>
                        </div>
                        {/* Depth Summary */}
                        <div className="bg-white rounded-lg p-2 mb-2">
                          <h5 className="font-semibold text-gray-700 text-xs mb-2">
                            Analysis Depth Summary
                          </h5>
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Government Medical Colleges:
                              </span>
                              <span className="font-semibold text-green-600">
                                42 colleges
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Private Medical Colleges:
                              </span>
                              <span className="font-semibold text-blue-600">
                                24 colleges
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Deemed Universities:</span>
                              <span className="font-semibold text-purple-600">
                                12 colleges
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Average Fee Range:</span>
                              <span className="font-semibold text-orange-600">
                                ₹2.5L - ₹18L
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">States Covered:</span>
                              <span className="font-semibold text-teal-600">
                                15 states
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Detailed College Analysis */}
                      <div className="bg-white rounded-xl p-3 mb-3 border shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-blue-600" />
                          Top College Recommendations
                        </h4>
                        <div className="space-y-2">
                          {predictedColleges.slice(0, 4).map((college, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-2 border">
                              {/* College Header */}
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                  <h5 className="font-bold text-gray-800 text-sm leading-tight">
                                    {college.name}
                                  </h5>
                                  <div className="flex items-center text-xs text-gray-600 mt-1">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {college.location}
                                    <span className="ml-2 text-gray-400">•</span>
                                    <span className="ml-1">
                                      Est. {college.established}
                                    </span>
                                  </div>
                                </div>
                                <div className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getChanceColor(college.admissionChance)}`}>
                                  {college.admissionChance}
                                </div>
                              </div>
                              {/* College Details Grid */}
                              <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                                <div className="text-center bg-white rounded p-1">
                                  <p className="text-gray-500">Cutoff 2024</p>
                                  <p className="font-bold text-blue-600">
                                    {college.cutoff}
                                  </p>
                                </div>
                                <div className="text-center bg-white rounded p-1">
                                  <p className="text-gray-500">NIRF Rank</p>
                                  <p className="font-bold text-purple-600">
                                    #{college.rank}
                                  </p>
                                </div>
                                <div className="text-center bg-white rounded p-1">
                                  <p className="text-gray-500">Annual Fee</p>
                                  <p className="font-bold text-green-600">
                                    {formatFees(getTotalFees(college.fees["2024"]))}
                                  </p>
                                </div>
                                <div className="text-center bg-white rounded p-1">
                                  <p className="text-gray-500">Seats</p>
                                  <p className="font-bold text-orange-600">
                                    {college.seats}
                                  </p>
                                </div>
                              </div>
                              {/* Additional Details */}
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-blue-50 rounded p-1">
                                  <p className="text-blue-700 font-medium">College Type</p>
                                  <p className="text-blue-600">{college.type}</p>
                                </div>
                                <div className="bg-green-50 rounded p-1">
                                  <p className="text-green-700 font-medium">Rating</p>
                                  <div className="flex items-center">
                                    <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                    <span className="text-green-600 font-semibold">{college.rating}/5.0</span>
                                  </div>
                                </div>
                              </div>
                              {/* 4-Year Fee Projection */}
                              <div className="mt-2 bg-gray-100 rounded p-2">
                                <p className="text-xs font-medium text-gray-700 mb-1">
                                  4-Year Total Cost
                                </p>
                                <div className="flex justify-between items-center">
                                  <span className="text-xs text-gray-600">
                                    Total Investment:
                                  </span>
                                  <span className="font-bold text-purple-600">
                                    {formatFees(
                                      Object.values(college.fees).reduce((total, yearFees) => 
                                        total + getTotalFees(yearFees), 0
                                      )
                                    )}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Analytics Charts */}
                      <div className="bg-white rounded-xl p-3 mb-3 border shadow-sm">
                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                          Advanced Analytics Dashboard
                        </h4>

                        {/* State vs AIQ Availability Comparison */}
                        <div className="bg-blue-50 rounded-lg p-3 mb-3">
                          <h5 className="font-semibold text-gray-700 text-xs mb-2">State vs AIQ Availability</h5>
                          <div className="grid grid-cols-2 gap-3">
                            {/* State Quota Chart */}
                            <div className="bg-white rounded p-2">
                              <div className="text-center mb-2">
                                <div className="relative w-12 h-12 mx-auto">
                                  <div
                                    className="w-12 h-12 rounded-full"
                                    style={{
                                      background: `conic-gradient(#3b82f6 0deg ${(28/78) * 360}deg, #e5e7eb ${(28/78) * 360}deg 360deg)`
                                    }}
                                  ></div>
                                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-xs font-bold text-blue-600">28</span>
                                  </div>
                                </div>
                                <p className="text-xs font-semibold text-blue-600 mt-1">State Quota</p>
                                <p className="text-xs text-gray-600">36% of total</p>
                              </div>
                              <div className="space-y-1 text-xs">
                                <div className="flex justify-between">
                                  <span>Government:</span>
                                  <span className="font-semibold">22</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Private:</span>
                                  <span className="font-semibold">6</span>
                                </div>
                              </div>
                            </div>
                            {/* AIQ Chart */}
                            <div className="bg-white rounded p-2">
                              <div className="text-center mb-2">
                                <div className="relative w-12 h-12 mx-auto">
                                  <div
                                    className="w-12 h-12 rounded-full"
                                    style={{
                                      background: `conic-gradient(#8b5cf6 0deg ${(35/78) * 360}deg, #e5e7eb ${(35/78) * 360}deg 360deg)`
                                    }}
                                  ></div>
                                  <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-xs font-bold text-purple-600">35</span>
                                  </div>
                                </div>
                                <p className="text-xs font-semibold text-purple-600 mt-1">All India Quota</p>
                                <p className="text-xs text-gray-600">45% of total</p>
                              </div>
                              <div className="space-y-1 text-xs">
                                <div className="flex justify-between">
                                  <span>Government:</span>
                                  <span className="font-semibold">20</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Private:</span>
                                  <span className="font-semibold">15</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* State-wise Fees Line Graph */}
                        <div className="bg-green-50 rounded-lg p-3 mb-3">
                          <h5 className="font-semibold text-gray-700 text-xs mb-2">State-wise Average Fees Trend</h5>
                          <div className="bg-white rounded p-2">
                            <div className="relative h-16 mb-2">
                              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                                <span>₹20L</span>
                                <span>₹15L</span>
                                <span>₹10L</span>
                                <span>₹5L</span>
                                <span>₹0L</span>
                              </div>
                              <div className="ml-6 h-full relative">
                                <div className="absolute inset-0">
                                  <div className="h-full flex flex-col justify-between">
                                    {[0, 1, 2, 3, 4].map((i) => (
                                      <div key={i} className="border-t border-gray-200 first:border-t-0"></div>
                                    ))}
                                  </div>
                                </div>
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 64">
                                  {/* Government Colleges Line */}
                                  <polyline 
                                    points="20,48 60,35 100,25 140,30 180,20" 
                                    fill="none" 
                                    stroke="#10b981" 
                                    strokeWidth="1.5"
                                    strokeDasharray="2,2"
                                  />
                                  {/* Private Colleges Line */}
                                  <polyline 
                                    points="20,35 60,15 100,10 140,12 180,8" 
                                    fill="none" 
                                    stroke="#f59e0b" 
                                    strokeWidth="1.5"
                                  />
                                  {/* Data points */}
                                  <circle cx="20" cy="48" r="1.5" fill="#10b981" />
                                  <circle cx="60" cy="35" r="1.5" fill="#10b981" />
                                  <circle cx="100" cy="25" r="1.5" fill="#10b981" />
                                  <circle cx="140" cy="30" r="1.5" fill="#10b981" />
                                  <circle cx="180" cy="20" r="1.5" fill="#10b981" />
                                  <circle cx="20" cy="35" r="1.5" fill="#f59e0b" />
                                  <circle cx="60" cy="15" r="1.5" fill="#f59e0b" />
                                  <circle cx="100" cy="10" r="1.5" fill="#f59e0b" />
                                  <circle cx="140" cy="12" r="1.5" fill="#f59e0b" />
                                  <circle cx="180" cy="8" r="1.5" fill="#f59e0b" />
                                </svg>
                              </div>
                            </div>
                            <div className="ml-6 flex justify-between text-xs text-gray-500">
                              <span>MH</span>
                              <span>KA</span>
                              <span>TN</span>
                              <span>DL</span>
                              <span>UP</span>
                            </div>
                            <div className="flex justify-center space-x-4 mt-2 text-xs">
                              <div className="flex items-center">
                                <div className="w-3 h-0.5 bg-green-500 mr-1"></div>
                                <span>Government</span>
                              </div>
                              <div className="flex items-center">
                                <div className="w-3 h-0.5 bg-yellow-500 mr-1"></div>
                                <span>Private</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Round-wise College Availability */}
                        <div className="bg-purple-50 rounded-lg p-3 mb-3">
                          <h5 className="font-semibold text-gray-700 text-xs mb-2">Round-wise Admission Availability</h5>
                          <div className="bg-white rounded p-2">
                            <div className="mb-4">
                              <div className="relative h-20 mb-2">
                                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
                                  <span>50</span>
                                  <span>40</span>
                                  <span>30</span>
                                  <span>20</span>
                                  <span>10</span>
                                  <span>0</span>
                                </div>
                                <div className="ml-6 h-full relative">
                                  <div className="absolute inset-0">
                                    <div className="h-full flex flex-col justify-between">
                                      {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <div key={i} className="border-t border-gray-200 first:border-t-0"></div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="absolute inset-0 flex items-end justify-around px-2">
                                    {/* Round 1 Bar */}
                                    <div className="flex flex-col items-center w-8">
                                      <div className="bg-blue-500 w-6 rounded-t" style={{height: '84%'}}></div>
                                      <div className="absolute -top-2 text-xs font-bold text-blue-600">42</div>
                                    </div>
                                    {/* Round 2 Bar */}
                                    <div className="flex flex-col items-center w-8">
                                      <div className="bg-green-500 w-6 rounded-t" style={{height: '56%'}}></div>
                                      <div className="absolute -top-2 text-xs font-bold text-green-600">28</div>
                                    </div>
                                    {/* Round 3 Bar */}
                                    <div className="flex flex-col items-center w-8">
                                      <div className="bg-orange-500 w-6 rounded-t" style={{height: '16%'}}></div>
                                      <div className="absolute -top-2 text-xs font-bold text-orange-600">8</div>
                                    </div>
                                    {/* Stray Vacancy Bar */}
                                    <div className="flex flex-col items-center w-8">
                                      <div className="bg-purple-500 w-6 rounded-t" style={{height: '6%'}}></div>
                                      <div className="absolute -top-2 text-xs font-bold text-purple-600">3</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="ml-6 flex justify-around text-xs text-gray-600">
                                <div className="text-center w-8">
                                  <p className="font-medium text-blue-600">R1</p>
                                  <p className="text-xs">July</p>
                                </div>
                                <div className="text-center w-8">
                                  <p className="font-medium text-green-600">R2</p>
                                  <p className="text-xs">Aug</p>
                                </div>
                                <div className="text-center w-8">
                                  <p className="font-medium text-orange-600">R3</p>
                                  <p className="text-xs">Sep</p>
                                </div>
                                <div className="text-center w-8">
                                  <p className="font-medium text-purple-600">SV</p>
                                  <p className="text-xs">Oct</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-2 mb-3">
                              <div className="bg-blue-50 rounded p-2">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-xs font-semibold text-blue-700">
                                      Round 1 - Premium Phase
                                    </p>
                                    <p className="text-xs text-blue-600">
                                      Government + Top Private
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm font-bold text-blue-600">42</p>
                                    <p className="text-xs text-blue-500">52% seats</p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-green-50 rounded p-2">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-xs font-semibold text-green-700">
                                      Round 2 - Standard Phase
                                    </p>
                                    <p className="text-xs text-green-600">
                                      Remaining Govt + Private
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm font-bold text-green-600">28</p>
                                    <p className="text-xs text-green-500">35% seats</p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-orange-50 rounded p-2">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-xs font-semibold text-orange-700">
                                      Round 3 - Final Phase
                                    </p>
                                    <p className="text-xs text-orange-600">
                                      Limited Options
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm font-bold text-orange-600">8</p>
                                    <p className="text-xs text-orange-500">10% seats</p>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-purple-50 rounded p-2">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-xs font-semibold text-purple-700">
                                      Stray Vacancy
                                    </p>
                                    <p className="text-xs text-purple-600">Last Chance</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm font-bold text-purple-600">3</p>
                                    <p className="text-xs text-purple-500">3% seats</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="pt-2 border-t border-gray-200">
                              <div className="grid grid-cols-3 gap-2 text-xs">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded p-2 text-center">
                                  <p className="font-bold text-blue-700">Peak Time</p>
                                  <p className="text-blue-600">July-Aug</p>
                                  <p className="text-xs text-blue-500 mt-1">
                                    87% colleges
                                  </p>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded p-2 text-center">
                                  <p className="font-bold text-green-700">Total Seats</p>
                                  <p className="text-green-600">12,450+</p>
                                  <p className="text-xs text-green-500 mt-1">All rounds</p>
                                </div>
                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded p-2 text-center">
                                  <p className="font-bold text-orange-700">Success Rate</p>
                                  <p className="text-orange-600">92%</p>
                                  <p className="text-xs text-orange-500 mt-1">Your rank</p>
                                </div>
                              </div>
                              <div className="mt-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded p-2 border border-indigo-200">
                                <div className="flex items-center justify-center">
                                  <Star className="w-3 h-3 text-indigo-600 mr-1" />
                                  <p className="text-xs font-semibold text-indigo-700">
                                    Recommendation: Focus on Rounds 1 & 2
                                  </p>
                                </div>
                                <p className="text-xs text-indigo-600 text-center mt-1">
                                  87% of your eligible seats available in first two rounds
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Overall Distribution Summary */}
                        <div className="bg-gray-50 rounded-lg p-2">
                          <h5 className="font-semibold text-gray-700 text-xs mb-2 text-center">
                            Total College Distribution
                          </h5>
                          <div className="flex items-center justify-center mb-2">
                            <div className="relative w-16 h-16">
                              <div
                                className="w-16 h-16 rounded-full"
                                style={{
                                  background: `conic-gradient(
                                    #3b82f6 0deg ${(28 / 78) * 360}deg,
                                    #8b5cf6 ${(28 / 78) * 360}deg ${((28 + 35) / 78) * 360}deg,
                                    #10b981 ${((28 + 35) / 78) * 360}deg ${((28 + 35 + 12) / 78) * 360}deg,
                                    #f59e0b ${((28 + 35 + 12) / 78) * 360}deg 360deg
                                  )`
                                }}
                              ></div>
                              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-gray-700">78</span>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-1 text-xs">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-1"></div>
                              <span>State: 28 (36%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
                              <span>AIQ: 35 (45%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                              <span>Private: 12 (15%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-1"></div>
                              <span>Deemed: 8 (10%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Regional Analysis */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 mb-3 border border-purple-200">
                        <h4 className="font-bold text-gray-800 mb-2 text-center">
                          Regional Distribution
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                              <span>North India (15)</span>
                            </div>
                            <span className="font-semibold">₹2.8L avg</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span>South India (22)</span>
                            </div>
                            <span className="font-semibold">₹8.5L avg</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-green-500 h-1 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                              <span>West India (18)</span>
                            </div>
                            <span className="font-semibold">₹6.2L avg</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-orange-500 h-1 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                              <span>East India (12)</span>
                            </div>
                            <span className="font-semibold">₹4.1L avg</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1">
                            <div className="bg-purple-500 h-1 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                        </div>
                      </div>
                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-2">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs py-3 px-3 rounded-lg font-medium flex items-center justify-center">
                          <Users className="w-3 h-3 mr-1" />
                          Detailed Report
                        </button>
                        <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs py-3 px-3 rounded-lg font-medium flex items-center justify-center">
                          <Phone className="w-3 h-3 mr-1" />
                          Expert Counselling
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Device Labels */}
              <div className="absolute -right-12 top-1/2 transform -translate-y-1/2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                  <p className="text-xs text-gray-600 font-medium">Live Results</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Detailed Analysis */}
        </div>
        {/* Detailed College Analysis */}
        {/* Additional Features */}
      </div>
    </div>
  );
}

export default FigmaMake