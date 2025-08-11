'use client';
import React, { useState } from 'react';
import { PhoneCall, MessageCircle, X } from 'lucide-react';

const CONTACT = {
  phoneMain: '+919386023587',
  phoneEmergency: '+919386023587', // change to your emergency number
  whatsapp: '+919386023587',
};

export function FloatCallMessage() {
  const [showCallOptions, setShowCallOptions] = useState(false);
  const [showMessageOptions, setShowMessageOptions] = useState(false);

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank');
  };

  const handleSMS = (number: string) => {
    window.location.href = `sms:${number}`;
  };

  return (
    <>
      <div className="fixed z-40 flex flex-col gap-3 bottom-6 right-6">
        {/* Call Button */}
        <div className="relative">
          {showCallOptions && (
            <div className="absolute right-0 p-4 mb-3 bg-white rounded-lg shadow-lg bottom-full min-w-48">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <button
                  onClick={() => setShowCallOptions(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {/* Main Office */}
                <button
                  onClick={() => handleCall(CONTACT.phoneMain)}
                  className="flex items-center w-full gap-3 p-2 text-left transition-colors rounded-lg hover:bg-gray-50"
                >
                  <PhoneCall className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Main Office</p>
                    <p className="text-sm text-gray-500">{CONTACT.phoneMain}</p>
                  </div>
                </button>
                {/* Emergency */}
                <button
                  onClick={() => handleCall(CONTACT.phoneEmergency)}
                  className="flex items-center w-full gap-3 p-2 text-left transition-colors rounded-lg hover:bg-gray-50"
                >
                  <PhoneCall className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Emergency</p>
                    <p className="text-sm text-gray-500">{CONTACT.phoneEmergency}</p>
                  </div>
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              setShowCallOptions(!showCallOptions);
              setShowMessageOptions(false);
            }}
            className="flex items-center justify-center text-white transition-all duration-200 bg-green-600 rounded-full shadow-lg w-14 h-14 hover:bg-green-700 hover:scale-110"
          >
            <PhoneCall className="w-6 h-6" />
          </button>
        </div>

        {/* Message Button */}
        <div className="relative">
          {showMessageOptions && (
            <div className="absolute right-0 p-4 mb-3 bg-white rounded-lg shadow-lg bottom-full min-w-48">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Message Us</h3>
                <button
                  onClick={() => setShowMessageOptions(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {/* WhatsApp */}
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center w-full gap-3 p-2 text-left transition-colors rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center justify-center w-4 h-4 bg-green-500 rounded-full">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-500">Quick response</p>
                  </div>
                </button>
                {/* SMS */}
                <button
                  onClick={() => handleSMS(CONTACT.phoneMain)}
                  className="flex items-center w-full gap-3 p-2 text-left transition-colors rounded-lg hover:bg-gray-50"
                >
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">SMS</p>
                    <p className="text-sm text-gray-500">Text message</p>
                  </div>
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              setShowMessageOptions(!showMessageOptions);
              setShowCallOptions(false);
            }}
            className="flex items-center justify-center text-white transition-all duration-200 bg-blue-600 rounded-full shadow-lg w-14 h-14 hover:bg-blue-700 hover:scale-110"
          >
            <MessageCircle className="w-6 h-6 " />
          </button>
        </div>
      </div>

      {/* Click overlay to close */}
      {(showCallOptions || showMessageOptions) && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => {
            setShowCallOptions(false);
            setShowMessageOptions(false);
          }}
        />
      )}
    </>
  );
}
