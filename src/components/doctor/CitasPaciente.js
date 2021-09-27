import React, { Component } from 'react'
import { Row, Col, Table, Input, Button } from 'reactstrap'

import NoteIcon from '@material-ui/icons/Note';
import direccionIP from '../../util/informacion'
import MenuExpediente from '../MenuExpediente';
import AddNote from './AddNote';
export default class CitasPaciente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cita:{},
            citas: [],
            stateModal:false
        }

    }

    dateFormat=(fechaCita)=>{
        const fecha = new Date(fechaCita);
        const dia=fecha.getDate()<10?"0"+(fecha.getDate()):fecha.getDate();
            const mes=fecha.getMonth()+1<10?"0"+(fecha.getMonth()+1):fecha.getMonth()+1
            const anio=fecha.getFullYear()
        
            
            
            return anio+"/"+mes+"/"+dia
    }

    hourFormat=(fechaCita)=>{
        const fecha = new Date(fechaCita);
        const hora=fecha.getHours()<10?"0"+(fecha.getHours()):fecha.getHours()
        const minutos=fecha.getMinutes()<10?"0"+(fecha.getMinutes()):fecha.getMinutes()

        return hora+":"+minutos
    }

    recuperarCitas = async () => {
      
        const listCitas = await fetch(direccionIP + 'cita/lista/'+localStorage.getItem('idForExpediente'), {
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
            citas: listCitas
        })
        
        
    }
    componentDidMount() {
        this.recuperarCitas()
        this.idInterval = setInterval(this.recuperarCitas, 1500)
    }

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }
    
    render() {
        return (
            <MenuExpediente history={this.props.history} activo={2}>
            <React.Fragment>
                <Row style={{ marginTop: 20 }}>
                    <Col>
                        <Input onChange={(e) => {
                           
                            this.filtrarMedicos(e.target.value)
                        }} type="text" placeholder="Buscar por nombre..." value={this.state.textoBuscar}></Input>
                    </Col>
                </Row>
                <Table style={{ marginTop: 20 }} responsive bordered>
                    <thead style={{ backgroundColor: "#C9D468" }}>
                        <tr>
                            <th>#</th>
                            
                            <th style={{ textAlign: "center" }}>FECHA</th>
                            <th style={{ textAlign: "center" }}>HORA</th>
                            <th style={{ textAlign: "center" }}>SERVICIO</th>
                            <th style={{ textAlign: "center" }}>ESTATUS</th>
                            <th style={{ textAlign: "center" }}>AGREGAR NOTA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.citas.map((cita, index) =>cita.estatus==="aceptada"?
                            <tr key={cita.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{this.dateFormat(cita.fecha)}</td>
                                <td>{this.hourFormat(cita.fecha)}</td>
                                <td>{cita.servicioMedico.nombre}</td>
                                <td>{cita.estatus}</td>
                                <td align="center"><Button color="info" size="sm" onClick={()=>{this.searchCita(index)}} disabled={cita.estatus!=="aceptada"}><NoteIcon /></Button></td>
                                
                            </tr>:null
                        )}
                        {this.state.citas.length < 1 && (
                            <tr>
                                <th colSpan={6} style={{ textAlign: "center" }}>NO HAY REGISTROS</th>
                            </tr>
                        )}
                    </tbody>
                </Table>

                {this.state.stateModal &&
                    <AddNote
                    title={"Agregar nota de cita"}
                    toogle={this.toogle}
                    stateModal={this.state.stateModal}
                    cita ={this.state.cita}/>
                }

            </React.Fragment>
            </MenuExpediente>
        )
    }

    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal })
       
    }
    searchCita=(index)=>{
        
        this.setState({
            cita: this.state.citas[index],
        })
        setTimeout(()=>{this.toogle()},50)
        
    }
}
