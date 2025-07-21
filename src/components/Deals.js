import React from "react";
import { Link } from "react-router-dom";

const mockDeals = [
  {
    id: 1,
    destination: "Paris",
    price: 399,
    description: "Romantic getaway to Paris!",
  },
  {
    id: 2,
    destination: "Tokyo",
    price: 599,
    description: "Experience cherry blossoms in Tokyo.",
  },
  {
    id: 3,
    destination: "Dubai",
    price: 499,
    description: "Luxury shopping and desert adventures.",
  },
  {
    id: 4,
    destination: "Sydney",
    price: 699,
    description: "Explore the beautiful Sydney Opera House.",
  },
];

const Deals = () => (
  <section className="py-16 bg-white min-h-[60vh]">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold mb-8">Latest Flight Deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockDeals.map((deal) => (
          <div key={deal.id} className="card">
            <h3 className="text-xl font-bold mb-2">{deal.destination}</h3>
            <div className="text-blue-600 font-bold text-lg mb-1">
              ${deal.price}
            </div>
            <div className="text-gray-600 mb-2">{deal.description}</div>
            <Link
              to={`/book/${deal.id}`}
              state={{
                flight: {
                  id: deal.id,
                  airline: "Special Deal",
                  flightNumber: `DEAL${deal.id}`,
                  departureTime: "Flexible",
                  arrivalTime: "Flexible",
                  duration: "Varies",
                  price: deal.price,
                  stops: 0,
                  cabinClass: "Economy",
                  destination: deal.destination,
                  description: deal.description,
                },
              }}
              className="btn btn-primary"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Deals;
