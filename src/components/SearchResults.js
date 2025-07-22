import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return (
      <div className="container mx-auto py-16 text-center">
        No search data provided.
      </div>
    );
  }

  return (
    <section className="py-12 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center sm:text-left">
          Search Results
        </h2>

        <div className="space-y-6">
          {mockFlights.map((flight) => (
            <div
              key={flight.id}
              className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() =>
                navigate(`/flight/${flight.id}`, { state: { flight } })
              }
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Flight Times */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0">
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-base sm:text-lg">
                      {flight.departureTime}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formData.fromCity}
                    </div>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start space-x-2">
                    <div className="w-12 sm:w-16 h-px bg-gray-300" />
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="w-12 sm:w-16 h-px bg-gray-300" />
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="font-bold text-base sm:text-lg">
                      {flight.arrivalTime}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formData.toCity}
                    </div>
                  </div>
                </div>

                {/* Price and airline info */}
                <div className="text-center sm:text-right">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">
                    ${flight.price}
                  </div>
                  <div className="text-sm text-gray-600">{flight.airline}</div>
                  <div className="text-sm text-gray-600">
                    {flight.flightNumber}
                  </div>
                </div>
              </div>

              {/* Additional Info & Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 pt-4 border-t border-gray-100 gap-3">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span>Duration: {flight.duration}</span>
                  <span>Stops: {flight.stops}</span>
                  <span>Class: {flight.cabinClass}</span>
                </div>
                <div className="text-center sm:text-right">
                  <Link
                    to={`/book/${flight.id}`}
                    state={{ flight }}
                    className="inline-block btn btn-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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

export default SearchResults;
