import React from "react";

const EnquiryForm = ({ formData, handleChange, handleSubmit }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6">
    <h3 className="text-secondary font-bold text-xl mb-6">Enquiry Form</h3>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        required
      />
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-[#1b946f] transition-colors"
      >
        Appointment
      </button>
    </form>
  </div>
);

export default EnquiryForm;
