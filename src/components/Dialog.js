import React from 'react'
import ReactDOM from 'react-dom'
import { Modal, ModalHeader} from 'reactstrap';


function Dialog(props) {
    if (!props.stateModal) {
      return null;
    }
  
    return ReactDOM.createPortal(
     
    <Modal isOpen={props.stateModal} style={{ marginTop: 90, marginRight:"20%"}}>
        <ModalHeader toggle={props.toogle} >{props.title}</ModalHeader>
          {props.children}
    </Modal> ,
      document.getElementById('modal')
    );
  }
  
export default Dialog;
