import React, { Component } from 'react'
import Menu from '../../components/admin/Menu'
import ListPacientesForAdmin from '../../components/admin/ListPacientesForAdmin'

export default class Pacientes extends Component {
    render() {
        return (
            <Menu history={this.props.history} activo={2}>
                <ListPacientesForAdmin></ListPacientesForAdmin>
            </Menu>
        )
    }
}
