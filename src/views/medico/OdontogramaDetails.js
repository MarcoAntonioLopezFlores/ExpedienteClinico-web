import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Row, Col, Input, Button, Label, Table } from 'reactstrap'


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Container } from 'reactstrap';

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

export default function OdontogramaDetails(props) {
    const classes = useStyles();
    
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
                <Container>
                    <Row style={{ marginTop: "3%", display: "flex", flex: 1 }}>
                        <Col>
                            <Row >
                                <Col style={{ borderRight: "solid", borderRightWidth: "1px" }}>
                                    <Row style={{ padding: 25 }}>
                                        {props.piezas.slice(0, 8).reverse().map((pieza) =>
                                            <Col key={pieza.id} style={{ textAlign: "center" }}>
                                                <Label>{pieza.id}</Label>
                                                <Button
                                                    title={`ESTADO:\n${pieza["pieza" + pieza.id]}`}
                                                    style={{
                                                        border: "solid",
                                                        backgroundColor:
                                                            pieza["pieza" + pieza.id].includes("Extraido") ? "red" :
                                                                pieza["pieza" + pieza.id].includes("Extracción") ? "orange" :
                                                                    pieza["pieza" + pieza.id].includes("Caries") ? "gray" :
                                                                        pieza["pieza" + pieza.id].includes("Fractura") ? "blue" :
                                                                            pieza["pieza" + pieza.id].includes("Obturación") ? "purple" : "white",
                                                        borderColor: "brown"
                                                    }}
                                                >{pieza["pieza" + pieza.id][0]}</Button>
                                            </Col>
                                        )}
                                    </Row>
                                </Col>


                                <Col >
                                    <Row style={{ padding: 25 }}>
                                        {props.piezas.slice(8, 16).map((pieza) =>
                                            <Col key={pieza.id} style={{ textAlign: "center" }}>
                                                <Label>{pieza.id}</Label>
                                                <Button
                                                    title={`ESTADO:\n${pieza["pieza" + pieza.id]}`}
                                                    style={{
                                                        border: "solid",
                                                        backgroundColor:
                                                            pieza["pieza" + pieza.id].includes("Extraido") ? "red" :
                                                                pieza["pieza" + pieza.id].includes("Extracción") ? "orange" :
                                                                    pieza["pieza" + pieza.id].includes("Caries") ? "gray" :
                                                                        pieza["pieza" + pieza.id].includes("Fractura") ? "blue" :
                                                                            pieza["pieza" + pieza.id].includes("Obturación") ? "purple" : "white",
                                                        borderColor: "brown"
                                                    }}
                                                >{pieza["pieza" + pieza.id][0]}</Button>
                                            </Col>
                                        )}
                                    </Row>

                                </Col>
                            </Row>
                            <Row style={{ borderTop: "solid", borderTopWidth: "1px" }}>
                                <Col style={{ borderRight: "solid", borderRightWidth: "1px" }}>
                                    <Row style={{ padding: 25 }}>
                                        {props.piezas.slice(24, 32).reverse().map((pieza) =>
                                            <Col key={pieza.id} style={{ textAlign: "center" }}>
                                                <Label>{pieza.id}</Label>
                                                <Button
                                                    title={`ESTADO:\n${pieza["pieza" + pieza.id]}`}
                                                    style={{
                                                        border: "solid",
                                                        backgroundColor:
                                                            pieza["pieza" + pieza.id].includes("Extraido") ? "red" :
                                                                pieza["pieza" + pieza.id].includes("Extracción") ? "orange" :
                                                                    pieza["pieza" + pieza.id].includes("Caries") ? "gray" :
                                                                        pieza["pieza" + pieza.id].includes("Fractura") ? "blue" :
                                                                            pieza["pieza" + pieza.id].includes("Obturación") ? "purple" : "white",
                                                        borderColor: "brown"
                                                    }}
                                                >{pieza["pieza" + pieza.id][0]}</Button>
                                            </Col>
                                        )}
                                    </Row>
                                </Col>
                                <Col >
                                    <Row style={{ padding: 25 }}>
                                        {props.piezas.slice(16, 24).map((pieza) =>
                                            <Col key={pieza.id} style={{ textAlign: "center" }}>
                                                <Label>{pieza.id}</Label>
                                                <Button
                                                    title={`ESTADO:\n${pieza["pieza" + pieza.id]}`}
                                                    style={{
                                                        border: "solid",
                                                        backgroundColor:
                                                            pieza["pieza" + pieza.id].includes("Extraido") ? "red" :
                                                                pieza["pieza" + pieza.id].includes("Extracción") ? "orange" :
                                                                    pieza["pieza" + pieza.id].includes("Caries") ? "gray" :
                                                                        pieza["pieza" + pieza.id].includes("Fractura") ? "blue" :
                                                                            pieza["pieza" + pieza.id].includes("Obturación") ? "purple" : "white",
                                                        borderColor: "brown"
                                                    }}
                                                >{pieza["pieza" + pieza.id][0]}</Button>
                                            </Col>
                                        )}
                                    </Row>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: 20 }}>
                        <Col>
                            <Row style={{ justifyContent: "center" }}>
                                <Typography component="h5" variant="h6">ESTADO DE LOS DIENTES</Typography>

                            </Row>
                            <Row>
                                <Table style={{ marginTop: 20 }} responsive bordered>
                                    <thead style={{ backgroundColor: "#C9D468" }}>
                                        <tr>
                                            <th># PIEZA</th>
                                            <th style={{ textAlign: "center" }}>ESTADO</th>

                                        </tr>
                                    </thead>
                                    <tbody >
                                        {props.piezas.map((pieza) =>
                                            pieza["pieza" + pieza.id] !== "Limpio" ?
                                                <tr key={pieza.id}>
                                                    <th scope="row">{pieza.id}</th>
                                                    <th scope="row">{pieza["pieza" + pieza.id]}</th>

                                                </tr> : null
                                        )}
                                        
                                    </tbody>
                                </Table>

                            </Row>
                        </Col>
                        <Col>
                            <Row style={{ justifyContent: "center" }}>
                                <Typography component="h5" variant="h6">DETALLE GENERAL</Typography>
                            </Row>
                            <Row style={{ margin: 20 }}>
                                <Input type="textarea" value={props.detalleGeneral}>
                                </Input>
                            </Row>
                            <Row style={{ margin: 20 }}>
                                <Col style={{ textAlign: "center" }}>
                                    <Label>Extraido</Label>
                                    <Button
                                        style={{
                                            border: "solid",
                                            backgroundColor: "red",
                                            borderColor: "brown"
                                        }}
                                    >E</Button>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    <Label>Extracción</Label>
                                    <Button
                                        style={{
                                            border: "solid",
                                            backgroundColor: "orange",
                                            borderColor: "brown"
                                        }}
                                    >E</Button>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    <Label>Caries</Label>
                                    <Button
                                        style={{
                                            border: "solid",
                                            backgroundColor: "gray",
                                            borderColor: "brown"
                                        }}
                                    >C</Button>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    <Label>Fractura</Label>
                                    <Button
                                        style={{
                                            border: "solid",
                                            backgroundColor: "blue",
                                            borderColor: "brown"
                                        }}
                                    >F</Button>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    <Label>Obturación</Label>
                                    <Button
                                        style={{
                                            border: "solid",
                                            backgroundColor: "purple",
                                            borderColor: "brown"
                                        }}
                                    >O</Button>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                    <Label>Limpio</Label>
                                    <Button
                                        style={{
                                            border: "solid",
                                            backgroundColor: "white",
                                            borderColor: "brown"
                                        }}
                                    >L</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

            </Dialog>
        </div>
    );
}
