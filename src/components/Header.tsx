import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const handleLanguageSwitch = (lang: "en" | "ar") => {
    setLanguage(lang);
    document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Orange Circle */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-logo text-2xl text-foreground">Codeflix</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#home" className="text-foreground hover:text-orange transition-smooth">
              Home
            </a>
            <Link to="/about" className="text-foreground hover:text-orange transition-smooth">
              About
            </Link>
            <Link to="/services" className="text-foreground hover:text-orange transition-smooth">
              Services
            </Link>
            <Link to="/blogs" className="text-foreground hover:text-orange transition-smooth">
              Blogs
            </Link>
            <Link to="/contact" className="text-foreground hover:text-orange transition-smooth">
              Contact Us
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant={language === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => handleLanguageSwitch("en")}
              className={language === "en" ? "bg-orange text-gray-800 hover:bg-orange-hover" : "text-foreground hover:text-orange border-gray-600 hover:border-orange"}
            >
              English
            </Button>
            <Button
              variant={language === "ar" ? "default" : "outline"}
              size="sm"
              onClick={() => handleLanguageSwitch("ar")}
              className={language === "ar" ? "bg-orange text-gray-800 hover:bg-orange-hover" : "text-foreground hover:text-orange border-gray-600 hover:border-orange"}
            >
              العربية
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`ri-${mobileMenuOpen ? "close" : "menu"}-line text-2xl text-foreground`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <a href="/#home" className="block py-2 text-foreground hover:text-orange transition-smooth">
              Home
            </a>
            <Link to="/about" className="block py-2 text-foreground hover:text-orange transition-smooth">
              About
            </Link>
            <Link to="/services" className="block py-2 text-foreground hover:text-orange transition-smooth">
              Services
            </Link>
            <Link to="/blogs" className="block py-2 text-foreground hover:text-orange transition-smooth">
              Blogs
            </Link>
            <Link to="/contact" className="block py-2 text-foreground hover:text-orange transition-smooth">
              Contact Us
            </Link>
            <div className="flex space-x-2 pt-2">
              <Button
                variant={language === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLanguageSwitch("en")}
                className={language === "en" ? "bg-orange text-gray-800 hover:bg-orange-hover" : "text-foreground hover:text-orange border-gray-600 hover:border-orange"}
              >
                English
              </Button>
              <Button
                variant={language === "ar" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLanguageSwitch("ar")}
                className={language === "ar" ? "bg-orange text-gray-800 hover:bg-orange-hover" : "text-foreground hover:text-orange border-gray-600 hover:border-orange"}
              >
                العربية
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;