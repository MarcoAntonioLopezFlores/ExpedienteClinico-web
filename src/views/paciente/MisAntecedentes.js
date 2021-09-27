import React, { Component } from 'react'
import MenuPaciente from '../../components/MenuPaciente'

import direccionIP from '../../util/informacion'
import RegistrarFichaClinica from './RegistrarFichaClinica'
import { Row } from 'reactstrap'
import { Typography } from '@material-ui/core'
export default class MisAntecedentes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ficha: null,
            enfermedades: [],
            enfermedadesFamiliar: [],
            cirugias: []

        }

    }

    recoverExpediente = async () => {
        try {
            const expediente = await fetch(direccionIP + 'expediente/obtenerExpediente/' + JSON.parse(localStorage.getItem('usuario')).id, {
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
                ficha: expediente.ficha,
                enfermedades: expediente.ficha.enfermedades,
                enfermedadesFamiliar: expediente.ficha.enfermedadesFamiliar,
                cirugias: expediente.ficha.intervenciones
            })

        } catch (e) {

        }
    }



    componentDidMount() {
        this.recoverExpediente()
    }


    render() {
        if (this.state.ficha === null || this.state.ficha === undefined) {
            return (<MenuPaciente history={this.props.history} activo={4}>
                <RegistrarFichaClinica history={this.props.history}></RegistrarFichaClinica>
            </MenuPaciente>)
        } else {
            return (
                <MenuPaciente history={this.props.history} activo={4}>
                    <Row style={{ justifyContent: "center" }}>
                        <Typography variant="h5" component="h2">YA HAS LLENADO TUS ANTECEDENTES CLINICOS</Typography>
                    </Row>
                </MenuPaciente>
            )
        }

    }
}
