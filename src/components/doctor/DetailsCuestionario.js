import React, { Component } from 'react'
import { ModalBody, Form, Row, Input, Button, ModalFooter,Col, Label } from 'reactstrap'
import Dialog from '../Dialog';

export default class DetailsCuestionario extends Component {
    render() {
        return (
            <Dialog stateModal={this.props.stateModal} title={this.props.title}>
                <ModalBody style={{ margin: "2%" }}>
                    <Form>
                        <Row >
                            <Col>
                                <Label>Motivo de Consulta: </Label>
                                <Input readOnly value={this.props.cuestionario.motivo}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿HA RECIBIDO ALGÚN TIPO DE TERAPIA EN LAS ÚLTIMAS 24 HORAS?</Label>
                                <Input readOnly value={this.props.cuestionario.recibioTerapia}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Esta en algun tratamiento ahora?</Label>
                                <Input readOnly value={this.props.cuestionario.tieneTratamiento}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Ha tenido dolor durante al menos dos semanas en los últimos 6 meses?</Label>
                                <Input readOnly value={this.props.cuestionario.dolorUltimamente}></Input>
                            </Col>
                        </Row>
                        {this.props.cuestionario.dolorUltimamente==="SI"&&<Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Con qué frecuencia aparece?</Label>
                                <Input readOnly value={this.props.cuestionario.frecuenciaDolor}></Input>
                            </Col>
                        </Row>}
                        {this.props.cuestionario.dolorUltimamente==="SI"&&<Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Aproximadamente cuánto tiempo dura un episodio de dolor?</Label>
                                <Input readOnly value={this.props.cuestionario.duracionDolor}></Input>
                            </Col>
                        </Row>}
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Ha recibido algún tratamiento para aliviar el dolor?</Label>
                                <Input readOnly value={this.props.cuestionario.recibioTratamiento}></Input>
                            </Col>
                        </Row>
                        {this.props.cuestionario.recibioTratamiento==="SI"&&<Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Cual tratamiento recibio?</Label>
                                <Input readOnly value={this.props.cuestionario.tratamientoRecibido}></Input>
                            </Col>
                        </Row>}
                        {this.props.cuestionario.recibioTratamiento==="SI"&&<Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Mejoró?</Label>
                                <Input readOnly value={this.props.cuestionario.mejoroTratamiento}></Input>
                            </Col>
                        </Row>}
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Los medicamentos le causan algún efecto adverso?</Label>
                                <Input readOnly value={this.props.cuestionario.medicamentoAdverso}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Siente que el dolor ha afectado su calidad de vida?</Label>
                                <Input readOnly value={this.props.cuestionario.afectarCalidad}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Ha dejado de realizar alguna actividad a causa del dolor?</Label>
                                <Input readOnly value={this.props.cuestionario.dejarActividad}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Ha dejado de trabajar?</Label>
                                <Input readOnly value={this.props.cuestionario.dejarTrabajo}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Más fuerte de día o de noche?</Label>
                                <Input readOnly value={this.props.cuestionario.dolorFuerteEn}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Empeora con alguna actividad (caminar,cargar, estar de pie)?</Label>
                                <Input readOnly value={this.props.cuestionario.empeoraConActividad}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿El dolor se acompaña de nauseas, vómito o sudoración?</Label>
                                <Input readOnly value={this.props.cuestionario.dolorCon}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Mejora con el reposo?</Label>
                                <Input readOnly value={this.props.cuestionario.mejoraConReposo}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Cómo calificaría la intensidad del dolor?</Label>
                                <Input readOnly value={this.props.cuestionario.calDolor}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Tiene problemas para dormir?</Label>
                                <Input readOnly value={this.props.cuestionario.problemasDormir}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Tiene problemas para evacuar (estreñimiento)?</Label>
                                <Input readOnly value={this.props.cuestionario.problemasEvacuar}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Conoce el origen de su dolor?</Label>
                                <Input readOnly value={this.props.cuestionario.origenDolor}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Se siente triste o desmotivado?</Label>
                                <Input readOnly value={this.props.cuestionario.triste}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Ha perdido interés en sus actividades?</Label>
                                <Input readOnly value={this.props.cuestionario.perderInteres}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Le cuesta trabajo concentrarse?</Label>
                                <Input readOnly value={this.props.cuestionario.trabajoConcentrarse}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>¿Cuenta con apoyo de familiares y/o amigos?</Label>
                                <Input readOnly value={this.props.cuestionario.apoyoCercano}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>El día de hoy ({this.props.cuestionario.fecha}), ¿Tiene dolor?</Label>
                                <Input readOnly value={this.props.cuestionario.tieneDolorHoy}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>Valor del punto indicando nivel de dolor</Label>
                                <Input readOnly value={this.props.cuestionario.numeroDolor}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "3%" }}>
                            <Col>
                                <Label>Se presenta además: </Label>
                                <Input type="textarea" readOnly value={this.props.cuestionario.padecimientos}></Input>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Volver</Button>
                </ModalFooter>
            </Dialog>
        )
    }
}
