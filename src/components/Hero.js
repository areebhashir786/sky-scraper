import React from "react";
import { Plane, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Flight
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover amazing deals on flights worldwide. Book with confidence
            and enjoy seamless travel experiences with our advanced booking
            system.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <Plane className="h-8 w-8 text-blue-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Destinations</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Users className="h-8 w-8 text-purple-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Calendar className="h-8 w-8 text-indigo-600" />
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/flights" className="btn btn-primary text-lg px-8 py-4">
              Start Booking Now
            </Link>
            <Link to="/deals" className="btn btn-secondary text-lg px-8 py-4">
              View Deals
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce"
        onClick={() => {
          window.scrollTo({ top: 550, behavior: "smooth" });
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
