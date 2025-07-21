import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-white min-h-[60vh]">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="mb-8 text-gray-700">
          <div>Email: support@skyscraper.com</div>
          <div>Phone: +1 (555) 123-4567</div>
        </div>
        <form className="card p-6" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="font-semibold mb-1">Name</label>
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
            <label className="font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full p-2 border-2 border-gray-200 rounded-lg"
            />
          </div>
          <button className="btn btn-primary mt-2" type="submit">
            Send Message
          </button>
          {submitted && (
            <div className="text-green-600 mt-4">
              Thank you for contacting us!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
