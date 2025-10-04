import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import card1 from "@/assets/card-1.jpg";
import card2 from "@/assets/card-2.jpg";
import card3 from "@/assets/card-3.jpg";
import card4 from "@/assets/card-4.jpg";
import card5 from "@/assets/card-5.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Decorative stars/plus signs */}
      <div className="absolute top-32 left-10 text-orange text-4xl animate-pulse">+</div>
      <div className="absolute top-48 right-24 text-orange text-4xl animate-pulse">+</div>
      <div className="absolute bottom-32 right-12 text-orange text-4xl animate-pulse">+</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-6">
            {/* Floating card behind text - top left */}
            <div className="absolute -left-20 -top-10 w-40 h-48 rounded-2xl overflow-hidden shadow-glow opacity-50 hidden lg:block">
              <img src={card1} alt="" className="w-full h-full object-cover" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Empower Your Future with{" "}
              <span className="text-orange">Codeflix Technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Dubai's premier technology partner for innovative digital solutions—ready to transform your vision into reality.
            </p>
            
            {/* Email submission form */}
            

            {/* AI NFT Generator Card */}
            
          </div>

          {/* Right - Image Cards Grid */}
          <div className="relative h-[600px]">
            {/* Large center card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 rounded-3xl overflow-hidden shadow-glow z-10 border-4 border-orange/30">
              <img src={card3} alt="shadowfang #1729" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-3">
                
              </div>
            </div>

            {/* Top right card */}
            <div className="absolute top-0 right-0 w-48 h-56 rounded-2xl overflow-hidden shadow-card">
              <img src={card2} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Bottom left card */}
            <div className="absolute bottom-12 left-0 w-40 h-48 rounded-2xl overflow-hidden shadow-card">
              <img src={card4} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Bottom right small cards */}
            <div className="absolute bottom-0 right-0 w-28 h-32 rounded-2xl overflow-hidden shadow-card">
              <img src={card5} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Stats badge */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;