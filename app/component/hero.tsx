// app/components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-500 h-screen flex items-center justify-center text-white text-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-xl">Showcasing My Skills & Projects</p>
      </div>
    </section>
  );
};

export default Hero;
