import { motion } from "framer-motion";

// 1. IMPORTS DAS IMAGENS
import Logottx from "@/assets/ttxrender.png";
import LogoAg from "@/assets/aglogo.png";

// 2. LISTA DE CLIENTES
const clients = [
  { name: "TTX", logo: Logottx },
  { name: "AG", logo: LogoAg },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        
        {/* Título da Seção */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-12"
        >
          Operações que Impulsionamos
        </motion.p>

        {/* Logo Carousel (Infinito) */}
        <div className="overflow-hidden mask-gradient-x">
          <div
            className="flex animate-scroll pause-animation items-center w-max"
            style={{ animationDuration: "18s" }}
          >
            {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-4 sm:mx-8 md:mx-14 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 sm:h-20 md:h-32 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;