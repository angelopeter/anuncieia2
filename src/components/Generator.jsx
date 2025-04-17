import React from 'react';

export default function Generator() {
  return (
    <div className="bg-white border rounded p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4">🧠 Gerador de Anúncios</h2>
      <input type="text" placeholder="Link do Mercado Livre..." className="w-full border p-2 mb-2 rounded" />
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Gerar Anúncio</button>
    </div>
  );
}