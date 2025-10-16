import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Partners", path: "/partners" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-card" : "bg-white/95 backdrop-blur-md shadow-card"
      }`}
    >
       <div className="container mx-auto px-4">
         <div className="flex items-center justify-between h-24">
        
           <Link to="/" className="flex items-center space-x-2 group">
               <img 
                 src="/logo.png" 
                 alt="Krun Tech Logo" 
                 className="h-[10.5em] w-auto object-contain drop-shadow-xl filter brightness-110 contrast-125"
               />
           </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                 className={`px-4 py-2 rounded-lg font-medium transition-all ${
                   isActive(link.path)
                     ? "text-white"
                     : "text-[#800020] hover:bg-gray-100 hover:text-[#800020]"
                 }`}
                style={isActive(link.path) ? {backgroundColor: '#800020'} : {}}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="gradient-primary shadow-elegant">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
           <button
             className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             {isMobileMenuOpen ? (
               <X className="w-6 h-6 text-[#800020]" />
             ) : (
               <Menu className="w-6 h-6 text-[#800020]" />
             )}
           </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                 className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                   isActive(link.path)
                     ? "text-white"
                     : "text-[#800020] hover:bg-gray-100 hover:text-[#800020]"
                 }`}
                style={isActive(link.path) ? {backgroundColor: '#800020'} : {}}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full gradient-primary mt-4">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
