import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  CheckCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Contactez <span className="text-primary">ALT-FIX</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Besoin d'une réparation ? Une question ? Nous sommes là pour vous aider.
            Réponse garantie sous 2h en semaine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Demande de devis gratuit</CardTitle>
              <CardDescription>
                Décrivez votre problème, nous vous proposons une solution adaptée
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Téléphone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Type de service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="smartphone">Réparation Smartphone</option>
                    <option value="pc">Réparation PC/Mac</option>
                    <option value="tablette">Réparation Tablette</option>
                    <option value="donnees">Récupération de données</option>
                    <option value="virus">Suppression virus</option>
                    <option value="domicile">Dépannage à domicile</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Description du problème *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre problème en détail (modèle d'appareil, symptômes, etc.)"
                    rows={4}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-secondary">Appelez-nous</h3>
                      <p className="text-2xl font-bold text-primary">06 XX XX XX XX</p>
                      <p className="text-sm text-muted-foreground">Lun-Ven 8h-19h, Sam 9h-17h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-secondary">WhatsApp</h3>
                      <Button variant="outline" className="mt-2 text-green-600 border-green-600 hover:bg-green-50">
                        Discuter maintenant
                      </Button>
                      <p className="text-sm text-muted-foreground mt-1">Réponse sous 30 min</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-secondary">Email</h3>
                      <p className="text-primary font-medium">contact@alt-fix.fr</p>
                      <p className="text-sm text-muted-foreground">Réponse sous 2h en semaine</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold text-secondary">Zone d'intervention</h3>
                      <p className="font-medium">Genlis et environs</p>
                      <p className="text-sm text-muted-foreground">
                        Dijon, Genlis, Arc-sur-Tille, Bellefond, 
                        Longeault-Pluvault, Saint-Julien
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Contact */}
            <Card className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Urgence ?</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Panne critique ? Nous vous rappelons sous 15 minutes.
                    </p>
                    <Button variant="destructive" size="sm">
                      Urgence - Rappel immédiat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;