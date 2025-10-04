// src/pages/Contact/FAQ.tsx
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const animation = useScrollAnimation({ threshold: 0.1 });

  const faqs = [
    {
      question: "How do I get started with Codeflix Technologies?",
      answer: "Contact us via the form or email to discuss your project requirements. We'll schedule a free consultation within 24 hours."
    },
    {
      question: "What services do you offer?",
      answer: "We specialize in web development, mobile apps, AI solutions, and custom software for businesses in Dubai and beyond."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance packages with 24/7 monitoring, updates, and dedicated support for global clients."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary from 4-12 weeks depending on scope. We provide detailed estimates after initial discussions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      ref={animation.ref}
      className={`transition-all duration-700 ${
        animation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <HelpCircle className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Find quick answers or reach out if you need more details.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`} 
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;