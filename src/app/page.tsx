'use client';

import React, { useContext } from "react";
import { ThemeContext } from "./api/provider/theme-provider";

export default function Home() {

  const { theme } = useContext(ThemeContext);

  const backgroundImageStyle = {
    backgroundImage: `url(/${theme}wallpaper.png)`,
    backgroundSize: 'cover',
    backgroundRepet: 'no-repeat',
    minHeight: '90vh',
    paddingTop: "65px",
  };

  return (
    <>
      <div style={backgroundImageStyle} >
        <main className="flex flex-col items-center justify-between p-12 tela-container">
          <div className="w-full h-full bg-ngray-400/50 p-8" >
            <div className="text-center relative max-w-6xl mx-auto mt-auto">
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight ">
                <span className="flex ">Bem vindo ao CrackoCraft</span>   
                </h1>
                <section className="mt-15 flex gap-4 justify-center">
                  <button className="px-5 py-2 text-base font-bold bg-[#FFA3EC] rounded border-none cursor-pointer transform duration-300 hover:scale-110 ">Baixar Modpack</button>
                  <button className="px-5 py-2 text-base font-bold bg-[#FFA3EC] rounded border-none cursor-pointer transform duration-300 hover:scale-110">Copiar IP</button>
                </section>
            </div>
          </div>


          <div className="bg-white text-black dark:bg-black dark:text-white p-4">
  Se isso mudar de cor, o dark mode tá funcionando.
</div>
        </main>

      </div>
    </>
  );
}


    {/* <main className="flex flex-col items-center justify-between p-12 tela-container">
          <div className="w-full h-full bg-gray-400/50 p-8" >
            <div className="text-center relative max-w-6xl mx-auto mt-auto">
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight ">
                <span className="flex">Bem vindo ao CrackoCraft</span>   
                </h1>
                <section className="mt-15 flex gap-4 justify-center">
                  <button className="px-5 py-2 text-base font-bold bg-[#FFA3EC] rounded border-none cursor-pointer transform duration-300 hover:scale-110 ">Baixar Modpack</button>
                  <button className="px-5 py-2 text-base font-bold bg-[#FFA3EC] rounded border-none cursor-pointer transform duration-300 hover:scale-110">Copiar IP</button>
                </section>
            </div>
          </div>
        </main>
 */}
