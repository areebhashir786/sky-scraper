import React from "react";
import { useLocation, Link } from "react-router-dom";

const FlightDetails = () => {
  const location = useLocation();
  const details = location.state?.flight || null;

  if (!details) {
    return (
      <div className="container mx-auto py-16 text-center">
        No flight details available.
      </div>
    );
  }

  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">Flight Details</h2>
        <div className="card p-8 mb-6">
          <div className="mb-4">
            <span className="font-bold">Airline:</span> {details.airline}
          </div>
          <div className="mb-4">
            <span className="font-bold">Flight Number:</span>{" "}
            {details.flightNumber}
          </div>
          <div className="mb-4">
            <span className="font-bold">Departure:</span>{" "}
            {details.departureTime}
          </div>
          <div className="mb-4">
            <span className="font-bold">Arrival:</span> {details.arrivalTime}
          </div>
          <div className="mb-4">
            <span className="font-bold">Duration:</span> {details.duration}
          </div>
          <div className="mb-4">
            <span className="font-bold">Stops:</span> {details.stops}
          </div>
          <div className="mb-4">
            <span className="font-bold">Class:</span> {details.cabinClass}
          </div>
          <div className="mb-4">
            <span className="font-bold">Price:</span> ${details.price}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Link
            to={`/book/${details.id}`}
            state={{ flight: details }}
            className="btn btn-primary"
          >
            Book Now
          </Link>
          <Link to="/flights" className="btn btn-secondary">
            Back to Flights
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlightDetails;
