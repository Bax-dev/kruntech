import { Link } from "react-router-dom";
import {
  ArrowRight,
  Cloud,
  Server,
  Shield,
  Zap,
  Users,
  Award,
  Heart,
  Building2,
  ShoppingCart,
  GraduationCap,
  Factory,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";

const Index = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Scalable and reliable cloud infrastructure solutions tailored to your business needs.",
    },
    {
      icon: Server,
      title: "Managed Services",
      description:
        "24/7 managed cloud services with expert support and monitoring.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with industry-standard compliance certifications.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Maximize your cloud performance with advanced optimization techniques.",
    },
  ];

  const stats = [
    { number: "500+", label: "Enterprise Clients" },
    { number: "99.99%", label: "Uptime SLA" },
    { number: "24/7", label: "Expert Support" },
    { number: "50+", label: "Countries Served" },
  ];

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Testimonials carousel state
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTestimonialAutoPlaying, setIsTestimonialAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Auto-play testimonials
  useEffect(() => {
    if (!isTestimonialAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, [isTestimonialAutoPlaying]);

  // Carousel functions
  const scrollCarousel = (direction: 'left' | 'right') => {
    setIsAutoPlaying(false);
    if (direction === 'left') {
      setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    } else {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(slideIndex);
  };

  // Testimonials functions
  const goToTestimonial = (testimonialIndex: number) => {
    setIsTestimonialAutoPlaying(false);
    setCurrentTestimonial(testimonialIndex);
  };

  return (
    <Layout>
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-32 left-1/4 w-4 h-4 bg-white/20 rotate-45 animate-bounce"></div>
          <div className="absolute top-48 right-1/3 w-6 h-6 bg-gray-300/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white/25 rotate-12 animate-bounce delay-1000"></div>
          <div className="absolute bottom-48 right-1/4 w-5 h-5 bg-gray-400/30 rounded-full animate-bounce delay-1500"></div>
          
          {/* Decorative Arc Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 border-2 border-white/15 rounded-full animate-spin-slow delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-20 h-20 border border-white/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex items-center min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                  <Cloud className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-medium text-sm">
                    Cloud Computing Excellence
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Transform Your
                  <span className="block text-white">Digital Future</span>
          </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Scale your business with enterprise-grade cloud solutions that
                  deliver
                  <span className="font-semibold" style={{ color: "#800020" }}>
                    {" "}
                    99.99% uptime
                  </span>
                  ,
                  <span className="font-semibold" style={{ color: "#800020" }}>
                    {" "}
                    advanced security
                  </span>
                  , and
                  <span className="font-semibold" style={{ color: "#800020" }}>
                    {" "}
                    seamless scalability
                  </span>
                  .
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="text-white shadow-2xl transition-all duration-300 text-lg px-8 py-6"
                  style={{
                    background: "linear-gradient(to right, #800020, #a00030)",
                    boxShadow: "0 25px 50px -12px rgba(128, 0, 32, 0.25)",
                  }}
                >
              <Link to="/contact">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8">
                <div className="flex items-center space-x-2 text-white/70">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">500+ Enterprise Clients</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Award className="w-5 h-5" />
                  <span className="text-sm">Industry Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-white/70">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">SOC 2 Compliant</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-4 md:p-6 lg:p-8 shadow-2xl max-w-md mx-auto lg:max-w-none">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#800020" }}
                      ></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-white/60 text-sm">Cloud Dashboard</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-3 md:p-4 border border-white/10">
                      <div className="text-xl md:text-2xl font-bold text-white mb-1">
                        99.99%
                      </div>
                      <div className="text-white/70 text-xs md:text-sm">
                        Uptime
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-3 md:p-4 border border-white/10">
                      <div className="text-xl md:text-2xl font-bold text-white mb-1">
                        24/7
                      </div>
                      <div className="text-white/70 text-xs md:text-sm">
                        Support
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-3 md:p-4 border border-white/10">
                      <div className="text-xl md:text-2xl font-bold text-white mb-1">
                        500+
                      </div>
                      <div className="text-white/70 text-xs md:text-sm">
                        Clients
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-3 md:p-4 border border-white/10">
                      <div className="text-xl md:text-2xl font-bold text-white mb-1">
                        50+
                      </div>
                      <div className="text-white/70 text-xs md:text-sm">
                        Countries
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 md:space-x-6 pt-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                      <Cloud className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                      <Server className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                      <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-pulse"
                style={{
                  background: "linear-gradient(to right, #800020, #a00030)",
                }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-pulse delay-1000"
                style={{
                  background: "linear-gradient(to right, #800020, #a00030)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 border border-gray-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gray-300 rounded-full"></div>
        </div>

        {/* Decorative Arc Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-16 w-40 h-40 border-2 border-gray-200/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-16 right-16 w-28 h-28 border border-gray-300/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 left-1/3 w-20 h-20 border border-gray-200/50 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-gray-300/20 rounded-full animate-spin-slow delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full">
                  <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#800020'}}></div>
                  <span className="text-gray-600 text-sm font-medium">About Krun Tech</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Pioneering the Future of <span style={{color: '#800020'}}>Cloud Computing</span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Since our founding, we've been at the forefront of cloud innovation, 
                  helping businesses transform their digital infrastructure and achieve 
                  unprecedented growth through cutting-edge technology solutions.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Enterprise Clients</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-gray-900 mb-2">99.99%</div>
                  <div className="text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-600">Expert Support</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses worldwide with scalable, secure, and innovative cloud solutions 
                  that drive digital transformation and accelerate growth in the modern digital economy.
                </p>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative">
              {/* Main Visual Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 w-16 h-16 border border-white rounded-full"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white rounded-full"></div>
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">Trusted by Industry Leaders</h3>
                    <p className="text-gray-300">From startups to Fortune 500 companies</p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#800020'}}>
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">Enterprise-Grade Security</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#800020'}}>
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">Lightning-Fast Performance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#800020'}}>
                        <Cloud className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">Scalable Infrastructure</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#800020'}}>
                        <Server className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white font-medium">24/7 Managed Services</span>
          </div>
        </div>

                  {/* CTA */}
                  <div className="pt-6">
                    <Button asChild size="lg" className="w-full text-white shadow-2xl transition-all duration-300 text-lg py-6" style={{background: 'linear-gradient(to right, #800020, #a00030)', boxShadow: '0 25px 50px -12px rgba(128, 0, 32, 0.25)'}}>
                      <Link to="/contact">
                        Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full animate-pulse" style={{background: 'linear-gradient(to right, #800020, #a00030)'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full animate-pulse delay-1000" style={{background: 'linear-gradient(to right, #800020, #a00030)'}}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-gray-300 rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 border border-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-gray-300 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: "#800020" }}
              ></div>
              <span className="text-gray-600 text-sm font-medium">
                Our Expertise
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud Solutions That
              <span className="block" style={{ color: "#800020" }}>
                Drive Results
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of cloud
              services, designed to scale with your ambitions and secure your
              digital future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden">
                  
                  <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 bg-red-100">
                      <service.icon className="w-10 h-10 text-red-600" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div
                      className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform duration-300"
                      style={{ color: "#800020" }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-all duration-500"></div>
                </div>

                {index < services.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-200 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 relative overflow-hidden">
        
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Infrastructure?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts design a custom cloud solution that perfectly
                fits your business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-white shadow-2xl transition-all duration-300 text-lg px-8 py-6"
                  style={{
                    background: "linear-gradient(to right, #800020, #a00030)",
                    boxShadow: "0 25px 50px -12px rgba(128, 0, 32, 0.25)",
                  }}
                >
                  <Link to="/contact">
                    Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Arc Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-36 h-36 border-2 border-gray-300/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border border-gray-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-gray-300/40 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-28 h-28 border-2 border-gray-200/25 rounded-full animate-spin-slow delay-500"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industries We{" "}
              <span style={{color: '#800020'}}>Serve</span>
              </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses across diverse sectors with cutting-edge cloud solutions
            </p>
          </div>

          {/* Industries Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[
                  // Slide 1: Healthcare & Financial Services
                  [
                    {
                      icon: Heart,
                      title: "Healthcare",
                      description: "HIPAA-compliant cloud infrastructure for hospitals, clinics, and medical research",
                      features: ["Patient Data Security", "Telemedicine Platforms", "Research Analytics"]
                    },
                    {
                      icon: Building2,
                      title: "Financial Services",
                      description: "Secure, scalable solutions for banks, fintech, and investment firms",
                      features: ["Fraud Detection", "Real-time Trading", "Compliance Management"]
                    }
                  ],
                  // Slide 2: E-commerce & Education
                  [
                    {
                      icon: ShoppingCart,
                      title: "E-commerce",
                      description: "High-performance platforms for online retailers and marketplaces",
                      features: ["Scalable Infrastructure", "Payment Processing", "Inventory Management"]
                    },
                    {
                      icon: GraduationCap,
                      title: "Education",
                      description: "Cloud-based learning management systems and educational tools",
                      features: ["Virtual Classrooms", "Student Analytics", "Content Delivery"]
                    }
                  ],
                  // Slide 3: Manufacturing & Gaming & Media
                  [
                    {
                      icon: Factory,
                      title: "Manufacturing",
                      description: "IoT integration and smart factory solutions for industrial operations",
                      features: ["Predictive Maintenance", "Supply Chain", "Quality Control"]
                    },
                    {
                      icon: Gamepad2,
                      title: "Gaming & Media",
                      description: "High-performance infrastructure for gaming platforms and content delivery",
                      features: ["Global CDN", "Real-time Gaming", "Content Streaming"]
                    }
                  ]
                ].map((slideIndustries, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {slideIndustries.map((industry, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 h-full border border-gray-100">
                          {/* Industry Icon */}
                          <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{backgroundColor: '#800020', color: 'white'}}>
                              <industry.icon className="w-10 h-10" />
                            </div>
                          </div>
                          
                          {/* Industry Title */}
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                            {industry.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="text-gray-600 mb-6 text-center leading-relaxed">
                            {industry.description}
                          </p>
                          
                          {/* Features */}
                          <div className="space-y-3">
                            {industry.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#800020'}}></div>
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Learn More Button */}
                          <div className="mt-8 text-center">
                            <button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105" 
                                    style={{backgroundColor: '#800020', color: 'white'}}>
                              Learn More
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10"
              onClick={() => scrollCarousel('left')}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10"
              onClick={() => scrollCarousel('right')}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
                    </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {[0, 1, 2].map((dot) => (
              <button
                key={dot}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{backgroundColor: dot === currentSlide ? '#800020' : '#E5E7EB'}}
                onClick={() => goToSlide(dot)}
              ></button>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Don't see your industry? We customize solutions for every sector.
            </p>
            <button className="px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105" 
                    style={{backgroundColor: '#800020', color: 'white'}}>
              Get Custom Solution
            </button>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Industry{" "}
              <span style={{color: '#800020'}}>Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to partner with leading organizations across various industries
            </p>
          </div>

          {/* Clients Logos - Smooth Scrolling */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex items-center space-x-16 flex-shrink-0">
                {[
                  { name: "Microsoft", logo: "Microsoft" },
                  { name: "Amazon Web Services", logo: "AWS" },
                  { name: "Google Cloud", logo: "Google Cloud" },
                  { name: "IBM", logo: "IBM" },
                  { name: "Oracle", logo: "Oracle" },
                  { name: "Salesforce", logo: "Salesforce" },
                  { name: "Adobe", logo: "Adobe" },
                  { name: "Netflix", logo: "Netflix" },
                ].map((client, index) => (
                  <div key={index} className="flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-100 rounded-lg px-6 py-3 flex items-center justify-center w-full h-full">
                      <span className="text-gray-700 font-semibold text-sm">{client.logo}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-16 flex-shrink-0 ml-16">
                {[
                  { name: "Microsoft", logo: "Microsoft" },
                  { name: "Amazon Web Services", logo: "AWS" },
                  { name: "Google Cloud", logo: "Google Cloud" },
                  { name: "IBM", logo: "IBM" },
                  { name: "Oracle", logo: "Oracle" },
                  { name: "Salesforce", logo: "Salesforce" },
                  { name: "Adobe", logo: "Adobe" },
                  { name: "Netflix", logo: "Netflix" },
                ].map((client, index) => (
                  <div key={`duplicate-${index}`} className="flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-100 rounded-lg px-6 py-3 flex items-center justify-center w-full h-full">
                      <span className="text-gray-700 font-semibold text-sm">{client.logo}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                    </div>


          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Enterprise Clients" },
                { number: "50+", label: "Global Partners" },
                { number: "99.9%", label: "Client Satisfaction" },
                { number: "24/7", label: "Partner Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#800020'}}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Arc Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-16 w-44 h-44 border-2 border-gray-300/15 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-16 left-16 w-36 h-36 border border-gray-400/25 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 border border-gray-300/35 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 border-2 border-gray-200/20 rounded-full animate-spin-slow delay-500"></div>
        </div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span style={{color: '#800020'}}>Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our cloud solutions
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {[
                  {
                    name: "Sarah Johnson",
                    company: "TechCorp Solutions",
                    testimonial: "Krun Tech transformed our entire cloud infrastructure. Their expertise and 24/7 support have been invaluable to our growth. The migration was seamless and we've seen incredible results."
                  },
                  {
                    name: "Michael Chen",
                    company: "InnovateLabs",
                    testimonial: "The migration to their cloud platform was seamless. We've seen 40% improvement in performance and significant cost savings. Their team is truly exceptional."
                  },
                  {
                    name: "Emily Rodriguez",
                    company: "Global Finance Inc",
                    testimonial: "Outstanding security and compliance features. Krun Tech helped us meet all regulatory requirements while improving efficiency. Highly recommended for enterprise solutions."
                  },
                  {
                    name: "David Thompson",
                    company: "StartupX",
                    testimonial: "From day one, Krun Tech understood our needs. Their scalable solutions have grown with our business perfectly. The support team is always available when we need them."
                  },
                  {
                    name: "Lisa Wang",
                    company: "ManufacturingPro",
                    testimonial: "The IoT integration and predictive maintenance features have revolutionized our manufacturing processes. We've reduced downtime by 60% and improved overall efficiency."
                  },
                  {
                    name: "James Wilson",
                    company: "EduTech Global",
                    testimonial: "Perfect solution for our educational platform. The virtual classroom infrastructure handles thousands of students seamlessly. The scalability is impressive."
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
                      {/* Rating Stars */}
                      <div className="flex items-center justify-center mb-8">
                        {[...Array(5)].map((_, starIndex) => (
                          <svg key={starIndex} className="w-6 h-6 text-yellow-400 fill-current mx-1" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                        "{testimonial.testimonial}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="border-t border-gray-200 pt-6">
                        <div className="font-semibold text-lg text-gray-900 mb-1">{testimonial.name}</div>
                        <div className="text-base font-medium" style={{color: '#800020'}}>{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10"
              onClick={() => {
                setIsTestimonialAutoPlaying(false);
                setCurrentTestimonial((prev) => (prev - 1 + 6) % 6);
              }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 z-10"
              onClick={() => {
                setIsTestimonialAutoPlaying(false);
                setCurrentTestimonial((prev) => (prev + 1) % 6);
              }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {[0, 1, 2, 3, 4, 5].map((dot) => (
              <button
                key={dot}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{backgroundColor: dot === currentTestimonial ? '#800020' : '#E5E7EB'}}
                onClick={() => goToTestimonial(dot)}
              ></button>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 bg-white rounded-2xl shadow-lg p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" style={{color: '#800020'}}>98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{color: '#800020'}}>4.9/5</div>
                <div className="text-gray-600 font-medium">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{color: '#800020'}}>95%</div>
                <div className="text-gray-600 font-medium">Would Recommend Us</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises who trust Krun Tech for their cloud
            infrastructure needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 shadow-elegant"
          >
            <Link to="/contact">
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
