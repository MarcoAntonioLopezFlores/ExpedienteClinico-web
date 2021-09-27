import React, { Component } from 'react'
import { Row, Col, Input, Button, Label, Table } from 'reactstrap'
import direccionIP from '../../util/informacion'

import { Typography } from '@material-ui/core'
import ModalEstadoDiente from '../../components/doctor/ModalEstadoDiente'
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import MenuExpediente from '../../components/MenuExpediente'
import swal from 'sweetalert'
export default class Odontograma extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pieza: 0,
            stateModal: false,
            piezas: [],
            detalleGeneral: "",
            textButton:"Finalizar Revisión"
        }
        localStorage.setItem("piezas", JSON.stringify([]))
    }

    recuperarPiezas = () => {
        this.setState({
            piezas: JSON.parse(localStorage.getItem('piezas', []))
        })
    }

    componentDidMount() {
        this.recuperarPiezas()
        this.idInterval = setInterval(this.recuperarPiezas, 1500)
    }

    componentWillUnmount() {
        localStorage.removeItem("piezas")
        clearInterval(this.idInterval)
    }
    listar = () => {
        this.props.history.goBack()

    }
    render() {
        return (
            <MenuExpediente history={this.props.history} activo={5}>
                <Row style={{ justifyContent: "center" }}>
                    <Typography component="h4" variant="h5">ODONTOGRAMA</Typography>

                </Row>
                <Row style={{ justifyContent: "flex-end", marginRight: 20 }}>
                    <Button onClick={this.listar} style={{ fontWeight: "bold", borderBottomWidth: 3, borderColor: "gray" }} color="secondary"><ListIcon />Ver Historial</Button>
                </Row>
                <Row style={{ marginTop: "3%", display: "flex", flex: 1 }}>
                    
                    <Col style={{ flex: 1 }}>
                        <Row >

                            <Col style={{ borderRight: "solid", borderRightWidth: "1px" }}>
                                <Row style={{ padding: 25 }}>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>18</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(18)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>17</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(17)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>16</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(16)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>15</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(15)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>14</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(14)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>13</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(13)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>12</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(12)}
                                        >X</Button>
                                    </Col >
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>11</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(11)}
                                        >X</Button>
                                    </Col>
                                </Row>



                            </Col>
                            <Col >
                                <Row style={{ padding: 25 }}>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>21</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(21)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>22</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(22)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>23</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(23)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>24</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(24)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>25</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(25)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>26</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(26)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>27</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(27)}
                                        >X</Button>
                                    </Col >
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>28</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(28)}
                                        >X</Button>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                        <Row style={{ borderTop: "solid", borderTopWidth: "1px" }}>
                            <Col style={{ borderRight: "solid", borderRightWidth: "1px" }}>
                                <Row style={{ padding: 25 }}>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>48</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(48)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>47</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(47)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>46</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(46)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>45</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(45)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>44</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(44)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>43</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(43)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>42</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(42)}
                                        >X</Button>
                                    </Col >
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>41</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(41)}
                                        >X</Button>
                                    </Col>
                                </Row>

                            </Col>
                            <Col >
                                <Row style={{ padding: 25 }}>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>31</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(31)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>32</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(32)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>33</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(33)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>34</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(34)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>35</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(35)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>36</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(36)}
                                        >X</Button>
                                    </Col>
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>37</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(37)}
                                        >X</Button>
                                    </Col >
                                    <Col style={{ textAlign: "center" }}>
                                        <Label>38</Label>
                                        <Button
                                            style={{ border: "solid", backgroundColor: "white", borderColor: "brown" }}
                                            onClick={() => this.chosePieza(38)}
                                        >X</Button>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row style={{ marginTop: 20 }}>
                    <Col>
                        <Row style={{ justifyContent: "center" }}>
                            <Typography component="h5" variant="h6">ESTADO DE LOS DIENTES</Typography>

                        </Row>
                        <Row>
                            <Table style={{ marginTop: 20 }} responsive bordered>
                                <thead style={{ backgroundColor: "#C9D468" }}>
                                    <tr>
                                        <th># PIEZA</th>
                                        <th style={{ textAlign: "center" }}>ESTADO</th>
                                        <th style={{ textAlign: "center" }}>ELIMINAR</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.state.piezas.map((pieza, index) =>
                                        <tr key={pieza.id}>
                                            <th scope="row">{pieza.id}</th>
                                            <th scope="row">{pieza["pieza" + pieza.id]}</th>
                                            <td align="center"><Button color="danger" size="sm" onClick={() => this.removeState(index)}><DeleteIcon></DeleteIcon></Button></td>
                                        </tr>
                                    )}
                                    {this.state.piezas.length < 1 && (
                                        <tr>
                                            <th colSpan={5} style={{ textAlign: "center" }}>NO HAY REGISTROS</th>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>

                        </Row>
                    </Col>
                    <Col>
                        <Row style={{ justifyContent: "center" }}>
                            <Typography component="h5" variant="h6">DETALLE GENERAL</Typography>
                        </Row>
                        <Row style={{ margin: 20 }}>
                            <Input type="textarea" onChange={(e) => {
                                this.setState({
                                    detalleGeneral: e.target.value
                                })
                            }} value={this.state.detalleGeneral}>
                            </Input>
                        </Row>
                        <Row style={{ marginTop: 20 }}>
                            <div style={{ margin: "auto" }}>
                        <Button onClick={this.saveOdontograma} type="button" className="btn btn-md btn-block" style={{ backgroundColor: "#C9D468", fontWeight: "bold", borderBottomWidth: 3, borderColor: "green" }}>{this.state.textButton}</Button>
                            </div>
                        </Row>
                    </Col>
                </Row>
                {this.state.stateModal &&
                    <ModalEstadoDiente
                        title={"ESTADO DE LA PIEZA: " + this.state.pieza}
                        toogle={this.toogle}
                        stateModal={this.state.stateModal}
                        pieza={this.state.pieza}
                    />
                }
            </MenuExpediente>
        )
    }
    toogle = () => {
        this.setState({ stateModal: !this.state.stateModal })
        
    }

    chosePieza = (num) => {

        this.setState({
            pieza: num,
        })
        setTimeout(() => { this.toogle() }, 50)

    }

    removeState = (index) => {

        var piezas = JSON.parse(localStorage.getItem('piezas'))

        piezas.splice(index, 1)

        localStorage.setItem('piezas', JSON.stringify(piezas))

    }

    saveOdontograma = async () => {
        this.setState({
            textButton:"Finalizando..."
        })
        var content = ""
        this.state.piezas.forEach((pieza) => {
            content = `"pieza${pieza.id}":"${pieza["pieza" + pieza.id]}"`.concat(",") + content
        })

        const data = JSON.parse("{" + content.concat(`"detalleGeneral":"${this.state.detalleGeneral}","paciente":{"id":${localStorage.getItem('idForExpediente')}},"doctor":{"id":${JSON.parse(localStorage.getItem('usuario')).id}}}`))


        
        const response = await fetch(direccionIP + "odontograma/registrar", {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(resp => resp);

        
        if (response.status === 200) {
            swal({
                title: "¡EXITO!",
                text: "La revisión se registró con éxito",
                icon: "success",
            }).then(
                this.listar()
            );
        } else {
            swal({
                title: "¡ERROR!",
                text: "Ocurrio un error",
                icon: "error",
            });
        }
        this.setState({
            textButton:"Finalizar Revisión"
        })
    }
}
