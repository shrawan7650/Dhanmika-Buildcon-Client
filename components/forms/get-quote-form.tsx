"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import { submitContact } from "@/lib/firebase"
import { toast } from "@/hooks/use-toast"

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectAddress: z.string().min(5, "Please enter your project address"),
  projectType: z.string().min(1, "Please select a project type"),
  projectSize: z.string().min(1, "Please select project size"),
  budget: z.string().min(1, "Please select your budget range"),
  timeline: z.string().min(1, "Please select your timeline"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  projectDescription: z.string().min(20, "Please provide detailed project description"),
  hasPlans: z.boolean().optional(),
  needFinancing: z.boolean().optional(),
})

type QuoteFormData = z.infer<typeof quoteSchema>

const projectTypes = [
  "New Construction",
  "Renovation/Remodeling",
  "Interior Design Only",
  "Architectural Planning",
  "Waterproofing",
  "Repair Work",
]

const projectSizes = [
  "Small (< 1000 sq ft)",
  "Medium (1000-2500 sq ft)",
  "Large (2500-5000 sq ft)",
  "Extra Large (> 5000 sq ft)",
]

const budgetRanges = [
  "₹5 Lakh - ₹15 Lakh",
  "₹15 Lakh - ₹30 Lakh",
  "₹30 Lakh - ₹50 Lakh",
  "₹50 Lakh - ₹1 Crore",
  "₹1 Crore+",
]

const timelines = ["1-3 months", "3-6 months", "6-12 months", "12+ months", "Flexible"]

const services = [
  "Architectural Plans & Designs",
  "Building Construction",
  "Interior Design & Works",
  "Building Plan Approvals",
  "Repair & Renovations",
  "Complete Waterproofing Work",
]

export function GetQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    try {
      await submitContact({
        ...data,
        services: selectedServices.join(", "),
        message: `Project Type: ${data.projectType}\nProject Size: ${data.projectSize}\nBudget: ${data.budget}\nTimeline: ${data.timeline}\nServices: ${selectedServices.join(", ")}\n\nDescription: ${data.projectDescription}`,
        status: "pending",
        createdAt: new Date(),
      })

      setIsSubmitted(true)
      reset()
      setSelectedServices([])
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 24 hours with a detailed quote.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, service])
    } else {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    }
    setValue("services", checked ? [...selectedServices, service] : selectedServices.filter((s) => s !== service))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8 bg-green-50 rounded-xl">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Quote Request Submitted!</h3>
        <p className="text-gray-600 mb-4">
          Thank you for your request. Our team will review your requirements and contact you within 24 hours with a
          detailed quote.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" {...register("name")} className={cn(errors.name && "border-red-500")} />
          {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" {...register("email")} className={cn(errors.email && "border-red-500")} />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" {...register("phone")} className={cn(errors.phone && "border-red-500")} />
          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="projectAddress">Project Address *</Label>
          <Input
            id="projectAddress"
            {...register("projectAddress")}
            className={cn(errors.projectAddress && "border-red-500")}
          />
          {errors.projectAddress && <p className="text-sm text-red-500 mt-1">{errors.projectAddress.message}</p>}
        </div>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="projectType">Project Type *</Label>
          <Select onValueChange={(value) => setValue("projectType", value)}>
            <SelectTrigger className={cn(errors.projectType && "border-red-500")}>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.projectType && <p className="text-sm text-red-500 mt-1">{errors.projectType.message}</p>}
        </div>
        <div>
          <Label htmlFor="projectSize">Project Size *</Label>
          <Select onValueChange={(value) => setValue("projectSize", value)}>
            <SelectTrigger className={cn(errors.projectSize && "border-red-500")}>
              <SelectValue placeholder="Select project size" />
            </SelectTrigger>
            <SelectContent>
              {projectSizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.projectSize && <p className="text-sm text-red-500 mt-1">{errors.projectSize.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="budget">Budget Range *</Label>
          <Select onValueChange={(value) => setValue("budget", value)}>
            <SelectTrigger className={cn(errors.budget && "border-red-500")}>
              <SelectValue placeholder="Select your budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget && <p className="text-sm text-red-500 mt-1">{errors.budget.message}</p>}
        </div>
        <div>
          <Label htmlFor="timeline">Timeline *</Label>
          <Select onValueChange={(value) => setValue("timeline", value)}>
            <SelectTrigger className={cn(errors.timeline && "border-red-500")}>
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.timeline && <p className="text-sm text-red-500 mt-1">{errors.timeline.message}</p>}
        </div>
      </div>

      {/* Services Selection */}
      <div>
        <Label>Services Required *</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {services.map((service) => (
            <div key={service} className="flex items-center space-x-2">
              <Checkbox
                id={service}
                checked={selectedServices.includes(service)}
                onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
              />
              <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                {service}
              </Label>
            </div>
          ))}
        </div>
        {errors.services && <p className="text-sm text-red-500 mt-1">{errors.services.message}</p>}
      </div>

      {/* Project Description */}
      <div>
        <Label htmlFor="projectDescription">Project Description *</Label>
        <Textarea
          id="projectDescription"
          rows={4}
          placeholder="Please provide detailed information about your project requirements, specific needs, preferences, etc."
          {...register("projectDescription")}
          className={cn(errors.projectDescription && "border-red-500")}
        />
        {errors.projectDescription && <p className="text-sm text-red-500 mt-1">{errors.projectDescription.message}</p>}
      </div>

      {/* Additional Options */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="hasPlans" {...register("hasPlans")} />
          <Label htmlFor="hasPlans" className="text-sm font-normal">
            I have existing architectural plans/drawings
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="needFinancing" {...register("needFinancing")} />
          <Label htmlFor="needFinancing" className="text-sm font-normal">
            I need information about financing options
          </Label>
        </div>
      </div>

      {/* File Upload */}
      <div>
        <Label htmlFor="files">Upload Plans/Reference Images (Optional)</Label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-red-400 transition-colors">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500"
              >
                <span>Upload files</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  multiple
                  accept="image/*,.pdf,.dwg"
                  onChange={(e) => setSelectedFiles(e.target.files)}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, PDF, DWG up to 10MB each</p>
            {selectedFiles && <p className="text-sm text-green-600">{selectedFiles.length} file(s) selected</p>}
          </div>
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
        {isSubmitting ? "Submitting..." : "Get Free Quote"}
      </Button>
    </form>
  )
}
