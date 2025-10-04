import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamCollab from "@/assets/team-collab.jpg";

const About = () => {
  const [activeValue, setActiveValue] = useState("innovation");

  const coreValues = {
    innovation: {
      icon: "ri-lightbulb-line",
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative thinking to develop groundbreaking solutions that transform marketing strategies. Our commitment to innovation drives continuous improvement and keeps us at the forefront of industry advancements.",
      points: [
        "Continuous technological advancement",
        "Creative problem-solving approach",
        "Forward-thinking solutions"
      ]
    },
    excellence: {
      icon: "ri-award-line",
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product development to customer service. Our commitment to quality ensures that we deliver outstanding results that exceed expectations.",
      points: [
        "Highest quality standards",
        "Continuous improvement",
        "Best-in-class solutions"
      ]
    },
    "client-centricity": {
      icon: "ri-user-heart-line",
      title: "Client-Centricity",
      description: "Our clients are at the heart of everything we do. We prioritize understanding their needs and delivering solutions that drive their success, building long-lasting partnerships based on trust and mutual growth.",
      points: [
        "Customer-focused approach",
        "Personalized solutions",
        "Long-term partnerships"
      ]
    },
    integrity: {
      icon: "ri-shield-check-line",
      title: "Integrity",
      description: "We conduct our business with the highest level of integrity, maintaining transparency and ethical practices in all our operations. Trust is the foundation of our relationships with clients and partners.",
      points: [
        "Ethical business practices",
        "Complete transparency",
        "Trustworthy partnerships"
      ]
    }
  };

  const storyMilestones = [
    {
      year: "2020",
      title: "The Beginning",
      icon: "ri-flag-line",
      description: "Started in 2020 with a vision to revolutionize digital marketing through AI innovation. Our founding team of three passionate entrepreneurs set out to solve the biggest challenges in marketing automation.",
      color: "blue"
    },
    {
      year: "2022",
      title: "Team Growth",
      icon: "ri-team-line",
      description: "Expanded to a team of 50+ talented professionals across engineering, design, and marketing. Built a culture of innovation and customer-centricity that drives our success.",
      color: "purple"
    },
    {
      year: "2023",
      title: "Global Partnership",
      icon: "ri-global-line",
      description: "Formed strategic partnerships with leading tech companies and marketing agencies worldwide. Established offices in 5 countries to better serve our global customer base.",
      color: "pink"
    },
    {
      year: "2025",
      title: "Worldwide Impact",
      icon: "ri-earth-line",
      description: "Today, we serve 10,000+ businesses across 30+ countries, helping them achieve unprecedented marketing success through our AI-powered platform.",
      color: "green"
    }
  ];

  const communities = [
    {
      icon: "ri-store-3-line",
      title: "Retail",
      description: "Empowering retail businesses with e-commerce platforms and digital solutions."
    },
    {
      icon: "ri-hospital-line",
      title: "Healthcare",
      description: "Enhancing patient care with secure and innovative tech solutions."
    },
    {
      icon: "ri-bank-line",
      title: "Finance",
      description: "Driving financial institutions with robust and scalable IT systems."
    },
    {
      icon: "ri-hotel-line",
      title: "Hospitality",
      description: "Elevating guest experiences through tailored digital innovations."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                About <span className="text-primary">Codeflix Technologies</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Codeflix Technologies delivers cutting-edge IT solutions with a commitment to excellence, driving digital transformation in the UAE and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-glow">Get Started</Button>
                <Button variant="outline" size="lg">Our Services</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group animate-fade-in">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <img 
                    src={teamCollab} 
                    alt="Our Team" 
                    className="w-full h-[500px] object-cover rounded-2xl shadow-glow"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-primary/20 shadow-glow">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-primary font-semibold">Founded in 2020</p>
                        <h4 className="text-xl font-bold mt-1">Global Team of 150+ Experts</h4>
                      </div>
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-card">
                          <i className="ri-team-line text-primary"></i>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center border-2 border-card">
                          <i className="ri-award-line text-primary"></i>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/40 flex items-center justify-center border-2 border-card">
                          <i className="ri-global-line text-primary"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-primary text-xl mb-3 font-semibold">Who We Are</h2>
                  <h3 className="text-4xl font-bold mb-6">Transforming Marketing Through Innovation</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We're a team of passionate innovators, data scientists, and marketing experts united by a single mission: to revolutionize how businesses connect with their customers. Since our founding, we've been at the forefront of AI-driven marketing solutions, helping companies of all sizes achieve extraordinary results.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <i className="ri-focus-3-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                    <p className="text-muted-foreground text-sm">
                      To empower businesses with intelligent marketing solutions that drive measurable growth and meaningful connections.
                    </p>
                  </div>

                  <div className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <i className="ri-eye-line text-2xl text-white"></i>
                    </div>
                    <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                    <p className="text-muted-foreground text-sm">
                      To be the global leader in AI-powered marketing automation, setting new standards for innovation and customer success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-primary text-xl mb-3 font-semibold">Our Story</h2>
              <h3 className="text-4xl font-bold mb-6">Journey of Innovation</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From a small startup to a global marketing technology leader, discover our journey of innovation and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {storyMilestones.map((milestone, idx) => (
                <div 
                  key={idx}
                  className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform">
                    <i className={`${milestone.icon} text-2xl text-white`}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                  <span className="text-primary text-sm font-bold">{milestone.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section - New Design */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-primary text-xl mb-3 font-semibold">Our Values</h2>
              <h3 className="text-4xl font-bold mb-6">Core Principles That Guide Us</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our innovation and commitment to excellence.
              </p>
            </div>

            {/* Value Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {Object.keys(coreValues).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveValue(key)}
                  className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 ${
                    activeValue === key
                      ? "bg-primary text-white shadow-glow"
                      : "bg-card text-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  <i className={coreValues[key as keyof typeof coreValues].icon}></i>
                  <span>{coreValues[key as keyof typeof coreValues].title}</span>
                </button>
              ))}
            </div>

            {/* Value Display - Feature Style */}
            <div className="relative">
              {Object.entries(coreValues).map(([key, value]) => (
                <div
                  key={key}
                  className={`transition-all duration-500 ${
                    activeValue === key ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Icon Side */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
                        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-glow">
                          <i className={`${value.icon} text-5xl text-white`}></i>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="flex-1 text-center lg:text-left">
                      <h4 className="text-4xl font-bold mb-6 text-foreground">{value.title}</h4>
                      <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
                        {value.description}
                      </p>
                      
                      {/* Points Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {value.points.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <i className="ri-check-line text-primary text-xl"></i>
                            </div>
                            <span className="text-foreground">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Community Section - Without Learn More */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-primary text-xl mb-3 font-semibold">Our Community</h2>
              <h3 className="text-4xl font-bold mb-6">Join Our Growing Community</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Connect with industry leaders and innovators who are transforming their businesses with our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communities.map((community, idx) => (
                <div 
                  key={idx}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i className={`${community.icon} text-3xl text-primary`}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{community.title}</h4>
                  <p className="text-muted-foreground">{community.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;