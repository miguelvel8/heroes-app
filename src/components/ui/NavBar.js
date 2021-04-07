import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { authTypes } from '../../types/authTypes';

export const Navbar = () => {
    
    const {user:{name}, dispatch}=useContext(AuthContext); //aqui extraemos user del contexto de la app actual
        // ya que al darle login , se almacena valores en el user
        //user.name es igual que lo que esta desestructurado
    const history = useHistory();
    const handleLogout = () => {
        
        dispatch({
            type:authTypes.logout
        })
        history.replace('/login');

    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-200 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link" >                    

                    {name} 
                </span>
                    <button
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}