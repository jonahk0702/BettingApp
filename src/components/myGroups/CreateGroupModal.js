import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Modal, Button, InputGroup, FormControl} from "react-bootstrap";

class CreateGroupModal extends React.Component{

    handleChangeName = () => {

    }

render(){
    console.log("This has loaded");
    return(
        <Modal
         {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closebutton>
                <h2 className = "modal-title">Please enter the following details:</h2>
            </Modal.Header>
            <Modal.Body className="tc">
                <h2>Please enter the following details:</h2>
                <h3 className="tl">Group name: </h3>
                <InputGroup className="mb-3 sm">
                    <FormControl onChange={this.handleChangeName} aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                </InputGroup>
            </Modal.Body>
        </Modal>
    )
}

}

export default CreateGroupModal;