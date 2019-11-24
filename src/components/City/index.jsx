import React, { Component } from 'react';
import '../../css/City.css';

class City extends Component {

    styles = {
        contenedorPadre: {
            backgroundImage: `url(${this.props.urlImage})`,
            backgrounRepeat: 'no repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
        },
        contenedorHijo: {
            width: 200,
            heigth: 250,
            backgroundColor: 'white'
        }
    };
    
    render () {
      return (
            <div style={this.styles.contenedorPadre} className="contenedorPadre">
                <h1 className="title"> {this.props.ciudad} </h1>
                <div style={this.styles.contenedorHijo}>
                    <p className="parraf"><strong> {this.props.calle }</strong></p>
                    <p className="parraf"> {this.props.direccion} </p>
                    <span className="telefono">{this.props.telefono}</span>
                </div>
            </div>
        );
    }
}

export default City;