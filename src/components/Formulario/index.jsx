import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    };
    
    getValue = e => {
        console.log( [e.target.name], e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validateForm = (e) => {
        e.preventDefault(); //ejecutamos esta función para que la pagina no se actualice
            /*Se realiza la validación de los campos*/ 
            if (this.state.lastName === '' || this.state.name === '' || this.state.phone === '' || this.state.comment === '' ) {
               /* this.setState({error: true});*/ /* Si hay un campo vacio, se asigna el valor true al state error */
                store.dispatch(validarFormAction(true));
               /* return;*/
            } else {
                store.dispatch(validarFormAction(false));
                const { name, lastName, email, phone, comment } = this.state;
                console.log(name,lastName,email,phone,comment);

                store.dispatch(enviarFormAction({
                   name,
                   lastName,
                   email,
                   phone,
                   comment
                }));
            }
    }

    render () {

        console.log(this.props);
        const { error, responseRequest } = this.props;
        const { name, lastName, email,phone, comment } = this.state;
        return (
            <form id="formulario" className="form-control" onSubmit={this.validateForm} encType="multipart/form-data">
                {(error ) ? <Error mensaje="All fields are required"/> : null}

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
               { (error == null) ? null : <Response mensaje={responseRequest} /> }
            </form>
        );
    }
}

  const mapStateToProps = (state) => {
    return {
        error: state.formulario.error,
        responseRequest: state.formulario.responseRequest
    }
}

Formulario.propTypes = {
    error: PropTypes.bool,
    responseRequest: PropTypes.string
};

export default connect(mapStateToProps)(Formulario);