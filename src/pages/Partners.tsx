import {
  Cloud,
  Award,
  Globe,
  Zap,
  Server,
  Database,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Partners = () => {
  const awsServices = [
    {
      icon: Server,
      title: "Amazon EC2",
      description:
        "Scalable compute capacity in the cloud with flexible pricing options",
      features: [
        "Auto Scaling",
        "Load Balancing",
        "Multiple Instance Types",
        "Global Availability",
      ],
    },
    {
      icon: Database,
      title: "Amazon RDS",
      description:
        "Managed relational database service with automated backups and scaling",
      features: [
        "Multi-AZ Deployment",
        "Automated Backups",
        "Read Replicas",
        "Performance Insights",
      ],
    },
    {
      icon: Cloud,
      title: "Amazon S3",
      description:
        "Object storage service with industry-leading scalability and security",
      features: [
        "97.5% Durability",
        "Global Edge Locations",
        "Lifecycle Policies",
        "Access Controls",
      ],
    },
    {
      icon: Shield,
      title: "AWS Security",
      description:
        "Comprehensive security services to protect your cloud infrastructure",
      features: [
        "IAM & Access Control",
        "Encryption at Rest",
        "DDoS Protection",
        "Compliance Certifications",
      ],
    },
    {
      icon: Zap,
      title: "AWS Lambda",
      description:
        "Serverless compute service for running code without managing servers",
      features: [
        "Pay-per-Use",
        "Auto Scaling",
        "Event-Driven",
        "Multiple Languages",
      ],
    },
    {
      icon: Globe,
      title: "Amazon CloudFront",
      description:
        "Global content delivery network for fast, secure content delivery",
      features: [
        "Global Edge Locations",
        "DDoS Protection",
        "SSL/TLS Encryption",
        "Real-time Analytics",
      ],
    },
  ];

  const partnershipBenefits = [
    {
      icon: Award,
      title: "AWS Advanced Partner",
      description:
        "Certified AWS Advanced Consulting Partner with proven expertise in cloud solutions",
    },
    {
      icon: Users,
      title: "Certified Experts",
      description:
        "Team of AWS-certified professionals with deep knowledge of AWS services",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Accelerated cloud migration and deployment using AWS best practices",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Enterprise-grade security implementation using AWS security services",
    },
  ];

  return (
    <Layout>
      
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg p-4">
              <img 
                src="/aws-logo.png" 
                alt="AWS Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="text-4xl font-bold text-orange-500 hidden">AWS</div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              AWS Partnership
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              As an AWS Advanced Consulting Partner, we deliver enterprise-grade
              cloud solutions powered by Amazon Web Services
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
              <Award className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-medium">
                AWS Advanced Consulting Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-8">Our AWS Partnership</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Krun Tech is proud to be an AWS Advanced Consulting Partner,
                providing comprehensive cloud solutions built on Amazon Web
                Services. Our partnership enables us to deliver scalable, secure,
                and cost-effective cloud infrastructure to businesses worldwide.
              </p>
              <p className="text-lg text-muted-foreground">
                With deep expertise in AWS services and best practices, we help
                organizations accelerate their digital transformation journey and
                achieve their cloud objectives.
              </p>
            </div>
            
            {/* Right side - Certification images */}
            <div className="flex flex-col items-center lg:items-end space-y-8">
              <h3 className="text-2xl font-semibold text-center lg:text-right mb-6">
                AWS Certifications
              </h3>
              
              {/* Unique diagonal layout for two certifications */}
              <div className="relative w-full max-w-sm">
                {/* Background decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-50"></div>
                
                {/* First certification - Top right */}
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-rotate-2 hover:scale-105 border-2 border-orange-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Authorized Instructor</h4>
                      <p className="text-sm text-gray-600">Training Partner</p>
                    </div>
                  </div>
                  <img 
                    src="/authorized-instructor.png" 
                    alt="AWS Authorized Instructor Certification"
                    className="w-full h-20 object-contain mt-4"
                    onError={(e) => {
                      console.log('Image failed to load:', e.currentTarget.src);
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center h-20 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg mt-4">
                    <span className="text-sm font-medium text-orange-700">AWS Authorized Instructor</span>
                  </div>
                </div>
                
                {/* Second certification - Bottom left */}
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:rotate-2 hover:scale-105 border-2 border-blue-100 mt-6 ml-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">Consulting Partner</h4>
                      <p className="text-sm text-gray-600">Advanced Level</p>
                    </div>
                  </div>
                  <img 
                    src="/consulting-partner.png" 
                    alt="AWS Consulting Partner Certification"
                    className="w-full h-20 object-contain mt-4"
                    onError={(e) => {
                      console.log('Image failed to load:', e.currentTarget.src);
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                      ((e.currentTarget as HTMLImageElement).nextElementSibling as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center h-20 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg mt-4">
                    <span className="text-sm font-medium text-blue-700">AWS Consulting Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            AWS Services We Specialize In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awsServices.map((service, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AWS Solutions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            AWS Solutions We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Cloud Migration",
                description:
                  "Seamlessly migrate your on-premises infrastructure to AWS with minimal downtime and maximum efficiency.",
                features: [
                  "Assessment & Planning",
                  "Data Migration",
                  "Application Modernization",
                  "Go-Live Support",
                ],
                icon: Cloud,
              },
              {
                title: "DevOps on AWS",
                description:
                  "Implement CI/CD pipelines and DevOps practices using AWS services for faster, more reliable deployments.",
                features: [
                  "CI/CD Pipelines",
                  "Infrastructure as Code",
                  "Monitoring & Logging",
                  "Automated Testing",
                ],
                icon: Zap,
              },
              {
                title: "AWS Security & Compliance",
                description:
                  "Implement enterprise-grade security and compliance frameworks using AWS security services.",
                features: [
                  "Security Assessment",
                  "Compliance Implementation",
                  "Threat Detection",
                  "Security Monitoring",
                ],
                icon: Shield,
              },
              {
                title: "AWS Cost Optimization",
                description:
                  "Optimize your AWS costs while maintaining performance and reliability through best practices.",
                features: [
                  "Cost Analysis",
                  "Right-Sizing",
                  "Reserved Instances",
                  "Cost Monitoring",
                ],
                icon: Award,
              },
            ].map((solution, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {solution.description}
                      </p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              AWS Certifications & Expertise
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Our team holds multiple AWS certifications and has extensive
              experience implementing AWS solutions across various industries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "AWS Solutions Architect",
                "AWS DevOps Engineer",
                "AWS Security Specialist",
                "AWS Data Analytics",
              ].map((cert, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-sm">{cert}</h3>
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
            Ready to Leverage AWS with Krun Tech?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our AWS-certified experts help you build, deploy, and optimize
            your cloud infrastructure on Amazon Web Services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 shadow-elegant"
            >
              <Link to="/contact">Start Your AWS Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
