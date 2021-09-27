import React, { Component } from 'react'
import { ModalBody, Form, Row, Button, ModalFooter } from 'reactstrap'
import Dialog from '../Dialog';
import { Typography } from '@material-ui/core';
import logo from '../../assets/img/logo.png'
export default class Agree extends Component {
    render() {
        return (
            <Dialog stateModal={this.props.stateModal} title={this.props.title}>
                <ModalBody>
                    <Form>
                        <Row style={{justifyContent:"center"}}>
                        <img height={"30%"} width={"30%"} src={logo} alt="LOGO BALANCENEURAL" />
                        </Row>
                        <Row>
                            <Typography variant={"subtitle2"} component={"strong"}>DECLARO EN FORMA LIBRE Y VOLUNTARIA LO SIGUIENTE:</Typography>
                        </Row>
                        <Row>
                            <Typography component={"p"}>
                            1. La información que proporcioné en la Historia Clínica es real y verídica.<br></br>
2. No tengo padecimientos que representen una contraindicación para la aplicación de Terapia
Neural, tal cual lo declaré en la Historia Clínica.<br></br>
3. Entiendo en qué consiste la Terapia Neural y es mi voluntad recibirla.<br></br>
4. La Terapia Neural y sus procedimientos están basados en el funcionamiento de mi Sistema
Nervioso Autónomo.<br></br>
5. Las complicaciones, aunque poco probables, son posibles, pueden ser leves y reversibles, tales
como: dolor en el sitio de punción, irritación leve y transitoria de la piel, presencia de hematomas
presencia de eritema alrededor de los sitios de infiltración, cefalea refleja, taquicardia refleja, u
otras como: reacción alérgica a la Procaína y en casos muy raros reacción anafiláctica o Síncope
vaso-vagal.<br></br>
6. Entiendo también que todo acto médico implica una serie de riesgos que pueden deberse a mi
estado de salud, alteraciones congénitas o anatómicas, mis antecedentes personales
patológicos, tratamientos actuales y previos y que esto no es responsabilidad del(a) Médica/o
Terapeuta Neural ni de la Terapia Neural per se.<br></br>
7. El beneficio que obtendré con la aplicación de la Terapia Neural es que se pueda resolver o
aminorar los padecimientos que aquí describo para intentar mejorar mi estado de salud y
calidad de vida.<br></br>
8. Estoy consciente de que puedo requerir de tratamientos subsecuentes y que debo acudir para
seguimiento de mi caso en cuanto se me solicite; asimismo me comprometo a acudir a mi(s)
cita(s) programada (s), a fin de no interrumpir el curso de mis terapias.<br></br>
9. Autorizo al personal designado para realizar las pruebas de laboratorio que el Médico Terapeuta
Neural solicite, en caso que aplique, pues entiendo que esto es para completar mi diagnóstico y
tratamiento.<br></br>
10. En mi presencia han sido llenados los formularios y preguntas que se presentan en este
documento.<br></br>
11. En virtud de estar aclaradas todas mis dudas, DOY MI CONSENTIMIENTO para que mi persona o
la persona que represento, pueda ser tratado con Terapia Neural y autorizo a la Médica/o
Terapeuta Neural que de acuerdo a su criterio y formación la lleve a cabo.<br></br><br></br>
<p style={{color:"red"}}>NOTA: Al acudir a la clinica se tendra que firmar este formato en fisico</p>
                            </Typography>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }} color="success" onClick={this.props.aceptar}>Aceptar</Button> 
                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Cerrar</Button>
                </ModalFooter>
            </Dialog>
        )
    }

    
}
