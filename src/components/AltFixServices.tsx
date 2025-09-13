import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Wrench, 
  Download, 
  Trash2, 
  HardDrive, 
  Lightbulb,
  Smartphone,
  Headphones,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Montage PC",
    description: "Conseils pièces, assemblage propre, tests & optimisation."
  },
  {
    icon: Wrench,
    title: "Dépannage",
    description: "PC lent, erreurs Windows, virus — on remet tout en état."
  },
  {
    icon: Download,
    title: "Installation",
    description: "Windows, logiciels, imprimantes/écrans, réseau domestique."
  },
  {
    icon: Trash2,
    title: "Nettoyage & MX",
    description: "Dépoussiérage, pâte thermique, gestion des câbles."
  },
  {
    icon: Headphones,
    title: "Assistance à distance",
    description: "Réglages, installations, conseils via prise en main sécurisée."
  },
  {
    icon: Smartphone,
    title: "Antivirus pro",
    description: "Partenariat en cours. En attendant : installation/config de l'antivirus de votre choix.",
    badge: "À venir"
  }
];

const AltFixServices = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prestations <span className="text-primary">populaires</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border border-border/50 card-hover relative"
              >
                {service.badge && (
                  <div className="absolute -top-3 right-4">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {service.badge}
                    </div>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 shadow-altfix">
            Accéder à la boutique
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AltFixServices;