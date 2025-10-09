import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Cloud, Server, Shield, Zap, Database, Network, Lock, BarChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = [
    {
      id: "cloud-infrastructure",
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Build and scale your infrastructure with our robust cloud platform. Get instant access to compute, storage, and networking resources.",
      features: ["Auto-scaling", "Load balancing", "Multi-region deployment", "99.99% uptime SLA"],
      overview: "Our cloud infrastructure service provides a complete platform for deploying, managing, and scaling your applications. Built on cutting-edge technology, we offer the flexibility and power you need to innovate faster and operate more efficiently.",
      keyFeatures: ["Global Infrastructure", "Auto-Scaling Capabilities", "Load Balancing", "High Availability", "Disaster Recovery", "Multi-Region Deployment", "Real-time Monitoring", "Advanced Analytics"],
      benefits: [
        {
          title: "Scalability",
          description: "Automatically scale your resources up or down based on demand. Never worry about capacity planning or over-provisioning again.",
        },
        {
          title: "Cost Efficiency",
          description: "Pay only for what you use with our flexible pricing model. Optimize costs with right-sizing recommendations and reserved capacity options.",
        },
        {
          title: "Reliability",
          description: "Benefit from 99.99% uptime SLA backed by redundant infrastructure across multiple availability zones.",
        },
        {
          title: "Security",
          description: "Enterprise-grade security with encryption at rest and in transit, DDoS protection, and comprehensive compliance certifications.",
        },
      ]
    },
    {
      id: "managed-services",
      icon: Server,
      title: "Managed Services",
      description: "Focus on your business while we handle your cloud operations. Our experts manage, monitor, and optimize your infrastructure 24/7.",
      features: ["Proactive monitoring", "Automated backups", "Performance tuning", "Incident response"],
      overview: "Our managed services take the complexity out of cloud operations, allowing you to focus on your core business while we handle the technical details. Our certified experts provide round-the-clock monitoring, maintenance, and optimization.",
      keyFeatures: ["24/7 Monitoring", "Proactive Maintenance", "Automated Backups", "Performance Optimization", "Incident Response", "Security Updates", "Capacity Planning", "Cost Optimization"],
      benefits: [
        {
          title: "Expert Management",
          description: "Let our certified cloud experts handle your infrastructure while you focus on growing your business.",
        },
        {
          title: "Proactive Support",
          description: "We monitor your systems 24/7 and address issues before they impact your operations.",
        },
        {
          title: "Reduced Downtime",
          description: "Minimize downtime with proactive maintenance and rapid incident response.",
        },
        {
          title: "Cost Savings",
          description: "Optimize your cloud spend with expert recommendations and automated cost management.",
        },
      ]
    },
    {
      id: "security-compliance",
      icon: Shield,
      title: "Security & Compliance",
      description: "Protect your data with enterprise-grade security and meet industry compliance standards with confidence.",
      features: ["DDoS protection", "Encryption at rest", "Compliance certifications", "Security audits"],
      overview: "Our comprehensive security and compliance services ensure your data and applications are protected with industry-leading security measures. We help you meet regulatory requirements and maintain the highest security standards.",
      keyFeatures: ["DDoS Protection", "Encryption at Rest", "Compliance Certifications", "Security Audits", "Access Controls", "Threat Detection", "Vulnerability Scanning", "Incident Response"],
      benefits: [
        {
          title: "Enterprise Security",
          description: "Protect your data with military-grade encryption and advanced security protocols.",
        },
        {
          title: "Compliance Ready",
          description: "Meet industry standards including SOC 2, ISO 27001, HIPAA, and GDPR requirements.",
        },
        {
          title: "Threat Protection",
          description: "Advanced threat detection and prevention to keep your systems secure.",
        },
        {
          title: "Audit Support",
          description: "Comprehensive audit trails and reporting to support compliance requirements.",
        },
      ]
    },
    {
      id: "performance-optimization",
      icon: Zap,
      title: "Performance Optimization",
      description: "Maximize application performance with advanced caching, CDN integration, and resource optimization.",
      features: ["CDN integration", "Database optimization", "Caching strategies", "Real-time analytics"],
      overview: "Optimize your applications for peak performance with our advanced optimization services. We use cutting-edge techniques to ensure your applications run faster, more efficiently, and cost-effectively.",
      keyFeatures: ["CDN Integration", "Database Optimization", "Caching Strategies", "Real-time Analytics", "Load Testing", "Performance Monitoring", "Resource Optimization", "Auto-scaling"],
      benefits: [
        {
          title: "Faster Performance",
          description: "Dramatically improve application speed and responsiveness with our optimization techniques.",
        },
        {
          title: "Better User Experience",
          description: "Deliver lightning-fast experiences that keep your users engaged and satisfied.",
        },
        {
          title: "Cost Efficiency",
          description: "Optimize resource usage to reduce costs while maintaining or improving performance.",
        },
        {
          title: "Scalability",
          description: "Ensure your applications can handle traffic spikes without performance degradation.",
        },
      ]
    },
    {
      id: "database-services",
      icon: Database,
      title: "Database Services",
      description: "Fully managed database solutions with automated backups, scaling, and high availability built-in.",
      features: ["Multiple DB engines", "Automated backups", "Point-in-time recovery", "Read replicas"],
      overview: "Our managed database services provide fully automated, scalable, and secure database solutions. We handle all the complexity of database management so you can focus on your applications.",
      keyFeatures: ["Multiple DB Engines", "Automated Backups", "Point-in-time Recovery", "Read Replicas", "High Availability", "Auto-scaling", "Performance Monitoring", "Security Hardening"],
      benefits: [
        {
          title: "Zero Management",
          description: "Fully managed databases with automated backups, updates, and scaling.",
        },
        {
          title: "High Availability",
          description: "Built-in redundancy and failover capabilities ensure your data is always accessible.",
        },
        {
          title: "Performance Optimized",
          description: "Automated performance tuning and optimization for optimal database performance.",
        },
        {
          title: "Secure by Default",
          description: "Enterprise-grade security with encryption, access controls, and compliance features.",
        },
      ]
    },
    {
      id: "networking-solutions",
      icon: Network,
      title: "Networking Solutions",
      description: "Build secure, scalable networks with advanced routing, VPN, and direct connect options.",
      features: ["Virtual private cloud", "VPN connections", "Direct connect", "Traffic management"],
      overview: "Design and implement secure, high-performance networks that connect your infrastructure seamlessly. Our networking solutions provide the foundation for reliable, scalable, and secure connectivity.",
      keyFeatures: ["Virtual Private Cloud", "VPN Connections", "Direct Connect", "Traffic Management", "Load Balancing", "DNS Services", "Firewall Management", "Network Monitoring"],
      benefits: [
        {
          title: "Secure Connectivity",
          description: "Build private, secure networks that protect your data and applications.",
        },
        {
          title: "Global Reach",
          description: "Connect your infrastructure across multiple regions and data centers.",
        },
        {
          title: "High Performance",
          description: "Optimized network routing and traffic management for maximum performance.",
        },
        {
          title: "Cost Effective",
          description: "Efficient network design that minimizes costs while maximizing performance.",
        },
      ]
    },
    {
      id: "identity-access",
      icon: Lock,
      title: "Identity & Access",
      description: "Control access to your resources with comprehensive identity and access management solutions.",
      features: ["SSO integration", "MFA support", "Role-based access", "Audit logging"],
      overview: "Secure your infrastructure with comprehensive identity and access management. Control who has access to what resources with granular permissions and advanced security features.",
      keyFeatures: ["SSO Integration", "MFA Support", "Role-based Access", "Audit Logging", "Directory Services", "Access Policies", "Compliance Reporting", "Security Analytics"],
      benefits: [
        {
          title: "Centralized Control",
          description: "Manage all user access from a single, centralized platform.",
        },
        {
          title: "Enhanced Security",
          description: "Multi-factor authentication and advanced security policies protect your resources.",
        },
        {
          title: "Compliance Ready",
          description: "Comprehensive audit trails and reporting for compliance requirements.",
        },
        {
          title: "User Experience",
          description: "Single sign-on and seamless access management improve user productivity.",
        },
      ]
    },
    {
      id: "analytics-insights",
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Gain deep insights into your infrastructure with comprehensive monitoring and analytics tools.",
      features: ["Real-time metrics", "Custom dashboards", "Alerting system", "Cost optimization"],
      overview: "Transform your infrastructure data into actionable insights with our comprehensive analytics platform. Monitor performance, optimize costs, and make data-driven decisions.",
      keyFeatures: ["Real-time Metrics", "Custom Dashboards", "Alerting System", "Cost Optimization", "Performance Analytics", "Usage Tracking", "Predictive Analytics", "Custom Reports"],
      benefits: [
        {
          title: "Data-Driven Decisions",
          description: "Make informed decisions with comprehensive analytics and insights.",
        },
        {
          title: "Cost Optimization",
          description: "Identify cost-saving opportunities and optimize your cloud spend.",
        },
        {
          title: "Performance Monitoring",
          description: "Real-time monitoring and alerting to ensure optimal performance.",
        },
        {
          title: "Predictive Insights",
          description: "Anticipate issues and plan capacity with predictive analytics.",
        },
      ]
    },
    {
      id: "support-training",
      icon: Users,
      title: "Support & Training",
      description: "Get expert support and training to maximize your cloud investment with our comprehensive support programs.",
      features: ["24/7 technical support", "Training workshops", "Documentation", "Best practices guidance"],
      overview: "Maximize your cloud investment with our comprehensive support and training programs. Our experts help you get the most out of your cloud infrastructure with ongoing support and education.",
      keyFeatures: ["24/7 Technical Support", "Training Workshops", "Documentation", "Best Practices Guidance", "Expert Consultation", "Implementation Support", "Knowledge Transfer", "Community Access"],
      benefits: [
        {
          title: "Expert Support",
          description: "Get help when you need it with 24/7 technical support from cloud experts.",
        },
        {
          title: "Knowledge Transfer",
          description: "Learn best practices and advanced techniques through our training programs.",
        },
        {
          title: "Faster Implementation",
          description: "Accelerate your cloud adoption with expert guidance and support.",
        },
        {
          title: "Ongoing Optimization",
          description: "Continuously improve your cloud infrastructure with expert recommendations.",
        },
      ]
    },
  ];

  const currentService = services.find(service => service.id === serviceId);

  if (!currentService) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/services')}>
              Back to Services
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const ServiceIcon = currentService.icon;
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 bg-background/10 backdrop-blur-sm">
              <ServiceIcon className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              {currentService.title}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {currentService.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Service Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {currentService.overview}
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're running microservices, big data analytics, or mission-critical enterprise applications, 
              our infrastructure scales seamlessly to meet your demands while maintaining optimal performance and security.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentService.keyFeatures.map((feature, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6 flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Benefits</h2>
            <div className="space-y-8">
              {currentService.benefits.map((benefit, index) => (
                <div key={index} className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Flexible Pricing</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our transparent pricing model ensures you only pay for what you use. No hidden fees, no surprises.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Pay-As-You-Go", "Reserved Capacity", "Enterprise Plans"].map((plan, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold mb-4">{plan}</h3>
                    <p className="text-muted-foreground">Custom pricing based on your specific needs</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your {currentService.title.toLowerCase()} needs and get a customized solution.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 shadow-elegant">
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetails;
