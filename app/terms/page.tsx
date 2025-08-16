import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Dhanmika Buildcon Pvt. Ltd. - Terms and conditions for using our construction and interior design services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-section-title mb-6">Terms of Service</h1>
          <p className="text-body">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Dhanmika Buildcon Pvt. Ltd., you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Company Information</h2>
            <div className="bg-primary-50 p-6 rounded-xl">
              <h4 className="font-bold text-neutral-900 mb-4">Dhanmika Buildcon Pvt. Ltd.</h4>
              <p><strong>Registered Address:</strong> Priyadarshi Nagar, DPS More, Bailey Road, Patna - 801503, Bihar, India</p>
              <p><strong>Phone:</strong> +91 9386023587</p>
              <p><strong>Email:</strong> dhanmikabuildcon@gmail.com</p>
              <p><strong>Website:</strong> https://dhanmikabuildcon.com</p>
            </div>

            <h2>3. Services Offered</h2>
            <p>Dhanmika Buildcon Pvt. Ltd. provides the following services:</p>
            <ul>
              <li>Architectural Plans & Designs</li>
              <li>Building Construction Services</li>
              <li>Interior Design & Works</li>
              <li>Building Plan Approvals</li>
              <li>Repair & Renovations</li>
              <li>Complete Waterproofing Work</li>
            </ul>

            <h2>4. Service Agreement</h2>
            <h3>4.1 Project Quotations</h3>
            <ul>
              <li>All quotations are valid for 30 days from the date of issue</li>
              <li>Prices may vary based on material costs and project specifications</li>
              <li>Final pricing will be confirmed in the signed contract</li>
            </ul>

            <h3>4.2 Contract Terms</h3>
            <ul>
              <li>All projects require a signed contract before commencement</li>
              <li>Payment schedules will be outlined in the contract</li>
              <li>Project timelines are estimates and may vary due to unforeseen circumstances</li>
            </ul>

            <h2>6. Project Timeline and Delays</h2>
            <ul>
              <li>Project timelines are estimates based on normal working conditions</li>
              <li>Delays due to weather, material availability, or client changes may extend timelines</li>
              <li>We will communicate any potential delays promptly</li>
              <li>Force majeure events may affect project schedules</li>
            </ul>

            <h2>7. Quality Assurance and Warranty</h2>
            <h3>7.1 Quality Standards</h3>
            <ul>
              <li>All work will be performed according to industry standards</li>
              <li>We use quality materials from approved suppliers</li>
              <li>Regular quality inspections during construction</li>
            </ul>

            <h2>8. Client Responsibilities</h2>
            <ul>
              <li>Provide accurate project requirements and specifications</li>
              <li>Ensure site accessibility for workers and materials</li>
              <li>Make timely payments as per agreed schedule</li>
              <li>Obtain necessary approvals and permits</li>
              <li>Provide utilities (water, electricity) at site</li>
            </ul>

            <h2>9. Changes and Modifications</h2>
            <ul>
              <li>Any changes to the original scope must be approved in writing</li>
              <li>Additional costs for changes will be communicated before implementation</li>
              <li>Timeline adjustments may be necessary for scope changes</li>
            </ul>

            <h2>10. Cancellation Policy</h2>
            <h3>10.1 Client Cancellation</h3>
            <ul>
              <li>Projects can be cancelled with 15 days written notice</li>
              <li>Cancellation charges may apply based on work completed</li>
              <li>Advance payments are non-refundable after work commencement</li>
            </ul>

            <h3>10.2 Company Cancellation</h3>
            <ul>
              <li>We reserve the right to cancel projects due to non-payment</li>
              <li>Safety concerns or legal issues may result in project cancellation</li>
              <li>Full refund of advance payment if cancelled by company</li>
            </ul>

            <h2>11. Limitation of Liability</h2>
            <ul>
              <li>Our liability is limited to the contract value</li>
              <li>We are not liable for indirect or consequential damages</li>
              <li>Client must inspect and approve work at each milestone</li>
              <li>Claims must be reported within 30 days of discovery</li>
            </ul>

            <h2>12. Intellectual Property</h2>
            <ul>
              <li>All designs and plans remain our intellectual property until full payment</li>
              <li>Clients receive usage rights upon project completion</li>
              <li>We may use project photos for marketing purposes</li>
            </ul>

            <h2>13. Dispute Resolution</h2>
            <ul>
              <li>All disputes will be resolved through negotiation first</li>
              <li>Mediation may be used for unresolved issues</li>
              <li>Legal disputes will be subject to Patna jurisdiction</li>
              <li>Indian laws will govern all agreements</li>
            </ul>

            <h2>14. Privacy and Confidentiality</h2>
            <ul>
              <li>Client information will be kept confidential</li>
              <li>Project details will not be shared without permission</li>
              <li>Please refer to our Privacy Policy for detailed information</li>
            </ul>

            <h2>15. Force Majeure</h2>
            <p>
              We shall not be liable for any failure or delay in performance due to events beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, strikes, or government actions.
            </p>

            <h2>16. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the remaining provisions will continue to be valid and enforceable.
            </p>

            <h2>17. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Updated terms will be posted on our website with the revision date.
            </p>

            <h2>18. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-secondary-50 p-6 rounded-xl mt-6">
              <h4 className="font-bold text-neutral-900 mb-4">Contact Details</h4>
              <p><strong>Phone:</strong> +91 9386023587</p>
              <p><strong>Email:</strong> dhanmikabuildcon@gmail.com</p>
              <p><strong>Address:</strong> Priyadarshi Nagar, DPS More, Bailey Road, Patna - 801503, Bihar, India</p>
              <p><strong>Business Hours:</strong> Monday - Saturday: 9:00 AM - 7:00 PM</p>
            </div>

            <p className="text-sm text-neutral-600 mt-8">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
