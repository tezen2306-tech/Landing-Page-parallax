import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    title: "5 Herramientas de IA para Pymes en 2024",
    date: "Octubre 15, 2023",
    excerpt: "Descubre las aplicaciones que están revolucionando la productividad empresarial sin grandes inversiones.",
    imageUrl: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "Estrategias de Crecimiento Sostenible",
    date: "Septiembre 28, 2023",
    excerpt: "Cómo escalar tu negocio manteniendo la calidad y la cultura empresarial intactas.",
    imageUrl: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "Automatización: El primer paso al éxito",
    date: "Septiembre 10, 2023",
    excerpt: "Guía práctica para principiantes sobre cómo empezar a automatizar tareas repetitivas.",
    imageUrl: "https://picsum.photos/800/600?random=3"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-green-500 font-bold tracking-wide uppercase text-sm mb-2">Últimas Novedades</h2>
            <h3 className="text-3xl font-extrabold text-gray-900">
              Blog & Recursos
            </h3>
          </div>
          <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors flex items-center gap-2">
            Ver todos los artículos &rarr;
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer flex flex-col h-full">
              <div className="relative overflow-hidden rounded-2xl mb-4 h-64 shadow-md">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">Leer artículo</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-green-500 font-semibold mb-2">{post.date}</p>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;