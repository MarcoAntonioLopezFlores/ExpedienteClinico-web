import React from 'react'
import MenuDoctor from '../../components/doctor/MenuDoctor.js'
import { Row, Button } from 'reactstrap'
import { Typography } from '@material-ui/core'
import ChangePassDoctor from '../../components/doctor/ChangePassDoctor.js'

export default class HomeDoctor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nombre: JSON.parse(localStorage.getItem('usuario')).nombre,
            apellido: JSON.parse(localStorage.getItem('usuario')).apellido,
            stateModalChangePass:false
        }
    }
    render() {
        return (
            <MenuDoctor history={this.props.history} activo={1}>
                <Row style={{ justifyContent: "center" }}>
                    <Typography component="h4" variant="h5">BIENVENIDO</Typography>

                </Row>
                <Row style={{ justifyContent: "center" }}>
                    <Typography component="h4" variant="h5">{this.state.nombre} {this.state.apellido}</Typography>

                </Row>
                <Row style={{ marginTop: 20 }}>
                    <div style={{ margin: "auto" }}>
                        <Button onClick={this.tooglePass} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>Actualizar Contraseña</Button>
                    </div>
                </Row>

                {
                    this.state.stateModalChangePass &&
                    <ChangePassDoctor
                        title={"CAMBIO DE CONTRASEÑA"}
                        toogle={this.tooglePass}
                        stateModal={this.state.stateModalChangePass}

                    />
                }
            </MenuDoctor>
        )
        
    }

    tooglePass = () => {
        this.setState({ stateModalChangePass: !this.state.stateModalChangePass })
        
    }
}
