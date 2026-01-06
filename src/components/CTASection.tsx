import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  // FUNÇÃO DO WHATSAPP
  const handleWhatsAppClick = () => {
    // 👇 NUMERO DO ZAPZAP E A MSG, USA O FSTR PARA CASO QUEIRA MUDAR A MSG
    const phoneNumber = "5531998732853"; 
    
    const message = "Olá! Vi o site da MMV e busco uma operação de transporte que resolva meus gargalos do dia a dia com mais agilidade. Podemos conversar?";
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Background Decoration;cor de fundo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pronto para otimizar sua <span className="text-primary">operação</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Entre em contato e receba uma proposta personalizada para sua empresa em até 6 horas.
          </p>

          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 btn-primary text-lg cursor-pointer"
          >
            ENTRAR EM CONTATO
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;