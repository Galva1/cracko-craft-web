import { ThemeContext } from '@/app/api/provider/theme-provider';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Button } from './button';
import Image from 'next/image';

const sol = <svg
xmlns="http://www.w3.org/2000/svg"
width="1em"
height="1em"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
>
<circle cx="12" cy="12" r="5" />
<line x1="12" y1="1" x2="12" y2="3" />
<line x1="12" y1="21" x2="12" y2="23" />
<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
<line x1="1" y1="12" x2="3" y2="12" />
<line x1="21" y1="12" x2="23" y2="12" />
<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
</svg>

const lua = <svg
xmlns="http://www.w3.org/2000/svg"
width="1em"
height="1em"
viewBox="0 0 24 24"
fill="currentColor"
>
<path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
</svg>



export function Header(){

    const {theme,toggleTheme} = useContext(ThemeContext);

    return (
        <header className={theme === 'day' ? "day flex items-center justify-between p-4 text-white" : "night flex items-center justify-between p-4 text-white "} >
            <Link href='/'><Image src="/images/logo.png"  width={200} height={100} alt='Cracko Craft'></Image></Link>
            <nav>
                
                <ul className="flex space-x-4">
                    <button onClick={toggleTheme} className='hover:text-gray-400 px-5 py-2 text-base font-bold bg-[#FFA3EC] rounded border-none cursor-pointer'>{theme === 'day' ? sol : lua}</button>
                    <li><Button><Link href='/' className='hover:text-gray-400'>Home</Link></Button></li>
                    <li><Button><Link href='/sobre' className='hover:text-gray-400'>Sobre</Link></Button></li>
                    <li><Button><Link href='/jogadores' className='hover:text-gray-400'>Jogadores</Link></Button></li>
                </ul>
            </nav>
        </header>
    );
}