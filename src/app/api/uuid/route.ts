import { NextResponse } from 'next/server';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
        return NextResponse.json({ error: 'Nome de usuário não fornecido' }, { status: 400 });
    }
    
    try {
        const response = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
        const data = await response.json();
        const name = data.name;
        const uuid = data.id;
        return NextResponse.json({ uuid, name });
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar UUID' }, { status: 500 });
    }
}