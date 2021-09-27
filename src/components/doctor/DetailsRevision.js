import React, { Component } from 'react'
import Dialog from '../Dialog'
import { ModalBody, Container, Row, Label, Col, Input, Button, ModalFooter } from 'reactstrap'
import { Typography, Card } from '@material-ui/core'

export default class DetailsRevision extends Component {
    render() {
        return (
            <Dialog stateModal={this.props.stateModal} title={this.props.title}>
                <ModalBody style={{ margin: "2%" }}>
                    <Container>
                        <Row style={{ margin: 10, justifyContent: "center" }}>
                            <Typography variant="subtitle2" component="h4">EXPLORACIÓN FÍSICA</Typography>
                        </Row>
                        <Row>
                            <Label>TA:</Label>
                            <Col md>
                                <Input type="text"  value={this.props.revision.ta} readOnly className="form-control"></Input>
                            </Col>
                            <Label>FC:</Label>
                            <Col md>
                                <Input type="text" value={this.props.revision.fc} readOnly className="form-control"></Input>
                            </Col>
                            <Label>FR:</Label>
                            <Col md >
                                <Input value={this.props.revision.fr} readOnly type="text" className="form-control"></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }} md>
                            <Col md>
                                <Card>
                                    <Label>Cambios cutáneos:</Label>
                                    <Input type="textarea" value={this.props.revision.cambiosCutaneos} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md >
                                <Card>
                                    <Label>Cicatrices:</Label>
                                    <Input type="textarea" className="form-control" value={this.props.revision.cicatrices} readOnly></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Cambios Vasculares:</Label>
                                    <Input type="textarea" value={this.props.revision.cambiosVasculares} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Dolorosos:</Label>
                                    <Input type="textarea" value={this.props.revision.dolorosos} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Trigger:</Label>
                                    <Input type="textarea" value={this.props.revision.triger} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Edema:</Label>
                                    <Input type="textarea" className="form-control" value={this.props.revision.edema} readOnly></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Insuficiencia Vascular:</Label>
                                    <Input type="textarea" className="form-control" value={this.props.revision.insuficienciaVascular} readOnly></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Otros:</Label>
                                    <Input type="textarea" className="form-control" value={this.props.revision.otros} readOnly></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Vol.:</Label>
                                    <Input type="textarea" value={this.props.revision.vol} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Vecindad:</Label>
                                    <Input type="textarea" value={this.props.revision.veci} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Euforia:</Label>
                                    <Input type="textarea" value={this.props.revision.euforia} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Llanto:</Label>
                                    <Input type="textarea" className="form-control" value={this.props.revision.llanto} readOnly></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Flush:</Label>
                                    <Input type="textarea" value={this.props.revision.flush} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Interferencias:</Label>
                                    <Input type="textarea"
                                        value={this.props.revision.interferencias} readOnly className="form-control"></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Dental:</Label>
                                    <Input type="textarea" className="form-control" value={this.props.revision.dental} readOnly></Input>
                                </Card>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col md>
                                <Label>D = Dolorosos T = Trigger H = Hiperalgesia C = Manigestación cutánea</Label>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Volver</Button>
                </ModalFooter>
            </Dialog>
        )
    }
}
