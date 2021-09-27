import React, { Component } from 'react'
import direccionIP from '../../util/informacion'
import { Row, Col, Input, Table, Button } from 'reactstrap'
import GetAppIcon from '@material-ui/icons/GetApp';
export default class ListDocumentos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            docs: []
        }

    }
    recuperarDocumentos = async () => {
     
        const ListDocumentos = await fetch(direccionIP + 'getAllFiles/'+localStorage.getItem('idForExpediente'), {
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
            docs: ListDocumentos
        })
     
        
    }
    componentDidMount() {
        this.recuperarDocumentos()
        this.idInterval = setInterval(this.recuperarDocumentos, 1500)
    }

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }

    filtrarDocumentos = (text) => {
        clearInterval(this.idInterval)
        const documentos = this.state.docs.filter(doc => doc.fileName.includes(text))
        this.setState({
            docs: documentos
        })
        if (text === "") {
            this.idInterval = setInterval(this.recuperarDocumentos, 1500)
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row style={{ marginTop: 20 }}>
                    <Col>
                        <Input onChange={(e) => {
                            
                            this.filtrarDocumentos(e.target.value)
                        }} type="text" placeholder="Buscar por nombre..." value={this.state.textoBuscar}></Input>
                    </Col>
                </Row>
                <Table style={{ marginTop: 20 }} responsive bordered>
                    <thead style={{ backgroundColor: "#C9D468" }}>
                        <tr>
                            <th>#</th>
                            <th style={{ textAlign: "center" }}>NOMBRE</th>
                            <th style={{ textAlign: "center" }}>FECHA DE CARGA</th>                                            
                            <th style={{ textAlign: "center" }}>DESCARGAR</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.docs.map((doc, index) =>
                            <tr key={doc.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{doc.fileName}</td>
                                <td>{this.dateFormat(doc.fecha)}</td>
                                <td align="center"><Button color="info" size="sm" onClick={()=>{this.download(index)}}><GetAppIcon /></Button></td>
                            </tr>
                        )}
                        {this.state.docs.length < 1 && (
                            <tr>
                                <th colSpan={5} style={{ textAlign: "center" }}>NO HAY DOCUMENTOS</th>
                            </tr>
                        )}
                    </tbody>
                </Table>
             
                    

            </React.Fragment>
        )
    }

    download=(index)=>{
        const documento = this.state.docs[index]
        fetch(direccionIP + 'downloadFile/'+documento.id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(response => {
            const filename =  documento.fileName;
            
            response.blob().then(blob => {
              let url=  window.URL.createObjectURL(blob);
              let a = document.createElement('a');
              a.href = url;
              a.download = filename;
              a.click();
            });  
       });   
    }
    dateFormat=(fechaDoc)=>{
        const fecha = new Date(fechaDoc);
        const dia=fecha.getDate()<10?"0"+(fecha.getDate()):fecha.getDate();
            const mes=fecha.getMonth()+1<10?"0"+(fecha.getMonth()+1):fecha.getMonth()+1
            const anio=fecha.getFullYear()
            
            return anio+"/"+mes+"/"+dia
    }
}
