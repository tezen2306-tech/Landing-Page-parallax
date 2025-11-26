import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Youtube, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="inicio" 
      ref={ref} 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 z-0"
      />

      {/* Abstract Parallax Shapes */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] rounded-full bg-white blur-3xl mix-blend-overlay z-0"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-blue-400 blur-3xl mix-blend-overlay opacity-20 z-0"
      />

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white"
      >
        <motion.span 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-green-300 font-semibold text-sm mb-6 uppercase tracking-wider"
        >
          Bienvenido a RosiParallax
        </motion.span>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Tu socio estratégico en el <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
            crecimiento de tu empresa
          </span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-2xl text-blue-50 font-light mb-4 max-w-2xl mx-auto"
        >
          Somos el complemento ideal para el crecimiento exponencial de tu Pyme.
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-base text-gray-200 mb-10 max-w-3xl mx-auto"
        >
          Impulsamos tu negocio con inteligencia artificial para optimizar tu crecimiento y rentabilidad.
          Ofrecemos tutoriales, consejos y herramientas para principiantes.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="https://youtube.com/" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:-translate-y-1"
          >
            <Youtube className="w-6 h-6 text-red-600" />
            Ver Canal de YouTube
          </a>
          
          <a 
            href="#servicios"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all"
          >
            Explorar Servicios
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;