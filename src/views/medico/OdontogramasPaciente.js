import React, { Component } from 'react'
import { Row, Button, Col, Input, Table } from 'reactstrap'
import direccionIP from '../../util/informacion'
import VisibilityIcon from '@material-ui/icons/Visibility';

import CreateIcon from '@material-ui/icons/Create';
import MenuExpediente from '../../components/MenuExpediente';
import OdontogramaDetails from './OdontogramaDetails';

export default class OdontogramasPaciente extends Component {
    constructor(props) {
        super(props)
        this.state = {
            odontograma: {},
            odontogramas: [],
            stateModal: false,
            piezas:[]
        }

    }
    filtrarOdontogramas = (text) => {
        
        const odontogramas = this.state.odontogramas.filter(
            odontograma => this.dateFormat(odontograma.fecha).includes(text))
        this.setState({
            odontogramas: odontogramas
        })
        if (text === "") {
            this.recuperarOdontogramas()
        }

    }

    recuperarOdontogramas = async () => {

        const listOdontograma = await fetch(direccionIP + 'odontograma/getAll/' + localStorage.getItem("idForExpediente"), {
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
            odontogramas: listOdontograma
        })


    }
    componentDidMount() {
        this.recuperarOdontogramas()

    }

    realizar = () => {
        this.props.history.push("/paciente/odontograma")
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
            <MenuExpediente history={this.props.history} activo={5}>
                <Row style={{ justifyContent: "flex-end", marginRight: 20 }}>
                    <Button onClick={this.realizar} style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary"><CreateIcon></CreateIcon> Realizar</Button>
                </Row>
                <Row style={{ marginTop: 20 }}>

                    <Col>
                        <Input onChange={(e) => {
                            this.filtrarOdontogramas(e.target.value)
                        }} type="text" placeholder="Buscar por fecha..."></Input>
                    </Col>

                    <Table style={{ marginTop: 20 }} responsive bordered>
                        <thead style={{ backgroundColor: "#C9D468" }}>
                            <tr>
                                <th>#</th>
                                <th style={{ textAlign: "center" }}>REALIZADO POR</th>
                                <th style={{ textAlign: "center" }}>FECHA DE REALIZACIÓN</th>


                                <th style={{ textAlign: "center" }}>VER MÁS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.odontogramas.map((odontograma, index) =>
                                <tr key={odontograma.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td align="center">{odontograma.doctor.nombre} {odontograma.doctor.apellido}</td>
                                    <td align="center">{this.dateFormat(odontograma.fecha)}</td>
                                    
                                    <td align="center"><Button color="info" size="sm" onClick={() => this.searchOdontograma(index)}><VisibilityIcon /></Button></td>
                                </tr>
                            )}
                            {this.state.odontogramas.length < 1 && (
                                <tr>
                                    <th colSpan={5} style={{ textAlign: "center" }}>NO HAY REGISTROS</th>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Row>
                {this.state.stateModal &&
                    <OdontogramaDetails
                        title={"DETALLES ODONTOGRAMA  ||  FECHA: " + this.dateFormat(this.state.odontograma.fecha)}
                        toogle={this.toogle}
                        stateModal={this.state.stateModal}
                        piezas={this.state.piezas}
                        detalleGeneral={this.state.odontograma.detalleGeneral}
                    />
                }
            </MenuExpediente>
        )
    }
    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal })
    }

    searchOdontograma = (position) => {
        this.state.piezas.splice(0,32)
        
        var contador = 0
        this.state.odontogramas.forEach((odontograma,index)=>{
            if(position===index){
                for (let i = 11; i < 49; i++) {
                    if(contador===8){
                        i=i+2
                        contador=0
                    }
                    this.state.piezas.push({id:i,["pieza"+i]:odontograma["pieza"+i]})
                    
                    contador++
                }               
                return
            }                   
        })
        
        
        this.setState({
            odontograma: this.state.odontogramas[position],
            piezas:this.state.piezas
        })
        setTimeout(() => { this.toogle() }, 50)
    }
}
