import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

// 1. IMPORTAR EL NUEVO COMPONENTE
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-2xl font-bold text-cyan-400">
          <FaRocket /> 
          <span>NOVA</span>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/50">
          Descargar App
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center mt-20 px-4 mb-32"> {/* Agregué mb-32 para separar */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text"
        >
          Organiza tu vida <br/> con Inteligencia Artificial
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 text-xl max-w-2xl mb-10"
        >
          Deja de perder tiempo en listas interminables. Nova prioriza tus tareas automáticamente para que te enfoques en lo que importa.
        </motion.p>
        
        {/* Botones de acción del Hero */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="flex gap-4"
        >
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Comenzar Gratis
            </button>
            <button className="border border-slate-600 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
              Ver Demo
            </button>
        </motion.div>
      </header>

      {/* 2. RENDERIZAR LA SECCIÓN DE CARACTERÍSTICAS */}
      <Features />
      <Contact />

    </div>
  );
}

export default App;