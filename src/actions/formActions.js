import axios from 'axios';

export const enviarFormAction = datos => { 
    console.log("datos en actions: ",datos);
    const formData = new FormData();
    formData.append("fullname",datos.name + " " + datos.lastName);
    formData.append("email", datos.email);
    formData.append("phone",datos.phone);
    formData.append("comment", datos.comment)

    const url = '/contact.php';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };   
     
    return dispatch => {
        return       axios.post(url,formData,config).then(response => {
            dispatch({
                type:'ENVIAR_FORM',
                payload: response.data
            });
        });
    };
}

export const validarFormAction = estado => {
    return {
        type: 'VALIDAR_FORM',
        payload: estado
    }
}