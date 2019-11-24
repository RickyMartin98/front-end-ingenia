import React from 'react';
import logo from '../../img/logo_ingenia.png';
import '../../css/Encabezado.css';



function Encabezado () {

   /* const toggleNav =  e => {
       const lista = document.getElementById("List");

       if ( lista.style.display == "flex") {
           lista.style.display = "none";
       } else {
           lista.style.display = "flex";
           lista.style.flexDirection = "column";
           lista.style.alignItems = "center";
           lista.style.justifyContent = "center";
       }
      
    };*/
        return (
            <nav className="Encabezado">
               <div>
                   <a href="#"><img src={logo} alt="logo_ingenia"></img></a>
                </div>
                <div>
                    <button className="botonEncabezado"></button>
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