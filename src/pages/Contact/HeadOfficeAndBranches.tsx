import { MapPin, Building2, Clock, Phone, Mail, Navigation, Users, Calendar, Car, Coffee, Wifi } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const HeadOfficeAndBranches = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const mapAnimation = useScrollAnimation({ threshold: 0.1 });
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      title: "Head Office",
      address: "Business Bay, Dubai, UAE",
      fullAddress: "Floor 15, The Exchange Tower, Business Bay, Dubai, UAE",
      phone: "+971 4 XXX XXXX",
      email: "info@codeflix.com",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-2PM",
      coordinates: { lat: 25.262195, lng: 55.271639 },
      features: ["Meeting Rooms", "Client Lounge", "Parking", "High-Speed WiFi"],
      team: "35+ Team Members",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Branch Office",
      address: "JLT, Dubai, UAE",
      fullAddress: "Cluster W, Jumeirah Lake Towers, Dubai, UAE",
      phone: "+971 50 XXX XXXX",
      email: "support@codeflix.com",
      hours: "Mon-Fri: 10AM-7PM, Sat: 10AM-4PM",
      coordinates: { lat: 25.0777, lng: 55.1389 },
      features: ["Co-working Space", "Training Center", "Coffee Bar", "Parking"],
      team: "15+ Team Members",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Enhanced Header */}
      <div 
        ref={headerAnimation.ref}
        className={`text-center transition-all duration-700 ${
          headerAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Visit Our Offices</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Experience our workspaces firsthand. We'd love to show you around.
        </p>
      </div>

      {/* Interactive Map with Location Details */}
      <div 
        ref={mapAnimation.ref}
        className={`transition-all duration-700 ${
          mapAnimation.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
            {locations.map((location, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ${
                  activeLocation === index 
                    ? "bg-primary/10 border-primary/30 shadow-md" 
                    : "bg-card border-border hover:border-primary/20 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeLocation === index ? "bg-primary/20" : "bg-primary/10"
                  }`}>
                    <Building2 className={`w-5 h-5 ${
                      activeLocation === index ? "text-primary" : "text-primary/70"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{location.title}</h4>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Users className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{location.team}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
            
            {/* Quick Actions - Two Column Layout */}
            <div className="pt-4 border-t border-border">
              <h4 className="font-medium mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-2">
                {/* Left Column */}
                <div className="space-y-2">
                  <a 
                    href={`tel:${locations[activeLocation].phone}`}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {locations[activeLocation].title}
                  </a>
                  <a 
                    href={`mailto:${locations[activeLocation].email}`}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email {locations[activeLocation].title}
                  </a>
                </div>
                {/* Right Column */}
                <div className="space-y-2">
                  <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </button>
                  <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                    <Calendar className="w-4 h-4" />
                    Schedule Visit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Only */}
          <div className="lg:col-span-2">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-border">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2842775268777!2d${locations[activeLocation].coordinates.lng}!3d${locations[activeLocation].coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${locations[activeLocation].title} Location`}
              />
              
              {/* Map Overlay with Location Name */}
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md">
                <h4 className="font-semibold text-sm">{locations[activeLocation].title}</h4>
                <p className="text-xs text-muted-foreground">{locations[activeLocation].address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadOfficeAndBranches;