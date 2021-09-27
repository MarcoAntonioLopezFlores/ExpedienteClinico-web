import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { Row, Col, Input,  Table } from 'reactstrap'


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Container } from 'reactstrap';
import { Radio, Checkbox } from '@material-ui/core';
import lengua from '../../assets/img/lengua.jpg'
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AcupunturaDetails(props) {
    const classes = useStyles();
    const zonas = [
        { id: 1, nombre: "Riñon / Intestino" },
        { id: 2, nombre: "Estomago / Bazo" },
        { id: 3, nombre: "Higado / V. Biliar Izquierdo" },
        { id: 4, nombre: "Higado / V. Biliar Derecho" },
        { id: 5, nombre: "Pulmones" },
        { id: 6, nombre: "Corazón" }
    ]
    return (
        <div>
            <Dialog fullScreen open={props.stateModal} onClose={props.toogle} TransitionComponent={Transition}>
                <AppBar style={{ backgroundColor: "#6B4C35" }} className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.toogle} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {props.title}
                        </Typography>

                    </Toolbar>
                </AppBar>
                <Container style={{marginTop:"5%"}}>
                <Row>
                    <Col md>
                        <Table responsive bordered>
                            <thead style={{ backgroundColor: "#C9D468" }}>
                                <tr>
                                    <th colSpan="2" style={{ textAlign: "center" }}>DIAGNOSTICO POR LENGUA</th>
                                </tr>
                            </thead>
                            <tbody>
                                {zonas.map((zona) =>
                                    <tr key={zona.id}>
                                        <th style={{ padding: 20 }}>
                                            <Row >{zona.nombre}</Row>
                                            <Row>
                                                {props.cuestionario.nombresZona.includes(zona.nombre)&&<Input type="textarea" readOnly  value={props.cuestionario["detalle"+zona.id]} placeholder="Ingresa mas detalles">
                                                </Input>}
                                            </Row>
                                        </th>
                                        <td align="center">
                                            <Checkbox
                                                
                                                checked={props.cuestionario.nombresZona.includes(zona.nombre)}
                                                
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
                            <Typography component="h5" variant="h6">OBSERVACIONES</Typography>
                        </Row>
                        <Row style={{ margin: 5 }}>
                            <Input type="textarea" readOnly value={props.cuestionario.observaciones}>
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
                                    <Input type="textarea" readOnly value={props.cuestionario.cr}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.ide}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.pl}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.ig}>
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
                                    <Input type="textarea" readOnly value={props.cuestionario.hg}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.vb}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.bp}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.es}>
                                    </Input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    RÑ:
                                        </td>
                                <td >
                                    VJ:
                                        </td>
                                <td >
                                    PC:
                                        </td>
                                <td >
                                    SJ:
                                        </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input type="textarea" readOnly value={props.cuestionario.rñ}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.vj}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.pc}>
                                    </Input>
                                </td>
                                <td >
                                    <Input type="textarea" readOnly value={props.cuestionario.sj}>
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
                                        checked={props.cuestionario.densidad.includes("fuerte")}
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
                                        checked={props.cuestionario.densidad.includes("debil")}
                                        
                                        
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
                                        checked={props.cuestionario.velocidad.includes("rapido")}
                                        
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
                                        checked={props.cuestionario.velocidad.includes("lento")}
                                        
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
                                        checked={props.cuestionario.grosor.includes("amplio")}
                                        
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
                                        checked={props.cuestionario.grosor.includes("vacio")}
                                        
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
                                        checked={props.cuestionario.textura.includes("duro")}
                                        
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
                                        checked={props.cuestionario.textura.includes("suave")}
                                        
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
                                        checked={props.cuestionario.longitud.includes("largo")}
                                        
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
                                        checked={props.cuestionario.longitud.includes("corto")}
                                        
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
                    <Input type="textarea" readOnly value={props.cuestionario.impresionPulso}>
                    </Input>
                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Typography component="h5" variant="h6">PRINCIPIO DE TRATAMIENTO</Typography>
                </Row>
                <Row style={{ margin: 5 }}>
                    <Input type="textarea" readOnly value={props.cuestionario.tratamientoGeneral}>
                    </Input>
                </Row>

                </Container>
            </Dialog>
        </div>
    );
}
