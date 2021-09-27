import React, { Component } from 'react'
import { ModalBody, Form, Row, Col, Input, Button, ModalFooter, Label } from 'reactstrap'
import NotesIcon from '@material-ui/icons/Notes';

import Dialog from '../Dialog';

export default class ViewNote extends Component {
    render() {
        return (
            <Dialog stateModal={this.props.stateModal} title={this.props.title}>
                <ModalBody>
                    <Form>
                        <Row>
                            <Label style={{ fontWeight: "bold" }}>PACIENTE: {this.props.nota.paciente.nombre} {this.props.nota.paciente.apellido} </Label>

                        </Row>
                        <Row>
                            <Label style={{ fontWeight: "bold" }}>REALIZADA POR MÉDICO: {this.props.nota.doctor.nombre} {this.props.nota.doctor.apellido} </Label>

                        </Row>

                        <Row style={{ marginTop: 15 }}>
                            <Label style={{ fontWeight: "bold" }}>TITULO:</Label>
                            <Col>
                                <Input readOnly value={this.props.nota.titulo}></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <NotesIcon fontSize="large"></NotesIcon>
                            <Col>
                                <Input readOnly type="textarea" value={this.props.nota.descripcion}></Input>
                            </Col>
                        </Row>

                    </Form>
                </ModalBody>
                <ModalFooter>

                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Cerrar</Button>
                </ModalFooter>
            </Dialog>
        )
    }
}
