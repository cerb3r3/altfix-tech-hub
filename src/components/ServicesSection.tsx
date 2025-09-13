import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Monitor, 
  Tablet, 
  HardDrive, 
  Shield, 
  Wrench,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Réparation Smartphone",
    description: "Écran cassé, batterie défaillante, problème de charge",
    features: ["Écran LCD/OLED", "Batterie", "Connecteur charge", "Caméra", "Haut-parleur"],
    price: "À partir de 89€",
    popular: true
  },
  {
    icon: Monitor,
    title: "Réparation PC / Mac",
    description: "Diagnostic complet, réparation matérielle et logicielle",
    features: ["Diagnostic gratuit", "Réparation carte mère", "Changement composants", "Nettoyage virus", "Optimisation"],
    price: "À partir de 49€",
    popular: false
  },
  {
    icon: Tablet,
    title: "Réparation Tablette",
    description: "iPad, Samsung Galaxy Tab, et autres tablettes",
    features: ["Écran tactile", "Batterie", "Connecteur", "Boutons", "Vitre arrière"],
    price: "À partir de 79€",
    popular: false
  },
  {
    icon: HardDrive,
    title: "Récupération de Données",
    description: "Disque dur endommagé, suppression accidentelle",
    features: ["Disque dur HS", "SSD défaillant", "Clé USB", "Carte SD", "Photos perdues"],
    price: "À partir de 99€",
    popular: false
  },
  {
    icon: Shield,
    title: "Sécurité & Antivirus",
    description: "Protection complète contre les virus et malwares",
    features: ["Suppression virus", "Installation antivirus", "Pare-feu", "Mise à jour sécurité", "Formation"],
    price: "À partir de 39€",
    popular: false
  },
  {
    icon: Wrench,
    title: "Dépannage à Domicile",
    description: "Intervention directement chez vous dans un délai rapide",
    features: ["Déplacement gratuit", "Diagnostic sur place", "Réparation immédiate", "Installation", "Formation"],
    price: "À partir de 29€",
    popular: true
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Nos Services <span className="text-primary">Professionnels</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Expertise technique, intervention rapide et tarifs transparents. 
            Nous réparons tous vos appareils avec garantie.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
                  service.popular ? 'ring-2 ring-primary/20 shadow-tech' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Populaire
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <Button variant="outline" size="sm">
                        Devis
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <Clock className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-secondary">Intervention Rapide</h3>
            <p className="text-muted-foreground">
              Diagnostic gratuit sous 24h. Réparation express pour les urgences.
            </p>
          </div>
          <div className="text-center space-y-4">
            <Shield className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-secondary">Garantie 6 Mois</h3>
            <p className="text-muted-foreground">
              Toutes nos réparations sont garanties 6 mois pièces et main d'œuvre.
            </p>
          </div>
          <div className="text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-primary mx-auto" />
            <h3 className="text-xl font-semibold text-secondary">Tarifs Transparents</h3>
            <p className="text-muted-foreground">
              Devis gratuit détaillé. Pas de surprise, pas de frais cachés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;