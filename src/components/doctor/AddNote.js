import React from 'react'
import { ModalBody, Form, Row, Col, Input, Button, ModalFooter, Label } from 'reactstrap'
import NotesIcon from '@material-ui/icons/Notes';

import Dialog from '../Dialog';
import swal from 'sweetalert';
import direccionIP from '../../util/informacion'

export default class AddNote extends React.Component {
    constructor(props){
        super(props)
        this.state={
            titulo:"",
            nota:""
        }
    }
    render() {
        return (
            <Dialog stateModal={this.props.stateModal} title={this.props.title}>
                <ModalBody>
                    <Form>
                        <Row>
                            <Label style={{fontWeight:"bold"}}>TITULO:</Label>
                            <Col>
                                <Input onChange={(e) => {
                                    this.setState({
                                        titulo:e.target.value
                                    })
                                }} type="text" placeholder="Agregar titulo" value={this.state.titulo}></Input>
                            </Col>
                        </Row>
                        <Row style={{marginTop:20}}>
                        <NotesIcon fontSize="large"></NotesIcon>
                            <Col>
                                <Input onChange={(e) => {
                                    this.setState({
                                        nota:e.target.value
                                    })
                                }} type="textarea" placeholder="Agregar nota..." value={this.state.nota}></Input>
                            </Col>
                        </Row>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.agregarNota} className="btn btn-md" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>Continuar</Button>
                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Cancelar</Button>
                </ModalFooter>
            </Dialog>
        )
    }

    agregarNota=async()=>{
        if(this.state.titulo!=="" && this.state.nota!==""){
            const data={
                titulo:this.state.titulo,
                descripcion: this.state.nota,
                paciente: {
                    id: localStorage.getItem('idForExpediente')
                },
                doctor: {
                    id: JSON.parse(localStorage.getItem('usuario')).id
                }
            }
            
    
            const response = await fetch(direccionIP + "nota/registrar", {
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
                    text: "La nota se registró con éxito",
                    icon: "success",
                }).then(
                    this.props.toogle()
                );
            } else {
                swal({
                    title: "¡ERROR!",
                    text: "Ocurrio un error",
                    icon: "error",
                });
            }
            
        }else{
            swal({
                title: "¡ATENCIÓN!",
                text: "Verifique que los campos esten llenos",
                icon: "warning",
            });
        }
        
    }


}
