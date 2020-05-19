import React from 'react';
import './App.scss';

// import PropTypes from 'prop-types';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest';
import Basket from '../components/Basket';
import ModalPoisonous from '../components/ModalPoisonous';
import ModalDeadly from '../components/ModalDeadly';
import ModalMagic from '../components/ModalMagic';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    currentMushroom: {},
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });

    const basket = mushroomData.getBasket();
    this.setState({ basket });

    const totalNormalMushrooms = mushroomData.getNormalMushrooms();
    this.setState({ totalNormalMushrooms });
  }

  pickAMushroomEvent = (e) => {
    const currentMushroom = mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket, currentMushroom }, console.log('RENDER', this.state.currentMushroom));
  }

  render() {
    const { mushrooms } = this.state;
    const { basket } = this.state;
    const { currentMushroom } = this.state;
    const { totalNormalMushrooms } = this.state;
    console.log('this is the normal Mushrooms total in Apps', totalNormalMushrooms);

    let modal = '';
    if (currentMushroom.isPoisonous) {
      modal = <div className="d-flex flex-wrap justify-content-center align-items-center"><ModalPoisonous currentMushroom={currentMushroom}/></div>;
    } else if (currentMushroom.isDeadly) {
      modal = <div className="d-flex flex-wrap justify-content-center align-items-center"><ModalDeadly currentMushroom={currentMushroom}/></div>;
    } else if (currentMushroom.isMagic) {
      modal = <div className="d-flex flex-wrap justify-content-center align-items-center"><ModalMagic currentMushroom={currentMushroom}/></div>;
    } else if (basket.length === totalNormalMushrooms) {
      modal = 'Basket is FULL';
    }

    return (
      <div className="App justify-content-center ml-5 mr-5">
          {modal}
      <h1>MUSHROOM MANIA</h1>
        <div className="d-flex flex-wrap align-content-center">
          <div className="row col-3 justify-content-center d-flex flex-wrap">
            <div>
              <button className="btn btn-danger m-2" onClick={this.pickAMushroomEvent}>PICK MUSHROOM</button>
            </div>
            <div>
              <img className="mario" src='https://www.mariowiki.com/images/thumb/e/eb/Mario_Artwork_-_Mario_Party_4.png/200px-Mario_Artwork_-_Mario_Party_4.png' alt='mario'></img>
            </div>
          </div>
          <div className="col-9">
            <Basket className="m-0 p-0 basket" basket={basket}/>
          </div>
          <div className="row">
            <div>
              <Forest className="m-0 p-0 forest" mushrooms={mushrooms}/>
            </div>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
