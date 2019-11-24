const initialState = {
    name: '',
    lastName: '',
    email: '',
    comment: '',
    error: false,
    responseRequest: false,
    responseError: false,
    MessageSuccess: 'Thanks, we will get back at you as soon as possible.',
    MessageError: 'Something is missing or the information is wrong, please check.'
};

export default function (state= initialState, action) {
    switch (action.type) {
        case 'VALIDAR_FORM':
            return {

            }
        case 'ENVIAR_FORM':
            return {}    
        default:
            return state;    
    }
}