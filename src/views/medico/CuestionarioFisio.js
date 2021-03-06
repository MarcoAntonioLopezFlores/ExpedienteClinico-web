import React, { Component } from 'react'
import MenuExpediente from '../../components/MenuExpediente'
import { Input, Row, Col, Label, Table, Button } from 'reactstrap'
import { Slider } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import swal from 'sweetalert';
import direccionIP from '../../util/informacion'
import ListIcon from '@material-ui/icons/List';
export default class CuestionarioFisio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: 50,
            regionPrincipal: "",
            espamo: "",
            escalaDaniels: "0",
            raquisFlexionIzq: "",
            raquisFlexionDer: "",
            raquisExtensionIzq: "",
            raquisExtensionDer: "",
            raquisInclinacionIzq: "",
            raquisInclinacionDer: "",
            raquisRotacionIzq: "",
            raquisRotacionDer: "",
            raquisDorsoFlexionIzq: "",
            raquisDorsoFlexionDer: "",
            raquisDorsoExtensionIzq: "",
            raquisDorsoExtensionDer: "",
            raquisDorsoInclinacionIzq: "",
            raquisDorsoInclinacionDer: "",
            raquisDorsoRotacionIzq: "",
            raquisDorsoRotacionDer: "",
            hombroFlexionIzq: "",
            hombroFlexionDer: "",

            hombroExtensionIzq: "",
            hombroExtensionDer: "",

            hombroAbduccionIzq: "",
            hombroAbduccionDer: "",
            hombroAduccionIzq: "",
            hombroAduccionDer: "",

            hombroRotacionIntDer: "",
            hombroRotacionIntIzq: "",
            hombroRotacionExtDer: "",
            hombroRotacionExtIzq: "",

            caderaFlexionIzq: "",
            caderaFlexionDer: "",

            caderaExtensionIzq: "",
            caderaExtensionDer: "",

            caderaAbduccionIzq: "",
            caderaAbduccionDer: "",
            caderaAduccionIzq: "",
            caderaAduccionDer: "",

            caderaRotacionIntDer: "",
            caderaRotacionIntIzq: "",
            caderaRotacionExtDer: "",
            caderaRotacionExtIzq: "",
            rodillaFlexionIzq: "",
            rodillaFlexionDer: "",
            rodillaExtensionIzq: "",
            rodillaExtensionDer: "",
            codoFlexionIzq: "",
            codoFlexionDer: "",
            codoExtensionIzq: "",
            codoExtensionDer: "",
            mu??ecaSupinacionIzq: "",
            mu??ecaSupinacionDer: "",
            mu??ecaPronacionIzq: "",
            mu??ecaPronacionDer: "",
            mu??ecaFlexionIzq: "",
            mu??ecaFlexionDer: "",
            mu??ecaExtensionIzq: "",
            mu??ecaExtensionDer: "",
            mu??ecaDesviacionRadialIzq: "",
            mu??ecaDesviacionRadialDer: "",
            mu??ecaDesviacionCubIzq: "",
            mu??ecaDesviacionCubDer: "",
            tobilloInversionIzq: "",
            tobilloInversionDer: "",
            tobilloEversionIzq: "",
            tobilloEversionDer: "",
            tobilloFlexionPlantarIzq: "",
            tobilloFlexionPlantarDer: "",
            tobilloFlexionDorsalIzq: "",
            tobilloFlexionDorsalDer: "",
            marchaLibre: "",
            marchaAntialgica: "",
            claudicante: "",
            conAyuda: "",
            espastica: "",
            ataxica: "",
            textButton:"Registrar Cuestionario"
        }
    }
    handleChangeRadio = (event) => {
        this.setState({
            escalaDaniels: event.target.value
        })

    }
    listar = () => {
        this.props.history.goBack()

    }
    render() {
        return (
            <MenuExpediente history={this.props.history}>
                <Row style={{ justifyContent: "flex-end", marginRight: 20 }}>
                    <Button onClick={this.listar} style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary"><ListIcon />Ver Cuestionarios</Button>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <Input type="text" onChange={(e) => {
                        this.setState({
                            regionPrincipal: e.target.value
                        })
                    }} value={this.state.regionPrincipal} placeholder=" REGI??N PRINCIPAL E IRRADIACI??N DEL DOLOR"></Input>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Label>ESCALA VISUAL PARA MEDICI??N DE DOLOR: </Label>
                </Row>
                <Row style={{ marginTop: "3%", display: "flex", flex: 1 }}>

                    <Col style={{ backgroundColor: "blue", flex: 0.4 }}>
                        <Label style={{ fontWeight: "bold" }}>LEVE</Label>
                    </Col>
                    <Col style={{ backgroundColor: "orange", flex: 0.63 }}>
                        <Label style={{ fontWeight: "bold" }}>MODERADO</Label>
                    </Col>
                    <Col style={{ backgroundColor: "red", flex: 0.27 }}>
                        <Label style={{ fontWeight: "bold" }}>INTENSO</Label>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>

                        <Slider

                            style={{ color: this.state.value <= 30 ? "blue" : this.state.value <= 80 ? "orange" : "red" }}
                            valueLabelDisplay="auto"
                            value={this.state.value}
                            onChange={this.handleChange}
                            aria-labelledby="continuous-slider"
                        />
                    </Col>
                </Row>
                <Row>
                    <Input onChange={(e) => {
                        this.setState({
                            espamo: e.target.value
                        })
                    }} value={this.state.espamo} type="text" placeholder="ESPAMO O CONTRACTURA MUSCULAR"></Input>
                </Row>
                <Row>
                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th colSpan="2" style={{ textAlign: "center" }}>ESCALA DE DANIELS PARA LA VALORACI??N DE LA FUERZA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">0. Ausencia de contracci??n</th>
                                <td align="center">
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.escalaDaniels === "0"}
                                        onChange={this.handleChangeRadio}
                                        value="0"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '0' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1. Contracci??n sin movimientos</th>
                                <td align="center">
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.escalaDaniels === "1"}
                                        onChange={this.handleChangeRadio}
                                        value="1"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '1' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2. Movimiento que no vence la gravedad</th>
                                <td align="center">
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.escalaDaniels === "2"}
                                        onChange={this.handleChangeRadio}
                                        value="2"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '2' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3. Movimiento completo que vence la gravedad</th>
                                <td align="center">
                                    <Radio
                                        style={{ color: "brown" }}
                                        checked={this.state.escalaDaniels === "3"}
                                        onChange={this.handleChangeRadio}
                                        value="3"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': '3' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4. Movimiento con resistencia parcial</th>
                                <td align="center"><Radio
                                    style={{ color: "brown" }}
                                    checked={this.state.escalaDaniels === "4"}
                                    onChange={this.handleChangeRadio}
                                    value="4"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': '4' }}
                                /></td>
                            </tr>
                            <tr>
                                <th scope="row">5. Movimiento con resistencia m??xima</th>
                                <td align="center"><Radio
                                    style={{ color: "brown" }}
                                    checked={this.state.escalaDaniels === "5"}
                                    onChange={this.handleChangeRadio}
                                    value="5"
                                    name="radio-button-demo"
                                    inputProps={{ 'aria-label': '5' }}
                                /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Label>Goniometr??a (grado de movilidad)</Label>
                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th style={{ textAlign: "center" }}>Izquierda</th>
                                <th style={{ textAlign: "center", fontWeight: "bold" }}>Raquis cervical</th>
                                <th style={{ textAlign: "center" }}>Derecha</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisFlexionIzq: e.target.value
                                            })
                                        }} value={this.state.raquisFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisFlexionDer: e.target.value
                                            })
                                        }} value={this.state.raquisFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisExtensionIzq: e.target.value
                                            })
                                        }} value={this.state.raquisExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45??</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisExtensionDer: e.target.value
                                            })
                                        }} value={this.state.raquisExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisInclinacionIzq: e.target.value
                                            })
                                        }} value={this.state.raquisInclinacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45??</Label>
                                    </Row>
                                </th>
                                <td align="center">Inclinaci??n lateral</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisInclinacionDer: e.target.value
                                            })
                                        }} value={this.state.raquisInclinacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisRotacionIzq: e.target.value
                                            })
                                        }} value={this.state.raquisRotacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/60??</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotaci??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisRotacionDer: e.target.value
                                            })
                                        }} value={this.state.raquisRotacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/60??</Label>
                                    </Row>
                                </th>
                            </tr>


                            <tr style={{ backgroundColor: "#C9D468" }}>
                                <th scope="row">

                                </th>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>Raquis dorso lumbar</td>
                                <th scope="row">

                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisDorsoFlexionIzq: e.target.value
                                            })
                                        }} value={this.state.raquisDorsoFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/80??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisDorsoFlexionDer: e.target.value
                                            })
                                        }} value={this.state.raquisDorsoFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/80??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisDorsoExtensionIzq: e.target.value
                                            })
                                        }} value={this.state.raquisDorsoExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisDorsoExtensionDer: e.target.value
                                            })
                                        }} value={this.state.raquisDorsoExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisDorsoInclinacionIzq: e.target.value
                                            })
                                        }} value={this.state.raquisDorsoInclinacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/35??</Label>
                                    </Row>
                                </th>
                                <td align="center">Inclinaci??n lateral</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisDorsoInclinacionDer: e.target.value
                                            })
                                        }} value={this.state.raquisDorsoInclinacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/35??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisDorsoRotacionIzq: e.target.value
                                            })
                                        }} value={this.state.raquisDorsoRotacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45??</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotaci??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                raquisDorsoRotacionDer: e.target.value
                                            })
                                        }} value={this.state.raquisDorsoRotacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45??</Label>
                                    </Row>
                                </th>
                            </tr>



                            <tr style={{ backgroundColor: "#C9D468" }}>
                                <th scope="row">

                                </th>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>Hombro</td>
                                <th scope="row">

                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroFlexionIzq: e.target.value
                                            })
                                        }} value={this.state.hombroFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/180??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroFlexionDer: e.target.value
                                            })
                                        }} value={this.state.hombroFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/180??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroExtensionIzq: e.target.value
                                            })
                                        }} value={this.state.hombroExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/40??</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroExtensionDer: e.target.value
                                            })
                                        }} value={this.state.hombroExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/40??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroAbduccionIzq: e.target.value
                                            })
                                        }} value={this.state.hombroAbduccionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/160??</Label>
                                    </Row>
                                </th>
                                <td align="center">Abducci??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroAbduccionDer: e.target.value
                                            })
                                        }} value={this.state.hombroAbduccionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/160??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroAduccionIzq: e.target.value
                                            })
                                        }} value={this.state.hombroAduccionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                                <td align="center">Aducci??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroAduccionDer: e.target.value
                                            })
                                        }} value={this.state.hombroAduccionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroRotacionExtIzq: e.target.value
                                            })
                                        }} value={this.state.hombroRotacionExtIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70??</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotaci??n Externa</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroRotacionExtDer: e.target.value
                                            })
                                        }} value={this.state.hombroRotacionExtDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroRotacionIntIzq: e.target.value
                                            })
                                        }} value={this.state.hombroRotacionIntIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70??</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotaci??n Interna</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                hombroRotacionIntDer: e.target.value
                                            })
                                        }} value={this.state.hombroRotacionIntDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70??</Label>
                                    </Row>
                                </th>
                            </tr>

                            <tr style={{ backgroundColor: "#C9D468" }}>
                                <th scope="row">

                                </th>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>Codo</td>
                                <th scope="row">

                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                codoFlexionIzq: e.target.value
                                            })
                                        }} value={this.state.codoFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/150??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                codoFlexionDer: e.target.value
                                            })
                                        }} value={this.state.codoFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/150??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                codoExtensionIzq: e.target.value
                                            })
                                        }} value={this.state.codoExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/10??</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                codoExtensionDer: e.target.value
                                            })
                                        }} value={this.state.codoExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/10??</Label>
                                    </Row>
                                </th>
                            </tr>

                            <tr style={{ backgroundColor: "#C9D468" }}>
                                <th scope="row">

                                </th>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>Mu??eca</td>
                                <th scope="row">

                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaSupinacionIzq: e.target.value
                                            })
                                        }} value={this.state.mu??ecaSupinacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/90??</Label>
                                    </Row>
                                </th>
                                <td align="center">Supinaci??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaSupinacionDer: e.target.value
                                            })
                                        }} value={this.state.mu??ecaSupinacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/90??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    mu??ecaPronacionIzq: e.target.value
                                                })
                                            }} value={this.state.mu??ecaPronacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/90??</Label>
                                    </Row>
                                </th>
                                <td align="center">Pronaci??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaPronacionDer: e.target.value
                                            })
                                        }} value={this.state.mu??ecaPronacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/90??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    mu??ecaFlexionIzq: e.target.value
                                                })
                                            }} value={this.state.mu??ecaFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/50??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    mu??ecaFlexionDer: e.target.value
                                                })
                                            }} value={this.state.mu??ecaFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/50??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaExtensionIzq: e.target.value
                                            })
                                        }} value={this.state.mu??ecaExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/35??</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaExtensionDer: e.target.value
                                            })
                                        }} value={this.state.mu??ecaExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/35??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaDesviacionRadialIzq: e.target.value
                                            })
                                        }} value={this.state.mu??ecaDesviacionRadialIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/25??</Label>
                                    </Row>
                                </th>
                                <td align="center">Desviaci??n radial</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaDesviacionRadialDer: e.target.value
                                            })
                                        }} value={this.state.mu??ecaDesviacionRadialDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/25??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaDesviacionCubIzq: e.target.value
                                            })
                                        }} value={this.state.mu??ecaDesviacionCubIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                                <td align="center">Desviaci??n cubital</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                mu??ecaDesviacionCubDer: e.target.value
                                            })
                                        }} value={this.state.mu??ecaDesviacionCubDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                            </tr>

















                            <tr style={{ backgroundColor: "#C9D468" }}>
                                <th scope="row">

                                </th>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>Cadera</td>
                                <th scope="row">

                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaFlexionIzq: e.target.value
                                                })
                                            }} value={this.state.caderaFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/180??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaFlexionDer: e.target.value
                                                })
                                            }} value={this.state.caderaFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/180??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaExtensionIzq: e.target.value
                                                })
                                            }} value={this.state.caderaExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/40??</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaExtensionDer: e.target.value
                                                })
                                            }} value={this.state.caderaExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/40??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                caderaAbduccionIzq: e.target.value
                                            })
                                        }} value={this.state.caderaAbduccionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/160??</Label>
                                    </Row>
                                </th>
                                <td align="center">Abducci??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaAbduccionDer: e.target.value
                                                })
                                            }} value={this.state.caderaAbduccionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/160??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaAduccionIzq: e.target.value
                                                })
                                            }} value={this.state.caderaAduccionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                                <td align="center">Aducci??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaAduccionDer: e.target.value
                                                })
                                            }} value={this.state.caderaAduccionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaRotacionExtIzq: e.target.value
                                                })
                                            }} value={this.state.caderaRotacionExtIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70??</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotaci??n Externa</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaRotacionExtDer: e.target.value
                                                })
                                            }} value={this.state.caderaRotacionExtDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaRotacionIntIzq: e.target.value
                                                })
                                            }} value={this.state.caderaRotacionIntIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70??</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotaci??n Interna</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    caderaRotacionIntDer: e.target.value
                                                })
                                            }} value={this.state.caderaRotacionIntDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70??</Label>
                                    </Row>
                                </th>
                            </tr>









                            <tr style={{ backgroundColor: "#C9D468" }}>
                                <th scope="row">

                                </th>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>Rodilla</td>
                                <th scope="row">

                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    rodillaFlexionIzq: e.target.value
                                                })
                                            }} value={this.state.rodillaFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/150??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                rodillaFlexionDer: e.target.value
                                            })
                                        }} value={this.state.rodillaFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/150??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                rodillaExtensionIzq: e.target.value
                                            })
                                        }} value={this.state.rodillaExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/10??</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    rodillaExtensionDer: e.target.value
                                                })
                                            }} value={this.state.rodillaExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/10??</Label>
                                    </Row>
                                </th>
                            </tr>








                            <tr style={{ backgroundColor: "#C9D468" }}>
                                <th scope="row">

                                </th>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>Tobillo</td>
                                <th scope="row">

                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                tobilloFlexionPlantarIzq: e.target.value
                                            })
                                        }} value={this.state.tobilloFlexionPlantarIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/50??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n plantar</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    tobilloFlexionPlantarDer: e.target.value
                                                })
                                            }} value={this.state.tobilloFlexionPlantarDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/50??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    tobilloFlexionDorsalIzq: e.target.value
                                                })
                                            }} value={this.state.tobilloFlexionDorsalIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexi??n dorsal</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    tobilloFlexionDorsalDer: e.target.value
                                                })
                                            }} value={this.state.tobilloFlexionDorsalDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    tobilloInversionIzq: e.target.value
                                                })
                                            }} value={this.state.tobilloInversionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/60??</Label>
                                    </Row>
                                </th>
                                <td align="center">Inversi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    tobilloInversionDer: e.target.value
                                                })
                                            }} value={this.state.tobilloInversionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/60??</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                            onChange={(e) => {
                                                this.setState({
                                                    tobilloEversionIzq: e.target.value
                                                })
                                            }} value={this.state.tobilloEversionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                                <td align="center">Eversi??n</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input onChange={(e) => {
                                            this.setState({
                                                tobilloEversionDer: e.target.value
                                            })
                                        }} value={this.state.tobilloEversionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30??</Label>
                                    </Row>
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <Label>Evaluaci??n de la marcha</Label>
                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th style={{ textAlign: "center" }}>Libre</th>
                                <th style={{ textAlign: "center" }}>Anti??lgica</th>
                                <th style={{ textAlign: "center" }}>Claudicante</th>
                                <th style={{ textAlign: "center" }}>Con ayuda</th>
                                <th style={{ textAlign: "center" }}>Esp??stica</th>
                                <th style={{ textAlign: "center" }}>At??xica</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th><Input onChange={(e) => {
                                    this.setState({
                                        marchaLibre: e.target.value
                                    })
                                }} value={this.state.marchaLibre} type="textarea" ></Input></th>
                                <th><Input onChange={(e) => {
                                    this.setState({
                                        marchaAntialgica: e.target.value
                                    })
                                }} value={this.state.marchaAntialgica} type="textarea" ></Input></th>
                                <th><Input onChange={(e) => {
                                    this.setState({
                                        claudicante: e.target.value
                                    })
                                }} value={this.state.claudicante} type="textarea" ></Input></th>
                                <th><Input onChange={(e) => {
                                    this.setState({
                                        conAyuda: e.target.value
                                    })
                                }} value={this.state.conAyuda} type="textarea"  ></Input></th>
                                <th><Input onChange={(e) => {
                                    this.setState({
                                        espastica: e.target.value
                                    })
                                }} value={this.state.espastica} type="textarea" ></Input></th>
                                <th><Input onChange={(e) => {
                                    this.setState({
                                        ataxica: e.target.value
                                    })
                                }} value={this.state.ataxica} type="textarea"  ></Input></th>
                            </tr>


                        </tbody>
                    </Table>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <div style={{ margin: "auto" }}>
                            <Button onClick={this.registrarCuestionarioFisio} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>{this.state.textButton}</Button>
                    </div>
                </Row>
            </MenuExpediente>
        )
    }
    handleChange = (event, newValue) => {
        this.setState({ value: newValue });

    };

    registrarCuestionarioFisio = async () => {
        this.setState({
            textButton:"Registrando..."
        })
        const data = {
            regionPrincipal: this.state.regionPrincipal,
            espamo: this.state.espamo,
            escalaDaniels: this.state.escalaDaniels,
            raquis: {
                raquisFlexionIzq: this.state.raquisFlexionIzq,
                raquisFlexionDer: this.state.raquisFlexionDer,
                raquisExtensionIzq: this.state.raquisExtensionIzq,
                raquisExtensionDer: this.state.raquisExtensionDer,
                raquisInclinacionIzq: this.state.raquisInclinacionIzq,
                raquisInclinacionDer: this.state.raquisInclinacionDer,
                raquisRotacionIzq: this.state.raquisRotacionIzq,
                raquisRotacionDer: this.state.raquisRotacionDer,
            },
            raquisDorso: {
                raquisDorsoFlexionIzq: this.state.raquisDorsoFlexionIzq,
                raquisDorsoFlexionDer: this.state.raquisDorsoFlexionDer,
                raquisDorsoExtensionIzq: this.state.raquisDorsoExtensionIzq,
                raquisDorsoExtensionDer: this.state.raquisDorsoExtensionDer,
                raquisDorsoInclinacionIzq: this.state.raquisDorsoInclinacionIzq,
                raquisDorsoInclinacionDer: this.state.raquisDorsoInclinacionDer,
                raquisDorsoRotacionIzq: this.state.raquisDorsoRotacionIzq,
                raquisDorsoRotacionDer: this.state.raquisDorsoRotacionDer,

            },
            hombro: {
                hombroFlexionIzq: this.state.hombroFlexionIzq,
                hombroFlexionDer: this.state.hombroFlexionDer,

                hombroExtensionIzq: this.state.hombroExtensionIzq,
                hombroExtensionDer: this.state.hombroExtensionDer,

                hombroAbduccionIzq: this.state.hombroAbduccionIzq,
                hombroAbduccionDer: this.state.hombroAduccionDer,
                hombroAduccionIzq: this.state.hombroAduccionIzq,
                hombroAduccionDer: this.state.hombroAduccionDer,

                hombroRotacionIntDer: this.state.hombroRotacionIntDer,
                hombroRotacionIntIzq: this.state.hombroRotacionIntIzq,
                hombroRotacionExtDer: this.state.hombroRotacionExtDer,
                hombroRotacionExtIzq: this.state.hombroRotacionExtIzq,

            },
            cadera: {
                caderaFlexionIzq: this.state.caderaFlexionIzq,
                caderaFlexionDer: this.state.caderaFlexionDer,

                caderaExtensionIzq: this.state.caderaExtensionIzq,
                caderaExtensionDer: this.state.caderaExtensionDer,

                caderaAbduccionIzq: this.state.caderaAbduccionIzq,
                caderaAbduccionDer: this.state.caderaAduccionDer,
                caderaAduccionIzq: this.state.caderaAduccionIzq,
                caderaAduccionDer: this.state.caderaAduccionDer,

                caderaRotacionIntDer: this.state.caderaRotacionIntDer,
                caderaRotacionIntIzq: this.state.caderaRotacionIntIzq,
                caderaRotacionExtDer: this.state.caderaRotacionExtDer,
                caderaRotacionExtIzq: this.state.caderaRotacionExtIzq,
            },

            rodilla: {

                rodillaFlexionIzq: this.state.rodillaFlexionIzq,
                rodillaFlexionDer: this.state.rodillaFlexionDer,
                rodillaExtensionIzq: this.state.rodillaExtensionIzq,
                rodillaExtensionDer: this.state.rodillaExtensionDer,
            },
            codo: {
                codoFlexionIzq: this.state.codoFlexionIzq,
                codoFlexionDer: this.state.codoFlexionDer,
                codoExtensionIzq: this.state.codoExtensionIzq,
                codoExtensionDer: this.state.codoExtensionDer,
            },

            mu??eca: {
                mu??ecaSupinacionIzq: this.state.mu??ecaSupinacionIzq,
                mu??ecaSupinacionDer: this.state.mu??ecaSupinacionDer,
                mu??ecaPronacionIzq: this.state.mu??ecaPronacionIzq,
                mu??ecaPronacionDer: this.state.mu??ecaPronacionDer,
                mu??ecaFlexionIzq: this.state.mu??ecaFlexionIzq,
                mu??ecaFlexionDer: this.state.mu??ecaFlexionDer,
                mu??ecaExtensionIzq: this.state.mu??ecaExtensionIzq,
                mu??ecaExtensionDer: this.state.mu??ecaExtensionDer,
                mu??ecaDesviacionRadialIzq: this.state.mu??ecaDesviacionRadialIzq,
                mu??ecaDesviacionRadialDer: this.state.mu??ecaDesviacionRadialDer,
                mu??ecaDesviacionCubIzq: this.state.mu??ecaDesviacionCubIzq,
                mu??ecaDesviacionCubDer: this.state.mu??ecaDesviacionCubDer,
            },

            tobillo: {
                tobilloInversionIzq: this.state.tobilloInversionIzq,
                tobilloInversionDer: this.state.tobilloInversionDer,
                tobilloEversionIzq: this.state.tobilloEversionIzq,
                tobilloEversionDer: this.state.tobilloEversionDer,
                tobilloFlexionPlantarIzq: this.state.tobilloFlexionPlantarIzq,
                tobilloFlexionPlantarDer: this.state.tobilloFlexionPlantarDer,
                tobilloFlexionDorsalIzq: this.state.tobilloFlexionDorsalIzq,
                tobilloFlexionDorsalDer: this.state.tobilloFlexionDorsalDer,

            },

            marchaLibre: this.state.marchaLibre,
            marchaAntialgica: this.state.marchaAntialgica,
            claudicante: this.state.claudicante,
            conAyuda: this.state.conAyuda,
            espastica: this.state.espastica,
            ataxica: this.state.ataxica,
            nivelDolor: this.state.value,
            paciente: {
                id: localStorage.getItem('idForExpediente')
            },
            doctor: {
                id: JSON.parse(localStorage.getItem('usuario')).id
            }
        }
        

        const response = await fetch(direccionIP + "fisio/registrar", {
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
                title: "??EXITO!",
                text: "El cuestionario de fisioterap??a se registr?? con ??xito",
                icon: "success",
            }).then(
                this.listar()
            );
        } else {
            swal({
                title: "??ERROR!",
                text: "Ocurrio un error",
                icon: "error",
            });
        }
        this.setState({
            textButton:"Registrar Cuestionario"
        })
    }
}
