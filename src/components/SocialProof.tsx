import { motion } from "framer-motion";

// 1. IMPORTS DAS IMAGENS
import Logottx from "@/assets/ttxrender.png";
import LogoIg from "@/assets/IGrender.png";
import LogoValenorte from "@/assets/valenorterender.png";

// 2. LISTA DE CLIENTES
const clients = [
  { name: "TTX", logo: Logottx },
  { name: "IG", logo: LogoIg },
  { name: "Valenorte", logo: LogoValenorte },
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
          {/* AQUI MUDAMOS A VELOCIDADE 👇 */}
          {/* Adicionei style={{ animationDuration: "15s" }} para forçar mais velocidade */}
          <div 
            className="flex animate-scroll pause-animation items-center"
            style={{ animationDuration: "15s" }} 
          >
            {/* Repetimos a lista 6 vezes para cobrir telas grandes */}
            {[...clients, ...clients, ...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 md:mx-14 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  // AQUI MUDAMOS O TAMANHO 👇
                  // De h-16 md:h-24 para h-20 md:h-32
                  className="h-20 md:h-32 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
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
//so pra dar commit
