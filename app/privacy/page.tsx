import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Dhanmika Buildcon Pvt. Ltd. - How we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-section-title mb-6">Privacy Policy</h1>
          <p className="text-body">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              At Dhanmika Buildcon Pvt. Ltd., we collect information you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Fill out our contact forms or request quotes</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via phone, email, or WhatsApp</li>
              <li>Visit our office or project sites</li>
            </ul>

            <h3>Types of Information Collected:</h3>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, address</li>
              <li><strong>Project Information:</strong> Project requirements, budget, timeline, location</li>
              <li><strong>Communication Records:</strong> Messages, calls, and meeting notes</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide construction and interior design services</li>
              <li>Respond to your inquiries and provide quotes</li>
              <li>Communicate about your projects and services</li>
              <li>Send updates about our services and company news</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted partners who assist in our operations (contractors, suppliers, etc.)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Secure data transmission using SSL encryption</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure storage of physical and digital records</li>
            </ul>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Project-related information may be retained for up to 7 years after project completion for warranty and legal purposes.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>7. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to improve your browsing experience. You can control cookie settings through your browser preferences. We may use:
            </p>
            <ul>
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand website usage</li>
              <li>Marketing cookies for personalized content</li>
            </ul>

            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 18. We do not knowingly collect personal information from children under 18. If we become aware of such collection, we will delete the information immediately.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-primary-50 p-6 rounded-xl mt-6">
              <h4 className="font-bold text-neutral-900 mb-4">Dhanmika Buildcon Pvt. Ltd.</h4>
              <p><strong>Address:</strong> Priyadarshi Nagar, DPS More, Bailey Road, Patna - 801503, Bihar, India</p>
              <p><strong>Phone:</strong> +91 9386023587</p>
              <p><strong>Email:</strong> info@dhanmikabuildcon.com</p>
              <p><strong>Website:</strong> https://dhanmikabuildcon.com</p>
            </div>

            <h2>12. Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes arising from this policy will be subject to the jurisdiction of the courts in Patna, Bihar.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
