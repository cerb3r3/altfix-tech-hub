import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqData = [
  {
    question: "Combien coûte un diagnostic ?",
    answer: "Le diagnostic est entièrement gratuit, sans engagement. Nous évaluons votre appareil et vous proposons un devis détaillé. Vous ne payez que si vous acceptez la réparation."
  },
  {
    question: "Quelle est la durée de votre garantie ?",
    answer: "Toutes nos réparations sont garanties 6 mois pièces et main d'œuvre. Si le même problème survient dans cette période, nous le réparons gratuitement."
  },
  {
    question: "Intervenez-vous à domicile ?",
    answer: "Oui, nous nous déplaçons gratuitement dans un rayon de 20km autour de Genlis (Dijon, Arc-sur-Tille, Bellefond, etc.). Le déplacement est inclus dans nos tarifs."
  },
  {
    question: "Combien de temps dure une réparation ?",
    answer: "Cela dépend de la panne : changement d'écran smartphone (2-3h), nettoyage virus (1-2h), réparation PC (24-48h). Pour les urgences, nous proposons un service express."
  },
  {
    question: "Acceptez-vous tous les modèles ?",
    answer: "Nous réparons toutes les marques : iPhone, Samsung, Huawei, Xiaomi pour les smartphones. PC Windows, Mac, toutes marques pour les ordinateurs. Tablettes iPad et Android."
  },
  {
    question: "Comment récupérer mes données perdues ?",
    answer: "Nous proposons un service de récupération de données sur disque dur, SSD, clé USB, carte SD. Diagnostic gratuit pour évaluer les chances de récupération (taux de succès: 85%)."
  },
  {
    question: "Proposez-vous un service de maintenance ?",
    answer: "Oui, nous proposons des contrats de maintenance préventive pour éviter les pannes : nettoyage, mise à jour, optimisation tous les 6 mois."
  },
  {
    question: "Puis-je avoir une facture ?",
    answer: "Bien sûr ! Nous délivrons une facture détaillée pour toute prestation, acceptée par les assurances et déductible pour les professionnels."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Questions <span className="text-primary">Fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Toutes les réponses à vos questions sur nos services de réparation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:shadow-card transition-all duration-200"
              >
                <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-lg text-muted-foreground">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Button size="lg" className="text-lg px-8">
              <MessageCircle className="mr-2 w-5 h-5" />
              Posez votre question
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;