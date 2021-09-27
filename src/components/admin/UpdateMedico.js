import React from 'react'
import { ModalBody, Form, Row, Col, Input, Button, ModalFooter } from 'reactstrap'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Dialog from '../Dialog';
import swal from 'sweetalert';
import direccionIP from '../../util/informacion'

export default class UpdateMedico extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: this.props.doctor.nombre,
            apellido:this.props.doctor.apellido,
            especialidad:this.props.doctor.especialidad
        }
    }


    actualizarDoctor = async() => {
        
        if (this.state.nombre !== "" && this.state.apellido !== "") {
            const data = {
                "id":this.props.doctor.id,
                "nombre": this.state.nombre,
                "apellido": this.state.apellido,
                "especialidad": this.state.especialidad
            }
           
            const response = await fetch(direccionIP+"actualizarDoctor", {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify(data),
        }).then(resp => resp);
        
        
        if(response.status===200){
            swal({
                title: "¡EXITO!",
                text: "El medico se actualizó con éxito",
                icon: "success",
            }).then(()=>{
                this.props.toogle()
            }          
            );
        }else{
            swal({
                title: "¡ERROR!",
                text: "Ocurrio un error",
                icon: "error",
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
                            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                            <Col>
                                <Input onChange={(e) => {
                                    this.setState({
                                        nombre:e.target.value
                                    })
                                }} type="text" placeholder="nombre(s)" value={this.state.nombre}>{this.props.doctor.nombre}</Input>
                            </Col>
                            <Col >
                                <Input onChange={(e) => {
                                    this.setState({
                                        apellido:e.target.value
                                    })
                                    
                                }} type="text" placeholder="apellidos" value={this.state.apellido}></Input>
                            </Col>


                        </Row>
                        <Row style={{marginTop:20}}>
                        <Col >
                                <Input onChange={(e) => {
                                    this.setState({
                                        especialidad:e.target.value
                                    })
                                    
                                }} type="text" placeholder="especialidad" value={this.state.especialidad}></Input>
                            </Col>
                        </Row>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.actualizarDoctor} className="btn btn-md" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>Continuar</Button>
                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Cancelar</Button>
                </ModalFooter>
            </Dialog>
        )
    }


}
