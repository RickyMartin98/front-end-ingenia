import axios from 'axios';

export const enviarFormAction = datos => { 
    console.log("datos en actions: ",datos);
    const formData = new FormData();
    formData.append("fullname",datos.name + " " + datos.lastName);
    formData.append("email", datos.email);
    formData.append("phone",datos.phone);
    formData.append("comment", datos.comment)
    const MessageError = 'Something is missing or the information is wrong, please check.', MessageSuccess = 'Thanks, we will get back at you as soon as possible.';

    const url = '/contact.php';
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };   
     
    return dispatch => {
        return       axios.post(url,formData,config).then(response => {
            console.log("response antes de dispatch: ", response.data);
            if (response.data.includes("Success")) {
                console.log("Incluye Success");
                dispatch({
                    type:'ENVIAR_FORM',
                    payload: MessageSuccess
                });

            } else {
                console.log("Incluye error");
                dispatch({
                    type: 'ENVIAR_FORM',
                    payload: MessageError
                });
            }
           
        });
    };
}

export const validarFormAction = estado => {
    return {
        type: 'VALIDAR_FORM',
        payload: estado
    }
}