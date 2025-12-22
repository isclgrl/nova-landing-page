import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    
      setTimeout(() => setIsSent(false), 3000);
    }, 2000);
  };

  return (
    <div className="py-20 bg-slate-900 px-4 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Hablemos de tu <br /> <span className="text-cyan-400">Próximo Proyecto</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            ¿Listo para llevar tu productividad al siguiente nivel? Nuestro equipo de expertos está esperando por ti.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 text-xl">
                <FaEnvelope />
              </div>
              <span className="text-lg">contacto@nova-app.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-emerald-400 text-xl">
                <FaWhatsapp />
              </div>
              <span className="text-lg">+52 55 1234 5678</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl relative"
        >
          {isSent && (
            <div className="absolute inset-0 bg-slate-800/95 flex flex-col items-center justify-center rounded-3xl z-10 animate-fade-in">
              <div className="text-green-400 text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado!</h3>
              <p className="text-gray-400">Te responderemos pronto.</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider font-semibold">Nombre</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="Juan Pérez"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider font-semibold">Correo</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="juan@empresa.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 text-sm uppercase tracking-wider font-semibold">Mensaje</label>
              <textarea 
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                placeholder="Cuéntanos tu idea..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                isSubmitting 
                  ? 'bg-slate-600 cursor-not-allowed text-gray-400' 
                  : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 text-white'
              }`}
            >
              {isSubmitting ? 'Enviando...' : (
                <>
                  Enviar Mensaje <FaPaperPlane />
                </>
              )}
            </button>
          </div>
        </motion.form>

      </div>
    </div>
  );
};

export default Contact;