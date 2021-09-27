import React, { Component } from 'react'
import { Row, Col, Table, Input, Button } from 'reactstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import swal from 'sweetalert';
import CreateIcon from '@material-ui/icons/Create';
import UpdateMedico from './UpdateMedico';
import direccionIP from '../../util/informacion'

export default class ListMedicos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctor:{},
            doctores: [],
            stateModal: false
        }

    }

    filtrarMedicos = (text) => {
        clearInterval(this.idInterval)
        const doctores = this.state.doctores.filter(doctor => doctor.nombre.includes(text))
        this.setState({
            doctores: doctores
        })
        if (text === "") {
            this.idInterval = setInterval(this.recuperarMedicos, 1500)
        }
    }

    recuperarMedicos = async () => {
        
        const listDoctores = await fetch(direccionIP + 'obtenerDoctores', {
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
            doctores: listDoctores
        })
    }
    componentDidMount() {
        this.recuperarMedicos()
        this.idInterval = setInterval(this.recuperarMedicos, 1500)
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
                            
                            this.filtrarMedicos(e.target.value)
                        }} type="text" placeholder="Buscar por nombre..." value={this.state.textoBuscar}></Input>
                    </Col>
                </Row>
                <Table style={{ marginTop: 20 }} responsive bordered>
                    <thead style={{ backgroundColor: "#C9D468" }}>
                        <tr>
                            <th>#</th>
                            <th style={{ textAlign: "center" }}>NOMBRE(s)</th>
                            <th style={{ textAlign: "center" }}>APELLIDO(s)</th>
                            <th style={{ textAlign: "center" }}>ESPECIALIDAD</th>
                            <th style={{ textAlign: "center" }}>CORREO</th>
                            <th style={{ textAlign: "center" }}>ACTUALIZAR</th>
                            <th astyle={{ textAlign: "center" }}>ELIMINAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.doctores.map((doctor, index) =>
                            <tr key={doctor.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{doctor.nombre}</td>
                                <td>{doctor.apellido}</td>
                                <td>{doctor.especialidad}</td>
                                <td>{doctor.usuario.email}</td>
                                <td align="center"><Button color="info" size="sm" onClick={()=>{this.searchDoctor(index)}}><CreateIcon /></Button></td>
                                <td align="center"><Button color="danger" size="sm" onClick={() => { this.eliminarMedico(doctor.id) }}><DeleteIcon /></Button></td>
                            </tr>
                        )}
                        {this.state.doctores.length < 1 && (
                            <tr>
                                <th colSpan={7} style={{ textAlign: "center" }}>NO HAY REGISTROS</th>
                            </tr>
                        )}
                    </tbody>
                </Table>

                {this.state.stateModal &&
                    <UpdateMedico
                    title={"Actualizar Medico"}
                    toogle={this.toogle}
                    stateModal={this.state.stateModal}
                    doctor ={this.state.doctor}/>
                }
             
                    

            </React.Fragment>
        )
    }
    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal })
        
    }

    searchDoctor=(index)=>{
        
        this.setState({
            doctor: this.state.doctores[index],
        })
        setTimeout(()=>{this.toogle()},50)
        
    }

    eliminarMedico = (id) => {


        swal({
            title: "¿Esta seguro de hacer esto?",
            text: "¡Una vez eliminado no podra recuperar esta información!",
            icon: "warning",
            buttons: ["CANCELAR", "CONTINUAR"],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                
                const response = await fetch(direccionIP + 'eliminarDoctor/' + id, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    }
                }).then(
                    response => response.json(),

                )
                if (response) {
                    swal("El registro ha sido eliminado con éxito", {
                        icon: "success",
                    });
                } else {
                    swal("Ocurrio un error al eliminar", {
                        icon: "error",
                    });
                }

            }
        });


    }

}
