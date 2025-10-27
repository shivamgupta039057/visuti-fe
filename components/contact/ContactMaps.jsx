import React from 'react'

const ContactMaps = () => {
  return (
      <div className="max-w-7xl mx-auto pt-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Visit Our Office
          </h2>
          <p className="text-gray-600">
            Find us at our office location below
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="">

            {/* Map */}
            <div className="lg:col-span-3 h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8976823934567!2d75.73546931504219!3d26.91098798313098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db47d5c0e6f6b%3A0x7b3c6f7e1c5e6b7c!2sVaishali%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactMaps