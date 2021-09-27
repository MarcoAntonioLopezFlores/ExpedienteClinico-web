import React, { Component } from 'react'
import '../styles/RegistroPaciente.css'
import logo from '../assets/img/logo.png'
import { Button, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import direccionIP from '../util/informacion'

export default class RegistroPaciente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            apellido: "",
            correo: "",
            edad: "",
            escolaridad: "",
            ocupacion: "",
            telefono: "",
            enterado: "",
            textButton:"Registrarme"
        }

    }
    render() {
        return (
            <Container style={{ marginTop: "2.5%" }}>
                <Row>
                    <Col className="containerImagen" md>
                        <img height={"100%"} width={"100%"} src={logo} alt="LOGO BALANCENEURAL" />
                    </Col>
                    <Col >
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label>Nombre</Label>
                                    <Input onChange={(e) => {
                                        this.setState({
                                            nombre: e.target.value
                                        })
                                    }} type="text" placeholder="Marco Antonio" value={this.state.nombre}></Input>
                                </Col>
                                <Col>
                                    <Label>Apellido</Label>
                                    <Input onChange={(e) => {
                                        this.setState({
                                            apellido: e.target.value
                                        })
                                    }} type="text" placeholder="Lopez Flores" value={this.state.apellido}></Input>
                                </Col>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Label>Correo</Label>
                            <Input onChange={(e) => {
                                this.setState({
                                    correo: e.target.value
                                })
                            }} type="email" placeholder="tucorreo@gmail.com" value={this.state.correo}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Label>Edad</Label>
                                    <Input onChange={(e) => {
                                        this.setState({
                                            edad: e.target.value
                                        })
                                    }} type="number" placeholder="20" value={this.state.edad}></Input>
                                </Col>
                                <Col>
                                    <Label>Telefono</Label>
                                    <Input onChange={(e) => {
                                        this.setState({
                                            telefono: e.target.value
                                        })
                                    }} type="tel" placeholder="7772511221" value={this.state.telefono}></Input>
                                </Col>

                            </Row>


                        </FormGroup>
                        <FormGroup>
                            <Label>Escolaridad</Label>
                            <Input onChange={(e) => {
                                this.setState({
                                    escolaridad: e.target.value
                                })
                            }} type="text" placeholder="Universidad" value={this.state.escolaridad}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Ocupación</Label>
                            <Input onChange={(e) => {
                                this.setState({
                                    ocupacion: e.target.value
                                })
                            }} type="text" placeholder="Estudiante" value={this.state.ocupacion}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Enterado por</Label>
                            <Input onChange={(e) => {
                                this.setState({
                                    enterado: e.target.value
                                })
                            }} type="text" placeholder="Facebook" value={this.state.enterado}></Input>
                        </FormGroup>
                        <Button style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }} onClick={this.registrarPaciente} className="btn-lg btn-block">{this.state.textButton}</Button>
                        <div>
                            <Link to="/">¿Ya tienes cuenta?</Link>
                        </div>
                    </Col>
                </Row>
            </Container>




        )
    }
    registrarPaciente = async () => {
        if (this.state.nombre !== "" && this.state.apellido !== "" && this.state.correo !== ""
            && this.state.edad !== "" && parseInt(this.state.edad) > 0 && parseInt(this.state.edad) < 100 && this.state.escolaridad !== "" && this.state.ocupacion !== "" && this.state.telefono !== ""
            && this.state.enterado !== "") {
            
            this.setState({
                textButton:"Registrando..."
            })
            var result = ""
            var characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var charactersLength = characters.length;
            for (var i = 0; i < 8; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            const data = {
                "nombre": this.state.nombre,
                "apellido": this.state.apellido,
                "edad": this.state.edad,
                "escolaridad": this.state.escolaridad,
                "ocupacion": this.state.ocupacion,
                "telefono": this.state.telefono,
                "enteradoDeClinicaPor": this.state.enterado,
                "usuario": {
                    "email": this.state.correo,
                    "password": result,
                    "rol":
                    {
                        "id": "3"
                    }

                }
            }

            
            const response = await fetch(direccionIP + "registrarPaciente", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(data),
            }).then(resp => resp);

            
            if (response.status === 200) {

                swal({
                    title: "¡EXITO!",
                    text: "Registro éxitoso, por favor revisa tu correo",
                    icon: "success",
                });
                this.setState({
                    nombre: "",
                    apellido: "",
                    correo: "",
                    edad: "",
                    escolaridad: "",
                    ocupacion: "",
                    telefono: "",
                    enteradoPor: ""
                })
                this.props.history.replace("/")
            } else {
                swal({
                    title: "¡ERROR!",
                    text: "INTENTE NUEVAMENTE",
                    icon: "error",
                });
            }
            this.setState({
                textButton:"Registrarme"
            })
        } else {
            swal({
                title: "¡ADVERTENCIA!",
                text: "REVISE BIEN LOS CAMPOS",
                icon: "warning",
            });
        }
    }
}
