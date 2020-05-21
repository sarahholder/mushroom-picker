import React, { useState } from 'react';
import {
  Modal,
  ModalBody,
} from 'reactstrap';
// import mushroomData from '../helpers/data/mushroomData';
import './Modal.scss';

const ModalFullBasket = (props) => {
  const [open, setOpen] = useState(true);
  const [focusAfterClose] = useState(true);
  const toggle = () => setOpen(!open);
  const { currentMushroom } = props;

  return (
        <div className="modal">
          <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalBody>
              <div>
              {
                  currentMushroom.isMagic ? (
                  <div>
                    <h2 className="m-1 modal-h2">{currentMushroom.name}</h2>
                    <h3 className="modal-p m-1"> Magic Mushroom</h3>
                    <h3 className="modal-p m-1">The magic mushroom finished filling the basket!</h3>
                    </div>) : (
                  <div>
                    <h2 className="m-1 modal-h2">FULL Basket</h2>
                    <h3 className="modal-p m-1">One of each types of normal mushrooms from the forest collected.</h3>
                    </div>)
                }
                <h2 className="modal-p m-0">You WIN!</h2>
                 <div><button className="btn btn-danger m-1" onClick={toggle}>Play Again</button></div>
                {
                  currentMushroom.isMagic ? (<img className="magic" src={currentMushroom.imgUrl} alt="magic"/>) : (<div className="mario-clap"></div>)
                }
              </div>
            </ModalBody>
          </Modal>
        </div>
  );
};

export default ModalFullBasket;
