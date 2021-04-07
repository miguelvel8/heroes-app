import React , {useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { authTypes } from '../../types/authTypes';

export const LoginScreen = ({history}) => {
    
    const {dispatch}=useContext(AuthContext);

    const handleClick = () => {
        dispatch({
            type: authTypes.login,
            payload:{
                name:'miguelvel8'
            }
        });
        history.replace('/');
        

    }

    return (
        <div className="container mt-05">
            <h1>Login </h1>
            <button 
                className="btn btn-outline-dark"
                onClick={handleClick} 
            >
                Ingresar
            </button>
        </div>
    )
}
