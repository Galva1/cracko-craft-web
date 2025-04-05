import React from "react";  
import {AreaHeader} from './styled';

function Header() {
  return (
    <AreaHeader>
        <div className="container">
            <h1>CrackoCraft</h1>
            <nav>
                <ul>
                    <li><a href="#Noticias">Noticias</a></li>
                </ul>
            </nav>      
        </div>
    </AreaHeader>
  );
}

export default Header;