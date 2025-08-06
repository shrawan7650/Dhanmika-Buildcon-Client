import { Phone, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react"

export function QuoteInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold font-playfair mb-6">Why Choose Dhanmika Buildcon?</h3>
        <div className="space-y-4">
          {[
            "15+ Years of Experience in Construction",
            "500+ Successfully Completed Projects",
            "Expert Team of Architects & Engineers",
            "Transparent Pricing with No Hidden Costs",
            "Quality Materials & Timely Delivery",
            "Complete Project Management",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 p-6 rounded-xl">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          <Star className="w-5 h-5 text-red-600 mr-2" />
          Free Services Included
        </h4>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• Site Visit & Consultation</li>
          <li>• Detailed Project Estimation</li>
          <li>• 3D Visualization (for major projects)</li>
          <li>• Material Specification</li>
          <li>• Timeline Planning</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h4 className="font-semibold text-gray-900">Contact Information</h4>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-1">Phone</h5>
            <p className="text-gray-600">+91 9386023587</p>
            <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-1">Email</h5>
            <p className="text-gray-600">info@dhanmikabuildcon.com</p>
            <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-1">Office</h5>
            <p className="text-gray-600">
              Priyadarshi Nagar, DPS More,
              <br />
              Bailey Road, Patna - 801503
            </p>
            <p className="text-sm text-gray-500">Visit us for detailed discussion</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-1">Working Hours</h5>
            <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}
