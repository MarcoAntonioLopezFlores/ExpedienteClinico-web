import React, { Component } from 'react'
import MenuDoctor from '../../components/doctor/MenuDoctor'
import ListPacientes from '../../components/doctor/ListPacientes'

export default class VerPacientes extends Component {
    render() {
        return (
            <MenuDoctor history={this.props.history} activo={2}>
                <ListPacientes history={this.props.history}></ListPacientes>
            </MenuDoctor>
        )
    }
}
