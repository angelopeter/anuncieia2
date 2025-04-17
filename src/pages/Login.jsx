import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" placeholder="E-mail" className="w-full border p-2 mb-4 rounded" />
        <input type="password" placeholder="Senha" className="w-full border p-2 mb-6 rounded" />
        <button onClick={() => navigate('/dashboard')} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Entrar</button>
      </div>
    </div>
  );
}