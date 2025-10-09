import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="shadow-2xl border-2 border-primary/20 bg-background/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Cookie Policy
                </h3>
                <button
                  onClick={handleClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, 
                and personalize content. By continuing to use our website, you consent to 
                our use of cookies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAccept}
                  className="flex-1 gradient-primary text-primary-foreground hover:shadow-lg transition-all duration-300"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="flex-1 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  Decline
                </Button>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/50">
                <Link
                  to="/cookie-policy"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Learn more about our Cookie Policy
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
