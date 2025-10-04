// src/pages/Contact/ContactInfo.tsx
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactInfo = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const detailsAnimation = useScrollAnimation({ threshold: 0.1 });
  const socialAnimation = useScrollAnimation({ threshold: 0.2 });

  const contactDetails = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@codeflix.com | support@codeflix.com",
      link: "mailto:info@codeflix.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+971 4 XXX XXXX | +971 50 XXX XXXX",
      link: "tel:+97140000000"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Business Bay, Dubai, UAE",
      link: "#"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM | Sat: 10AM-2PM",
      link: "#"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Modern Header with Gradient Accent */}
      <div 
        ref={headerAnimation.ref}
        className={`transition-all duration-700 ${
          headerAnimation.isVisible 
            ? "opacity-100 translate-x-0" 
            : "opacity-0 -translate-x-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Ready to build something amazing? Drop us a line—we respond within hours.
        </p>
      </div>

      {/* Modern Contact Details Grid */}
      <div 
        ref={detailsAnimation.ref}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
          detailsAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}
      >
        {contactDetails.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="group relative bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/30">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors text-sm truncate">
                  {item.details}
                </p>
              </div>
            </div>
            
            {/* Hover Arrow */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Modern Social Section with Glass Effect */}
      <div 
        ref={socialAnimation.ref}
        className={`backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-primary/20 rounded-2xl p-6 transition-all duration-700 ${
          socialAnimation.isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}
      >
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-foreground">
          Follow Us
          <span className="text-sm text-muted-foreground">(Stay Updated)</span>
        </h3>
        <div className="flex gap-3">
          <a
            href="https://linkedin.com/company/codeflix"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center hover:from-primary/20 hover:to-primary/30 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </a>
          <a
            href="https://twitter.com/codeflixtech"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center hover:from-primary/20 hover:to-primary/30 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </a>
          <a
            href="https://facebook.com/codeflixtech"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center hover:from-primary/20 hover:to-primary/30 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </a>
          <a
            href="https://instagram.com/codeflixtech"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center hover:from-primary/20 hover:to-primary/30 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;