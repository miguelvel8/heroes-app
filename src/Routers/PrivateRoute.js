import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isAuthenticated,
    component:Component, // Component porque es un funcComponent
    ...rest
}) => {

    

    return (

         <Route {...rest} // aqui me llega el path 
            component={ (props) => ( // props: history-location-params
                (isAuthenticated)
                ? <Component {...props} />
                : <Redirect to="/login" />
            )

            }
         
         
         />
        
    )
}

PrivateRoute.propTypes={
    isAuthenticated:PropTypes.bool.isRequired, // acá decimos que el es autenticado es necesario
    component:PropTypes.func.isRequired
}
