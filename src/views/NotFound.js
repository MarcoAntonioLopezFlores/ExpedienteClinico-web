import React from 'react'
import '../styles/Login.css'
import logo from '../assets/img/logo.png'

import { Link } from 'react-router-dom'


export default function NotFound () {
    
        return (
            <div className="login-form">   
              
                
                <img height={"100%"} width={"100%"} src={logo} alt="LOGO BALANCENEURAL"/>                
                <h1 className="font-weight-bold text-center">RECURSO NO ENCONTRADO</h1>
                <div className="text-center">
                    <Link to="/">Volver</Link>
                </div>
            </div>
        )
    
}