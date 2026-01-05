"use client";
import React, { useState } from "react";

const faqData = [
	{
		question: "How long until we deliver your first blog post?",
		answer:
			"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
	},
	{
		question: "How long until we deliver your first blog post?",
		answer:
			"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
	},
	{
		question: "How long until we deliver your first blog post?",
		answer:
			"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
	},
	{
		question: "How long until we deliver your first blog post?",
		answer:
			"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
	},
	{
		question: "How long until we deliver your first blog post?",
		answer:
			"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
	},
	{
		question: "How long until we deliver your first blog post?",
		answer:
			"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
	},
	{
		question: "How long until we deliver your first blog post?",
		answer:
			"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
	},
	{
		question: "How long until we deliver your first blog post?",
		answer:
			"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.",
	},
];

const FAQSection = () => {
	// Track open index for each column
	const [openIndexes, setOpenIndexes] = useState({ left: 0, right: null });

	// Split data for two columns
	const leftFaqs = faqData.filter((_, i) => i % 2 === 0);
	const rightFaqs = faqData.filter((_, i) => i % 2 === 1);

	return (
		<section className="bg-[#f7fafd] py-10 sm:py-14 md:py-16">
			<div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
				<div className="text-center mb-6 sm:mb-10">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
						Frequently Ask Questions
					</h2>
					<p className="text-gray-500 text-sm sm:text-base md:text-lg">
						Hear from students who turned their dreams into reality with our expert
						guidance.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					{/* Left Column */}
					<div className="flex flex-col gap-4 sm:gap-6">
						{leftFaqs.map((faq, idx) => (
							<div
								key={idx}
								className={`bg-white rounded-xl shadow p-6 transition-all duration-300 ${
									openIndexes.left === idx ? "border-l-4 border-primary" : ""
								}`}
							>
								<button
									className="flex items-center w-full text-left focus:outline-none"
									onClick={() =>
										setOpenIndexes({
											...openIndexes,
											left: openIndexes.left === idx ? null : idx,
										})
									}
								>
									<span className="mr-3 text-2xl font-bold text-primary">
										{openIndexes.left === idx ? "–" : "+"}
									</span>
									<span className="font-semibold text-lg text-gray-900">
										{faq.question}
									</span>
								</button>
								{openIndexes.left === idx && (
									<div className="mt-4 text-gray-600 text-base">
										{faq.answer}
									</div>
								)}
							</div>
						))}
					</div>
					{/* Right Column */}
					<div className="flex flex-col gap-4 sm:gap-6">
						{rightFaqs.map((faq, idx) => (
							<div
								key={idx}
								className={`bg-white rounded-xl shadow p-6 transition-all duration-300 ${
									openIndexes.right === idx ? "border-l-4 border-primary" : ""
								}`}
							>
								<button
									className="flex items-center w-full text-left focus:outline-none"
									onClick={() =>
										setOpenIndexes({
											...openIndexes,
											right: openIndexes.right === idx ? null : idx,
										})
									}
								>
									<span className="mr-3 text-2xl font-bold text-primary">
										{openIndexes.right === idx ? "–" : "+"}
									</span>
									<span className="font-semibold text-lg text-gray-900">
										{faq.question}
									</span>
								</button>
								{openIndexes.right === idx && (
									<div className="mt-4 text-gray-600 text-base">
										{faq.answer}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
