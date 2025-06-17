'use client';

import React, { useContext } from "react";
import { ThemeContext } from "./api/provider/theme-provider";

export default function Home() {

  const {theme} = useContext(ThemeContext);

  const backgroundImageStyle = {
    backgroundImage: `url(/${theme}wallpaper.png)`,
    backgroundSize: 'cover',
    backgroundRepet: 'no-repeat',
    minHeight: '90vh',
  };

  return (
    <div style={backgroundImageStyle}>
      <main className="flex flex-col items-center justify-between p-24 tela-container">
        <h1 className="text-3xl font-bold">Seja bem vindo ao site oficial do CrackoCraft</h1>
      </main>
    </div>
  );
}
