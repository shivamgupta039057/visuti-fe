import React from "react";

const bundles = [
  {
    id: 1,
    title: "All India Quota (AIQ) Plan",
    desc:
      "Explore your admission chances in 50% AIQ seats across top government medical colleges in India.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&h=120&fit=crop",
    price: 999,
    originalPrice: 4000,
    discount: "74% off",
    bestSeller: true,
    viewDetailsUrl: "#",
    alt: "Bundle card illustration"
  },
  {
    id: 2,
    title: "State Wise Plan",
    desc:
      "Get detailed prediction for top government medical colleges of your preferred state including reservation and category advantage.",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=200&h=120&fit=crop",
    price: 799,
    originalPrice: 3000,
    discount: "73% off",
    bestSeller: false,
    viewDetailsUrl: "#",
    alt: "State plan illustration"
  },
  {
    id: 3,
    title: "All India + State Combo Plan",
    desc:
      "Get both All India Quota and State Quota prediction in one bundle & maximize your chance with double insights.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200&h=120&fit=crop",
    price: 1499,
    originalPrice: 7000,
    discount: "78% off",
    bestSeller: true,
    viewDetailsUrl: "#",
    alt: "Combo plan illustration"
  },
  {
    id: 4,
    title: "All India + State Combo Plan",
    desc:
      "Get both All India Quota and State Quota prediction in one bundle & maximize your chance with double insights.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200&h=120&fit=crop",
    price: 1499,
    originalPrice: 7000,
    discount: "78% off",
    bestSeller: true,
    viewDetailsUrl: "#",
    alt: "Combo plan illustration"
  },
  {
    id: 5,
    title: "All India + State Combo Plan",
    desc:
      "Get both All India Quota and State Quota prediction in one bundle & maximize your chance with double insights.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200&h=120&fit=crop",
    price: 1499,
    originalPrice: 7000,
    discount: "78% off",
    bestSeller: true,
    viewDetailsUrl: "#",
    alt: "Combo plan illustration"
  },
   {
    id: 6,
    title: "All India + State Combo Plan",
    desc:
      "Get both All India Quota and State Quota prediction in one bundle & maximize your chance with double insights.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=200&h=120&fit=crop",
    price: 1499,
    originalPrice: 7000,
    discount: "78% off",
    bestSeller: true,
    viewDetailsUrl: "#",
    alt: "Combo plan illustration"
  },
];

const BundleCards = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center justify-center py-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Pricing <span className="text-primary">And Plans</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500">
          Choose the best plan tailored for your counselling journey.
        </p>
      </div>
      <div className="p-4 min-h-screen flex flex-wrap gap-8 items-center justify-center">
        {bundles.map((bundle) => (
          <div
            key={bundle.id}
            className="max-w-xs w-full bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Header Section with Image */}
            <div className="relative h-40 flex items-center justify-between">
              {/* Best Seller Badge */}
              {bundle.bestSeller && (
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Best Seller
                </div>
              )}
              {/* Product or Plan Image */}
              <img
                src={bundle.image}
                alt={bundle.alt}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {bundle.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {bundle.desc}
              </p>

              {/* View Details Link */}
              <a
                href={bundle.viewDetailsUrl}
                className="text-primary text-sm font-semibold hover:text-primary inline-block mb-4"
              >
                View Details
              </a>

              {/* Pricing */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{bundle.price}/-
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹{bundle.originalPrice}
                </span>
                <span className="text-sm font-semibold text-primary">
                  ({bundle.discount})
                </span>
              </div>

              {/* Buy Now Button */}
              <button className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundleCards;
