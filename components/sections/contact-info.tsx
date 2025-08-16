import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold font-playfair mb-6">Get In Touch</h3>
        <p className="text-gray-600 mb-8">
          Ready to transform your space? We'd love to hear about your project
          and discuss how we can bring your vision to life.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <p className="text-gray-600">+9386023587</p>
            <p className="text-sm text-gray-500">
              Monday - Saturday: 9:00 AM - 7:00 PM
            </p>
            <p className="text-sm text-gray-500">Sunday: 10:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
            <p className="text-gray-600">dhanmikabuildcon@gmail.com</p>
            <p className="text-sm text-gray-500">
              We'll respond within 24 hours
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
            <p className="text-gray-600">
              Priyadarshi Nagar, DPS More, Bailey Road
              <br />
              Patna - 801503
            </p>
            <p className="text-sm text-gray-500">By appointment only</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
            <p className="text-gray-600">
              Monday - Saturday: 9:00 AM - 6:00 PM
            </p>
            <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 p-6 rounded-xl">
        <h4 className="font-semibold text-gray-900 mb-2">Free Consultation</h4>
        <p className="text-gray-600 text-sm">
          Schedule a complimentary 30-minute consultation to discuss your
          project and explore how we can help transform your space.
        </p>
      </div>
    </div>
  );
}
