"use client";

import React, { useContext } from "react";
import { ThemeContext } from "./api/provider/theme-provider";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{ backgroundImage: `url(/${theme}wallpaper.png)` }}
        className="bg-center bg-no-repeat min-h-screen flex items-center justify-center "
      >
        <section className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mb-6 text-(--color-content) transform duration-600 text-shadow-lg/30">
            Bem-vindo ao CrackoCraft
          </h1>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center ">
            <button className="px-5 py-2 w-fit text-base font-bold text-(--color-content) bg-(--color-accent) hover:bg-(--color-tertiary) rounded border-none cursor-pointer transform duration-300 hover:scale-110 ">
              Baixar Modpack
            </button>
            <button className="px-5 py-2  text-base font-bold text-(--color-content) bg-(--color-accent) hover:bg-(--color-tertiary) rounded border-none cursor-pointer transform duration-300 hover:scale-110">
              Copiar IP
            </button>
          </div>
        </section>
      </div>

      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="text-2xl">
          Aqui começa outra seção do site com fundo preto
        </p>
      </div>
    </>
  );
}

{
  /* <main className="flex flex-col items-center justify-between p-12 tela-container border-b-(--color-secondary)">
            <div className=" border-b-(--color-secondary)">
              <div className="text-center relative max-w-6xl mx-auto mt-auto">
                <h1 className="text-6xl md:text-8xl font-black  mb-6 tracking-tight leading-tight ">
                  <span className="flex text-(--color-content) transform duration-300 text-shadow-lg/30 ">
                    Bem vindo ao CrackoCraft
                  </span>
                </h1>
                
              </div>
            </div>
          </main>
        </div>
        <div className="bg-pink-950">
          <div className="text-center relative max-w-6xl mx-auto mt-auto">
            <h1 className="text-6xl md:text-8xl font-black  mb-6 tracking-tight leading-tight ">
              <span className="flex text-(--color-content) transform duration-300 text-shadow-lg/30 ">
                Mods Frequentimente Utilizados
              </span>
            </h1>
            <section className="mt-15 flex gap-4 justify-center">
              <button className="px-5 py-2 text-base font-bold text-(--color-content) bg-(--color-accent) hover:bg-(--color-tertiary) rounded border-none cursor-pointer transform duration-300 hover:scale-110 ">
                Baixar Modpack
              </button>
              <button className="px-5 py-2 text-base font-bold text-(--color-content) bg-(--color-accent) hover:bg-(--color-tertiary) rounded border-none cursor-pointer transform duration-300 hover:scale-110">
                Copiar IP
              </button>
            </section>
          </div> */
}
