import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-6">AnuncieIA</h2>
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="hover:underline">🏠 Início</Link></li>
        <li><a href="#" className="hover:underline">🧠 Gerar Anúncios</a></li>
        <li><a href="#" className="hover:underline">💬 Chat IA</a></li>
        <li><a href="#" className="hover:underline">📊 Vendas</a></li>
      </ul>
    </aside>
  );
}