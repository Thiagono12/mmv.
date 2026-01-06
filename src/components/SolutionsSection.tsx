import { motion } from "framer-motion";
import { BusFront, Bus, Settings } from "lucide-react";

const solutions = [
  {
    icon: BusFront,
    title: "Transporte Exclusivo",
    description: "Vans e Ônibus para todos os casos, desde pequenas viagens até grandes operações.",
  },
  {
    icon: Bus,
    title: "Charter e Operacional",
    description: "Transporte contínuo para equipes e turnos operacionais.",
  },
  {
    icon: Settings,
    title: "Gestão Dedicada",
    description: "Veículos 100% alocados com motorista, seguro e manutenção inclusos.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Soluções Adaptáveis a sua <span className="text-primary">Companhia</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Oferecemos modelos flexíveis que se adequam às necessidades específicas de cada operação.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-dark group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-6">
                <solution.icon className="icon-accent group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
