import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "./servicesData";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const servicesAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={heroAnimation.ref}
            className={`text-center transition-all duration-700 ${
              heroAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-orange">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to transform your business. 
              From web development to cloud infrastructure, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={servicesAnimation.ref}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              servicesAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            {services.map((service, index) => (
              <Link
                key={service.serviceKey}
                to={`/services/${service.serviceKey}`}
                className={`group bg-card border border-border rounded-2xl p-8 hover:border-orange/50 hover:shadow-glow transition-all duration-500 ${
                  servicesAnimation.isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: servicesAnimation.isVisible ? `${index * 100}ms` : "0ms"
                }}
              >
                <div className="w-16 h-16 rounded-xl bg-orange/10 flex items-center justify-center mb-6 group-hover:bg-orange/20 group-hover:scale-110 transition-all duration-300">
                  <i className={`${service.icon} text-3xl text-orange`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-orange font-semibold group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange/10 to-orange/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss how our services can help transform your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-orange border border-orange px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;