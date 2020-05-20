
import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
} from 'reactstrap';
import './Modal.scss';

const ModalMagic = (props) => {
  const [open, setOpen] = useState(true);
  const [focusAfterClose] = useState(true);
  const { currentMushroom } = props;

  const toggle = () => setOpen(!open);

  return (
        <div className="modal">
          <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalBody>
              <div>
                <h2 className="m-1 modal-h2">{currentMushroom.name}</h2>
                <audio autoPlay loop><source src="https://www.myinstants.com/instant/mario-64-bowsers-laugh-82961/embed/" type="audio/mpeg"/>HELLO</audio>
                <h3 className="modal-p m-1">You picked a Magic Mushroom</h3>
                <h3 className="modal-p m-1">One of each NORMAL mushroom added to the Basket</h3>
                <h2 className="modal-p m-0">You WIN!</h2>
                <div><Button className="btn btn-danger m-1" onClick={toggle}>Play Again</Button></div>
                <img className="card-img-top magic" src={currentMushroom.imgUrl} alt={currentMushroom.name}/>
                  <div className="m-4">
                  </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
  );
};

export default ModalMagic;
