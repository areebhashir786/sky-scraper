import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FlightBookingForm from "./components/FlightBookingForm";
import SearchResults from "./components/SearchResults";
import FlightDetails from "./components/FlightDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Flights from "./components/Flights";
import BookFlight from "./components/BookFlight";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Features />
              </>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="deals" element={<Deals />} />
          <Route
            path="flights"
            element={
              <>
                <FlightBookingForm />
                <Flights />
              </>
            }
          />
          <Route path="search" element={<SearchResults />} />
          <Route path="flight/:id" element={<FlightDetails />} />
          <Route path="book/:id" element={<BookFlight />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
