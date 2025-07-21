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
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">Search Results</h2>
        <div className="space-y-4">
          {mockFlights.map((flight) => (
            <div
              key={flight.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() =>
                navigate(`/flight/${flight.id}`, { state: { flight } })
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="font-bold text-lg">
                      {flight.departureTime}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formData.fromCity}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-px bg-gray-300"></div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="w-16 h-px bg-gray-300"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">
                      {flight.arrivalTime}
                    </div>
                    <div className="text-sm text-gray-600">
                      {formData.toCity}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">
                    ${flight.price}
                  </div>
                  <div className="text-sm text-gray-600">{flight.airline}</div>
                  <div className="text-sm text-gray-600">
                    {flight.flightNumber}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Duration: {flight.duration}</span>
                  <span>Stops: {flight.stops}</span>
                  <span>Class: {flight.cabinClass}</span>
                </div>
                <div className="flex gap-2">
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

export default SearchResults;
