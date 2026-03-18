import React, { useState } from 'react';
import { 
  Zap, 
  Cpu, 
  Server, 
  ShieldCheck, 
  Clock, 
  Award, 
  Layers, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Menu, 
  X,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-brand-dark uppercase">Cablix</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#servicios" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition">Servicios</a>
              <a href="#nosotros" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition">Nosotros</a>
              <a href="#ventajas" className="text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium transition">Ventajas</a>
              <a href="#contacto" className="bg-brand-blue text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">Cotizar ahora</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-dark">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1"
        >
          <a href="#servicios" className="block text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="#nosotros" className="block text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#ventajas" className="block text-brand-gray hover:text-brand-blue px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Ventajas</a>
          <a href="#contacto" className="block bg-brand-blue text-white px-3 py-3 rounded-lg text-center text-base font-semibold mt-4" onClick={() => setIsOpen(false)}>Cotizar ahora</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="relative bg-brand-dark overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Server Room Infrastructure" 
          className="w-full h-full object-cover opacity-40" 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/20 text-brand-electric text-sm font-semibold mb-6 tracking-wide uppercase border border-brand-blue/30">
            Infraestructura IT Certificada
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Conectividad Confiable e <span className="text-brand-electric">Infraestructura de Red</span> de Alto Rendimiento
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Diseñamos e instalamos soluciones de cableado estructurado y redes de datos que impulsan la productividad de su empresa con estándares internacionales de calidad.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contacto" className="px-8 py-4 bg-brand-blue text-white rounded-xl font-bold text-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20">
              Solicitar Auditoría de Red
            </a>
            <a href="#servicios" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-center hover:bg-white/20 transition-all backdrop-blur-sm">
              Nuestros Servicios
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fibra Óptica",
      description: "Instalación y fusión de fibra óptica monomodo y multimodo para enlaces de alta velocidad y backbone."
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Cableado Cat6/6a",
      description: "Implementación de nodos de red certificados con canalización profesional y etiquetado normativo."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Racks & Servers",
      description: "Organización de centros de datos, peinado de cables, montaje de gabinetes y gestión térmica."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Mantenimiento",
      description: "Auditorías de red, certificación de puntos de red y mantenimiento preventivo/correctivo 24/7."
    }
  ];

  return (
    <section className="py-24 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-dark text-3xl md:text-4xl font-bold mb-4">Especialistas en Conectividad</h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg">Ofrecemos soluciones integrales para garantizar que su flujo de información sea ininterrumpido y escalable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 group transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white text-brand-blue transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue opacity-20 rounded-full blur-3xl"></div>
            <img 
              alt="About our team" 
              className="rounded-2xl shadow-2xl relative z-10 border border-slate-700" 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-blue p-6 rounded-xl z-20 hidden md:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-xs uppercase tracking-wider font-semibold opacity-80">Años de experiencia</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertos en Soluciones de Infraestructura Crítica</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              En Cablix, entendemos que la red es el sistema nervioso de su empresa. Nuestro equipo de ingenieros certificados combina años de experiencia con las últimas tecnologías para entregar proyectos llave en mano.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-brand-electric mt-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Certificación ISO & EIA/TIA</h4>
                  <p className="text-slate-400 text-sm">Cumplimos rigurosamente con los estándares internacionales de telecomunicaciones.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-brand-electric mt-1">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Soporte Técnico Especializado</h4>
                  <p className="text-slate-400 text-sm">Atención post-venta y contratos de mantenimiento preventivo personalizados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Disponibilidad 24/7",
      description: "Respuesta inmediata para incidentes críticos de infraestructura y fallas de red."
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Materiales Certificados",
      description: "Utilizamos marcas líderes (Panduit, CommScope, Siemon) para garantizar la garantía de fábrica."
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Cable Management",
      description: "Instalaciones estéticas y ordenadas que facilitan la administración futura."
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="ventajas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-dark text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="text-brand-gray">La diferencia está en los detalles y la prolijidad técnica.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="mb-4 text-brand-blue">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{adv.title}</h3>
              <p className="text-brand-gray text-sm">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-brand-gray font-semibold mb-10 uppercase tracking-widest text-xs">Empresas que confían en nosotros</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-300 rounded-full"></div>
              <div className="h-4 w-20 bg-slate-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-24 bg-slate-50" id="contacto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/3 bg-brand-blue p-10 lg:p-16 text-white">
            <h2 className="text-3xl font-bold mb-6">¿Listo para mejorar su red?</h2>
            <p className="text-blue-100 mb-10">Agende una visita técnica sin costo. Analizaremos su infraestructura actual y propondremos la mejor solución.</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>ventas@cablix.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Av. Tecnológica 123, Distrito IT</span>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3 p-10 lg:p-16">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre Completo</label>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="Juan Pérez" type="text" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Correo Electrónico</label>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="juan@empresa.com" type="email" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Empresa</label>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="Tech Solutions S.A." type="text" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Servicio de Interés</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition">
                  <option>Cableado Estructurado</option>
                  <option>Fibra Óptica</option>
                  <option>Mantenimiento de Red</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje / Detalles del Proyecto</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition" placeholder="Cuéntenos sobre sus necesidades de conectividad..." rows={4}></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full py-4 bg-brand-dark text-white font-bold rounded-xl hover:bg-slate-800 transition shadow-lg" type="submit">Enviar Solicitud de Cotización</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white uppercase">Cablix</span>
            </div>
            <p className="text-sm leading-relaxed">Expertos en diseño, implementación y mantenimiento de redes de datos y telecomunicaciones.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-blue transition">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-blue transition">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-brand-blue transition">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-brand-blue transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-brand-blue transition">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-brand-blue transition">Aviso de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-blue transition">Políticas de Garantía</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Redes Sociales</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-blue hover:text-white transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          <p>© 2023 Cablix Infraestructura de Red. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Advantages />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
