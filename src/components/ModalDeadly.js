import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
} from 'reactstrap';
import './Modal.scss';

const ModalDeadly = (props) => {
  const [open, setOpen] = useState(true);
  const [focusAfterClose] = useState(true);
  const { currentMushroom } = props;

  const toggle = () => setOpen(!open);

  return (
        <div class="modal">
          <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalBody>
              <div>
                <h2 className="m-1 modal-h2">{currentMushroom.name}</h2>
                <audio><source src="https://www.myinstants.com/instant/mario-64-bowsers-laugh-82961/embed/" type="audio/mpeg"/>HELLO</audio>
                <h3 className="modal-p m-1">DEADLY</h3>
                <h2 className="modal-p m-0">GAME OVER</h2>
                <div><Button className="btn btn-danger m-1" onClick={toggle}>Close</Button></div>
                <img className="card-img-top bowser" src="https://i.pinimg.com/originals/54/86/d7/5486d77aaa1899589aeb4dcf4b7c6304.png" alt={currentMushroom.name}/>
                  <div className="m-4">
                  </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
  );
};

export default ModalDeadly;
