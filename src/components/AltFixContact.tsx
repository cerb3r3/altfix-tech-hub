import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  FileText,
  Download
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import jsPDF from 'jspdf';

const AltFixContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    rgpdConsent: false
  });

  const [devisData, setDevisData] = useState({
    clientName: "",
    clientAddress: "",
    clientEmail: "",
    clientPhone: "",
    services: [] as string[],
    piecePrice: "",
    distance: "",
    customService: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const servicesList = [
    { id: "diagnostic", name: "Diagnostic", price: 0 },
    { id: "depannage", name: "Dépannage à domicile (1h)", price: 45 },
    { id: "montage", name: "Montage PC", price: 100 },
    { id: "windows", name: "Réinstallation Windows", price: 50 },
    { id: "nettoyage", name: "Nettoyage & optimisation", price: 40 },
    { id: "peripherique", name: "Installation périphérique", price: 25 }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDevisChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDevisData({
      ...devisData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setDevisData({
        ...devisData,
        services: [...devisData.services, serviceId]
      });
    } else {
      setDevisData({
        ...devisData,
        services: devisData.services.filter(s => s !== serviceId)
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpdConsent) {
      toast({
        title: "Erreur",
        description: "Vous devez accepter d'être recontacté.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", subject: "", message: "", rgpdConsent: false });
      setIsSubmitting(false);
    }, 1000);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Header with logo placeholder
    doc.setFontSize(20);
    doc.setTextColor(56, 189, 248); // #38bdf8
    doc.text("ALT-FIX", 20, 30);
    
    // Devis title
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    const devisNumber = `DEVIS N°${new Date().getFullYear()}-${String(Date.now()).slice(-3)}`;
    doc.text(devisNumber, 20, 50);
    
    // Client info
    doc.setFontSize(12);
    doc.text("Client:", 20, 70);
    doc.text(devisData.clientName || "________________", 20, 80);
    doc.text(devisData.clientAddress || "Adresse: ________________", 20, 90);
    doc.text(devisData.clientEmail || "Email: ________________", 20, 100);
    doc.text(devisData.clientPhone || "Tél: ________________", 20, 110);
    
    // Services table
    let yPos = 130;
    doc.text("Description", 20, yPos);
    doc.text("Prix HT", 120, yPos);
    doc.text("Total HT", 160, yPos);
    
    let totalHT = 0;
    yPos += 10;
    
    // Selected services
    devisData.services.forEach(serviceId => {
      const service = servicesList.find(s => s.id === serviceId);
      if (service) {
        doc.text(service.name, 20, yPos);
        doc.text(`${service.price}€`, 120, yPos);
        doc.text(`${service.price}€`, 160, yPos);
        totalHT += service.price;
        yPos += 10;
      }
    });
    
    // Custom service
    if (devisData.customService) {
      doc.text(devisData.customService, 20, yPos);
      yPos += 10;
    }
    
    // Piece if specified
    if (devisData.piecePrice) {
      const pieceHT = parseFloat(devisData.piecePrice) / 1.20;
      doc.text("Pièce", 20, yPos);
      doc.text(`${pieceHT.toFixed(2)}€`, 120, yPos);
      doc.text(`${pieceHT.toFixed(2)}€`, 160, yPos);
      totalHT += pieceHT;
      yPos += 10;
    }
    
    // Déplacement
    if (devisData.distance) {
      const km = parseFloat(devisData.distance);
      if (km > 5) {
        const deplacement = (km - 5) * 0.80;
        doc.text("Frais de déplacement", 20, yPos);
        doc.text(`${deplacement.toFixed(2)}€`, 120, yPos);
        doc.text(`${deplacement.toFixed(2)}€`, 160, yPos);
        totalHT += deplacement;
        yPos += 10;
      } else {
        doc.text("Déplacement gratuit (≤ 5km)", 20, yPos);
        yPos += 10;
      }
    }
    
    // Totals
    yPos += 10;
    const tva = totalHT * 0.20;
    const totalTTC = totalHT + tva;
    
    doc.text(`Total HT: ${totalHT.toFixed(2)}€`, 120, yPos);
    yPos += 10;
    doc.text(`TVA 20%: ${tva.toFixed(2)}€`, 120, yPos);
    yPos += 10;
    doc.setFontSize(14);
    doc.text(`Total TTC: ${totalTTC.toFixed(2)}€`, 120, yPos);
    
    // Conditions
    yPos += 30;
    doc.setFontSize(10);
    doc.text("Conditions:", 20, yPos);
    yPos += 10;
    doc.text("• Devis valable 30 jours", 20, yPos);
    yPos += 5;
    doc.text("• Paiement à la fin (Espèces, Virement, PayPal, Chèque)", 20, yPos);
    yPos += 5;
    doc.text("• Déplacement calculé depuis Genlis (gratuit ≤ 5 km)", 20, yPos);
    yPos += 5;
    doc.text("• Prix des pièces communiqué avant remplacement", 20, yPos);
    
    // Contact info
    yPos += 20;
    doc.text("ALT-FIX - Tél: 06 51 44 03 82 - Email: alt-fix@outlook.fr", 20, yPos);
    doc.text("Micro-entrepreneur — TVA non applicable, art. 293 B du CGI", 20, yPos + 5);
    
    doc.save(`devis-altfix-${devisNumber.replace('DEVIS N°', '')}.pdf`);
    
    toast({
      title: "PDF généré !",
      description: "Votre devis a été téléchargé.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contactez <span className="text-primary">ALT-FIX</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Contact</CardTitle>
              <CardDescription>
                Envoyez-nous votre message
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Nom"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Email"
                  required
                />
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  placeholder="Sujet"
                  required
                />
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Message"
                  rows={4}
                  required
                />
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rgpd"
                    checked={formData.rgpdConsent}
                    onCheckedChange={(checked) => setFormData({...formData, rgpdConsent: Boolean(checked)})}
                  />
                  <label htmlFor="rgpd" className="text-sm text-muted-foreground">
                    J'accepte d'être recontacté au sujet de ma demande.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi..." : "Envoyer"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Devis Generator */}
          <Card className="bg-card border border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <FileText className="mr-2 w-6 h-6" />
                Générer un devis PDF
              </CardTitle>
              <CardDescription>
                Créez votre devis personnalisé
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="clientName"
                  value={devisData.clientName}
                  onChange={handleDevisChange}
                  placeholder="Nom client"
                />
                <Input
                  name="clientPhone"
                  value={devisData.clientPhone}
                  onChange={handleDevisChange}
                  placeholder="Téléphone"
                />
              </div>
              <Input
                name="clientEmail"
                value={devisData.clientEmail}
                onChange={handleDevisChange}
                placeholder="Email client"
              />
              <Textarea
                name="clientAddress"
                value={devisData.clientAddress}
                onChange={handleDevisChange}
                placeholder="Adresse client"
                rows={2}
              />
              
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Services :</label>
                <div className="space-y-2">
                  {servicesList.map(service => (
                    <div key={service.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={service.id}
                        checked={devisData.services.includes(service.id)}
                        onCheckedChange={(checked) => handleServiceChange(service.id, Boolean(checked))}
                      />
                      <label htmlFor={service.id} className="text-sm text-muted-foreground">
                        {service.name} - {service.price}€
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="piecePrice"
                  type="number"
                  step="0.01"
                  value={devisData.piecePrice}
                  onChange={handleDevisChange}
                  placeholder="Prix pièce TTC (optionnel)"
                />
                <Input
                  name="distance"
                  type="number"
                  value={devisData.distance}
                  onChange={handleDevisChange}
                  placeholder="Distance (km)"
                />
              </div>

              <Button 
                onClick={generatePDF} 
                className="w-full"
                disabled={devisData.services.length === 0}
              >
                Générer le PDF
                <Download className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="bg-card border border-border/50 text-center">
            <CardContent className="p-6">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Téléphone</h3>
              <p className="text-primary font-medium">06 51 44 03 82</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border/50 text-center">
            <CardContent className="p-6">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-primary font-medium">alt-fix@outlook.fr</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border border-border/50 text-center">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Zone</h3>
              <p className="text-muted-foreground">Genlis / Dijon et alentours</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AltFixContact;