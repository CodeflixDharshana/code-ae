// src/pages/Contact/OperatingHours.tsx
import { Clock, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const OperatingHours = () => {
  const animation = useScrollAnimation({ threshold: 0.1 });
  
  const hours = [
    {
      day: "Monday - Friday",
      time: "9:00 AM - 6:00 PM GST",
      availability: "Full Support"
    },
    {
      day: "Saturday",
      time: "10:00 AM - 2:00 PM GST",
      availability: "Limited Support"
    },
    {
      day: "Sunday",
      time: "Closed",
      availability: "Email Only"
    }
  ];

  return (
    <div 
      ref={animation.ref}
      className={`bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-lg transition-all duration-700 ${
        animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Operating Hours</h2>
        <p className="text-muted-foreground text-lg">
          We're available to serve our global customers with timezone-friendly support.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {hours.map((item, index) => (
          <div
            key={index}
            className="text-center p-6 rounded-xl bg-muted/20 hover:bg-primary/5 transition-colors duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{item.day}</h3>
            <p className="text-primary font-medium mb-1">{item.time}</p>
            <p className="text-sm text-muted-foreground">{item.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperatingHours;