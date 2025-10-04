import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { services } from "@/pages/Services/servicesData";
import type { Service } from "@/pages/Services/servicesData";
const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const navigate = useNavigate();
  return <>
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              The <span className="text-orange">Future</span> of Digital Creativity
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Codeflix lets you design, mint, and showcase NFTs with ease. Create
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              professional digital art and launch your collection like a pro.
            </p>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map(service => <div key={service.serviceKey} onClick={() => setSelectedService(service)} className="bg-card border border-border p-6 rounded-2xl shadow-card hover:shadow-glow hover:border-orange/50 transition-smooth cursor-pointer group">
                <i className={`${service.icon} text-4xl text-orange mb-4 block group-hover:scale-110 transition-smooth`}></i>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>)}
          </div>

          <div className="text-center">
            
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">{selectedService?.modalDetails.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">Explore our specialized offerings</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {selectedService?.modalDetails.options.map((option, idx) => <div key={idx} className="p-4 rounded-lg bg-secondary border border-border">
                <h4 className="font-semibold mb-2 text-foreground">{option.title}</h4>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </div>)}
          </div>
          <DialogFooter>
            <Button 
              variant="orange"
              onClick={() => {
                if (selectedService) {
                  navigate(`/services/${selectedService.serviceKey}`);
                  setSelectedService(null);
                }
              }}
            >
              Explore More
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>;
};
export default Services;