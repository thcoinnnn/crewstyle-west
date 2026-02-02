import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedSection = () => {
  const featured = [
    {
      id: 1,
      title: "Nike Tech",
      subtitle: "Conforto Premium",
      description: "A tecnologia mais avançada em vestuário esportivo",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop",
      link: "/marca/nike",
    },
    {
      id: 2,
      title: "Jordan",
      subtitle: "Lendário",
      description: "O legado continua nos seus pés",
      image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&h=600&fit=crop",
      link: "/marca/jordan",
    },
    {
      id: 3,
      title: "Supreme",
      subtitle: "Exclusivo",
      description: "Streetwear icônico de Nova York",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=600&fit=crop",
      link: "/marca/supreme",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            EM <span className="text-gradient-gold">DESTAQUE</span>
          </h2>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <Link
              key={item.id}
              to={item.link}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                  {item.subtitle}
                </p>
                <h3 className="font-display text-4xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold uppercase text-sm tracking-wider group-hover:gap-4 transition-all">
                  <span>Ver Coleção</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
