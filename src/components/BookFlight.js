import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookFlight = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state?.flight;
  const [form, setForm] = useState({ name: "", email: "", passengers: 1 });
  const [booked, setBooked] = useState(false);

  if (!flight) {
    return (
      <div className="container mx-auto py-16 text-center">
        No flight selected.{" "}
        <button className="btn btn-primary mt-4" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]:
        name === "passengers" ? Math.max(1, Math.min(9, Number(value))) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">Book Your Flight</h2>
        <div className="card p-8 mb-8">
          <div className="mb-2">
            <span className="font-bold">Airline:</span> {flight.airline}
          </div>
          <div className="mb-2">
            <span className="font-bold">Flight Number:</span>{" "}
            {flight.flightNumber}
          </div>
          <div className="mb-2">
            <span className="font-bold">Departure:</span> {flight.departureTime}
          </div>
          <div className="mb-2">
            <span className="font-bold">Arrival:</span> {flight.arrivalTime}
          </div>
          <div className="mb-2">
            <span className="font-bold">Duration:</span> {flight.duration}
          </div>
          <div className="mb-2">
            <span className="font-bold">Class:</span> {flight.cabinClass}
          </div>
          <div className="mb-2">
            <span className="font-bold">Price:</span> ${flight.price}
          </div>
        </div>
        {booked ? (
          <div className="text-green-600 text-xl font-semibold text-center">
            Your flight has been booked for <b>{form.passengers}</b> passenger
            {form.passengers > 1 ? "s" : ""}!<br />
            Check your email for confirmation.
          </div>
        ) : (
          <form className="card p-6" onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="font-semibold mb-1">Passenger Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label className="font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label className="font-semibold mb-1">Number of Passengers</label>
              <input
                type="number"
                name="passengers"
                min={1}
                max={9}
                value={form.passengers}
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn-primary mt-2" type="submit">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BookFlight;
