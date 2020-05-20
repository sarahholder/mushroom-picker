
import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
} from 'reactstrap';
import './Modal.scss';

const ModalFullBasket = (props) => {
  const [open, setOpen] = useState(true);
  const [focusAfterClose] = useState(true);
  const { currentMushroom } = props;

  const toggle = () => setOpen(!open);

  return (
        <div className="modal">
          <Modal returnFocusAfterClose={focusAfterClose} isOpen={open} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <ModalBody>
              <div>
                <h2 className="m-1 modal-h2">FULL Basket</h2>
                <div ><iframe title="mario" src="https://giphy.com/embed/fAnEC88LccN7a" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/boss-childhood-fAnEC88LccN7a">via GIPHY</a></p>
                <h3 className="modal-p m-1">You collect one of each types of mushrooms in the forest.</h3>
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

export default ModalFullBasket;
