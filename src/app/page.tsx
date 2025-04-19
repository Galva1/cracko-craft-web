'use client';
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {

  const [theme, setTheme] = useState('day');

  const toggleTheme = () => {
    toggleColorFont();
    setTheme((theme) => (theme === 'day' ? 'night' : 'day'));
  };

  const toggleColorFont = () => {
    const body = document.body;
    if (theme === 'day') {
      body.classList.remove('bg-gray-100');
      body.classList.add('bg-gray-900');
      body.classList.remove('text-black');
      body.classList.add('text-white');
    } else {
      body.classList.remove('bg-gray-900');
      body.classList.add('bg-gray-100');
      body.classList.remove('text-white');
      body.classList.add('text-black');
    }
  }

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    color: theme === 'day' ? 'black' : 'white',
    backgroundColor: theme === 'day' ? '#ffe920' : '#333',
  };

  const backgroundImageStyle = {
    backgroundImage: `url(/${theme}wallpaper.jpg)`,
    backgroundSize: 'cover',
    backgroundRepet: 'no-repeat',
    minHeight: '90vh',
  };

  return (
    <div style={backgroundImageStyle}>
      <button onClick={toggleTheme} style={buttonStyle} className="m-4 float-right">
        Mudar para {theme === 'day' ? 'Noite' : 'Dia'}
      </button>
      <main className="flex flex-col items-center justify-between p-24 tela-container">
        <h1 className="text-3xl font-bold">Seja bem vindo ao site oficial do CrackoCraft</h1>
      </main>
    </div>
  );
}
