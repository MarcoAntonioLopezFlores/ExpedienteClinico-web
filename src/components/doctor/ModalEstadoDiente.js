import React, { Component } from 'react'
import { Card, Typography, Checkbox } from '@material-ui/core'
import Dialog from '../Dialog'
import { ModalBody, ModalFooter, Button, Col, Row } from 'reactstrap'

export default class ModalEstadoDiente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estados: [
                { id: 1, nombre: "Fractura" },
                { id: 2, nombre: "Obturación" },
                { id: 3, nombre: "Caries" },
                { id: 4, nombre: "Extracción" },
                { id: 5, nombre: "Extraido" }
            ],
            nombresEstado: []
        }
    }

    handleChange = (event) => {
        const index = this.state.nombresEstado.indexOf(event.target.value);
        
        if (index < 0) {
            this.state.nombresEstado.push(event.target.value);
        } else {
            this.state.nombresEstado.splice(index, 1);
        }
        
        this.setState({
            nombresEstado: this.state.nombresEstado
        })

    }
    render() {
        return (
            <Dialog stateModal={this.props.stateModal} title={this.props.title}>
                <ModalBody>
                    {this.state.estados.map((estado) =>
                        <Card style={{ marginTop: 10 }} key={estado.id}>
                            <Row>
                                <Col style={{ padding: 10, marginLeft: 10 }}>
                                    <Typography>{estado.nombre}</Typography>
                                </Col>
                                <Col>
                                    <Checkbox
                                        value={estado.nombre}
                                        checked={this.state.nombresEstado.includes(estado.nombre)}
                                        onChange={this.handleChange}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                    
                                </Col>
                            </Row>

                        </Card>
                    )}
                    
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.agregarEstado} className="btn btn-md" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>Continuar</Button>
                    <Button style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary" onClick={this.props.toogle}>Cancelar</Button>
                </ModalFooter>
            </Dialog>
        )
    }
    agregarEstado = () => {
        
        var nombre = 'pieza'.concat(this.props.pieza)
        
        
        var piezas = JSON.parse(localStorage.getItem('piezas'))
        var bandera= true;
        var locationinArray=0;
        piezas.forEach((pieza,index)=>{
            
            if(pieza.id===this.props.pieza){
                
                locationinArray=index
                bandera=false;                
            }
            
        })
        if(bandera){
            piezas.push({id:this.props.pieza,[nombre]:this.state.nombresEstado.toString()})
        }else{
            piezas.splice(locationinArray,1)
            piezas.push({id:this.props.pieza,[nombre]:this.state.nombresEstado.toString()})
        }
        
        
       
        
        localStorage.setItem('piezas',JSON.stringify(piezas))

        this.props.toogle()
        
    }
}
