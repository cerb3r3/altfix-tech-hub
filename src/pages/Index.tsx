import AltFixHeader from "@/components/AltFixHeader";
import AltFixHero from "@/components/AltFixHero";
import AltFixValues from "@/components/AltFixValues";
import AltFixServices from "@/components/AltFixServices";
import AltFixTarifs from "@/components/AltFixTarifs";
import AltFixContact from "@/components/AltFixContact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AltFixHeader />
      <main>
        <AltFixHero />
        <AltFixValues />
        <AltFixServices />
        <AltFixTarifs />
        <AltFixContact />
      </main>
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
