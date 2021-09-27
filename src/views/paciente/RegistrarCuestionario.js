import React, { Component } from 'react'
import { Container, Row, Col, Label, Button, ButtonGroup, Input } from 'reactstrap'
import { Typography, Slider } from '@material-ui/core'
import swal from 'sweetalert'
import direccionIP from '../../util/informacion'
import MenuPaciente from '../../components/MenuPaciente'

export default class RegistrarCuestionario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 50,
            cSelected: [],
            otrosPadecimientos: false,
            padecimientos: "",
            motivo: "",
            recibioTerapia: "NO",
            tieneTratamiento: "NO",
            dolorUltimamente: "NO",
            frecuenciaDolor: "NO",
            duracionDolor: "NO",
            recibioTratamiento: "NO",
            tratamientoRecibido: "NO",
            mejoroTratamiento: "NO",
            medicamentoAdverso: "NO",

            afectarCalidad: "NO",
            dejarActividad: "NO",
            dejarTrabajo: "NO",
            dolorFuerteEn: "DIA",
            empeoraConActividad: "NO",
            dolorCon: "NO",
            mejoraConReposo: "NO",
            calDolor: "NADA",
            problemasDormir: "NO",
            problemasEvacuar: "NO",
            origenDolor: "NO",

            triste: "NO",
            perderInteres: "NO",
            trabajoConcentrarse: "NO",
            apoyoCercano: "NO",
            tieneDolorHoy: "NO",
            numeroDolor: ""


        }

    }

    render() {
        return (
            <MenuPaciente history={this.props.history} activo={5}>
            <Container style={{ marginBottom: "3%" }}>
                <Row style={{ justifyContent: "center" }}>
                    <Typography variant="h5" component="h2">CUESTIONARIO SOBRE DOLOR</Typography>
                </Row>

                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>Porfavor mencione su motivo de Consulta: </Label>
                        <Input onChange={(e) => this.setState({ motivo: e.target.value })} placeholder={"Motivo de acudir a la clinica"} value={this.state.motivo}></Input>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿HA RECIBIDO ALGÚN TIPO DE TERAPIA EN LAS ÚLTIMAS 24 HORAS? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ recibioTerapia: "SI" })} active={
                                this.state.recibioTerapia === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ recibioTerapia: "NO" })} active={
                                this.state.recibioTerapia === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Esta en algun tratamiento ahora? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ tieneTratamiento: "SI" })} active={
                                this.state.tieneTratamiento === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ tieneTratamiento: "NO" })} active={
                                this.state.tieneTratamiento === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Ha tenido dolor durante al menos dos semanas en los últimos 6 meses? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ dolorUltimamente: "SI" })} active={
                                this.state.dolorUltimamente === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ dolorUltimamente: "NO", frecuenciaDolor: "NO", duracionDolor: "NO" })} active={
                                this.state.dolorUltimamente === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                {this.state.dolorUltimamente === "SI" && <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Con qué frecuencia aparece? </Label>
                        <ButtonGroup>
                            <Button outline color="success" onClick={() => this.setState({ frecuenciaDolor: "DIARIO" })} active={
                                this.state.frecuenciaDolor === "DIARIO"
                            }>DIARIO</Button>
                            <Button outline color="primary" onClick={() => this.setState({ frecuenciaDolor: "SEMANAL" })} active={
                                this.state.frecuenciaDolor === "SEMANAL"
                            }>SEMANAL</Button>
                            <Button outline color="warning" onClick={() => this.setState({ frecuenciaDolor: "MENSUAL" })} active={
                                this.state.frecuenciaDolor === "MENSUAL"
                            }>MENSUAL</Button>
                            <Button outline color="danger" onClick={() => this.setState({ frecuenciaDolor: "> 1 MES" })} active={
                                this.state.frecuenciaDolor === "> 1 MES"
                            }> {"> 1 MES"}</Button>
                        </ButtonGroup>
                    </Col>
                </Row>}

                {this.state.dolorUltimamente === "SI" && <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Aproximadamente cuánto tiempo dura un episodio de dolor? </Label>
                        <ButtonGroup>
                            <Button outline color="success" onClick={() => this.setState({ duracionDolor: "MINUTOS" })} active={
                                this.state.duracionDolor === "MINUTOS"
                            }>MINUTOS</Button>
                            <Button outline color="primary" onClick={() => this.setState({ duracionDolor: "HORAS" })} active={
                                this.state.duracionDolor === "HORAS"
                            }>HORAS</Button>
                            <Button outline color="warning" onClick={() => this.setState({ duracionDolor: "DIAS" })} active={
                                this.state.duracionDolor === "DIAS"
                            }>DÍAS</Button>
                            <Button outline color="danger" onClick={() => this.setState({ duracionDolor: "SIEMPRE" })} active={
                                this.state.duracionDolor === "SIEMPRE"
                            }>SIEMPRE</Button>
                        </ButtonGroup>
                    </Col>
                </Row>}




                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Ha recibido algún tratamiento para aliviar el dolor? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ recibioTratamiento: "SI" })} active={
                                this.state.recibioTratamiento === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ recibioTratamiento: "NO", mejoroTratamiento: "NO", tratamientoRecibido: "NO" })} active={
                                this.state.recibioTratamiento === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                {this.state.recibioTratamiento === "SI" && <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Cual tratamiento recibio? </Label>
                        <Input onChange={(e) => { this.setState({ tratamientoRecibido: e.target.value }) }} value={this.state.tratamientoRecibido}></Input>
                    </Col>
                </Row>}
                {this.state.recibioTratamiento === "SI" && <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Mejoró? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ mejoroTratamiento: "SI" })} active={
                                this.state.mejoroTratamiento === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ mejoroTratamiento: "NO" })} active={
                                this.state.mejoroTratamiento === "NO"
                            }>No</Button>
                            <Button outline color="warning" onClick={() => this.setState({ mejoroTratamiento: "PARCIALMENTE" })} active={
                                this.state.mejoroTratamiento === "PARCIALMENTE"
                            }>Parcialmente</Button>
                        </ButtonGroup>
                    </Col>
                </Row>}
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Los medicamentos le causan algún efecto adverso? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ medicamentoAdverso: "SI" })} active={
                                this.state.medicamentoAdverso !== "NO"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ medicamentoAdverso: "NO" })} active={
                                this.state.medicamentoAdverso !== "SI"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Siente que el dolor ha afectado su calidad de vida? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ afectarCalidad: "SI" })} active={
                                this.state.afectarCalidad === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ afectarCalidad: "NO" })} active={
                                this.state.afectarCalidad === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Ha dejado de realizar alguna actividad a
causa del dolor? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ dejarActividad: "SI" })} active={
                                this.state.dejarActividad === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ dejarActividad: "NO" })} active={
                                this.state.dejarActividad === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Ha dejado de trabajar? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ dejarTrabajo: "SI" })} active={
                                this.state.dejarTrabajo === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ dejarTrabajo: "NO" })} active={
                                this.state.dejarTrabajo === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Más fuerte de día o de noche? </Label>
                        <ButtonGroup>
                            <Button outline color="warning" onClick={() => this.setState({ dolorFuerteEn: "DIA" })} active={
                                this.state.dolorFuerteEn === "DIA"
                            }>Dia</Button>
                            <Button outline color="primary" onClick={() => this.setState({ dolorFuerteEn: "NOCHE" })} active={
                                this.state.dolorFuerteEn === "NOCHE"
                            }>Noche</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Empeora con alguna actividad (caminar,cargar, estar de pie)? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ empeoraConActividad: "SI" })} active={
                                this.state.empeoraConActividad === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ empeoraConActividad: "NO" })} active={
                                this.state.empeoraConActividad === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿El dolor se acompaña de nauseas, vómito o sudoración? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ dolorCon: "SI" })} active={
                                this.state.dolorCon === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ dolorCon: "NO" })} active={
                                this.state.dolorCon === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Mejora con el reposo? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ mejoraConReposo: "SI" })} active={
                                this.state.mejoraConReposo === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ mejoraConReposo: "NO" })} active={
                                this.state.mejoraConReposo === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Cómo calificaría la intensidad del dolor? </Label>
                        <ButtonGroup>
                            <Button outline color="success" onClick={() => this.setState({ calDolor: "NADA" })} active={
                                this.state.calDolor === "NADA"
                            }>NADA</Button>
                            <Button outline color="info" onClick={() => this.setState({ calDolor: "LEVE" })} active={
                                this.state.calDolor === "LEVE"
                            }>LEVE</Button>
                            <Button outline color="primary" onClick={() => this.setState({ calDolor: "MODERADO" })} active={
                                this.state.calDolor === "MODERADO"
                            }>MODERADO</Button>
                            <Button outline color="warning" onClick={() => this.setState({ calDolor: "INTENSO" })} active={
                                this.state.calDolor === "INTENSO"
                            }>INTENSO</Button>
                            <Button outline color="danger" onClick={() => this.setState({ calDolor: "INSOPORTABLE" })} active={
                                this.state.calDolor === "INSOPORTABLE"
                            }>INSOPORTABLE</Button>

                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Tiene problemas para dormir? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ problemasDormir: "SI" })} active={
                                this.state.problemasDormir === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ problemasDormir: "NO" })} active={
                                this.state.problemasDormir === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Tiene problemas para evacuar (estreñimiento)? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ problemasEvacuar: "SI" })} active={
                                this.state.problemasEvacuar === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ problemasEvacuar: "NO" })} active={
                                this.state.problemasEvacuar === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Conoce el origen de su dolor? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ origenDolor: "SI" })} active={
                                this.state.origenDolor === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ origenDolor: "NO" })} active={
                                this.state.origenDolor === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Se siente triste o desmotivado? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ triste: "SI" })} active={
                                this.state.triste === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ triste: "NO" })} active={
                                this.state.triste === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Ha perdido interés en sus actividades? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ perderInteres: "SI" })} active={
                                this.state.perderInteres === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ perderInteres: "NO" })} active={
                                this.state.perderInteres === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Le cuesta trabajo concentrarse? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ trabajoConcentrarse: "SI" })} active={
                                this.state.trabajoConcentrarse === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ trabajoConcentrarse: "NO" })} active={
                                this.state.trabajoConcentrarse === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>¿Cuenta con apoyo de familiares y/o amigos? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ apoyoCercano: "SI" })} active={
                                this.state.apoyoCercano === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ apoyoCercano: "NO" })} active={
                                this.state.apoyoCercano === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>El día de hoy, ¿Tiene dolor? </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.setState({ tieneDolorHoy: "SI" })} active={
                                this.state.tieneDolorHoy === "SI"
                            }>Si</Button>
                            <Button outline color="danger" onClick={() => this.setState({ tieneDolorHoy: "NO" })} active={
                                this.state.tieneDolorHoy === "NO"
                            }>No</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>Marque un punto en donde considere que se encuentra su nivel de dolor en éste momento (T1): </Label>
                        <Slider
                            valueLabelDisplay="auto"
                            value={this.state.value}
                            onChange={this.handleChange}
                            aria-labelledby="continuous-slider"
                        />
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col>
                        <Label>Seleccione si presenta además: </Label>
                        <ButtonGroup>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Dolor de Estómago")} active={this.state.cSelected.includes("Dolor de Estómago")}>Dolor de Estómago</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Hormigueo")} active={this.state.cSelected.includes("Hormigueo")}>Hormigueo</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Ciática")} active={this.state.cSelected.includes("Ciática")}>Ciática</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Pies Fríos")} active={this.state.cSelected.includes("Pies Fríos")}>Pies Fríos</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Pesadez")} active={this.state.cSelected.includes("Pesadez")}>Pesadez</Button>

                        </ButtonGroup>
                        <ButtonGroup>

                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Vértigo")} active={this.state.cSelected.includes("Vértigo")}>Vértigo</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Nauseas")} active={this.state.cSelected.includes("Nauseas")}>Nauseas</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Sudoración")} active={this.state.cSelected.includes("Sudoración")}>Sudoración</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Palpitaciones")} active={this.state.cSelected.includes("Palpitaciones")}>Palpitaciones</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Debilidad Muscular")} active={this.state.cSelected.includes("Debilidad Muscular")}>Debilidad Muscular</Button>


                        </ButtonGroup>
                        <ButtonGroup>


                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Zumbido de Oídos")} active={this.state.cSelected.includes("Zumbido de Oídos")}>Zumbido de Oídos</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Fatiga Constante")} active={this.state.cSelected.includes("Fatiga Constante")}>Fatiga Constante</Button>
                            <Button outline color="primary" onClick={() => this.onCheckboxBtnClick("Visión Borrosa")} active={this.state.cSelected.includes("Visión Borrosa")}>Visión Borrosa</Button>

                            <Button outline color="primary" onClick={() => this.setState({ otrosPadecimientos: !this.state.otrosPadecimientos })} active={this.state.otrosPadecimientos}>Otras</Button>

                        </ButtonGroup>

                    </Col>

                </Row>
                {this.state.otrosPadecimientos &&
                    <Row>
                        <Col>
                            <Label style={{ marginRight: "2%" }}>¿CUALES?</Label>
                            <Input type="text" onChange={(e) => {
                                this.setState({ padecimientos: e.target.value })
                            }} placeholder="Escribe aqui"></Input>
                        </Col>
                    </Row>
                }
                <Row style={{ marginTop: 20 }}>
                    <div style={{ margin: "auto" }}>
                        <Button onClick={this.registrarCuestionario} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>Registrar Cuestionario</Button>
                    </div>
                </Row>
            </Container>
            </MenuPaciente>
        )
    }

    onCheckboxBtnClick = (selected) => {

        const index = this.state.cSelected.indexOf(selected);

        if (index < 0) {
            this.state.cSelected.push(selected);
        } else {
            this.state.cSelected.splice(index, 1);
        }
        this.setState({
            cSelected: this.state.cSelected
        })
    }


    handleChange = (event, newValue) => {
        this.setState({ value: newValue });

    };

    registrarCuestionario = () => {
        if (this.state.motivo !== "") {
            let cadena = ""
            this.state.cSelected.forEach(padecimiento => {
                cadena = padecimiento + "," + cadena
            })

            this.setState({
                padecimientos: this.state.padecimientos + "," + cadena.slice(0, cadena.length - 1)
            })
            setTimeout(async () => {
                const data = {

                    motivo: this.state.motivo,
                    recibioTerapia: this.state.recibioTerapia,
                    tieneTratamiento: this.state.tieneTratamiento,
                    dolorUltimamente: this.state.dolorUltimamente,
                    frecuenciaDolor: this.state.frecuenciaDolor,
                    duracionDolor: this.state.duracionDolor,
                    recibioTratamiento: this.state.recibioTratamiento,
                    tratamientoRecibido: this.state.tratamientoRecibido,
                    mejoroTratamiento: this.state.mejoroTratamiento,
                    medicamentoAdverso: this.state.medicamentoAdverso,

                    afectarCalidad: this.state.afectarCalidad,
                    dejarActividad: this.state.dejarActividad,
                    dejarTrabajo: this.state.dejarTrabajo,
                    dolorFuerteEn: this.state.dolorFuerteEn,
                    empeoraConActividad: this.state.empeoraConActividad,
                    dolorCon: this.state.dolorCon,
                    mejoraConReposo: this.state.mejoraConReposo,
                    calDolor: this.state.calDolor,
                    problemasDormir: this.state.problemasDormir,
                    problemasEvacuar: this.state.problemasEvacuar,
                    origenDolor: this.state.origenDolor,

                    triste: this.state.triste,
                    perderInteres: this.state.perderInteres,
                    trabajoConcentrarse: this.state.trabajoConcentrarse,
                    apoyoCercano: this.state.apoyoCercano,
                    tieneDolorHoy: this.state.tieneDolorHoy,
                    numeroDolor: this.state.value,
                    padecimientos: this.state.padecimientos,
                    paciente: {
                        id: JSON.parse(localStorage.getItem("usuario")).id
                    }
                }




                const response = await fetch(direccionIP + "cuestionario/registrar", {
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
                        text: "El cuestionario se registró con éxito",
                        icon: "success",
                    }).then(
                        this.props.history.replace("/inicioPaciente")
                    );
                } else {
                    swal({
                        title: "¡ERROR!",
                        text: "Ocurrio un error",
                        icon: "error",
                    });
                }
            }, 2000)


        } else {
            swal({
                title: "¡ATENCIÓN!",
                text: "Verifique que los campos esten llenos",
                icon: "warning",
            });
        }
    }
}
