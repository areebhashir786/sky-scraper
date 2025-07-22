import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Search,
  ArrowRight,
  ArrowRightLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    tripType: "roundtrip",
    fromCity: "",
    toCity: "",
    departureDate: new Date(),
    returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    passengers: 1,
    cabinClass: "economy",
  });

  const [airports, setAirports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Mock airport data - in real app, this would come from API
  const mockAirports = [
    {
      code: "JFK",
      name: "John F. Kennedy International Airport",
      city: "New York",
    },
    {
      code: "LAX",
      name: "Los Angeles International Airport",
      city: "Los Angeles",
    },
    { code: "LHR", name: "London Heathrow Airport", city: "London" },
    { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris" },
    { code: "DXB", name: "Dubai International Airport", city: "Dubai" },
    { code: "SIN", name: "Singapore Changi Airport", city: "Singapore" },
    { code: "HND", name: "Tokyo Haneda Airport", city: "Tokyo" },
    { code: "SYD", name: "Sydney Airport", city: "Sydney" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    setAirports(mockAirports);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const swapCities = () => {
    setFormData((prev) => ({
      ...prev,
      fromCity: prev.toCity,
      toCity: prev.fromCity,
    }));
  };

  const searchFlights = async () => {
    setLoading(true);
    setShowResults(true);

    try {
      // Simulate API call - in real app, this would call the actual flight search API
      const mockResults = [
        {
          id: 1,
          airline: "Sky Airlines",
          flightNumber: "SK123",
          departure: "10:00 AM",
          arrival: "2:30 PM",
          duration: "4h 30m",
          price: 299,
          stops: 0,
          cabinClass: "Economy",
        },
        {
          id: 2,
          airline: "Global Airways",
          flightNumber: "GA456",
          departure: "2:15 PM",
          arrival: "6:45 PM",
          duration: "4h 30m",
          price: 349,
          stops: 1,
          cabinClass: "Economy",
        },
        {
          id: 3,
          airline: "Premium Airlines",
          flightNumber: "PA789",
          departure: "8:30 AM",
          arrival: "1:00 PM",
          duration: "4h 30m",
          price: 499,
          stops: 0,
          cabinClass: "Business",
        },
      ];

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSearchResults(mockResults);
    } catch (error) {
      console.error("Error searching flights:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass formData to /search route
    navigate("/search", { state: { formData } });
  };

  return (
    <section id="flights" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Search Flights
            </h2>
            <p className="text-xl text-gray-600">
              Find the best deals on flights worldwide
            </p>
          </div>

          {/* Booking Form */}
          <div className="card mb-8 p-6 border rounded-lg shadow-sm">
            <form onSubmit={handleSubmit}>
              {/* Trip Type Selection */}
              <div className="flex justify-center mb-8">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  {["roundtrip", "oneway", "multicity"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`px-6 py-3 rounded-md font-medium transition-colors ${
                        formData.tripType === type
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => handleInputChange("tripType", type)}
                    >
                      {type === "roundtrip"
                        ? "Round Trip"
                        : type === "oneway"
                        ? "One Way"
                        : "Multi City"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Flight Details */}
              <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8">
                {/* From City */}
                <div className="flex-1 min-w-[240px]">
                  <label className="flex items-center gap-1 text-gray-700 mb-1">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">From</span>
                  </label>
                  <select
                    value={formData.fromCity}
                    onChange={(e) =>
                      handleInputChange("fromCity", e.target.value)
                    }
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg"
                  >
                    <option value="">Select departure city</option>
                    {airports.map((airport) => (
                      <option key={airport.code} value={airport.code}>
                        {airport.city} ({airport.code})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Swap Button */}
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={swapCities}
                    className="w-full md:w-auto h-12 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg"
                  >
                    <ArrowRightLeft className="h-5 w-5 text-gray-600 mx-auto" />
                  </button>
                </div>

                {/* To City */}
                <div className="flex-1 min-w-[240px]">
                  <label className="flex items-center gap-1 text-gray-700 mb-1">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">To</span>
                  </label>
                  <select
                    value={formData.toCity}
                    onChange={(e) =>
                      handleInputChange("toCity", e.target.value)
                    }
                    required
                    className="w-full p-3 border-2 border-gray-200 rounded-lg"
                  >
                    <option value="">Select arrival city</option>
                    {airports.map((airport) => (
                      <option key={airport.code} value={airport.code}>
                        {airport.city} ({airport.code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Dates and Passengers */}
              <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-8">
                {/* Departure Date */}
                <div className="flex-1 min-w-[240px]">
                  <label className="flex items-center gap-1 text-gray-700 mb-1">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Departure Date</span>
                  </label>
                  <DatePicker
                    selected={formData.departureDate}
                    onChange={(date) =>
                      handleInputChange("departureDate", date)
                    }
                    minDate={new Date()}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg"
                    dateFormat="MMM dd, yyyy"
                  />
                </div>

                {/* Return Date */}
                {formData.tripType === "roundtrip" && (
                  <div className="flex-1 min-w-[240px]">
                    <label className="flex items-center gap-1 text-gray-700 mb-1">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Return Date</span>
                    </label>
                    <DatePicker
                      selected={formData.returnDate}
                      onChange={(date) => handleInputChange("returnDate", date)}
                      minDate={formData.departureDate}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg"
                      dateFormat="MMM dd, yyyy"
                    />
                  </div>
                )}

                {/* Passengers */}
                <div className="flex-1 min-w-[240px]">
                  <label className="flex items-center gap-1 text-gray-700 mb-1">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Passengers</span>
                  </label>
                  <select
                    value={formData.passengers}
                    onChange={(e) =>
                      handleInputChange("passengers", parseInt(e.target.value))
                    }
                    className="w-full p-3 border-2 border-gray-200 rounded-lg"
                  >
                    {[...Array(9)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? "Passenger" : "Passengers"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Cabin Class */}
                <div className="flex-1 min-w-[240px]">
                  <label className="flex items-center gap-1 text-gray-700 mb-1">
                    <Plane className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Cabin Class</span>
                  </label>
                  <select
                    value={formData.cabinClass}
                    onChange={(e) =>
                      handleInputChange("cabinClass", e.target.value)
                    }
                    className="w-full p-3 border-2 border-gray-200 rounded-lg"
                  >
                    <option value="economy">Economy</option>
                    <option value="premium_economy">Premium Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary text-lg px-12 py-4 flex items-center justify-center gap-2 mx-auto"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Search className="h-5 w-5" />
                      <span>Search Flights</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Search Results */}
          {showResults && (
            <div className="card p-6 border rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Available Flights
              </h3>

              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Searching for flights...</p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((flight) => (
                    <div
                      key={flight.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="font-bold text-lg">
                              {flight.departure}
                            </div>
                            <div className="text-sm text-gray-600">
                              {formData.fromCity}
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                          <div className="text-center">
                            <div className="font-bold text-lg">
                              {flight.arrival}
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
                          <div className="text-sm text-gray-600">
                            {flight.airline}
                          </div>
                          <div className="text-sm text-gray-600">
                            {flight.flightNumber}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-center justify-between mt-4 pt-4 border-t text-sm text-gray-600 gap-4">
                        <div className="flex gap-4">
                          <span>Duration: {flight.duration}</span>
                          <span>Stops: {flight.stops}</span>
                          <span>Class: {flight.cabinClass}</span>
                        </div>
                        <button className="btn btn-primary mt-2 md:mt-0">
                          Select Flight
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Plane className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    No flights found for your search criteria.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlightBookingForm;
