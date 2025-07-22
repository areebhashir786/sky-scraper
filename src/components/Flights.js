import React from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const mockFlights = [
  {
    id: 1,
    airline: "Sky Airlines",
    flightNumber: "SK123",
    departureTime: "10:00 AM",
    arrivalTime: "2:30 PM",
    duration: "4h 30m",
    price: 299,
    stops: 0,
    cabinClass: "Economy",
  },
  {
    id: 2,
    airline: "Global Airways",
    flightNumber: "GA456",
    departureTime: "2:15 PM",
    arrivalTime: "6:45 PM",
    duration: "4h 30m",
    price: 349,
    stops: 1,
    cabinClass: "Economy",
  },
  {
    id: 3,
    airline: "Premium Airlines",
    flightNumber: "PA789",
    departureTime: "8:30 AM",
    arrivalTime: "1:00 PM",
    duration: "4h 30m",
    price: 499,
    stops: 0,
    cabinClass: "Business",
  },
];

const Flights = () => {
  const navigate = useNavigate();
  return (
    <section className="py-10 md:py-16 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">
          All Flights
        </h2>
        <div className="space-y-6">
          {mockFlights.map((flight) => (
            <div
              key={flight.id}
              className="border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                {/* From -> To Info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-left">
                  <div>
                    <div className="font-bold text-lg md:text-xl">
                      {flight.departureTime}
                    </div>
                    <div className="text-sm text-gray-600">From</div>
                  </div>

                  <div className="flex items-center justify-center my-2 sm:my-0 space-x-2">
                    <div className="w-10 sm:w-16 h-px bg-gray-300" />
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="w-10 sm:w-16 h-px bg-gray-300" />
                  </div>

                  <div>
                    <div className="font-bold text-lg md:text-xl">
                      {flight.arrivalTime}
                    </div>
                    <div className="text-sm text-gray-600">To</div>
                  </div>
                </div>

                {/* Price and Airline Info */}
                <div className="text-center md:text-right">
                  <div className="text-xl md:text-2xl font-bold text-blue-600">
                    ${flight.price}
                  </div>
                  <div className="text-sm text-gray-600">{flight.airline}</div>
                  <div className="text-sm text-gray-600">
                    {flight.flightNumber}
                  </div>
                </div>
              </div>

              {/* Footer Details */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 gap-2">
                <div className="flex flex-col sm:flex-row sm:space-x-6">
                  <span>Duration: {flight.duration}</span>
                  <span>Stops: {flight.stops}</span>
                  <span>Class: {flight.cabinClass}</span>
                </div>
                <div className="text-center sm:text-right mt-2 sm:mt-0">
                  <Link
                    to={`/book/${flight.id}`}
                    state={{ flight }}
                    className="btn btn-primary"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flights;
