import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">AnuncieIA</h1>
      <p className="mb-6 text-lg md:text-xl">Automatize anúncios. Aumente suas vendas.</p>
      <Link to="/login" className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
        Acessar plataforma
      </Link>
    </div>
  );
}