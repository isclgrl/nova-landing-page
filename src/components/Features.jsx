import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaShieldAlt, FaBolt } from 'react-icons/fa';

const featuresList = [
  {
    icon: <FaBrain className="text-4xl text-purple-500" />,
    title: "IA Predictiva",
    desc: "Nuestros algoritmos aprenden de tus hábitos para organizar tu agenda antes de que tú lo pienses."
  },
  {
    icon: <FaShieldAlt className="text-4xl text-emerald-500" />,
    title: "Encriptación Militar",
    desc: "Tus datos son solo tuyos. Seguridad de extremo a extremo para tu tranquilidad."
  },
  {
    icon: <FaBolt className="text-4xl text-amber-500" />,
    title: "Sincronización Real",
    desc: "Cambios instantáneos en todos tus dispositivos. Sin tiempos de carga, sin esperas."
  }
];

const Features = () => {
  return (
    <div className="py-20 bg-slate-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Más que una lista de tareas
          </h2>
          <p className="text-gray-400 text-lg">
            Herramientas diseñadas para potenciar tu flujo de trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-2xl hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700 hover:border-cyan-500/50 group"
            >
              <div className="mb-4 bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;