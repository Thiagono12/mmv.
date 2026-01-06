import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-border/30">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              MMV <span className="text-primary"></span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Excelência em transporte corporativo e gestão de frotas desde 2010.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Av. Prefeito Gil Diniz - MG</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>victor@mmvrentcar.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(31) 99873-2853 </span>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Institucional
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>CNPJ: 22.489.869/0001-84</span>
              </li>
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Certificações
            </h4>
            <div className="flex flex-wrap gap-3">
              {["DER", "ANTT", "SEGURO APP"].map((cert, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-lg border border-border/50 bg-secondary/30 text-muted-foreground text-xs font-medium"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © 2026 MMV Rent Car. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://docs.google.com/document/d/e/2PACX-1vSpK2omyA6biVQRgjDonzKuLkgH-ovC6Dtg1KKAZ5lVbD6ep2hk_NVYjxAt6uLQ_vHhaWeuGBEOzfhL/pub" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="https://docs.google.com/document/d/e/2PACX-1vSuyJF2w06iRGoxvUD1GQtbzwybGC5ie-UQCIZsUDCCWAJemL7Oy9WykSXQozMTEGkwLjci9mkQgaso/pub" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
