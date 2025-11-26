import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-32 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-green-500 font-bold tracking-wide uppercase text-sm mb-2">Contáctanos</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
              Empecemos a trabajar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">juntos hoy mismo.</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              ¿Tienes una idea o un proyecto en mente? Estamos aquí para ayudarte a escalar tu Pyme con tecnología y estrategia.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <Mail size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">Email</h5>
                  <p className="mt-1 text-gray-500">contacto@rosiparallax.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <Phone size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">Teléfono</h5>
                  <p className="mt-1 text-gray-500">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <MapPin size={20} />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-medium text-gray-900">Oficina</h5>
                  <p className="mt-1 text-gray-500">Calle Innovación 101, Ciudad Tecnológica.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-3 bg-gray-50"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-3 bg-gray-50"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-3 bg-gray-50"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all transform hover:-translate-y-1"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;