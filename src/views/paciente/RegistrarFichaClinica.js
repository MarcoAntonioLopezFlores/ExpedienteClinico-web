import React, { Component } from 'react'
import { Container, Row, Col, Label, Button, ButtonGroup } from 'reactstrap'
import { Typography, FormControl, Select, Input, Chip, MenuItem } from '@material-ui/core'
import direccionIP from '../../util/informacion'
import swal from 'sweetalert'

export default class RegistrarFichaClinica extends Component {
    constructor(props) {
        super(props)
        this.state = {
            enfermedadesFamiliar: [],
            enfermedadesPropias: [],
            cirugiasPropias: [],
            enfermedades: [
                { id: 1, nombre: "Cancer" },
                { id: 2, nombre: "Diabetes" },
                { id: 3, nombre: "Hipertensión" },
                { id: 4, nombre: "Oncologica" },
                { id: 5, nombre: "Dislipidemias" }
            ],
            cirugias: [
                { id: 1, detalle: "Cirugía odontológica y maxilo-facial" },
                { id: 2, detalle: "Cirugía otorrinolaringológica" },
                { id: 3, detalle: "Cirugía oftalmológica" },
                { id: 4, detalle: "Cirugía general" },
                { id: 5, detalle: "Cirugía oncológica" },
                { id: 6, detalle: "Neurocirugía" },
                { id: 7, detalle: "Cirugía ginecológica" },
                { id: 8, detalle: "Cirugía urológica" },
                { id: 9, detalle: "Cirugía dermatológica" },
                { id: 10, detalle: "Cirugía traumatológica" }
            ],
            alergiaAnestesicoRadio: "NO",
            alergiaAlimentoRadio: "NO",
            alergiaMedicamentoRadio: "NO",
            alergiaAnestesico: "NO",
            alergiaAlimento: "NO",
            alergiaMedicamento: "NO",
            padeceAlgoRadio: "NO",
            intervencionRadio: "NO",
            transfusionRadio: "NO",
            tienePlaca:"NO"

        }

    }

    render() {
        return (
            <Container style={{ marginBottom: "3%" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Typography variant="h5" component="h2">FICHA MEDICA</Typography>
                </Row>

                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿ES ALÉRGICA/O A ANESTÉSICOS LOCALES? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ alergiaAnestesicoRadio: "SI" })} active={
                                this.state.alergiaAnestesicoRadio === "SI"
                            }>SI</Button>
                            <Button outline color="danger" onClick={() => this.setState({ alergiaAnestesicoRadio: "NO" })} active={
                                this.state.alergiaAnestesicoRadio === "NO"
                            }>NO</Button>
                        </ButtonGroup>
                    </Col>
                    {this.state.alergiaAnestesicoRadio === "SI" &&
                        <Col>
                            <Label style={{ marginRight: "2%" }}>¿CUAL?</Label>
                            <Input type="text" onChange={(e) => {
                                this.setState({ alergiaAnestesico: e.target.value })
                            }} placeholder="Escribe aqui"></Input>
                        </Col>
                    }
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿ES ALÉRGICA/O A MEDICAMENTOS? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ alergiaMedicamentoRadio: "SI" })} active={
                                this.state.alergiaMedicamentoRadio === "SI"
                            }>SI</Button>
                            <Button outline color="danger" onClick={() => this.setState({ alergiaMedicamentoRadio: "NO" })} active={
                                this.state.alergiaMedicamentoRadio === "NO"
                            }>NO</Button>
                        </ButtonGroup>
                    </Col>
                    {this.state.alergiaMedicamentoRadio === "SI" &&
                        <Col>
                            <Label style={{ marginRight: "2%" }}>¿CUAL?</Label>
                            <Input type="text" onChange={(e) => {
                                this.setState({ alergiaMedicamento: e.target.value })
                            }} placeholder="Escribe aqui"></Input>
                        </Col>
                    }
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿ES ALÉRGICA/O A ALGUN ALIMENTO? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ alergiaAlimentoRadio: "SI" })} active={
                                this.state.alergiaAlimentoRadio === "SI"
                            }>SI</Button>
                            <Button outline color="danger" onClick={() => this.setState({ alergiaAlimentoRadio: "NO" })} active={
                                this.state.alergiaAlimentoRadio === "NO"
                            }>NO</Button>
                        </ButtonGroup>
                    </Col>
                    {this.state.alergiaAlimentoRadio === "SI" &&
                        <Col>
                            <Label style={{ marginRight: "2%" }}>¿CUAL?</Label>
                            <Input type="text" onChange={(e) => {
                                this.setState({ alergiaAlimento: e.target.value })
                            }} placeholder="Escribe aqui"></Input>
                        </Col>
                    }
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿PADECE MIASTENIA GRAVIS, BLOQUEO CARDÍACO COMPLETO, ESQUIZOFRENIA, HEMOFILIA O ESTÁ TOMANDO
ANTICOAGULANTES? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ padeceAlgoRadio: "SI" })} active={
                                this.state.padeceAlgoRadio === "SI"
                            }>SI</Button>
                            <Button outline color="danger" onClick={() => this.setState({ padeceAlgoRadio: "NO" })} active={
                                this.state.padeceAlgoRadio === "NO"
                            }>NO</Button>
                        </ButtonGroup>
                    </Col>
                </Row>



                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>Alguien de su familia (padre, madre, hijos, hermanos) padece: </Label>
                        <FormControl>
                            <Select
                                style={{ width: "100%" }}
                                multiple
                                value={this.state.enfermedadesFamiliar}
                                onChange={this.handleChangeEnfermedadFamiliar}

                                input={<Input></Input>}
                                renderValue={(selected) => (
                                    <div>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value.nombre} size="small" />
                                        ))}
                                    </div>
                                )}
                            >

                                {this.state.enfermedades.map((enfermedad) => (
                                    <MenuItem key={enfermedad.id} value={enfermedad}>
                                        {enfermedad.nombre}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>Usted padece alguna enfermedad cronica: </Label>
                        <FormControl>
                            <Select
                                style={{ width: "100%" }}
                                multiple
                                value={this.state.enfermedadesPropias}
                                onChange={this.handleChangeEnfermedadPropia}

                                input={<Input></Input>}
                                renderValue={(selected) => (
                                    <div>
                                        {selected.map((value) => (
                                            <Chip key={value} label={value.nombre} size="small" />
                                        ))}
                                    </div>
                                )}
                            >

                                {this.state.enfermedades.map((enfermedad) => (
                                    <MenuItem key={enfermedad.id} value={enfermedad}>
                                        {enfermedad.nombre}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>


                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Se le han realizado procedimientos quirúrgicos? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ intervencionRadio: "SI" })} active={
                                this.state.intervencionRadio === "SI"
                            }>SI</Button>
                            <Button outline color="danger" onClick={() => this.setState({ intervencionRadio: "NO", cirugiasPropias: [] })} active={
                                this.state.intervencionRadio === "NO"
                            }>NO</Button>
                        </ButtonGroup>
                    </Col>
                    {this.state.intervencionRadio === "SI" &&
                        <Col>
                            <FormControl>
                                <Select
                                    style={{ width: "100%" }}
                                    multiple
                                    value={this.state.cirugiasPropias}
                                    onChange={this.handleChangeCirugiaPropia}

                                    input={<Input></Input>}
                                    renderValue={(selected) => (
                                        <div>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value.detalle} size="small" />
                                            ))}
                                        </div>
                                    )}
                                >

                                    {this.state.cirugias.map((cirugia) => (
                                        <MenuItem key={cirugia.id} value={cirugia}>
                                            {cirugia.detalle}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Col>
                    }
                </Row>

                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿TIENE ALGUNA PLACA METALICA / MATERIAL DE OSTEOSINTESIS?</Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ tienePlaca: "SI" })} active={
                                this.state.tienePlaca === "SI"
                            }>SI</Button>
                            <Button outline color="danger" onClick={() => this.setState({ tienePlaca: "NO" })} active={
                                this.state.tienePlaca === "NO"
                            }>NO</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Ha recibido transfusiones sanguíneas? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ transfusionRadio: "SI" })} active={
                                this.state.transfusionRadio === "SI"
                            }>SI</Button>
                            <Button outline color="danger" onClick={() => this.setState({ transfusionRadio: "NO" })} active={
                                this.state.transfusionRadio === "NO"
                            }>NO</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                            <div style={{ margin: "auto" }}>
                                <Button onClick={this.handleClick} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>Registrar Ficha</Button>
                            </div>
                        </Row>

            </Container>
        )
    }

    handleChangeEnfermedadFamiliar = (e) => {

        this.setState({
            enfermedadesFamiliar: e.target.value
        })

    }

    handleChangeEnfermedadPropia = (e) => {

        this.setState({
            enfermedadesPropias: e.target.value
        })

    }

    handleChangeCirugiaPropia = (e) => {

        this.setState({
            cirugiasPropias: e.target.value
        })

    }

    handleClick = async () => {
        const data ={
            ficha: {
                "padeceAlgo": this.state.padeceAlgoRadio,
                "alergiaAnestesico": this.state.alergiaAnestesico,
                "alergiaMedicamento": this.state.alergiaMedicamento,
                "alergiaAlimento": this.state.alergiaAlimento,
                "transfusion": this.state.transfusionRadio,
                "enfermedadesFamiliar": this.state.enfermedadesFamiliar,
                "enfermedades": this.state.enfermedadesPropias,
                "intervenciones": this.state.cirugiasPropias,
                "tienePlaca":this.state.tienePlaca
            },
            paciente:{
                "id": JSON.parse(localStorage.getItem("usuario")).id
            }
         }

        const responseCreateExpediente = await fetch(direccionIP + "expediente/registrar", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(data),
        }).then(resp => resp);
        
        
        if(responseCreateExpediente.status===200){
            swal({
                title: "¡EXITO!",
                text: "Los antecedentes clinicos se registraron con éxito",
                icon: "success",
              });
              this.props.history.replace("/")         
        }else{
            swal({
                title: "¡ERROR!",
                text: "Ocurrio un error",
                icon: "error",
              });
        }
    }


}
