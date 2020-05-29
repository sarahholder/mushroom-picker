import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest';
import Basket from '../components/Basket';
import ModalPoisonous from '../components/ModalPoisonous';
import ModalDeadly from '../components/ModalDeadly';
import ModalFullBasket from '../components/ModalFullBasket';
import mushroomShape from '../helpers/propz/mushroomShape';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    currentMushroom: {},
  }

  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });

    const basket = mushroomData.getBasket();
    this.setState({ basket });

    const totalNormalMushrooms = mushroomData.getNormalMushrooms();
    this.setState({ totalNormalMushrooms });
  }

  restart = (e) => {
    e.preventDefault();
    this.setState({
      mushroom: [],
      basket: [],
      currentMushroom: {},
    });
    mushroomData.emptyBasket();
    mushroomData.getBasket();
    mushroomData.getMushrooms();
  }


  pickAMushroomEvent = (e) => {
    e.preventDefault();
    const currentMushroom = mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket, currentMushroom });
  }

  render() {
    const { mushrooms } = this.state;
    const { currentMushroom } = this.state;
    const { basket } = this.state;
    const { totalNormalMushrooms } = this.state;

    let modal = '';
    if (currentMushroom.isPoisonous) {
      modal = <div className="d-flex flex-wrap justify-content-center align-items-center"><ModalPoisonous currentMushroom={currentMushroom}/></div>;
    } else if (currentMushroom.isDeadly) {
      modal = <div className="d-flex flex-wrap justify-content-center align-items-center"><ModalDeadly currentMushroom={currentMushroom}/></div>;
    }

    return (
      <div className="App justify-content-center ml-5 mr-5">
          {modal}
      {
        // eslint-disable-next-line max-len
        basket.length >= totalNormalMushrooms ? (<div className="d-flex flex-wrap justify-content-center align-items-center"><ModalFullBasket totalNormalMushrooms={totalNormalMushrooms} currentMushroom={currentMushroom}/></div>) : (<div></div>)
      }
      <h1>MUSHROOM MANIA</h1>
        <div className="d-flex flex-wrap align-content-center">
          <div className="row col-3 justify-content-center d-flex flex-wrap">
            <div>
              {
              // eslint-disable-next-line max-len
              basket.length !== totalNormalMushrooms || basket.length === 0 ? (<button className="btn btn-danger m-2" onClick={this.pickAMushroomEvent}>PICK MUSHROOM</button>) : (<button className="btn btn-danger ml-4 mr-4 mt-2 mb-2 " onClick={this.restart}>RESTART</button>)
              }
            </div>
            <div>
              <img className="mario" src='https://www.mariowiki.com/images/thumb/e/eb/Mario_Artwork_-_Mario_Party_4.png/200px-Mario_Artwork_-_Mario_Party_4.png' alt='mario'></img>
            </div>
          </div>
          <div className="col-9">
            <Basket className="m-0 p-0 basket" basket={basket} totalNormalMushrooms={totalNormalMushrooms}/>
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
