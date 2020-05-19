import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
} from 'reactstrap';
import './Modal.scss';

const ModalPoisonous = (props) => {
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
                <p className="modal-p">Oh, NO!</p>
                <p className="modal-p">This mushroom just killed 2 mushrooms in the basket!</p>
                <div><Button className="btn btn-danger m-1" onClick={toggle}>Keep Trying</Button></div>
                <img className="card-img-top modal-img" src={currentMushroom.imgUrl} alt={currentMushroom.name}/>
                  <div className="m-4">
                  </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
  );
};

export default ModalPoisonous;
