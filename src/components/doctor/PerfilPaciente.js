import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { CardContent, Card, Typography } from '@material-ui/core'
import direccionIP from '../../util/informacion'

export default class PerfilPaciente extends Component {
    constructor(props){
        super(props)
        this.state={
            perfil:{},
            correo:"",
            fechaR:""
        }
    }

    recoverPaciente=async()=>{
        const paciente = await fetch(direccionIP + 'obtenerPaciente/'+ localStorage.getItem('idForExpediente'), {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(
            response => response.json(),
        )
        this.setState({
            perfil:paciente,
            correo:paciente.usuario.email,
            fechaR:paciente.fechaRegistro.substring(0,10)
        })
        

        
    }

    componentDidMount(){
        this.recoverPaciente()
    }    
    render() {
        return (
            <Container>
                <Row>
                    <Col md style={{marginTop:10}}>
                    <Card>
                        <CardContent style={{margin:"2%"}}>
                            <Row md>
                                <Typography variant="h4" component="h2" style={{textAlign:"center"}}>PACIENTE: {this.state.perfil.nombre} {this.state.perfil.apellido}</Typography>
                            </Row>
                            
        
                        </CardContent>
                    </Card>
                    </Col>
                    <Col md style={{marginTop:10}}>
                    <Card>
                        <CardContent style={{margin:"2%"}}>
                            <Row md>
                                <Typography variant="h4" component="h2" style={{textAlign:"center"}}>REGISTRO: {this.state.fechaR} </Typography>
                            </Row>
                        </CardContent>
                    </Card>
                    </Col>
                </Row>
                
                
            </Container>
                
            
        )
    }
}
