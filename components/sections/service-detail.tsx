"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Star, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/firebase";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  if (!service) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center">Service Not Found</h1>
        </div>
      </section>
    );
  }
  // console.log("Service Detail Rendered", service);
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Service Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={
                  service.image ||
                  "/placeholder.svg?height=600&width=500&query=interior design service"
                }
                alt={service.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Service Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-amber-600 text-white px-4 py-2 rounded-full font-medium">
                {service.title}
              </span>
            </div>

            {/* Rating Badge */}
            {service.rating && (
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                <Star className="w-4 h-4 text-amber-500 fill-current" />
                <span className="font-medium">{service.rating}</span>
              </div>
            )}
          </motion.div>

          {/* Service Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {service.description}
            </p>

            {/* Service Details */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="border-0 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900 mb-1">
                    Duration
                  </div>
                  <div className="text-gray-600">{service.duration} {service.durationType}</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="font-semibold text-gray-900 mb-1">
                    Starting From
                  </div>

                  <div className="text-amber-600 font-bold">
                    {" "}
                    <span
                      className="
                    text-gray-600 text-lg font-medium mr-1

                  "
                    >
                      ₹
                    </span>
                    {(service.priceRange &&
                      service.priceRange.split(" - ")[0]) ||
                      0}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold font-playfair mb-4">
                  What's Included
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white flex-1"
              >
                <Link href={`/services/${service.slug}#booking`}>
                  Book This Service
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 flex-1 bg-transparent"
              >
                <Link href="/contact">Ask Questions</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Additional Service Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-amber-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Consultation</h4>
                <p className="text-gray-600 text-sm">
                  We start with a detailed consultation to understand your
                  vision, needs, and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-amber-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Design Development
                </h4>
                <p className="text-gray-600 text-sm">
                  Our team creates detailed designs, mood boards, and 3D
                  visualizations for your approval.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-amber-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Implementation</h4>
                <p className="text-gray-600 text-sm">
                  We manage the entire implementation process, ensuring quality
                  and timely completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
