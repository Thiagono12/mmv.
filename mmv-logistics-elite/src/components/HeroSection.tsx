import { motion } from "framer-motion";
import videoHome from "@/assets/videohome.webm";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoHome} type="video/webm" />
        {/* Fallback text or image could go here, but poster handles the image */}
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* MUDANÇA 1: Fonte menor (3xl/4xl/5xl) */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Transporte Corporativo de
            <br />
            <span className="text-primary">Alta Performance</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          /* MUDANÇA 2: Removi o 'mx-auto' daqui para ele colar na esquerda */
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
        >
          Transporte executivo e gestão de frota sob demanda para sua operação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          /* MUDANÇA 3: Troquei 'justify-center' por 'justify-start' */
          className="flex flex-col sm:flex-row gap-4 justify-start"
        >
          
          <a href="#solucoes" className="btn-outline">
            Conheça Nossas Soluções
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
         // MUDEI AQUI: Tirei o left-1/2 e coloquei left-6 ou left-10
           className="absolute bottom-8 left-6" 
        >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
