import { Card, CardContent } from "@/components/ui/card";
import { Clock, Eye, Shield, MapPin } from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Réactif",
    description: "Intervention rapide, RDV flexibles, suivi après service."
  },
  {
    icon: Eye,
    title: "Transparent",
    description: "Tarifs clairs, devis gratuit avant toute intervention."
  },
  {
    icon: Shield,
    title: "Garantie",
    description: "Travaux soignés, conseils sur-mesure et durables."
  },
  {
    icon: MapPin,
    title: "Local",
    description: "Genlis, Dijon et alentours. Déplacement possible."
  }
];

const AltFixValues = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border border-border/50 card-hover transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AltFixValues;