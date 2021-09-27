import React, { Component } from 'react'
import { Row, Col, Table, Input, Button } from 'reactstrap'
import direccionIP from '../../util/informacion'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DetailsCuestionario from './DetailsCuestionario';
import MenuExpediente from '../MenuExpediente';


export default class ListCuestionariosPaciente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cuestionario: {},
            cuestionarios: [],
            stateModal: false
        }

    }

    filtrarCuestionarios = (text) => {
       
        const cuestionario = this.state.cuestionarios.filter(
            cuestionario => this.dateFormat(cuestionario.fecha).includes(text))
        this.setState({
            cuestionarios: cuestionario
        })
        if(text===""){
            this.recuperarCuestionarios()
        }

    }

    recuperarCuestionarios = async () => {

    const listCuestionario = await fetch(direccionIP + 'cuestionario/getAll/' + localStorage.getItem("idForExpediente"), {
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
        cuestionarios: listCuestionario
    })

    
    }
    componentDidMount() {
        this.recuperarCuestionarios()

    }

    render() {
        return (
            <MenuExpediente history={this.props.history}>
                <React.Fragment>
                    <Row style={{ marginTop: 20 }}>
                        <Col>
                            <Input onChange={(e) => {
                                this.filtrarCuestionarios(e.target.value)
                            }} type="text" placeholder="Buscar por fecha..."></Input>
                        </Col>
                    </Row>
                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th>#</th>
                                <th style={{ textAlign: "center" }}>MOTIVO</th>
                                <th style={{ textAlign: "center" }}>FECHA DE REALIZACIÓN</th>


                                <th style={{ textAlign: "center" }}>VER MÁS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cuestionarios.map((cuestionario, index) =>
                                <tr key={cuestionario.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td align="center">{cuestionario.motivo}</td>
                                    <td align="center">{this.dateFormat(cuestionario.fecha)}</td>

                                    <td align="center"><Button color="info" size="sm" onClick={() => this.searchCuestionario(index)}><VisibilityIcon /></Button></td>
                                </tr>
                            )}
                            {this.state.cuestionarios.length < 1 && (
                                <tr>
                                    <th colSpan={5} style={{ textAlign: "center" }}>NO HAY REGISTROS</th>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    {this.state.stateModal &&
                        <DetailsCuestionario
                            title={"CUESTIONARIO SOBRE DOLOR"}
                            toogle={this.toogle}
                            stateModal={this.state.stateModal}
                            cuestionario={this.state.cuestionario}
                        />}
                </React.Fragment>
            </MenuExpediente>
        )
    }

    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal })
        
    }

    dateFormat = (fechaDoc) => {
        const fecha = new Date(fechaDoc);
        const dia = fecha.getDate() < 10 ? "0" + (fecha.getDate()) : fecha.getDate();
        const mes = fecha.getMonth() + 1 < 10 ? "0" + (fecha.getMonth() + 1) : fecha.getMonth() + 1
        const anio = fecha.getFullYear()

        return anio + "/" + mes + "/" + dia
    }

    searchCuestionario = (index) => {
        
        this.setState({
            cuestionario: this.state.cuestionarios[index],
        })
        setTimeout(() => { this.toogle() }, 50)

    }

}
