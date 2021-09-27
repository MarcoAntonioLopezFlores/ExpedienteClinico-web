import React from 'react'
import { ModalBody, Form, Row, Col, Input, Button, ModalFooter } from 'reactstrap'

import Dialog from '../Dialog';
import swal from 'sweetalert';
import direccionIP from '../../util/informacion'

export default class ChangePass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actualContrasena: "",
            confirmarContrasena:"",
            nuevaContrasena:""
        }
    }


    actualizarPass = async() => {
        
        if (this.state.actualContrasena !== "" && this.state.nuevaContrasena !== "" && this.state.confirmarContrasena !== "") {
            if(this.state.confirmarContrasena===this.state.nuevaContrasena){
                const informacion = {
                    "actualContrasena":this.state.actualContrasena,         
                    "nuevaContrasena": this.state.nuevaContrasena
                }
               
                const response = await fetch(direccionIP+"updatePassPaciente/"+JSON.parse(localStorage.getItem('usuario')).id, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                body: JSON.stringify(informacion),
            }).then(resp => resp.json());
            
            console.log(response)
            if(response){
                swal({
                    title: "¡EXITO!",
                    text: "Contraseña se actualizó con éxito",
                    icon: "success",
                }).then(()=>{
                    this.props.toogle()
                }          
                );
            }else{
                swal({
                    title: "¡ERROR!",
                    text: "Contraseña actual incorrecta",
                    icon: "error",
                });
            }
            }else{
                swal({
                    title: "¡ADVERTENCIA!",
                    text: "Las confirmacion de contraseña no coincide",
                    icon: "warning",
                });
            }
            
            
        } else {
            swal({
                title: "¡ADVERTENCIA!",
                text: "Campos vacíos, no puedes actualizar",
                icon: "warning",
            });
        }

    }
    render() {
        return (
            <Dialog stateModal={this.props.stateModal} title={this.props.title}>
                <ModalBody>
                    <Form>
                        <Row>
                            
                            <Col>
                                <Input onChange={(e) => {
                                    this.setState({
                                        actualContrasena:e.target.value
                                    })
                                }} type="password" placeholder="INGRESA CONTRASEÑA ACTUAL" value={this.state.actualContrasena}></Input>
                            </Col>
                        </Row>
                        <Row style={{marginTop:20}}>
                        <Col >
                        <Input onChange={(e) => {
                                    this.setState({
                                        nuevaContrasena:e.target.value
                                    })
                                }} type="password" placeholder="INGRESA CONTRASEÑA NUEVA" value={this.state.nuevaContrasena}></Input>
                            </Col>
                        </Row>
                        <Row style={{marginTop:20}}>
                        <Col >
                        <Input onChange={(e) => {
                                    this.setState({
                                        confirmarContrasena:e.target.value
                                    })
                                }} type="password" placeholder="CONFIRMA CONTRASEÑA NUEVA" value={this.state.confirmarContrasena}></Input>
                            </Col>
                        </Row>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.actualizarPass} className="btn btn-md" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>Continuar</Button>
                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Cancelar</Button>
                </ModalFooter>
            </Dialog>
        )
    }


}