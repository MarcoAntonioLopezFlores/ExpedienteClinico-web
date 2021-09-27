import React, { Component } from 'react'
import { Row, Col, Table, Input, Button } from 'reactstrap'
import direccionIP from '../../util/informacion'
import FolderSharedIcon from '@material-ui/icons/FolderShared';

import AccessibilityIcon from '@material-ui/icons/Accessibility';
import RevisionPaciente from '../../views/medico/RevisionPaciente';
export default class ListPacientes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paciente:{},
            pacientes: [],
            stateModal:false
        }

    }

    filtrarPacientes = (text) => {
        clearInterval(this.idInterval)
        const pacientes = this.state.pacientes.filter(paciente => paciente.nombre.includes(text))
        this.setState({
            pacientes: pacientes
        })
        if (text === "") {
            this.idInterval = setInterval(this.recuperarPacientes, 1500)
        }
    }

    recuperarPacientes = async () => {
     
        const listPacientes = await fetch(direccionIP + 'obtenerPacientes', {
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
            pacientes: listPacientes
        })
     
        
    }
    componentDidMount() {
        this.recuperarPacientes()
        this.idInterval = setInterval(this.recuperarPacientes, 1500)
    }

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }
    render() {
        return (
            <React.Fragment>
                <Row style={{ marginTop: 20 }}>
                    <Col>
                        <Input onChange={(e) => {
                            this.filtrarPacientes(e.target.value)
                        }} type="text" placeholder="Buscar por nombre..."></Input>
                    </Col>
                </Row>
                <Table style={{ marginTop: 20 }} responsive bordered>
                    <thead style={{ backgroundColor: "#C9D468" }}>
                        <tr>
                            <th>#</th>
                            <th style={{ textAlign: "center" }}>NOMBRE(s)</th>
                            <th style={{ textAlign: "center" }}>APELLIDO(s)</th>
                            <th style={{ textAlign: "center" }}>CORREO</th>
                            <th style={{ textAlign: "center" }}>EDAD</th>
                            <th style={{ textAlign: "center" }}>TELEFONO</th>
                            <th style={{ textAlign: "center" }}>ESCOLARIDAD</th>
                            <th style={{ textAlign: "center" }}>OCUPACIÓN</th>
                            {/*<th >ENTERADO POR</th>*/}
                            <th style={{ textAlign: "center" }}>VER EXPEDIENTE</th>
                            <th style={{ textAlign: "center" }}>REALIZAR REVISION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pacientes.map((paciente, index) =>
                            <tr key={paciente.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{paciente.nombre}</td>
                                <td>{paciente.apellido}</td>
                                <td>{paciente.usuario.email}</td>
                                <td>{paciente.edad}</td>
                                <td>{paciente.telefono}</td>
                                <td>{paciente.escolaridad}</td>
                                <td>{paciente.ocupacion}</td>
                                
                                <td align="center"><Button color="info" size="sm" onClick={()=>this.searchExpediente(paciente.id)}><FolderSharedIcon/></Button></td>
                                <td align="center"><Button color="primary" size="sm" onClick={()=>this.realizarRevision(index)}><AccessibilityIcon/></Button></td>
                            </tr>
                        )}
                        {this.state.pacientes.length < 1 && (
                            <tr>
                                <th colSpan={9} style={{ textAlign: "center" }}>NO HAY PACIENTES</th>
                            </tr>
                        )}
                    </tbody>
                </Table>
                {this.state.stateModal &&
                <RevisionPaciente
 title={"REVISIÓN FISICA PARA "+ this.state.paciente.nombre }
 toogle={this.toogle}
 stateModal={this.state.stateModal}
 idPaciente ={this.state.paciente.id}
                />}
            </React.Fragment>
        )
    }


    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal })
       
    }

    searchExpediente= async(idPaciente)=>{
        localStorage.setItem("idForExpediente",idPaciente)
        this.props.history.push("/paciente")
    }


    realizarRevision=(index)=>{
        
        this.setState({
            paciente: this.state.pacientes[index],
        })
        setTimeout(()=>{this.toogle()},50)
        
    }

}
