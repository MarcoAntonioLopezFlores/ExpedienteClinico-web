import React, { useState } from 'react'
import '../styles/Login.css'
import logo from '../assets/img/logo.png'
import { Button, FormGroup, Input } from 'reactstrap'
import direccionIP from '../util/informacion'

import { Link, Redirect } from 'react-router-dom'
import swal from 'sweetalert'


export default function Olvidar() {
    const [email, setEmail] =  useState("")
    const recuperar= async()=>{
        if(email!==""){
            var result = ""
            var characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < 8; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            const data ={
                email:email,
                password:result
            }
            const response = await fetch(direccionIP + "recuperarCredenciales", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(data),
            }).then(resp => resp.json());

            
            if (response) {

                swal({
                    title: "¡EXITO!",
                    text: "Recuperación éxitosa, por favor revisa tu correo",
                    icon: "success",
                });
                
                setEmail("")
            } else {
                swal({
                    title: "¡ERROR!",
                    text: "INTENTE NUEVAMENTE",
                    icon: "error",
                });
            }
        }else{
            swal({
                title: "¡ADVERTENCIA!",
                text: "REVISE BIEN LOS CAMPOS",
                icon: "warning",
            });
        }
        

        
    }
    if (localStorage.getItem('token') !== null) {
        var perfil = JSON.parse(localStorage.getItem('usuario'))
        const ROLE = perfil.usuario.rol.id
        switch (ROLE) {
            case 1:
                return (<Redirect to={"/inicioAdmin"} />)
            case 2:
                return (<Redirect to={"/inicioDoctor"} />)
            case 3:
                return (<Redirect to={"/inicioPaciente"} />)
            default:
                break;
        }
    } else {
        return (
            <div className="login-form">


                <img height={"100%"} width={"100%"} src={logo} alt="LOGO BALANCENEURAL" />

                <FormGroup>
                    <h3 style={{ fontSize: 15 }} className="font-weight-bold text-center">Ingresa tu correo para recuperar tu contraseña</h3>
                    <Input onChange={(e)=>{setEmail(e.target.value)}} 
                    type="email" placeholder="tucorreo@gmail.com" value={email}></Input>
                </FormGroup>

                <Button onClick={recuperar} style={{ backgroundColor: "gray", fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray-700" }} className="btn-lg btn-block">Enviar</Button>


                <div className="text-center">
                    <Link to="/">Volver al inicio de sesión</Link>
                </div>
            </div>
        )
    }

   
}