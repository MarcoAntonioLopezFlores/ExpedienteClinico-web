import React, { Component } from 'react'
import { Row, Col, Table, Input, Button } from 'reactstrap'
import direccionIP from '../../util/informacion'
import VisibilityIcon from '@material-ui/icons/Visibility';
import MenuExpediente from '../MenuExpediente';
import CreateIcon from '@material-ui/icons/Create';
import AddNote from './AddNote';
import ViewNote from './ViewNote';

export default class ListNotas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nota: {},
            notas: [],
            stateModal: false,
            stateModalMake:false
        }

    }
    filtrarNotas = (text) => {
        clearInterval(this.idInterval)
        const notas = this.state.notas.filter(
            nota => this.dateFormat(nota.fecha).includes(text))
        this.setState({
            notas: notas
        })
        if (text === "") {
            this.idInterval = setInterval(this.recuperarNotas, 1500)
        }

    }

    recuperarNotas = async () => {

        const listNota = await fetch(direccionIP + 'nota/getAll/' + localStorage.getItem("idForExpediente"), {
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
            notas: listNota
        })


    }
    componentDidMount() {
        this.recuperarNotas()
        this.idInterval = setInterval(this.recuperarNotas, 1500)
    }
    

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }

    realizar = () => {
        this.setState({ stateModalMake: !this.state.stateModalMake })
    }

    dateFormat = (fechaDoc) => {
        const fecha = new Date(fechaDoc);
        const dia = fecha.getDate() < 10 ? "0" + (fecha.getDate()) : fecha.getDate();
        const mes = fecha.getMonth() + 1 < 10 ? "0" + (fecha.getMonth() + 1) : fecha.getMonth() + 1
        const anio = fecha.getFullYear()

        return anio + "/" + mes + "/" + dia
    }
    render() {
        return (
            <MenuExpediente history={this.props.history} activo={2}>
                <Row style={{ justifyContent: "flex-end", marginRight: 20 }}>
                    <Button onClick={this.realizar} style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary"><CreateIcon></CreateIcon> Realizar Nota</Button>
                </Row>
                <Row style={{ marginTop: 20 }}>

                    <Col>
                        <Input onChange={(e) => {
                            this.filtrarNotas(e.target.value)
                        }} type="text" placeholder="Buscar por fecha..."></Input>
                    </Col>

                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th>#</th>
                                <th style={{ textAlign: "center" }}>TITULO</th>
                                <th style={{ textAlign: "center" }}>FECHA DE REALIZACIÓN</th>
                                <th style={{ textAlign: "center" }}>REALIZADO POR</th>

                                <th style={{ textAlign: "center" }}>VER MÁS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.notas.map((nota, index) =>
                                <tr key={nota.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td align="center">{nota.titulo}</td>
                                    <td align="center">{this.dateFormat(nota.fecha)}</td>
                                    <td align="center">{nota.doctor.nombre} {nota.doctor.apellido}</td>
                                    <td align="center"><Button color="info" size="sm" onClick={() => this.searchNota(index)}><VisibilityIcon /></Button></td>
                                </tr>
                            )}
                            {this.state.notas.length < 1 && (
                                <tr>
                                    <th colSpan={5} style={{ textAlign: "center" }}>NO HAY REGISTROS</th>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Row>
                {this.state.stateModal &&
                    <ViewNote
                        title={"NOTA EVOLUTIVA DEL "+this.dateFormat(this.state.nota.fecha)}
                        toogle={this.toogle}
                        stateModal={this.state.stateModal}
                        nota={this.state.nota}
                />}
                {this.state.stateModalMake &&
                    <AddNote
                        title={"NOTA EVOLUTIVA || FECHA: "+this.dateFormat(new Date())}
                        toogle={this.realizar}
                        stateModal={this.state.stateModalMake}
                        
                />}
            </MenuExpediente>
        )
    }
    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal })

    }

    searchNota = (index) => {
        
        this.setState({
            nota: this.state.notas[index],
        })
        setTimeout(() => { this.toogle() }, 50)

    }

}
