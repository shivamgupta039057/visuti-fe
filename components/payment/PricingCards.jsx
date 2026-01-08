"use client";

import React from "react";
import { MdClose, MdCheckCircle } from "react-icons/md";

const plans = [
	{
		name: "Basic",
		price: 15000,
		features: [
			"Only Basic",
			"Only Basic",
			"Only alert",
			<MdClose key="cross1" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross2" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross3" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross4" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross5" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross6" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross7" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross8" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross9" className="mx-auto text-2xl text-gray-500" />,
		],
		highlight: false,
	},
	{
		name: "Premium",
		price: 35000,
		features: [
			"Complete Details with analyzation",
			"Only Basic",
			"Complete Notification For GOV. Related Counselling and details...",
			"Gov college counselling tracking via explanation (AIQ/85% Quota )",
			"Complete Gov College Fees Structure and DD details",
			"GOV and Semi gov college Documents Builder For required docs",
			<MdClose key="cross10" className="mx-auto text-2xl text-gray-500" />,
			<MdClose key="cross11" className="mx-auto text-2xl text-gray-500" />,
			"Predict your College as Your rank round wise",
			<MdClose key="cross12" className="mx-auto text-2xl text-gray-500" />,
			<MdCheckCircle key="check1" className="mx-auto text-2xl text-green-500" />,
			<MdCheckCircle key="check2" className="mx-auto text-2xl text-green-500" />,
		],
		highlight: true,
	},
	{
		name: "Elite",
		price: 55000,
		features: [
			"Complete Details with analyzation",
			"Complete details with hidden fees",
			"All Notification Gov And State wise Private College with video...",
			"GOV and Private College State wise Tracking and report",
			"Gov and Private College college Complete Hidden charges",
			"GOV/Semi Gov/Private college wise documents Builder",
			<MdCheckCircle key="check3" className="mx-auto text-2xl text-green-500" />,
			<MdCheckCircle key="check4" className="mx-auto text-2xl text-green-500" />,
			<MdCheckCircle key="check5" className="mx-auto text-2xl text-green-500" />,
			<MdCheckCircle key="check6" className="mx-auto text-2xl text-green-500" />,
			<MdCheckCircle key="check7" className="mx-auto text-2xl text-green-500" />,
			<MdCheckCircle key="check8" className="mx-auto text-2xl text-green-500" />,
		],
		highlight: false,
	},
];

const featureTitles = [
	"All Government college Health Reports",
	"Private college Health report",
	"Notification (24×7 Alert for Counselling & Admission related Dates and instructions. The c…",
	"Counselling Tracing",
	"Hidden Fees Details College Wise",
	"Documents AI Builder",
	"Chat Process",
	"Video & Audio Counselling",
	"NEET College Predictor",
	"College Compare",
	"Premium Seminar By Our Expert Counsellor Anshul Tiwari",
	"One To One Counselor",
];

const PricingCards = () => (
	<div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-8">
		<div className="overflow-x-auto">
			<table className="min-w-full border border-gray-300 border-separate border-spacing-0 rounded-2xl overflow-hidden text-sm sm:text-base">
				<thead>
					<tr>
						<th className="bg-white text-left px-2 sm:px-6 py-4 sm:py-6 text-lg sm:text-2xl font-bold border-b border-gray-300 border-r border-gray-300 w-1/4">
							Features
						</th>
						{plans.map((plan, idx) => (
							<th
								key={plan.name}
								className={`px-2 sm:px-6 py-4 sm:py-6 border-b border-gray-300 border-r border-gray-300 text-center w-1/4
                  ${
									plan.highlight
										? "bg-gradient-to-b from-green-400 to-teal-600 text-white"
										: "bg-gray-50 text-black"
								}
                `}
							>
								<div className={`mb-2 sm:mb-4`}>
									<span
										className={`inline-block px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-base sm:text-lg
                  ${
										plan.highlight
											? "bg-white/20 text-white"
											: "bg-gray-200 text-gray-800"
									}
                `}
									>
										{plan.name}
									</span>
								</div>
								<div className="text-xl sm:text-3xl font-extrabold mb-1 sm:mb-2">
									₹{plan.price.toLocaleString("en-IN")}/-
									<span
										className={`ml-1 sm:ml-2 text-base sm:text-lg ${
											plan.highlight ? "text-white/80" : "text-gray-500"
										}`}
									>
										+GST
									</span>
								</div>
								<button
									className={`w-full rounded-lg font-semibold py-2 sm:py-3 mt-2 sm:mt-4 mb-2
                  ${
										plan.highlight
											? "bg-white text-teal-700"
											: "bg-black text-white"
									}
                `}
								>
									Get Started
								</button>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{featureTitles.map((feature, i) => (
						<tr key={feature}>
							<td className="px-2 sm:px-6 py-3 sm:py-6 border-t border-gray-300 border-r border-gray-300 font-medium text-[14px] text-[#151515CC] whitespace-pre-line max-w-[180px] sm:max-w-xs break-words">
								{feature}
							</td>
							{plans.map((plan, idx) => (
								<td
									key={plan.name + i}
									className={`px-1 sm:px-6 py-2 sm:py-6 border-t border-gray-300 border-r border-gray-300 text-center text-[12px] sm:text-[14px] text-[#151515CC] align-middle`}
								>
									{plan.features[i]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);

export default PricingCards;

