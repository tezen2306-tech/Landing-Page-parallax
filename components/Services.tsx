import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart3, Bot, Users } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Consultoría Estratégica",
    description: "Análisis profundo de tu modelo de negocio para identificar oportunidades de crecimiento escalable.",
    icon: Rocket
  },
  {
    title: "Implementación de IA",
    description: "Integramos soluciones de inteligencia artificial para automatizar procesos y reducir costes operativos.",
    icon: Bot
  },
  {
    title: "Análisis de Datos",
    description: "Transformamos datos brutos en insights accionables para mejorar la toma de decisiones.",
    icon: BarChart3
  },
  {
    title: "Capacitación de Equipos",
    description: "Formamos a tu personal en nuevas tecnologías y metodologías ágiles de trabajo.",
    icon: Users
  }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-500 font-bold tracking-wide uppercase text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 sm:text-4xl">
            Soluciones diseñadas para <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">el futuro</span>
          </h3>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Herramientas y estrategias personalizadas para llevar tu Pyme al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-600 transition-all duration-300">
                <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;