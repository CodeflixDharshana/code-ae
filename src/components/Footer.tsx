const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-logo text-3xl text-foreground">Codeflix</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Dubai's premier technology partner for innovative digital solutions. 
              We transform your vision into reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-orange transition-smooth">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange transition-smooth">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange transition-smooth">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#" className="text-muted-foreground hover:text-orange transition-smooth">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-orange transition-smooth">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-orange transition-smooth">About</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-orange transition-smooth">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-orange transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-orange"></i>
                Dubai, UAE
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-orange"></i>
                info@codeflix.tech
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-orange"></i>
                +971 XX XXX XXXX
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Codeflix Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
