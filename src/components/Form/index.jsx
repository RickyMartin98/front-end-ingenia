import React from 'react';
import './form.css';

class Formulario extends React.Component {
    render () {
        return (
        <form className="container-fluid">
            <div className="form-row">
               <div className="col col-md-6 center">   
                    <span className ="bullet1">1</span>
                     <span className="span-input">Name
                     <small className="required">*REQUIRED FIELD</small>
                     <input type="text" className="form-control" placeholder="Name"/>
                     </span>
               </div>
               <div className="col col-md-6 center">
                    <input type="text" className="form-control input" placeholder="LastName" />
               </div>
                
                
            </div>
            <div className="form-row">
               <div className="col col-md-6 center">
                    <span className="bullet2">2</span>
                    <input type="text" className="form-control" placeholder="E-mail"/>
               </div>
                <div className="col col-md-6 center">
                     <input type="text" className="form-control" placeholder="Phone"/>
                </div>
            </div>
            <div className="form-row">
                    <span className="bullet3">3</span>
                    <span className="span"> Tell us about your challenge or opportunity</span>
                    <textarea className="form-control caja"></textarea>
               
            </div>
            <button type="submit" className="btn">Send</button>
        </form>
        );
    }
}

export default Formulario;