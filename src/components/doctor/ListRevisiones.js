import React, { Component } from 'react'
import MenuExpediente from '../MenuExpediente'
import { Row, Col, Input, Table, Button } from 'reactstrap'
import direccionIP from '../../util/informacion'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DetailsRevision from './DetailsRevision';
export default class ListRevisiones extends Component {
    constructor(props) {
        super(props)
        this.state = {
            revision: {},
            revisiones: [],
            stateModal: false
        }

    }

    filtrarRevisiones = (text) => {
        
        const revisiones = this.state.revisiones.filter(
            revision => this.dateFormat(revision.fecha).includes(text))
        this.setState({
            revisiones: revisiones
        })
        if(text===""){
            this.recuperarRevisiones()
        }

    }

    recuperarRevisiones = async () => {
        
            const listRevisiones = await fetch(direccionIP + 'revision/getAll/' + localStorage.getItem("idForExpediente"), {
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
                revisiones: listRevisiones
            })

        

        
    }
    componentDidMount() {
        this.recuperarRevisiones()
    }


    render() {
        return (
            <MenuExpediente history={this.props.history} activo={4}>
                <React.Fragment>
                    <Row style={{ marginTop: 20 }}>
                        <Col>
                            <Input onChange={(e) => {
                                this.filtrarRevisiones(e.target.value)
                            }} type="text" placeholder="Buscar por fecha..."></Input>
                        </Col>
                    </Row>
                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th>#</th>
                                <th style={{ textAlign: "center" }}>REVISIÓN REALIZADA POR</th>
                                <th style={{ textAlign: "center" }}>FECHA DE REALIZACIÓN</th>

                                <th style={{ textAlign: "center" }}>VER MÁS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.revisiones.map((revision, index) =>
                                <tr key={revision.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td align="center">{revision.doctor.nombre} {revision.doctor.apellido}</td>
                                    <td align="center">{this.dateFormat(revision.fecha)}</td>

                                    <td align="center"><Button color="info" size="sm" onClick={() => this.searchRevison(index)}><VisibilityIcon /></Button></td>
                                </tr>
                            )}
                            {this.state.revisiones.length < 1 && (
                                <tr>
                                    <th colSpan={5} style={{ textAlign: "center" }}>NO HAY REGISTROS</th>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    {this.state.stateModal &&
                        <DetailsRevision
                            title={"REVISION FISICA"}
                            toogle={this.toogle}
                            stateModal={this.state.stateModal}
                            revision={this.state.revision}
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

    searchRevison = (index) => {
        console.log(this.state.revisiones[index])
        this.setState({
            revision: this.state.revisiones[index],
        })
        setTimeout(() => { this.toogle() }, 50)

    }
}
