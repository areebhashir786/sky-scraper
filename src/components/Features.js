import React from "react";
import {
  Shield,
  Clock,
  DollarSign,
  Globe,
  Star,
  Headphones,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Booking",
      description:
        "Your personal and payment information is protected with bank-level security.",
      color: "text-green-600",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description:
        "Get help anytime with our round-the-clock customer support team.",
      color: "text-blue-600",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Best Price Guarantee",
      description:
        "We guarantee the best prices or we'll match any competitor's offer.",
      color: "text-yellow-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Coverage",
      description:
        "Access flights to over 500 destinations worldwide with major airlines.",
      color: "text-purple-600",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Experience",
      description:
        "Enjoy a seamless booking experience with our intuitive platform.",
      color: "text-pink-600",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Live Chat Support",
      description:
        "Connect with our travel experts instantly for personalized assistance.",
      color: "text-indigo-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose SkyScraper?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our comprehensive flight booking
            platform designed for modern travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`${feature.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Airlines</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">
                99.9%
              </div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
