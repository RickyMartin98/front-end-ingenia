import React, { Component } from 'react';
import Mexico from '../../img/bg/bg_mexico_city.png';
import Washington from '../../img/bg/bg_washington.png';
import '../../css/Main.css';

import City from '../City';

class Main extends Component {

    style = {
      
       city: {
           paddingLeft: 0,
           paddingRight: 0,
       }
    }

 render () {
     return (
         <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6" style={this.style.city} >
                    <City ciudad="Mexico City" calle="ANATOLE FRANCE 311" direccion="Polanco,Miguel Hidalgo 11560 Mexico, D.F" telefono="50 22 09 00" urlImage={Mexico}></City> 
                </div>
                <div className="col-12 col-md-6" style={this.style.city}>
                    <City ciudad="Washington D.C." calle="1200 18TH STREET, NW" direccion="Suite 700 Washington DC 20036 USA." telefono="50 22 09 00" urlImage={Washington}></City>
                </div>
            </div>
            <div className="contact" >
                <p className="contactDescription">ingenia offices are based in two of the leading business and goverment hubs in the americas</p>
                <h1 className="title">Contact us</h1>
                <p className="contactDescription">Send us an e-mail and we will get back to you: </p>
            </div>
         </div>
     );
 }

}

export default Main;