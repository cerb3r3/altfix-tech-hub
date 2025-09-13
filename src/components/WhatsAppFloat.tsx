import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/33651440382", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </button>
  );
};

export default WhatsAppFloat;