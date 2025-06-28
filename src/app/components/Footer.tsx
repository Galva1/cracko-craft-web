import React, { useContext } from 'react';
import { ThemeContext } from '../api/provider/theme-provider';

export function Footer(){
    const {theme} = useContext(ThemeContext);

    return(
        <footer className={theme === 'day' ? "day flex items-center justify-center w-full h-14 border-t": " night flex items-center justify-center w-full h-14 border-t"}>
            <p className="text-white">Cracko Craft | Versão Alpha 0.1</p>
        </footer>
    );
}