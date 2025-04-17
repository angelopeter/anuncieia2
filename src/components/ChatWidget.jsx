import React from 'react';

export default function ChatWidget() {
  return (
    <div className="bg-white border rounded p-4 shadow-md">
      <h2 className="text-lg font-bold mb-2">💬 Chat com IA</h2>
      <div className="h-40 overflow-y-auto border p-2 mb-2 text-sm bg-gray-50 rounded">Simulação de conversa com inteligência...</div>
      <input type="text" placeholder="Digite sua mensagem..." className="w-full border p-2 rounded" />
    </div>
  );
}