import React from 'react'
import MenuPaciente from '../../components/MenuPaciente'
import {Label, Input, Col, FormGroup, Row,Button } from 'reactstrap'
import direccionIP from '../../util/informacion'
import Agree from '../../components/paciente/Agree'
import ChangePass from '../../components/paciente/ChangePass'

export default class HomePaciente extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: JSON.parse(localStorage.getItem('usuario')).nombre,
            apellido: JSON.parse(localStorage.getItem('usuario')).apellido,
            correo: JSON.parse(localStorage.getItem('usuario')).usuario.email,
            edad: JSON.parse(localStorage.getItem('usuario')).edad,
            escolaridad: JSON.parse(localStorage.getItem('usuario')).escolaridad,
            ocupacion: JSON.parse(localStorage.getItem('usuario')).ocupacion,
            telefono: JSON.parse(localStorage.getItem('usuario')).telefono,
            enteradoDeClinicaPor: JSON.parse(localStorage.getItem('usuario')).enteradoDeClinicaPor,
            ficha: {},
            stateModal: false,
            stateModalChangePass:false
        }
    }

    recoverExpediente = async () => {
        try {
            const expediente = await fetch(direccionIP + 'expediente/obtenerExpediente/' + JSON.parse(localStorage.getItem('usuario')).id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }).then(
                response => response.json(),
            )
            
            if (expediente.ficha === undefined) {
                this.setState({
                    stateModal: true
                })
            } else {
                this.setState({
                    ficha: expediente.ficha,
                })
            }
        } catch (e) {
            
            this.setState({
                stateModal: true
            })
        }
    }

    aceptar = () => {
        this.props.history.push("/antecedente")
    }

    componentDidMount() {
        this.recoverExpediente()
    }

    render() {
        return (
            <MenuPaciente history={this.props.history} activo={1}>
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
                        <Input type="email" placeholder="tucorreo@gmail.com" value={this.state.correo} readOnly></Input>
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
                                enteradoDeClinicaPor: e.target.value
                            })
                        }} type="text" placeholder="Facebook" value={this.state.enteradoDeClinicaPor}></Input>
                    </FormGroup>
                    
                </Col>
                <Row style={{ marginTop: 20 }}>
                            <div style={{ margin: "auto" }}>
                                <Button onClick={this.tooglePass} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>Actualizar Contraseña</Button>
                            </div>
                        </Row>
                {this.state.stateModal &&
                    <Agree
                        title={"CARTA DE CONSENTIMIENTO INFORMADO"}
                        toogle={this.toogle}
                        stateModal={this.state.stateModal}
                        aceptar={this.aceptar}
                    />
                }
                {
                    this.state.stateModalChangePass &&
                    <ChangePass
                    title={"CAMBIO DE CONTRASEÑA"}
                        toogle={this.tooglePass}
                        stateModal={this.state.stateModalChangePass}

                    />
                }
            </MenuPaciente>

        )

    }
    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal })
        
    }

    tooglePass = () => {
        this.setState({ stateModalChangePass: !this.state.stateModalChangePass })
        
    }

}
