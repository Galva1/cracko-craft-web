'use client';

import Image from 'next/image';
import React, { use, useRef } from 'react';
export default function Sobre(){

    const backgroundSobreStyle = {
        backgroundImage: `url(/sobrewallpaper.png)`,
        backgroundSize: 'cover',
        minHeight: '90vh',
    };

    const backgroundOpaciteStyle={
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        height: 'auto',
    }

    const titulo1Ref = useRef(null);
    const titulo2Ref = useRef(null);
    const titulo3Ref = useRef(null);
    const titulo4Ref = useRef(null);
    const titulo5Ref = useRef(null);
    const titulo6Ref = useRef(null);

    const handleClickTitulo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div style={backgroundSobreStyle}>
            <main className="tela-container">
                <div className="flex items-center p-24">
                    <div className="w-250 rounded-2xl p-3" style={backgroundOpaciteStyle}>
                        <h1 ref={titulo1Ref} className="text-3xl font-bold text-white">O que é o CrackoCraft</h1>
                        <p className="text-lg mt-0.1">O CrackoCraft é uma junção de grupos de amigos que se iniciou em 2022</p>
                        <p className="text-lg mt-0.1">Existem todos os perfis, seja explorado, construtor, farmer, viciado em mods</p>
                        <p className="text-lg mt-0.1">Vou contar um pouco mais sobre cada um dos grupos para você entender melhor.</p>
                        <br/>
                        <h1 ref={titulo2Ref} className="text-3xl font-bold text-white">Amigos Craft</h1>
                        <Image 
                            src="/images/amigoscraft1.png"
                            alt="AmigosCraft1"
                            width={400}
                            height={0}
                            className="mt-2"
                        />
                        <p className="text-lg mt-2">O grupo de AmigosCraft iniciou quando alguns amigos resolveram se juntar em um mundo lan e jogar despretensiosamente Minecraft</p>
                        <p className="text-lg mt-3">Inicialmente começou com os jogadores: Ruancell, PaulinhoIce, Hallbora, Lakewood_Lake e Galva1, tendo algumas vertentes com Fefe, Samuel, PpLucass, entre outros...</p>
                        <p className="text-lg mt-3">
                            A primeira versão registrada do grupo foi dada como Mundo dos Amigos 3.0, 
                            dado em vista o nome, já era a terceira vez que se reuniam para iniciar um mundo e 
                            a primeira vez que temos registros do mundo em screenshots
                        </p>
                        <Image 
                            src="/images/amigoscraft2.png"
                            alt="AmigosCraft1"
                            width={800}
                            height={0}
                            className="mt-2"
                        />
                        <p className="text-1 italic">Registro da primeira vila do grupo (o registro final foi perdido, sendo esse semanas antes de fechar o servidor)</p>
                    </div>
                    <div className="absolute top-1/4 left-1/1 transform -translate-x-1/2 -translate-y-1/2 w-1/4 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:w-1/2">
                        <ul className="list-disc list-inside text-white">
                            <li className="text-lg"><a onClick={() => handleClickTitulo(titulo1Ref)} className="hover:text-cyan-800">O que é</a></li>
                            <li className="text-lg"><a onClick={() => handleClickTitulo(titulo2Ref)} className="hover:text-cyan-800">AmigosCraft</a></li>
                            <li className="text-lg"><a onClick={() => handleClickTitulo(titulo1Ref)} className="hover:text-cyan-800">Galinheiro</a></li>
                            <li className="text-lg"><a onClick={() => handleClickTitulo(titulo1Ref)} className="hover:text-cyan-800">O inicio</a></li>
                            <li className="text-lg"><a onClick={() => handleClickTitulo(titulo1Ref)} className="hover:text-cyan-800">Edição mods</a></li>
                        </ul>
                    </div>
                </div>
            </main>
            
        </div>
    );
}