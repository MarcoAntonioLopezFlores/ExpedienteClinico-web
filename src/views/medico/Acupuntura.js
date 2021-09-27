import React, { Component } from 'react'
import MenuExpediente from '../../components/MenuExpediente'
import lengua from '../../assets/img/lengua.jpg'
import { Row, Col, Table, Input, Button } from 'reactstrap'
import { Checkbox, Typography, Radio } from '@material-ui/core'
import swal from 'sweetalert'
import direccionIP from '../../util/informacion'
import ListIcon from '@material-ui/icons/List';

export default class Acupuntura extends Component {
    constructor(props) {
        super(props)
        this.state = {
            zonas: [
                { id: 1, nombre: "Riñon / Intestino" },
                { id: 2, nombre: "Estomago / Bazo" },
                { id: 3, nombre: "Higado / V. Biliar Izquierdo" },
                { id: 4, nombre: "Higado / V. Biliar Derecho" },
                { id: 5, nombre: "Pulmones" },
                { id: 6, nombre: "Corazón" }
            ],
            nombresZona: [],
            observaciones: "",
            CR: "",
            ID: "",
            PL: "",
            IG: "",
            HG: "",
            VB: "",
            BP: "",
            ES: "",
            RÑ: "",
            VJ: "",
            PC: "",
            SJ: "",
            densidad: "",
            grosor: "",
            velocidad: "",
            textura: "",
            longitud: "",
            impresionPulso: "",
            tratamientoGeneral: "",
            detalle1:"",
            detalle2:"",
            detalle3:"",
            detalle4:"",
            detalle5:"",
            detalle6:"",
            textButton:"Registrar Cuestionario"

        }
    }
    handleChange = (event) => {
        const index = this.state.nombresZona.indexOf(event.target.value);

        if (index < 0) {
            this.state.nombresZona.push(event.target.value);
        } else {
            this.state.nombresZona.splice(index, 1);
        }

        this.setState({
            nombresZona: this.state.nombresZona
        })
    }
    handleChangeRadioDensidad = (event) => {
        this.setState({
            densidad: event.target.value
        })
    }
    handleChangeRadioVelocidad = (event) => {
        this.setState({
            velocidad: event.target.value
        })
    }
    handleChangeRadioGrosor = (event) => {
        this.setState({
            grosor: event.target.value
        })
    }
    handleChangeRadioTextura = (event) => {
        this.setState({
            textura: event.target.value
        })
    }
    handleChangeRadioLongitud = (event) => {
        this.setState({
            longitud: event.target.value
        })
    }
    listar = () => {
        this.props.history.goBack()

    }
    render() {
        return (
            <MenuExpediente>
                <Row style={{ justifyContent: "flex-end", marginRight: 20, marginBottom: 5 }}>
                    <Button onClick={this.listar} style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary"><ListIcon />Ver Cuestionarios</Button>
                </Row>
                <Row>
                    <Col md>
                        <Table responsive bordered>
                            <thead style={{ backgroundColor: "#C9D468" }}>
                                <tr>
                                    <th colSpan="2" style={{ textAlign: "center" }}>DIAGNOSTICO POR LENGUA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.zonas.map((zona) =>
                                    <tr key={zona.id}>
                                        <th style={{ padding: 20 }}>
                                            <Row >{zona.nombre}</Row>
                                            <Row>
                                                {this.state.nombresZona.includes(zona.nombre)&&<Input type="textarea" onChange={(e) => {
                                                    this.setState({
                                                        ["detalle"+zona.id]: e.target.value
                                                    })
                                                    
                                                }} value={this.state["detalle"+zona.id]} placeholder="Ingresa mas detalles">
                                                </Input>}
                                            </Row>
                                        </th>
                                        <td align="center">
                                            <Checkbox
                                                value={zona.nombre}
                                                checked={this.state.nombresZona.includes(zona.nombre)}
                                                onChange={this.handleChange}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>

                    </Col>
                    <Col md>
                        <img style={{ marginLeft: "15%" }} height={"60%"} width={"70%"} src={lengua} alt="lengua" />
                        <Row style={{ justifyContent: "center" }}>
                            <Typography component="h5" variant="h6">OBSERVACIÓN GENERAL</Typography>
                        </Row>
                        <Row style={{ margin: 5 }}>
                            <Input type="textarea" onChange={(e) => {
                                this.setState({
                                    observaciones: e.target.value
                                })
                            }} value={this.state.observaciones}>
                            </Input>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Typography>DIAGNOSTICO POR PULSO</Typography>
                    <Table responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th colSpan="4" style={{ textAlign: "center" }}>PULSO PARCIAL</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    CR:
                                        </td>
                                <td >
                                    ID:
                                        </td>
                                <td >
                                    PL:
                                        </td>
                                <td >
                                    IG:
                                        </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            CR: e.target.value
                                        })
                                    }} value={this.state.CR}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            ID: e.target.value
                                        })
                                    }} value={this.state.ID}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            PL: e.target.value
                                        })
                                    }} value={this.state.PL}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            IG: e.target.value
                                        })
                                    }} value={this.state.IG}>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    HG:
                                        </td>
                                <td >
                                    VB:
                                        </td>
                                <td >
                                    B/P:
                                        </td>
                                <td >
                                    ES:
                                        </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            HG: e.target.value
                                        })
                                    }} value={this.state.HG}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            VB: e.target.value
                                        })
                                    }} value={this.state.VB}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            BP: e.target.value
                                        })
                                    }} value={this.state.BP}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            ES: e.target.value
                                        })
                                    }} value={this.state.ES}>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    CR:
                                        </td>
                                <td >
                                    ID:
                                        </td>
                                <td >
                                    PL:
                                        </td>
                                <td >
                                    IG:
                                        </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            RÑ: e.target.value
                                        })
                                    }} value={this.state.RÑ}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            VJ: e.target.value
                                        })
                                    }} value={this.state.VJ}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            PC: e.target.value
                                        })
                                    }} value={this.state.PC}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" onChange={(e) => {
                                        this.setState({
                                            SJ: e.target.value
                                        })
                                    }} value={this.state.SJ}>
                                    </Input>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                </Row>
                <Row>
                    <Table responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th colSpan="5" style={{ textAlign: "center" }}>PULSO GLOBAL</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    DENSIDAD:
                                        </td>
                                <td >
                                    FUERTE YANG CALOR
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.densidad.includes("fuerte")}
                                        onChange={this.handleChangeRadioDensidad}
                                        value="fuerte"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                                <td >
                                    DÉBIL YIN FRIO
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.densidad.includes("debil")}
                                        onChange={this.handleChangeRadioDensidad}
                                        value="debil"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    VELOCIDAD:
                                        </td>
                                <td >
                                    Rápido
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.velocidad.includes("rapido")}
                                        onChange={this.handleChangeRadioVelocidad}
                                        value="rapido"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                                <td >
                                    Lento
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.velocidad.includes("lento")}
                                        onChange={this.handleChangeRadioVelocidad}
                                        value="lento"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    GROSOR:
                                        </td>
                                <td >
                                    Amplio / Lleno
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.grosor.includes("amplio")}
                                        onChange={this.handleChangeRadioGrosor}
                                        value="amplio"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                                <td >
                                    Frio / Vacío
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.grosor.includes("vacio")}
                                        onChange={this.handleChangeRadioGrosor}
                                        value="vacio"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    TEXTURA:
                                        </td>
                                <td >
                                    Duro
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.textura.includes("duro")}
                                        onChange={this.handleChangeRadioTextura}
                                        value="duro"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                                <td >
                                    Suave
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.textura.includes("suave")}
                                        onChange={this.handleChangeRadioTextura}
                                        value="suave"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    LONGITUD:
                                        </td>
                                <td >
                                    Largo
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.longitud.includes("largo")}
                                        onChange={this.handleChangeRadioLongitud}
                                        value="largo"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                                <td >
                                    Corto
                                        </td>
                                <td >
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.longitud.includes("corto")}
                                        onChange={this.handleChangeRadioLongitud}
                                        value="corto"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Typography component="h5" variant="h6">IMPRESIÓN DEL PULSO</Typography>
                </Row>
                <Row style={{ margin: 5 }}>
                    <Input type="textarea" onChange={(e) => {
                        this.setState({
                            impresionPulso: e.target.value
                        })
                    }} value={this.state.impresionPulso}>
                    </Input>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Typography component="h5" variant="h6">PRINCIPIO DE TRATAMIENTO</Typography>
                </Row>
                <Row style={{ margin: 5 }}>
                    <Input type="textarea" onChange={(e) => {
                        this.setState({
                            tratamientoGeneral: e.target.value
                        })
                    }} value={this.state.tratamientoGeneral}>
                    </Input>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <div style={{ margin: "auto" }}>
                <Button onClick={this.registrarAcupuntura} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>{this.state.textButton}</Button>
                    </div>
                </Row>
            </MenuExpediente>
        )
    }

    registrarAcupuntura = async () => {
        this.setState({
            textButton:"Registrando..."
        })
        const data = {
            nombresZona: this.state.nombresZona.toString(),
            observaciones: this.state.observaciones,
            cr: this.state.CR,
            ide: this.state.ID,
            pl: this.state.PL,
            ig: this.state.IG,
            hg: this.state.HG,
            vb: this.state.VB,
            bp: this.state.BP,
            es: this.state.ES,
            rñ: this.state.RÑ,
            vj: this.state.VJ,
            pc: this.state.PC,
            sj: this.state.SJ,
            densidad: this.state.densidad,
            grosor: this.state.grosor,
            velocidad: this.state.velocidad,
            textura: this.state.textura,
            longitud: this.state.longitud,
            impresionPulso: this.state.impresionPulso,
            tratamientoGeneral: this.state.tratamientoGeneral,
            detalle1:this.state.detalle1,
            detalle2:this.state.detalle2,
            detalle3:this.state.detalle3,
            detalle4:this.state.detalle4,
            detalle5:this.state.detalle5,
            detalle6:this.state.detalle6,
            paciente: {
                id: localStorage.getItem('idForExpediente')
            },
            doctor: {
                id: JSON.parse(localStorage.getItem('usuario')).id
            }
        }


        const response = await fetch(direccionIP + "acupuntura/registrar", {
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
                text: "El cuestionario de acupuntura se registró con éxito",
                icon: "success",
            }).then(
                this.listar()
            );
        } else {
            swal({
                title: "¡ERROR!",
                text: "Ocurrio un error",
                icon: "error",
            });
        }
        this.setState({
            textButton:"Registrar Cuestionario"
        })
    }
}
