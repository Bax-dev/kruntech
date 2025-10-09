import Layout from "@/components/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Krun Tech's cloud computing services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily use Krun Tech's cloud services for personal or commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose without proper licensing</li>
                  <li>Attempt to decompile or reverse engineer any software contained on Krun Tech's platform</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">3. Service Level Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Krun Tech commits to providing a 99.99% uptime guarantee for all cloud services. In the event of service disruption, customers may be eligible for service credits as outlined in our SLA documentation. Planned maintenance windows will be communicated at least 72 hours in advance.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">4. Data Security and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Krun Tech implements industry-standard security measures to protect customer data. All data is encrypted both in transit and at rest. We maintain compliance with major international data protection regulations including GDPR, CCPA, and SOC 2 Type II standards.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Services are billed on a monthly basis unless otherwise agreed upon. Payment is due within 30 days of invoice date. Failure to pay may result in service suspension. All fees are non-refundable except as required by law or as explicitly stated in this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">6. Acceptable Use Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Customers agree not to use Krun Tech services for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Illegal activities or content</li>
                  <li>Distribution of malware or harmful code</li>
                  <li>Unauthorized access to other systems</li>
                  <li>Spam or unsolicited communications</li>
                  <li>Cryptocurrency mining without explicit authorization</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Krun Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Krun Tech services, even if Krun Tech or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">8. Modifications to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Krun Tech reserves the right to revise these terms of service at any time without notice. By using these services, you are agreeing to be bound by the then-current version of these terms of service. Material changes will be communicated to customers via email at least 30 days prior to taking effect.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate this agreement with 30 days written notice. Upon termination, customers will have 60 days to retrieve their data. After this period, Krun Tech reserves the right to delete all customer data in accordance with our data retention policies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">10. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Krun Tech operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us at:<br />
                  Email: legal@kruntech.com<br />
                  Phone: +2348031371520
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
