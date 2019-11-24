import React from 'react';

function Error (props) {
    const { mensaje } = props;
    return (
        <div>
            <p className="alert alert-danger p3 my-5 text-center text-uppercase font-wight-bold">{mensaje}</p>
        </div>
    );
}

export default Error;