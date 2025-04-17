import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatWidget from '../components/ChatWidget';
import Generator from '../components/Generator';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 flex flex-col gap-6">
          <Generator />
          <ChatWidget />
        </main>
      </div>
    </div>
  );
}