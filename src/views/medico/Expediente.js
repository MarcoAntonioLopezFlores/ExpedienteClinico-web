import React, { Component } from 'react'

import MenuExpediente from '../../components/MenuExpediente'

import direccionIP from '../../util/informacion'
import PerfilPaciente from '../../components/doctor/PerfilPaciente'
import { Alert, Input, Row, Col, Label } from 'reactstrap'
import { Chip, Typography, Paper } from '@material-ui/core'

export default class Expediente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ficha: null,
            enfermedades: [],
            enfermedadesFamiliar: [],
            cirugias: []

        }

    }

    recoverExpediente = async () => {
        try {
            const expediente = await fetch(direccionIP + 'expediente/obtenerExpediente/' + localStorage.getItem('idForExpediente'), {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }).then(
                response => response.json(),
            )
            this.setState({
                ficha: expediente.ficha,
                enfermedades: expediente.ficha.enfermedades,
                enfermedadesFamiliar: expediente.ficha.enfermedadesFamiliar,
                cirugias: expediente.ficha.intervenciones
            })

            
        } catch (e) {

        }
    }

    componentDidMount() {
        this.recoverExpediente()
    }


    render() {
        if (this.state.ficha === null || this.state.ficha === undefined) {
            return (
                <MenuExpediente history={this.props.history} activo={1}>

                    <PerfilPaciente></PerfilPaciente>
                    <div style={{ marginTop: "2%" }}>
                        {(this.state.ficha === null || this.state.ficha === undefined) &&
                            <Alert color="danger">
                                EL PACIENTE NO TIENE CONTENIDO EN SU HISTORIAL CLINICO
                        </Alert>
                        }
                    </div>
                </MenuExpediente>
            )
        } else {
            return (
                <MenuExpediente history={this.props.history} activo={1}>

                    <PerfilPaciente></PerfilPaciente>


                    <Row style={{ justifyContent: "center", marginTop: "2%" }}>
                        <Typography variant="h5" component="h2">ANTECEDENTES PERSONALES</Typography>
                    </Row>

                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>¿ES ALÉRGICA/O A ANESTÉSICOS LOCALES? </Label>
                            <Input type="text" value={this.state.ficha.alergiaAnestesico !== 'NO' ? 'SI' : 'NO'} readOnly></Input>
                        </Col>
                        {this.state.ficha.alergiaAnestesico !== "NO" &&
                            <Col>
                                <Label style={{ marginRight: "2%" }}>¿CUAL?</Label>
                                <Input type="text" value={this.state.ficha.alergiaAnestesico} readOnly></Input>
                            </Col>
                        }
                    </Row>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>¿ES ALÉRGICA/O A MEDICAMENTOS? </Label>
                            <Input type="text" value={this.state.ficha.alergiaMedicamento !== 'NO' ? 'SI' : 'NO'} readOnly></Input>
                        </Col>
                        {this.state.alergiaMedicamento !== "NO" &&
                            <Col>
                                <Label style={{ marginRight: "2%" }}>¿CUAL?</Label>
                                <Input type="text" value={this.state.ficha.alergiaMedicamento} readOnly></Input>
                            </Col>
                        }
                    </Row>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>¿ES ALÉRGICA/O A ALGUN ALIMENTO? </Label>
                            <Input type="text" value={this.state.ficha.alergiaAlimento !== 'NO' ? 'SI' : 'NO'} readOnly></Input>
                        </Col>
                        {this.state.ficha.alergiaAlimento !== "NO" &&
                            <Col>
                                <Label style={{ marginRight: "2%" }}>¿CUAL?</Label>
                                <Input type="text" value={this.state.ficha.alergiaAlimento} readOnly></Input>
                            </Col>
                        }
                    </Row>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>¿PADECE MIASTENIA GRAVIS, BLOQUEO CARDÍACO COMPLETO, ESQUIZOFRENIA, HEMOFILIA O ESTÁ TOMANDO
    ANTICOAGULANTES? </Label>
                            <Input type="text" value={this.state.ficha.padeceAlgo !== 'NO' ? 'SI' : 'NO'} readOnly></Input>
                        </Col>
                    </Row>



                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>Alguien de su familia (padre, madre, hijos, hermanos) padece: </Label>

                        </Col>
                        {this.state.enfermedadesFamiliar.length > 0 &&
                            <Col>
                                <Paper component={"ul"} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none', padding: "0.5%", margin: 0 }}>
                                    {this.state.enfermedadesFamiliar.map((enfermedad) => {
                                        return (
                                            <li key={enfermedad.id}>
                                                <Chip
                                                    label={enfermedad.nombre}
                                                    style={{ margin: "2.5%", backgroundColor: "tomato" }}
                                                />
                                            </li>
                                        );
                                    })}
                                </Paper>
                            </Col>
                        }
                    </Row>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>Usted padece alguna enfermedad cronica: </Label>
                            <Input type="text" value={this.state.enfermedades.length > 0 ? 'SI' : 'NO'} readOnly></Input>
                        </Col>
                        {this.state.enfermedades.length > 0 &&
                            <Col>
                                <Label style={{ marginRight: "2%" }}>¿CUALES?</Label>
                                <Paper component={"ul"} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none', padding: "0.5%", margin: 0 }}>
                                    {this.state.enfermedades.map((enfermedad) => {
                                        return (
                                            <li key={enfermedad.id}>
                                                <Chip
                                                    label={enfermedad.nombre}
                                                    style={{ margin: "2.5%", backgroundColor: "tomato" }}
                                                />
                                            </li>
                                        );
                                    })}
                                </Paper>
                            </Col>
                        }
                    </Row>

                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>¿Se le han realizado procedimientos quirúrgicos? </Label>
                            <Input type="text" value={this.state.cirugias.length > 0 ? 'SI' : 'NO'} readOnly></Input>
                        </Col>
                        {this.state.cirugias.length > 0 &&
                            <Col>
                                <Label style={{ marginRight: "2%" }}>¿CUALES?</Label>
                                <Paper component={"ul"} style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none', padding: "0.5%", margin: 0 }}>
                                    {this.state.cirugias.map((cirugia) => {
                                        return (
                                            <li key={cirugia.id}>
                                                <Chip
                                                    label={cirugia.detalle}
                                                    style={{ margin: "2.5%", backgroundColor: "tomato" }}
                                                />
                                            </li>
                                        );
                                    })}
                                </Paper>
                            </Col>
                        }
                    </Row>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>¿TIENE ALGUNA PLACA METALICA / MATERIAL DE OSTEOSINTESIS? </Label>
                            <Input type="text" value={this.state.ficha.tienePlaca !== 'NO' ? 'SI' : 'NO'} readOnly></Input>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "3%" }}>
                        <Col>
                            <Label>¿Ha recibido transfusiones sanguíneas? </Label>
                            <Input type="text" value={this.state.ficha.transfusion !== 'NO' ? 'SI' : 'NO'} readOnly></Input>
                        </Col>
                    </Row>
                </MenuExpediente>
            )
        }
    }
}
