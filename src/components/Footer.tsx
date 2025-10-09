import { Link } from "react-router-dom";
import { Cloud, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-20 h-16 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-xl border-2 border-gray-200 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Krun Tech Logo" 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-background/80 text-sm">
              Enterprise cloud computing solutions for modern businesses.
            </p>
            
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://facebook.com/kruntech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-background/80 hover:text-background" />
              </a>
              <a 
                href="https://x.com/kruntech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <FaXTwitter className="w-5 h-5 text-background/80 hover:text-background" />
              </a>
              <a 
                href="https://instagram.com/kruntech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-background/80 hover:text-background" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-background/80 hover:text-background transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-background/80 hover:text-background transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-background/80 hover:text-background transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-background/80" />
                <a 
                  href="mailto:info@kruntech.com" 
                  className="text-background/80 hover:text-background transition-colors"
                >
                  info@kruntech.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-background/80" />
                <a 
                  href="tel:+2348031371520" 
                  className="text-background/80 hover:text-background transition-colors"
                >
                  +2348031371520
                </a>
              </li>
              {/* <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-background/80" />
                <span className="text-background/80">123 Cloud Street, Tech City</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Kruntech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
