// src/pages/Contact/Contact.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import FAQ from "./FAQ";
import HeadOfficeAndBranches from "./HeadOfficeAndBranches";
import OperatingHours from "./OperatingHours";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 });
  const contactAnimation = useScrollAnimation({ threshold: 0.1 });
  const hoursAnimation = useScrollAnimation({ threshold: 0.2 });
  const officeAnimation = useScrollAnimation({ threshold: 0.1 });
  const faqAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section - Updated to full-width with subtle overlay */}
      <section className="pt-28 pb-20 relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            ref={heroAnimation.ref}
            className={`text-center transition-all duration-700 ${
              heroAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a question, project idea, or need support? We're here to help. 
              Reach out via form, chat, or connect on social media – we'll respond promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Stacked on mobile, side-by-side on larger screens */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={contactAnimation.ref}
            className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-start transition-all duration-700 ${
              contactAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Operating Hours Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={hoursAnimation.ref}
            className={`transition-all duration-700 ${
              hoursAnimation.isVisible 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-95"
            }`}
          >
            <OperatingHours />
          </div>
        </div>
      </section>

      {/* Head Office & Branches Section with Map */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={officeAnimation.ref}
            className={`transition-all duration-700 ${
              officeAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <HeadOfficeAndBranches />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={faqAnimation.ref}
            className={`transition-all duration-700 ${
              faqAnimation.isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <FAQ />
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Live Chat Floating Button - Instant Support Option */}
      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all duration-300 z-50 flex items-center justify-center hover:scale-110">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 4.582 9 9z" />
        </svg>
      </button>
    </div>
  );
};

export default Contact;