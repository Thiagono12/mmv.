import { motion } from "framer-motion";
import { ClipboardList, Truck, PlayCircle, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Análise",
    description: "Estudo detalhado da rota e demanda.",
    number: "01",
  },
  {
    icon: Truck,
    title: "Alocação",
    description: "Seleção dos veículos ideais para o projeto.",
    number: "02",
  },
  {
    icon: PlayCircle,
    title: "Execução",
    description: "Início imediato da operação monitorada.",
    number: "03",
  },
  {
    icon: BarChart3,
    title: "Gestão",
    description: "Seu gerente de frota dedicado. Nós resolvemos, você foca no negócio.",
    number: "04",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProcessSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Um processo transparente e eficiente do início ao fim.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative text-center group"
            >
              {/* Connection Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative z-10 bg-background rounded-2xl p-8">
                {/* Number Badge */}
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold text-primary bg-secondary px-3 py-1 rounded-full border border-primary/30">
                  {step.number}
                </span>

                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/80 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
