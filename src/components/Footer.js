import React from "react";
import {
  Plane,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">SkyScraper</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for seamless flight bookings. Discover
              amazing deals and travel the world with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Search Flights", href: "#flights" },
                { label: "Deals & Offers", href: "#" },
                { label: "Travel Guide", href: "#" },
                { label: "About Us", href: "#" },
                { label: "Contact", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Booking Guide",
                "Cancellation Policy",
                "Refund Policy",
                "Terms of Service",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info + Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-400">123 Aviation Street</p>
                  <p className="text-gray-400">New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">support@skyscraper.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">
                Subscribe to Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>© 2024 SkyScraper. All rights reserved.</p>
            <div className="flex space-x-6">
              {["Terms", "Privacy", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
