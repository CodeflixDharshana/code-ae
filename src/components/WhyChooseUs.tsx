const reasons = [{
  icon: "ri-lightbulb-line",
  title: "Innovative Solutions",
  description: "We leverage cutting-edge technology to deliver solutions that keep you ahead of the competition"
}, {
  icon: "ri-customer-service-2-line",
  title: "Dedicated Support",
  description: "Our team provides 24/7 support to ensure your success at every step of the journey"
}, {
  icon: "ri-settings-3-line",
  title: "Customized Approach",
  description: "Every business is unique, and we tailor our services to match your specific needs and goals"
}, {
  icon: "ri-award-line",
  title: "Proven Expertise",
  description: "With years of experience and hundreds of successful projects, we deliver results that matter"
}];
const WhyChooseUs = () => {
  return <section className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground animate-fade-in">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Discover what sets us apart in the digital landscape
          </p>
        </div>
        
        <div className="space-y-24">
          {reasons.map((reason, idx) => <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16 animate-fade-in`} style={{
          animationDelay: `${idx * 150}ms`
        }}>
              {/* Icon Section */}
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow relative overflow-hidden group hover:scale-110 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
                  <i className={`${reason.icon} text-5xl text-white relative z-10`}></i>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>
                </div>
                
              </div>

              {/* Content Section */}
              <div className={`flex-1 ${idx % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                <div className={`${idx % 2 === 0 ? 'md:max-w-xl' : 'md:max-w-xl md:ml-auto'}`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                  <div className={`mt-6 h-1 w-24 bg-gradient-to-r from-primary to-primary/50 ${idx % 2 === 0 ? '' : 'md:ml-auto'}`}></div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default WhyChooseUs;