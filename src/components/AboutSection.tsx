import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";
import aboutImage from "@/assets/about-image-new.jpg";

const features = [
  { icon: Shield, text: "Frota 100% segurada" },
  { icon: Clock, text: "Disponibilidade 24/7" },
  { icon: Award, text: "Segurança e Conformidade" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title mb-6">
              Excelência em  <span className="text-primary">Transporte Corporativo</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Reescrevemos as regras da mobilidade corporativa ao provar que é possível ter controle total sem a rigidez de uma frota própria. Entendemos cedo que grandes operações não precisam de ativos pesados pesando no balanço, mas sim de inteligência, fluxo contínuo e capacidade de resposta imediata.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa abordagem asset-light une flexibilidade extrema com segurança inegociável, permitindo escalar sua operação na exata velocidade da sua demanda. É essa combinação de leveza e robustez que nos mantém, <span className="text-primary font-bold">há mais de 10 anos, transformando</span> o transporte executivo de um centro de custos em uma vantagem competitiva real.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Interior de van executiva premium"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card p-6"
            >
              <div className="text-3xl font-bold text-primary mb-1">+1.000.000 km</div>
              <div className="text-sm text-muted-foreground">Km percorridos em operações dedicadas</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
