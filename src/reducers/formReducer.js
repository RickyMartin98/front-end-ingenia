/*import { initialState } from "react-redux-form";*/

const initialState = {
    responseRequest: '',
    /*name: '',
    lastName: '',
    email: '',
    comment: '',
    error: false,
    responseRequest: false,
    responseError: false,
    MessageSuccess: 'Thanks, we will get back at you as soon as possible.',
    MessageError: 'Something is missing or the information is wrong, please check.'*/
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'VALIDAR_FORM':
            return {
                ...state,
                error: action.payload
            }   
        case 'ENVIAR_FORM': 
            return {
                ...state,
               responseRequest: action.payload

            }    
        default:
            return state;    
    }
}