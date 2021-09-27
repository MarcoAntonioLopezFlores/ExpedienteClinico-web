import React from 'react'
import '../styles/Login.css'
import logo from '../assets/img/logo.png'
import { Button, FormGroup, Input, Alert, InputGroupAddon, InputGroup } from 'reactstrap'
import EmailIcon from '@material-ui/icons/Email';
import { Link, Redirect } from 'react-router-dom'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import direccionIP from '../util/informacion'

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            error: false,
            emptyFields: false
        }
    }

    handleClick = async () => {
        
        const usuario = {
            email: this.state.email,
            password: this.state.password
        }
        if (usuario.email !== "" && usuario.password !== "") {
            this.setState({
                emptyFields: false
            })
            

            const response = await fetch(direccionIP + "iniciarSesion", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
            }).then(resp => resp.json());

            

            if (response.jwttoken != null) {
                var token = JSON.stringify(response.jwttoken)
                localStorage.setItem('token', response.jwttoken)


                var perfil = this.parseJwt(token).perfil;

                localStorage.setItem('usuario', JSON.stringify(perfil));

                const ROLE = perfil.usuario.rol.id
                switch (ROLE) {
                    case 1:
                        this.props.history.push("/inicioAdmin")
                        break;
                    case 2:
                        this.props.history.push("/inicioDoctor")
                        break;
                    case 3:
                        this.props.history.push("/inicioPaciente")
                        break;
                    default:
                        this.setState({
                            error: true
                        })
                        break;
                }


            } else {
                this.setState({

                    error: true
                })
            }
        } else {
            this.setState({
                error: false,
                emptyFields: true
            })
        }
        
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    }

    render() {
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
                <div className="login-form" >
                    <img height={"100%"} width={"100%"} src={logo} alt="LOGO BALANCENEURAL" />
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend" style={{ margin: "2%" }}>
                                <EmailIcon></EmailIcon>
                            </InputGroupAddon>
                            <Input onChange={(e) => {
                                this.setState({
                                    email: e.target.value
                                })
                            }} type="email" placeholder="tucorreo@gmail.com" value={this.state.email} style={{ borderRadius: 5 }}></Input>
                        </InputGroup>


                    </FormGroup>
                    <FormGroup>

                        <InputGroup>
                            <InputGroupAddon addonType={"prepend"} style={{ margin: "2%" }}>
                                <VpnKeyIcon></VpnKeyIcon>
                            </InputGroupAddon>
                            <Input onChange={(e) => {
                                this.setState({
                                    password: e.target.value
                                })
                            }} type="password" placeholder="Ingresa tu contraseña" value={this.state.password} style={{ borderRadius: 5 }}></Input>
                        </InputGroup>


                    </FormGroup>
                    {this.state.error && (
                        <Alert color="danger">
                            Correo y/o contraseña no valida
                        </Alert>
                    )}
                    {this.state.emptyFields && (
                        <Alert color="danger">
                            Campos vacíos
                        </Alert>
                    )}

                    <Button style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }} onClick={this.handleClick}  className="btn-lg btn-block">Ingresar</Button>
                    <div style={{ marginTop: "2.5%" }}>
                        <Link to="/olvidar">¿Olvidaste tu contraseña?</Link>
                        <strong>|</strong>
                        <Link to="/registroPaciente">¿Eres paciente?</Link>
                    </div>
                </div>
            )
        }
    }
}
