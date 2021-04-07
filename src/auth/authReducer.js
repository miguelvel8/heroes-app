import { authTypes } from "../types/authTypes";


export const authReducer = (state = {} , action) => {
    switch (action.type) {

        case authTypes.login: // acá especificamos el tipo de autenticacion y asi poder hacer el dispach
                            // en todo la app con el context
            return{
                ...action.payload, // devuelvo todo lo que me trae el payload y que el log esta positivo
                logged:true
            }
            break;
        case authTypes.logout:
            return{
                logged:false
            }
            break;

        default:
            return {
                state
            }
            break;
    }
}