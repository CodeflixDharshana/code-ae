import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "./servicesData";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { serviceKey } = useParams<{ serviceKey: string }>();
  const service = services.find(s => s.serviceKey === serviceKey);

  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const overviewAnimation = useScrollAnimation({ threshold: 0.1 });
  const featuresAnimation = useScrollAnimation({ threshold: 0.1 });
  const processAnimation = useScrollAnimation({ threshold: 0.1 });
  const pricingAnimation = useScrollAnimation({ threshold: 0.1 });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-orange/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--orange)/0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={heroAnimation.ref}
            className={`transition-all duration-700 ${
              heroAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-orange transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
            
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-2xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                <i className={`${service.icon} text-4xl text-orange`}></i>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {service.detailPage.heroTitle}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {service.detailPage.heroDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={overviewAnimation.ref}
            className={`bg-card border border-border rounded-2xl p-8 md:p-12 transition-all duration-700 ${
              overviewAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.detailPage.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={featuresAnimation.ref}
            className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
              featuresAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Features */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                  <i className="ri-star-line text-orange text-xl"></i>
                </div>
                Key Features
              </h2>
              <ul className="space-y-4">
                {service.detailPage.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-orange" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                  <i className="ri-rocket-line text-orange text-xl"></i>
                </div>
                Benefits
              </h2>
              <ul className="space-y-4">
                {service.detailPage.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-orange" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={processAnimation.ref}
            className={`transition-all duration-700 ${
              processAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.detailPage.process.map((step, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-orange/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-orange">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={pricingAnimation.ref}
            className={`transition-all duration-700 ${
              pricingAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Pricing Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-orange/50 transition-all">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-3xl font-bold text-orange mb-6">
                  {service.detailPage.pricing.starter}
                </p>
                <p className="text-muted-foreground">Perfect for small projects and startups</p>
              </div>
              <div className="bg-card border-2 border-orange rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-3xl font-bold text-orange mb-6">
                  {service.detailPage.pricing.professional}
                </p>
                <p className="text-muted-foreground">Ideal for growing businesses</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-orange/50 transition-all">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-orange mb-6">
                  {service.detailPage.pricing.enterprise}
                </p>
                <p className="text-muted-foreground">Customized solutions for large organizations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-orange/10 to-orange/5 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s discuss your project and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="orange" size="lg" className="w-full sm:w-auto">
                Contact Us
                <i className="ri-arrow-right-line ml-2"></i>
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
