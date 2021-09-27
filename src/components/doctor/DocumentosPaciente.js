import React, { Component } from 'react'
import MenuExpediente from '../MenuExpediente'
import { Input } from 'reactstrap'
import direccionIP from '../../util/informacion'
import ListDocumentos from './ListDocumentos';
import swal from 'sweetalert';

export default class DocumentosPaciente extends Component {
    

    onFileChangeHandler = async (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        
        
       const response = await fetch(direccionIP+'subirDocumento/'+localStorage.getItem('idForExpediente'), {
            method: 'post',
            body: formData,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        }).then(res => res);

        
        if(response.status===200){
            swal({
                title: "¡EXITO!",
                text: "El documento se registró con éxito",
                icon: "success",
              });            
        }else{
            swal({
                title: "¡ERROR!",
                text: "El nombre del archivo ya existe",
                icon: "error",
              });
        }
    };
    
    render() {
        return (
            <MenuExpediente history={this.props.history} activo={3}>
                <Input style={{height:"7vh"}} type="file" className="form-control" onChange={this.onFileChangeHandler}/>
                <ListDocumentos></ListDocumentos>
            </MenuExpediente>
        )
    }
}
