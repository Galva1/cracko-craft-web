import { ThemeContext } from '@/app/api/provider/theme-provider';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Button } from './button';
import Image from 'next/image';



export function Header(){

    const {theme,toggleTheme} = useContext(ThemeContext);

    return (
        <header className={theme === 'day' ? "day flex items-center justify-between p-4 text-white" : "night flex items-center justify-between p-4 text-white "} >
            <Link href='/'><Image src="/images/logo.png"  width={200} height={100} alt='Cracko Craft'></Image></Link>
            <nav>
                
                <ul className="flex space-x-4">
                    <Button onClick={toggleTheme}> <p className='hover:text-gray-400'>{theme}</p></Button>
                    <li><Button><Link href='/' className='hover:text-gray-400'>Home</Link></Button></li>
                    <li><Button><Link href='/sobre' className='hover:text-gray-400'>Sobre</Link></Button></li>
                    <li><Button><Link href='/jogadores' className='hover:text-gray-400'>Jogadores</Link></Button></li>
                </ul>
            </nav>
        </header>
    );
}