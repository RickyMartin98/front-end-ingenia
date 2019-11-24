import React from 'react';

function Response ({mensaje}) {
    return(
        <p className="alert alert-info p-3"> { mensaje } </p>
    );  
}
export default Response;