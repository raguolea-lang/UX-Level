
import React, { useState } from 'react';

interface IntroScreenProps {
  onStart: (name: string, role: string) => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && role.trim()) {
      onStart(name, role);
    }
  };

  return (
    <div className="bg-card p-8 rounded-lg shadow-2xl border border-border animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-center">Bienvenido/a a la Evaluación</h2>
      <p className="text-text-secondary mb-6 text-center">
        Por favor, ingresa tu nombre y cargo actual para comenzar el quiz.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Nombre Completo</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-secondary px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none transition"
            placeholder="E.g., Jane Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-text-secondary mb-2">Cargo Actual</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-secondary px-4 py-2 rounded-md border border-border focus:ring-2 focus:ring-primary focus:outline-none transition"
            placeholder="E.g., Senior UX Designer"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!name.trim() || !role.trim()}
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Comenzar Evaluación
        </button>
      </form>
    </div>
  );
};

export default IntroScreen;
