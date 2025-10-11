import { Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Clients = () => {
  const clients = [
    { name: "Tech Corp", industry: "Technology", users: "10,000+" },
    { name: "Finance Plus", industry: "Financial Services", users: "50,000+" },
    { name: "Health Systems", industry: "Healthcare", users: "25,000+" },
    { name: "Retail Global", industry: "Retail", users: "100,000+" },
    { name: "Edu Platform", industry: "Education", users: "30,000+" },
    { name: "Media Group", industry: "Media & Entertainment", users: "75,000+" },
    { name: "Manufacturing Co", industry: "Manufacturing", users: "15,000+" },
    { name: "Logistics Hub", industry: "Logistics", users: "20,000+" },
    { name: "Energy Systems", industry: "Energy", users: "40,000+" },
    { name: "Travel Network", industry: "Travel & Hospitality", users: "60,000+" },
    { name: "Insurance Group", industry: "Insurance", users: "35,000+" },
    { name: "Gaming Studio", industry: "Gaming", users: "80,000+" },
  ];

  const testimonials = [
    {
      company: "Tech Corp",
      quote: "Krun Tech's cloud infrastructure has been instrumental in scaling our operations globally. Their reliability and support are unmatched.",
      author: "John Smith, CTO",
    },
    {
      company: "Finance Plus",
      quote: "The security and compliance features provided by Krun Tech give us complete peace of mind for our financial services.",
      author: "Sarah Johnson, Head of IT",
    },
    {
      company: "Retail Global",
      quote: "We've seen a 50% reduction in infrastructure costs while improving performance. Krun Tech delivers on every promise.",
      author: "Michael Chen, VP of Engineering",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Clients
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Trusted by leading enterprises across industries worldwide
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "120+", label: "Enterprise Clients" },
              { number: "25+", label: "Countries" },
              { number: "150K+", label: "Active Users" },
              { number: "99.99%", label: "Uptime" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Companies We Work With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{client.industry}</p>
                  <p className="text-sm font-medium text-accent">{client.users} users</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-8">
                  <div className="text-5xl text-primary mb-4">"</div>
                  <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Join Our Growing Client Base
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence that our clients trust every day.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
