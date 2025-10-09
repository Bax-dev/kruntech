import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Krun Tech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cloud computing services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Account information (name, email address, company name, phone number)</li>
                  <li>Payment information (credit card details, billing address)</li>
                  <li>Service usage data (logs, metrics, performance data)</li>
                  <li>Customer data uploaded to our cloud infrastructure</li>
                  <li>Communications with our support team</li>
                  <li>Technical information (IP addresses, browser type, operating system)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our cloud services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">4. Data Storage and Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your data. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We maintain SOC 2 Type II compliance and undergo regular third-party security audits. Our data centers are geographically distributed with physical security controls and redundant power and network connectivity.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>With your consent or at your direction</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect the rights, property, and safety of Krun Tech and our users</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your information for as long as your account is active or as needed to provide you services. After account termination, we retain data for 60 days to allow for data retrieval. Backup data may be retained for up to 90 days. Some information may be retained longer if required by law or for legitimate business purposes.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">7. Your Rights and Choices</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Correct or update your personal information</li>
                  <li>Delete your personal information</li>
                  <li>Object to or restrict processing of your information</li>
                  <li>Data portability</li>
                  <li>Withdraw consent where we rely on it</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards such as Standard Contractual Clauses.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">9. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new privacy policy on this page and updating the "Last updated" date. We encourage you to review this privacy policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us at:<br />
                  Email: privacy@kruntech.com<br />
                  Phone: +2348031371520<br />
                  Address: 123 Cloud Street, Tech City, TC 12345
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">13. GDPR Compliance (EU Users)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For users in the European Union, we process your personal data in accordance with the General Data Protection Regulation (GDPR). Our legal basis for processing includes contract performance, legal obligations, and legitimate interests. You have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-4">14. CCPA Compliance (California Users)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to opt-out of the sale of personal information. We do not sell personal information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
