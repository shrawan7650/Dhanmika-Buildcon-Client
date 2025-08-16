"use client";

import { motion } from "framer-motion";

export function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Visit Our Studio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Located in the heart of the design district, our studio is where
            creativity comes to life. Schedule a visit to see our latest
            projects and meet our team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
        >
          {/* Map Placeholder - In production, replace with Google Maps embed */}
          <div className="relative h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Luxe Interiors Studio
              </h3>
              <p className="text-gray-600">
                123 Design Street
                <br />
                New York, NY 10001
              </p>
            </div>
          </div>

          {/* Contact Info Bar */}
          <div className="p-6 bg-amber-50 border-t">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <p className="text-gray-600">+91 9386023587</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600">dhanmikabuildcon@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Hours</h4>
                <p className="text-gray-600">Mon-Fri 9AM-6PM</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
