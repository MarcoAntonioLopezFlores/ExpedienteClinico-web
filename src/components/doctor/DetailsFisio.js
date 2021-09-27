import React, { Component } from 'react'
import { ModalFooter, Button, ModalBody, Label, Input, Col, Row, Table } from 'reactstrap'
import Dialog from '../Dialog'
import { Slider, Radio } from '@material-ui/core'

export default class DetailsFisio extends Component {
    render() {
        return (
            <Dialog stateModal={this.props.stateModal} title={this.props.title}>
                <ModalBody style={{ margin: "2%" }}>
                <Row style={{marginTop:20}}>
                    <Label>REGIÓN PRINCIPAL E IRRADIACIÓN DEL DOLOR</Label>
                    <Input type="text"  value={this.props.cuestionario.regionPrincipal} readOnly></Input>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Label>ESCALA VISUAL PARA MEDICIÓN DE DOLOR: </Label>
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
                <Row style={{ marginTop: "9%" }}>
                    <Col>

                        <Slider
                            disabled
                            style={{ color: this.props.cuestionario.nivelDolor <= 30 ? "blue" : this.props.cuestionario.nivelDolor <= 80 ? "orange" : "red" }}
                            valueLabelDisplay="on"
                            value={this.props.cuestionario.nivelDolor}
                            aria-labelledby="continuous-slider"
                        />
                    </Col>
                </Row>


                <Row>
                    <Label>ESPAMO O CONTRACTURA MUSCULAR</Label>
                    <Input value={this.props.cuestionario.espamo} type="text" readOnly></Input>
                </Row>

                <Row>
                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th colSpan="2" style={{ textAlign: "center" }}>ESCALA DE DANIELS PARA LA VALORACIÓN DE LA FUERZA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">0. Ausencia de contracción</th>
                                <td align="center">
                                <Radio
                                style={{color:"brown"}}
        checked={this.props.cuestionario.escalaDaniels === "0"}
        
        inputProps={{ 'aria-label': '0' }}
      />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1. Contracción sin movimientos</th>
                                <td align="center">
                                <Radio
                                style={{color:"brown"}}
        checked={this.props.cuestionario.escalaDaniels === "1"}
        
        inputProps={{ 'aria-label': '1' }}
      />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2. Movimiento que no vence la gravedad</th>
                                <td align="center">
                                <Radio
                                style={{color:"brown"}}
        checked={this.props.cuestionario.escalaDaniels === "2"}
        
        inputProps={{ 'aria-label': '2' }}
      />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3. Movimiento completo que vence la gravedad</th>
                                <td align="center">
                                <Radio
                                style={{color:"brown"}}
        checked={this.props.cuestionario.escalaDaniels === "3"}
        
        inputProps={{ 'aria-label': '3' }}
      />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4. Movimiento con resistencia parcial</th>
                                <td align="center"><Radio
                                style={{color:"brown"}}
        checked={this.props.cuestionario.escalaDaniels === "4"}
        
        inputProps={{ 'aria-label': '4' }}
      /></td>
                            </tr>
                            <tr>
                                <th scope="row">5. Movimiento con resistencia máxima</th>
                                <td align="center"><Radio
                                style={{color:"brown"}}
        checked={this.props.cuestionario.escalaDaniels === "5"}
        
        
        name="radio-button-demo"
        inputProps={{ 'aria-label': '5' }}
      /></td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                
                <Row style={{ marginTop: "3%" }}>
                    <Label>Goniometría (grado de movilidad)</Label>
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
                                        <Input value={this.props.cuestionario.raquis.raquisFlexionIzq} readOnly style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquis.raquisFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquis.raquisExtensionIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45°</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquis.raquisExtensionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquis.raquisInclinacionIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45°</Label>
                                    </Row>
                                </th>
                                <td align="center">Inclinación lateral</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquis.raquisInclinacionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquis.raquisRotacionIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/60°</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotación</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquis.raquisRotacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/60°</Label>
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
                                        <Input readOnly  value={this.props.cuestionario.raquisDorso.raquisDorsoFlexionIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/80°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquisDorso.raquisDorsoFlexionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/80°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquisDorso.raquisDorsoraquisDorsoExtensionIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquisDorso.raquisDorsoExtensionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquisDorso.raquisDorsoInclinacionIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/35°</Label>
                                    </Row>
                                </th>
                                <td align="center">Inclinación lateral</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquisDorso.raquisDorsoInclinacionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/35°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquisDorso.raquisDorsoRotacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45°</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotación</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.raquisDorso.raquisDorsoRotacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/45°</Label>
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
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/180°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroFlexionDer}  style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/180°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroExtensionIzq}  style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/40°</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroExtensionDer}  style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/40°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroAbduccionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/160°</Label>
                                    </Row>
                                </th>
                                <td align="center">Abducción</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroAbduccionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/160°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroAduccionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                                <td align="center">Aducción</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroAduccionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroRotacionExtIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70°</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotación Externa</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroRotacionExtDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroRotacionIntIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70°</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotación Interna</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.hombro.hombroRotacionIntDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70°</Label>
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
                                        <Input readOnly  value={this.props.cuestionario.codo.codoFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/150°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.codo.codoFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/150°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.codo.codoExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/10°</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.codo.codoExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/10°</Label>
                                    </Row>
                                </th>
                            </tr>

                            <tr style={{ backgroundColor: "#C9D468" }}>
                                <th scope="row">

                                </th>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>Muñeca</td>
                                <th scope="row">

                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaSupinacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/90°</Label>
                                    </Row>
                                </th>
                                <td align="center">Supinación</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaSupinacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/90°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input 
                                        readOnly  value={this.props.cuestionario.muñeca.muñecaPronacionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/90°</Label>
                                    </Row>
                                </th>
                                <td align="center">Pronación</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaPronacionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/90°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input 
                                        readOnly  value={this.props.cuestionario.muñeca.muñecaFlexionIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/50°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input 
                                       readOnly  value={this.props.cuestionario.muñeca.muñecaFlexionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/50°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/35°</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/35°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaDesviacionRadialIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/25°</Label>
                                    </Row>
                                </th>
                                <td align="center">Desviación radial</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaDesviacionRadialDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/25°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaDesviacionCubIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                                <td align="center">Desviación cubital</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.muñeca.muñecaDesviacionCubDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
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
                                        readOnly  value={this.props.cuestionario.cadera.caderaFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/180°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.cadera.caderaFlexionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/180°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.cadera.caderaExtensionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/40°</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.cadera.caderaExtensionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/40°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.cadera.caderaAbduccionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/160°</Label>
                                    </Row>
                                </th>
                                <td align="center">Abducción</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.cadera.caderaAbduccionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/160°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                       readOnly  value={this.props.cuestionario.cadera.caderaAduccionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                                <td align="center">Aducción</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.cadera.caderaAduccionDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.cadera.caderaRotacionExtIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70°</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotación Externa</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.cadera.caderaRotacionExtDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.cadera.caderaRotacionIntIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70°</Label>
                                    </Row>
                                </th>
                                <td align="center">Rotación Interna</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input 
                                        readOnly  value={this.props.cuestionario.cadera.caderaRotacionIntDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/70°</Label>
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
                                        readOnly  value={this.props.cuestionario.rodilla.rodillaFlexionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/150°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.rodilla.rodillaFlexionDer}  style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/150°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.rodilla.rodillaExtensionIzq}  style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/10°</Label>
                                    </Row>
                                </th>
                                <td align="center">Extensión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input 
                                        readOnly  value={this.props.cuestionario.rodilla.rodillaExtensionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/10°</Label>
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
                                        <Input readOnly  value={this.props.cuestionario.tobillo.tobilloFlexionPlantarIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/50°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión plantar</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.tobillo.tobilloFlexionPlantarDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/50°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input 
                                        readOnly  value={this.props.cuestionario.tobillo.tobilloFlexionDorsalIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                                <td align="center">Flexión dorsal</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.tobillo.tobilloFlexionDorsalDer} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input 
                                       readOnly  value={this.props.cuestionario.tobillo.tobilloInversionIzq}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/60°</Label>
                                    </Row>
                                </th>
                                <td align="center">Inversión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input 
                                        readOnly  value={this.props.cuestionario.tobillo.tobilloInversionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/60°</Label>
                                    </Row>
                                </th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input
                                        readOnly  value={this.props.cuestionario.tobillo.tobilloEversionIzq} style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                                <td align="center">Eversión</td>
                                <th scope="row">
                                    <Row style={{ justifyContent: "center" }}>
                                        <Input readOnly  value={this.props.cuestionario.tobillo.tobilloEversionDer}style={{ width: "25%", height: "20%" }}></Input>
                                        <Label style={{ alignContent: "center" }}>/30°</Label>
                                    </Row>
                                </th>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
                <Row style={{ marginTop: 20 }}>
                    <Label>Evaluación de la marcha</Label>
                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th style={{ textAlign: "center" }}>Libre</th>
                                <th style={{ textAlign: "center" }}>Antiálgica</th>
                                <th style={{ textAlign: "center" }}>Claudicante</th>
                                <th style={{ textAlign: "center" }}>Con ayuda</th>
                                <th style={{ textAlign: "center" }}>Espástica</th>
                                <th style={{ textAlign: "center" }}>Atáxica</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <th><Input readOnly value={this.props.cuestionario.marchaLibre} type="textarea" ></Input></th>
                                <th><Input readOnly value={this.props.cuestionario.marchaAntialgica} type="textarea" ></Input></th>
                                <th><Input readOnly value={this.props.cuestionario.claudicante} type="textarea" ></Input></th>
                                <th><Input readOnly value={this.props.cuestionario.conAyuda} type="textarea"  ></Input></th>
                                <th><Input readOnly value={this.props.cuestionario.espastica} type="textarea" ></Input></th>
                                <th><Input readOnly value={this.props.cuestionario.ataxica} type="textarea"  ></Input></th>
                            </tr>


                        </tbody>
                    </Table>
                </Row>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Volver</Button>
                </ModalFooter>
            </Dialog>    
        )
    }
}
