'use client';
import React, { useState } from 'react';

export default function jogadores() {

    const [nomeJogador, setNomeJogador] = useState('');
    const [uuid, setUuid] = useState('');
    const [erro, setErro] = useState('');

    const buscarSkin = async () => {
        if (!nomeJogador) {
            setErro('Por favor, insira um nome de jogador.');
            setUuid('');
            return;
        }

        try {
            const response = await fetch(`/api/uuid?username=${nomeJogador}`);
            if (!response.ok) throw new Error('Erro ao buscar UUID');
    
            const data = await response.json();
            setUuid(data.uuid);
            setErro('');
        } catch (err) {
            console.error(err);
            setErro('Jogador não encontrado');
            setUuid('');
        }
    }

    return (
        <div className="flex flex-col items-center tela-container pt-10 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Jogadores</h1>
            <p className="text-lg">Busque sua skin</p>
            <input
                className="border border-gray-300 rounded-lg p-2 mt-4"
                type="text"
                placeholder="Digite o nome do jogador"
                value={nomeJogador}
                onChange={(event) => setNomeJogador(event.target.value)}
            />
            
            {erro && <p className="text-red-500 mt-4">{erro}</p>}

            <button
                onClick={buscarSkin}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                Buscar Skin
            </button>

            <div className='flex mt-6'>
                {uuid && (
                    <img
                        className="mt-6 ml-4"
                        src={`https://api.mineatar.io/body/front/${uuid}?scale=6&overlay=true`}
                        alt="Skin do jogador"
                    />
                )}
                {uuid && <img
                        className="mt-6 ml-4"
                        src={`https://api.mineatar.io/body/back/${uuid}?scale=6&overlay=true`}
                        alt="Skin do jogador"
                />}
                {uuid && <img
                        className="mt-6 ml-4"
                        src={`https://api.mineatar.io/body/left/${uuid}?scale=6&overlay=true`}
                        alt="Skin do jogador"
                />}
                {uuid && <img
                        className="mt-6 ml-4"
                        src={`https://api.mineatar.io/body/right/${uuid}?scale=6&overlay=true`}
                        alt="Skin do jogador"
                />}
            </div>
        </div>
    );
}