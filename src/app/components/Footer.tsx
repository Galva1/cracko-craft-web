import React, { useContext } from 'react';
import { ThemeContext } from '../api/provider/theme-provider';

export function Footer(){
    const {theme} = useContext(ThemeContext);

    return(
        <footer className={"flex items-center bg-(--color-primary) justify-center w-full h-14 border-t"}>
            <p className="text-(--color-content)">Cracko Craft | Versão Alpha 0.1</p>
        </footer>
    );
}