import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import Error from '../Error';
import Response from '../Response';
import '../../css/Formulario.css';
import { enviarFormAction, validarFormAction } from '../../actions/formActions';
import store from '../../store';


class Formulario extends Component {
/*Se declaran las state */ 
    state = {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        comment: '',
        error: false,
        responseRequest: false,
        responseError: false,
        MessageSuccess: 'Thanks, we will get back at you as soon as possible.',
        MessageError: 'Something is missing or the information is wrong, please check.'
    };
    
    getValue = e => {
        console.log( [e.target.name], e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateForm = (e) => {
        e.preventDefault(); //ejecutamos esta función para que la pagina no se refresque
            /*Se realiza la validación de los campos*/ 
            if (this.state.lastName === '' || this.state.name === '' || this.state.phone === '' || this.state.comment === '' ) {
               /* this.setState({error: true});*/ /* Si hay un campo vacio, se asigna el valor true al state error */
                store.dispatch(validarFormAction(true));
               /* return;*/
            } else {
                store.dispatch(validarFormAction(false));
                const { name, lastName, email, phone, comment } = this.state;
                console.log(name,lastName,email,phone,comment);
                /*var formData = new FormData();
                formData.append("fullname",this.state.name + this.state.lastName);
                formData.append("email", this.state.email);
                formData.append("phone",this.state.phone);
                formData.append("comment", this.state.comment);
*/
                store.dispatch(enviarFormAction({
                   name,
                   lastName,
                   email,
                   phone,
                   comment
                }));
            }
        
           
/*
            const url = '/contact.php';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };   */

          /*  axios.post(url,formData,config).then(response => {
                console.log("Response-Data: ", response.data);
                const { Message } = response.data;
                console.log("Message: ",Message);
                if (Message === this.state.MessageError) {
                    console.log("SI es el mismo");
                    this.setState({MessageSuccess: false});
                    this.setState({MessageError: true});
                }else  {
                    console.log("No es el mismo");
                    this.setState({MessageSuccess: true});
                    this.setState({MessageError: false});
                }*/

               /* if (response.status === 200 && response.data != this.state.MessageError) {
                    console.log("Dentro del status 200");
                    this.setState({responseRequest: true});
                    this.setState({
                        name: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        comment: ''
                    });
                } else {
                    this.setState({
                        responseError: true
                    });
                }*/
           /* }).catch(error => {
                 alert(error);
            });*/    
    }

    render () {
        const { name, lastName, email,phone, comment } = this.state;
        return (
            <form id="formulario" className="form-control" onSubmit={this.validateForm} encType="multipart/form-data">
                { (this.state.error) ?/*Si hay un error se muestra el componente Error, de lo contrario no*/ <Error mensaje="all fields are required"/> : null}

                <div className="contenedor-input">
                    <small>*REQUIRED FIELD</small>
                    <span className="bullet1">
                    <input type="text"
                     name="name" 
                     className="input-48"
                     placeholder="Name"  
                     onChange={this.getValue}
                     value={name}
                     /> <input type="text"
                     name="lastName" 
                     className="input-48" 
                     placeholder="LastName" 
                     onChange={this.getValue} 
                     value={lastName}
                     /></span>

                    <span className="bullet2"><input type="text" 
                    name="email" 
                    className="input-48" 
                    placeholder="Email" 
                    onChange={this.getValue} 
                    value={email}
                    />

                    <input type="text" 
                    name="phone" 
                    className="input-48" 
                    placeholder="Phone" 
                    onChange={this.getValue} 
                    value={phone}
                    /></span>

                    <span className="bullet3">Tell us about  your challenge or opportunity
                        <textarea name="comment" 
                        className="input-100" 
                        onChange={this.getValue}
                        value={comment}
                        ></textarea></span>
                        
                    <input type="submit" className="boton" value="Send"/>
                </div>
                { (this.state.responseRequest) ? <Response className="alert alert-success" mensaje={this.state.MessageSuccess} /> : null}
                { (this.state.responseError) ? <Error mensaje={this.state.MessageError} /> : null }
            </form>
        );
    }
}

export default Formulario;