import React from 'react';
import logo from '../../img/logo_ingenia.png';
import '../../css/Encabezado.css';
import '../../js/toggleNav';
import { toggle } from '../../js/toggleNav';



function Encabezado () {

        return (
            <nav className="Encabezado">
               <div>
                   <a href="#"><img src={logo} alt="logo_ingenia"></img></a>
                </div>
                <div>
                <button className="botonEncabezado" > </button>
                    <ul id="List">
                     <li><a className="link" href="#">ABOUT US</a></li>
                     <li><a className="link" href="#">OUR WORK</a></li>
                     <li><a className="link active" href="#">CONTACT</a></li>
                     <li><a className="link" href="#">MANIFIESTO</a></li>
                    </ul>
                </div>
            </nav>
        );
    }


export default Encabezado;