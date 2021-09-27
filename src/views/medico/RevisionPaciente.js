import React, { Component } from 'react'
import { Container, Row, Col, Label, Input, Button, ModalBody, ModalFooter } from 'reactstrap'
import { Card, Typography } from '@material-ui/core'
import Dialog from '../../components/Dialog'
import swal from 'sweetalert'
import direccionIP from '../../util/informacion'

export default class RevisionPaciente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ta: "",
            fc: "",
            fr: "",
            cambiosCutaneos: "",
            cicatrices: "",
            cambiosVasculares: "",
            dolorosos: "",
            triger: "",
            edema: "",
            insuficienciaVascular: "",
            otros: "",
            vol: "",
            veci: "",
            euforia: "",
            llanto: "",
            flush: "",
            interferencias: "", dental: "",textButton:"Registrar Revisión"
        }
    }
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
                                <Input type="text" onChange={(e) => { this.setState({ ta: e.target.value }) }} value={this.state.ta} className="form-control"></Input>
                            </Col>
                            <Label>FC:</Label>
                            <Col md>
                                <Input type="text" onChange={(e) => { this.setState({ fc: e.target.value }) }} value={this.state.fc} className="form-control"></Input>
                            </Col>
                            <Label>FR:</Label>
                            <Col md >
                                <Input onChange={(e) => { this.setState({ fr: e.target.value }) }} value={this.state.fr} type="text" className="form-control"></Input>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }} md>
                            <Col md>
                                <Card>
                                    <Label>Cambios cutáneos:</Label>
                                    <Input type="textarea" onChange={(e) => { this.setState({ cambiosCutaneos: e.target.value }) }} value={this.state.cambiosCutaneos} className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md >
                                <Card>
                                    <Label>Cicatrices:</Label>
                                    <Input type="textarea" className="form-control" onChange={(e) => { this.setState({ cicatrices: e.target.value }) }} value={this.state.cicatrices}></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Cambios Vasculares:</Label>
                                    <Input type="textarea" onChange={(e) => { this.setState({ cambiosVasculares: e.target.value }) }} value={this.state.cambiosVasculares} className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Dolorosos:</Label>
                                    <Input type="textarea" onChange={(e) => { this.setState({ dolorosos: e.target.value }) }} value={this.state.dolorosos} className="form-control"></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Trigger:</Label>
                                    <Input type="textarea" onChange={(e) => { this.setState({ triger: e.target.value }) }} value={this.state.triger} className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Edema:</Label>
                                    <Input type="textarea" className="form-control" onChange={(e) => { this.setState({ edema: e.target.value }) }} value={this.state.edema}></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Insuficiencia Vascular:</Label>
                                    <Input type="textarea" className="form-control" onChange={(e) => { this.setState({ insuficienciaVascular: e.target.value }) }} value={this.state.insuficienciaVascular}></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Otros:</Label>
                                    <Input type="textarea" className="form-control" onChange={(e) => { this.setState({ otros: e.target.value }) }} value={this.state.otros}></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Vol.:</Label>
                                    <Input type="textarea" onChange={(e) => { this.setState({ vol: e.target.value }) }} value={this.state.vol} className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Vecindad:</Label>
                                    <Input type="textarea" onChange={(e) => { this.setState({ veci: e.target.value }) }} value={this.state.veci} className="form-control"></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Euforia:</Label>
                                    <Input type="textarea" onChange={(e) => { this.setState({ euforia: e.target.value }) }} value={this.state.euforia} className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Llanto:</Label>
                                    <Input type="textarea" className="form-control" onChange={(e) => { this.setState({ llanto: e.target.value }) }} value={this.state.llanto}></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Flush:</Label>
                                    <Input type="textarea" onChange={(e) => { this.setState({ flush: e.target.value }) }} value={this.state.flush} className="form-control"></Input>
                                </Card>
                            </Col>
                            <Col md>
                                <Card>
                                    <Label>Interferencias:</Label>
                                    <Input type="textarea"
                                        onChange={(e) => { this.setState({ interferencias: e.target.value }) }} value={this.state.interferencias} className="form-control"></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <Col md>
                                <Card>
                                    <Label>Dental:</Label>
                                    <Input type="textarea" className="form-control" onChange={(e) => { this.setState({ dental: e.target.value }) }} value={this.state.dental}></Input>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <div style={{ margin: "auto" }}>
        <Button onClick={this.registrarRevision} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>{this.state.textButton}</Button>
                            </div>
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

    registrarRevision = async () => {
        if (this.state.ta !== "" && this.state.fc !== "" && this.state.fr !== "" && this.state.triger !== "" && this.state.veci !== ""
            && this.state.cambiosCutaneos !== "" && this.state.cambiosVasculares !== "" && this.state.cicatrices !== ""
            && this.state.vol !== "" && this.state.dental !== "" && this.state.dolorosos !== "" && this.state.edema !== ""
            && this.state.euforia !== "" && this.state.flush !== "" && this.state.insuficienciaVascular !== "" && this.state.interferencias !== ""
            && this.state.llanto !== "" && this.state.otros !== "") {

            this.setState({
                textButton:"Registrando..."
            })
            const data = {
                ta: this.state.ta,
                fc: this.state.fc,
                fr: this.state.fr,
                cambiosCutaneos: this.state.cambiosCutaneos,
                cicatrices: this.state.cicatrices,
                cambiosVasculares: this.state.cambiosVasculares,
                dolorosos: this.state.dolorosos,
                triger: this.state.triger,
                edema: this.state.edema,
                insuficienciaVascular: this.state.insuficienciaVascular,
                otros: this.state.otros,
                vol: this.state.vol,
                veci: this.state.veci,
                euforia: this.state.euforia,
                llanto: this.state.llanto,
                flush: this.state.flush,
                interferencias: this.state.interferencias, dental: this.state.dental,
                paciente: {
                    id: this.props.idPaciente
                },
                doctor: {
                    id: JSON.parse(localStorage.getItem('usuario')).id
                }
            }
            
            const response = await fetch(direccionIP + "revision/registrar", {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(resp => resp);

            
            if (response.status === 200) {
                swal({
                    title: "¡EXITO!",
                    text: "La revision se registró con éxito",
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
                textButton:"Registrar Revisión"
            })
        } else {
            swal({
                title: "¡ADVERTENCIA!",
                text: "Campos vacíos, no puedes registrar.",
                icon: "warning",
            });
        }
    }
}
