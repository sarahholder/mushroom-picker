import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest';
import Basket from '../components/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });

    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  pickAMushroomEvent = (e) => {
    mushroomData.pickAMushroom();
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  render() {
    const { mushrooms } = this.state;
    const { basket } = this.state;

    return (
      <div className="App justify-content-center ml-5 mr-5">
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
