import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="text-primary">🔥</span>
            <span className="text-sm font-medium text-muted-foreground">WEST COAST STYLE</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">CREW</span>
            <span className="text-gradient-gold">STYLE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Streetwear exclusivo direto da costa oeste
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#produtos" 
              className="btn-gold px-8 py-4 rounded-lg text-lg w-full sm:w-auto text-center"
            >
              Ver Coleção
            </a>
            <a 
              href="#nike-tech" 
              className="btn-outline-gold px-8 py-4 rounded-lg text-lg w-full sm:w-auto text-center"
            >
              Nike Tech
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-primary">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Produtos</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-primary">10K+</p>
              <p className="text-sm text-muted-foreground mt-1">Clientes</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl md:text-5xl text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Original</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
