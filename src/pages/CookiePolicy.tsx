import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cookie, Shield, Settings, BarChart3, ExternalLink } from "lucide-react";

const CookiePolicy = () => {
  const cookieTypes = [
    {
      icon: Settings,
      title: "Essential Cookies",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      examples: ["Session management", "Security features", "Load balancing"],
      required: true
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "These cookies help us understand how visitors interact with our website.",
      examples: ["Page views", "User behavior", "Performance metrics"],
      required: false
    },
    {
      icon: Shield,
      title: "Functional Cookies",
      description: "These cookies enable enhanced functionality and personalization.",
      examples: ["Language preferences", "User settings", "Customized content"],
      required: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Cookie className="w-10 h-10 text-orange-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Learn about how we use cookies to enhance your experience on our website
          </p>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What Are Cookies?
            </h2>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cookies do not contain any personal information that can identify you directly, but they 
                  may contain information about your browsing behavior and preferences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Types of Cookies We Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cookieTypes.map((type, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl flex items-center">
                    {type.title}
                    {type.required && (
                      <span className="ml-2 text-xs bg-[#800020]/10 text-[#800020] px-2 py-1 rounded-full">
                        Required
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Managing Your Cookie Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Browser Settings</h3>
                  <p className="text-muted-foreground mb-6">
                    You can control cookies through your browser settings. Most browsers allow you to 
                    refuse or delete cookies.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Chrome</span>
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Firefox</span>
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Safari</span>
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Edge</span>
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Our Cookie Consent</h3>
                  <p className="text-muted-foreground mb-6">
                    When you first visit our website, you'll see a cookie consent banner. You can 
                    choose to accept or decline non-essential cookies.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Accept All</h4>
                      <p className="text-sm text-green-700">
                        Allows all cookies for the best experience
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Decline</h4>
                      <p className="text-sm text-yellow-700">
                        Only essential cookies will be used
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              If you have any questions about our use of cookies or this policy, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-primary shadow-elegant">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="shadow-elegant">
                <Link to="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
