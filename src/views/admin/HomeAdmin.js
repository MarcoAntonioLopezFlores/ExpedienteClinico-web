import React from 'react'

import Menu from '../../components/admin/Menu'
import { Form, Row, Col, Input, Button } from 'reactstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import ListMedicos from '../../components/admin/ListMedicos';
import swal from 'sweetalert';
import direccionIP from '../../util/informacion'

export default class HomeAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: "",
            apellido: "",
            correo: "",
            especialidad: "",
            textButton:"Registrar Médico"
        }
    }

    registrarDoctor = async () => {
        if (this.state.nombre !== "" && this.state.apellido !== "" && this.state.correo !== "" && this.state.especialidad !== "") {
            
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
                "especialidad": this.state.especialidad,
                "usuario": {
                    "email": this.state.correo,
                    "password": result,
                    "rol": {
                        "id": "2"
                    }
                }
            }

            const response = await fetch(direccionIP + "registrarDoctor", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                body: JSON.stringify(data),
            }).then(resp => resp);

            if (response.status === 200) {
                this.setState({
                    nombre: "",
                    apellido: "",
                    correo: ""
                })
                swal({
                    
                    title: "¡EXITO!",
                    text: "El medico se registró con éxito",
                    icon: "success",
                });
            } else {
                swal({
                    
                    title: "¡ERROR!",
                    text: "Ocurrio un error",
                    icon: "error",
                });
            }
            this.setState({
                textButton:"Registrar Médico"
            })
        } else {
            swal({
                title: "¡ADVERTENCIA!",
                text: "Campos vacíos, no puedes registrar.",
                icon: "warning",
            });
        }
    }


    render() {
        return (
            <Menu history={this.props.history} activo={1}>
                <div>
                    <Form>
                        <Row>
                            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                            <Col>
                                <Input onChange={(e) => {
                                    this.setState({
                                        nombre: e.target.value
                                    })
                                }} type="text" placeholder="nombre(s)" value={this.state.nombre}></Input>
                            </Col >
                            <Col>
                                <Input onChange={(e) => {
                                    this.setState({
                                        apellido: e.target.value
                                    })
                                }} type="text" placeholder="apellidos" value={this.state.apellido}></Input>
                            </Col>

                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <EmailIcon fontSize="large"></EmailIcon>
                            <Col>
                                <Input onChange={(e) => {
                                    this.setState({
                                        correo: e.target.value
                                    })
                                }} type="email" placeholder="correo@gmail.com" value={this.state.correo}></Input>
                            </Col>
                            <Col >
                                <Input onChange={(e) => {
                                    this.setState({
                                        especialidad: e.target.value
                                    })
                                }} type="text" placeholder="especialidad" value={this.state.especialidad}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <div style={{ margin: "auto" }}>
                            <Button onClick={this.registrarDoctor} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>{this.state.textButton}</Button>
                            </div>
                        </Row>
                    </Form>
                    <ListMedicos ></ListMedicos>

                </div>
            </Menu>


        )

    }

}
