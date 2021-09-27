import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

const PrivateRoute = ({component: Component,role, ...rest}) => {
    
    var ROLE=0
    var expirado=false
    if(localStorage.getItem('usuario')!==null){
        ROLE = JSON.parse(localStorage.getItem('usuario')).usuario.rol.id
        expirado= (decode(localStorage.getItem("token")).exp< Date.now() / 1000)
    }
    
    if(expirado){
        localStorage.clear()
        window.location.reload()     
    }
    return (
        <Route {...rest} render={props => (
            localStorage.getItem("token")!==null && role===ROLE ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
    
};

export default PrivateRoute;