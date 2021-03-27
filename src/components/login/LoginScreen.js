import React from 'react'
import { useHistory } from 'react-router'

export const LoginScreen = ({history}) => {
    

    const handleClick = () => {
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
