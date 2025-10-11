import { Link } from "react-router-dom";
import { Cloud, Server, Shield, Zap, Database, Network, Lock, BarChart, Users, Settings, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      id: "cloud-infrastructure",
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Build and scale your infrastructure with our robust cloud platform. Get instant access to compute, storage, and networking resources.",
      features: ["Auto-scaling", "Load balancing", "Multi-region deployment", "99.99% uptime SLA"],
    },
    {
      id: "managed-services",
      icon: Server,
      title: "Managed Services",
      description: "Focus on your business while we handle your cloud operations. Our experts manage, monitor, and optimize your infrastructure 24/7.",
      features: ["Proactive monitoring", "Automated backups", "Performance tuning", "Incident response"],
    },
    {
      id: "business-transformation",
      icon: Settings,
      title: "Business Transformation",
      description: "Implement ERP and business productivity solutions to streamline operations, improve efficiency, and drive digital transformation.",
      features: ["ERP Implementation", "Process Automation", "Digital Workflows", "Change Management"],
    },
    {
      id: "software-development",
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions and application development tailored to your specific business requirements and industry needs.",
      features: ["Custom Applications", "API Development", "Mobile Apps", "Legacy Modernization"],
    },
    {
      id: "security-compliance",
      icon: Shield,
      title: "Security & Compliance",
      description: "Protect your data with enterprise-grade security and meet industry compliance standards with confidence.",
      features: ["DDoS protection", "Encryption at rest", "Compliance certifications", "Security audits"],
    },
    {
      id: "performance-optimization",
      icon: Zap,
      title: "Performance Optimization",
      description: "Maximize application performance with advanced caching, CDN integration, and resource optimization.",
      features: ["CDN integration", "Database optimization", "Caching strategies", "Real-time analytics"],
    },
    {
      id: "database-services",
      icon: Database,
      title: "Database Services",
      description: "Fully managed database solutions with automated backups, scaling, and high availability built-in.",
      features: ["Multiple DB engines", "Automated backups", "Point-in-time recovery", "Read replicas"],
    },
    {
      id: "networking-solutions",
      icon: Network,
      title: "Networking Solutions",
      description: "Build secure, scalable networks with advanced routing, VPN, and direct connect options.",
      features: ["Virtual private cloud", "VPN connections", "Direct connect", "Traffic management"],
    },
    {
      id: "identity-access",
      icon: Lock,
      title: "Identity & Access",
      description: "Control access to your resources with comprehensive identity and access management solutions.",
      features: ["SSO integration", "MFA support", "Role-based access", "Audit logging"],
    },
    {
      id: "analytics-insights",
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Gain deep insights into your infrastructure with comprehensive monitoring and analytics tools.",
      features: ["Real-time metrics", "Custom dashboards", "Alerting system", "Cost optimization"],
    },
    {
      id: "support-training",
      icon: Users,
      title: "Support & Training",
      description: "Get expert support and training to maximize your cloud investment with our comprehensive support programs.",
      features: ["24/7 technical support", "Training workshops", "Documentation", "Best practices guidance"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive cloud solutions designed to power your digital transformation
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6 gradient-primary">
                    <Link to={`/services/${service.id}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can design a tailored cloud strategy that fits your unique business requirements. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-primary shadow-elegant"
              onClick={() => {
                // Open email client
                window.location.href = 'mailto:info@kruntech.com?subject=Service Inquiry&body=Hello, I am interested in your cloud services. Please contact me to discuss my requirements.';
              }}
            >
              Contact Our Experts
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="shadow-elegant"
              onClick={() => {
                // Open phone dialer
                window.location.href = 'tel:+2348031371520';
              }}
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
