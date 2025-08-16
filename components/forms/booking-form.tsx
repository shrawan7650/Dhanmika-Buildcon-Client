"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Upload, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { submitBooking } from "@/lib/firebase";
import { toast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectAddress: z.string().min(5, "Please enter your project address"),
  service: z.string().min(1, "Please select a service"),
  preferredDate: z.date({
    required_error: "Please select a preferred date",
  }),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  projectRequirements: z
    .string()
    .min(10, "Please describe your project requirements"),
  budget: z.string().min(1, "Please select your budget range"),
  inspirationImages: z.any().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  serviceId?: string;
  serviceName?: string;
}

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

// const budgetRanges = [
//   "₹5,000 - ₹15,000",
//   "₹15,000 - ₹30,000",
//   "₹30,000 - ₹50,000",
//   "₹50,000 - ₹100,000",
//   "₹100,000+",
// ];

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),

  });

  const selectedDate = watch("preferredDate");

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      await submitBooking({
        ...data,
        status: "pending",
      });

      setIsSubmitted(true);
      reset();
      toast({
        title: "Booking Submitted!",
        description:
          "We'll contact you within 24 hours to confirm your consultation.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
          <h3 className="mb-2 text-xl font-bold">Booking Submitted!</h3>
          <p className="mb-4 text-gray-600">
            Thank you for your interest. We'll contact you within 24 hours to
            confirm your consultation.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Submit Another Booking
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        {/* <CardTitle className="text-2xl font-playfair">Book Your Consultation</CardTitle> */}
        <p className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours to
          schedule your consultation.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                {...register("name")}
                className={cn(errors.name && "border-red-500")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={cn(errors.email && "border-red-500")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                {...register("phone")}
                className={cn(errors.phone && "border-red-500")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="projectAddress">Project Address *</Label>
              <Input
                id="projectAddress"
                {...register("projectAddress")}
                className={cn(errors.projectAddress && "border-red-500")}
              />
              {errors.projectAddress && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.projectAddress.message}
                </p>
              )}
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <Label htmlFor="service">Service Required *</Label>
            <Select onValueChange={(value) => setValue("service", value)}>
  <SelectTrigger className={cn(errors.service && "border-red-500")}>
    <SelectValue placeholder="Select a service" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="complete-waterproofing-work">
      Complete Waterproofing Work
    </SelectItem>
    <SelectItem value="repair-renovations">
      Repair & Renovations
    </SelectItem>
    <SelectItem value="building-plan-approvals">
      Building Plan Approvals
    </SelectItem>
    <SelectItem value="interior-designs-works">
      Interior Designs & Works
    </SelectItem>
    <SelectItem value="building-constructions">
      Building Constructions
    </SelectItem>
    <SelectItem value="architectural-plans-designs">
      Architectural Plans & Designs
    </SelectItem>
  </SelectContent>
</Select>

            {errors.service && (
              <p className="mt-1 text-sm text-red-500">
                {errors.service.message}
              </p>
            )}
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Preferred Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !selectedDate && "text-muted-foreground",
                      errors.preferredDate && "border-red-500"
                    )}
                  >
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => setValue("preferredDate", date!)}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.preferredDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.preferredDate.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="preferredTime">Preferred Time *</Label>
              <Select
                onValueChange={(value) => setValue("preferredTime", value)}
              >
                <SelectTrigger
                  className={cn(errors.preferredTime && "border-red-500")}
                >
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.preferredTime && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.preferredTime.message}
                </p>
              )}
            </div>
          </div>

          {/* Budget */}
          {/* <div>
            <Label htmlFor="budget">Budget Range *</Label>
            <Select onValueChange={(value) => setValue("budget", value)}>
              <SelectTrigger className={cn(errors.budget && "border-red-500")}>
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-500">
                {errors.budget.message}
              </p>
            )}
          </div> */}

          {/* Project Requirements */}
          <div>
            <Label htmlFor="projectRequirements">Project Requirements *</Label>
            <Textarea
              id="projectRequirements"
              rows={4}
              placeholder="Please describe your project requirements, style preferences, and any specific needs..."
              {...register("projectRequirements")}
              className={cn(errors.projectRequirements && "border-red-500")}
            />
            {errors.projectRequirements && (
              <p className="mt-1 text-sm text-red-500">
                {errors.projectRequirements.message}
              </p>
            )}
          </div>

          {/* File Upload */}
          {/* <div>
            <Label htmlFor="inspirationImages">Inspiration Images (Optional)</Label>
            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 transition-colors border-2 border-gray-300 border-dashed rounded-md hover:border-amber-400">
              <div className="space-y-1 text-center">
                <Upload className="w-12 h-12 mx-auto text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative font-medium bg-white rounded-md cursor-pointer text-amber-600 hover:text-amber-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500"
                  >
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      accept="image/*"
                      onChange={(e) => setSelectedFiles(e.target.files)}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                {selectedFiles && <p className="text-sm text-green-600">{selectedFiles.length} file(s) selected</p>}
              </div>
            </div>
          </div> */}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-white bg-amber-600 hover:bg-amber-700"
          >
            {isSubmitting ? "Submitting..." : "Submit Booking Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
