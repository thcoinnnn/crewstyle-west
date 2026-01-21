import { Instagram, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-4xl text-gradient-gold mb-4">
              CREWSTYLE
            </h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Streetwear exclusivo direto da costa oeste. Estilo, atitude e originalidade em cada peça.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">NAVEGAÇÃO</h4>
            <ul className="space-y-3">
              <li><a href="#produtos" className="text-muted-foreground hover:text-primary transition-colors">Produtos</a></li>
              <li><a href="#nike-tech" className="text-muted-foreground hover:text-primary transition-colors">Nike Tech</a></li>
              <li><a href="#jordan" className="text-muted-foreground hover:text-primary transition-colors">Jordan</a></li>
              <li><a href="#off-white" className="text-muted-foreground hover:text-primary transition-colors">Off-White</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-4">CONTATO</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>WhatsApp: (11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Crewstyle. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
