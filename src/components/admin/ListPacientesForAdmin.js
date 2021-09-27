import React, { Component } from 'react'
import { Row, Col, Table, Input, Button } from 'reactstrap'
import direccionIP from '../../util/informacion'
import FavoriteIcon from '@material-ui/icons/Favorite';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import InsertAntecedente from './InsertAntecedente';
import InsertCuestionario from './InsertCuestionario';
export default class ListPacientesForAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paciente:{},
            pacientes: [],
            stateModal:false,
            stateModalCuestionario:false
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
                            
                            
                            <th style={{ textAlign: "center" }}>ANTECEDENTES</th>
                            <th style={{ textAlign: "center" }}>CUESTIONARIO SOBRE DOLOR</th>
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
                                
                                <td align="center"><Button color="primary" size="sm" onClick={()=>this.realizarRevision(index)}><AssignmentIndIcon/></Button></td>
                                <td align="center"><Button color="danger" size="sm" onClick={()=>this.realizarCuestionario(index)}><FavoriteIcon/></Button></td>
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
                <InsertAntecedente
                    title={"Registro de Antecedentes Clinicos del Paciente: "+ this.state.paciente.nombre }
                    toogle={this.toogle}
                    stateModal={this.state.stateModal}
                    idPaciente ={this.state.paciente.id}
                />}
                {this.state.stateModalCuestionario &&
                <InsertCuestionario
                    title={"Registro de Cuestionario sobre Dolor del Paciente: "+ this.state.paciente.nombre }
                    toogle={this.handleToogleCuestionario}
                    stateModal={this.state.stateModalCuestionario}
                    idPaciente ={this.state.paciente.id}
                />}
            </React.Fragment>
        )
    }


    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal }) 
    }

    handleToogleCuestionario=()=>{
        this.setState({ stateModalCuestionario: !this.state.stateModalCuestionario }) 
    }

    realizarCuestionario=(index)=>{
        
        this.setState({
            paciente: this.state.pacientes[index],
        })
        setTimeout(()=>{this.handleToogleCuestionario()},50)
        
    }

    realizarRevision=(index)=>{
        
        this.setState({
            paciente: this.state.pacientes[index],
        })
        setTimeout(()=>{this.toogle()},50)
        
    }

}