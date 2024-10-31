// app/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <a href="#about" className="px-4">About</a>
          <a href="#projects" className="px-4">Projects</a>
          <a href="#contact" className="px-4">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
