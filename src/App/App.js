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
      <div className="App">
        <h1>MUSHROOM MANIA</h1>
        <button className="btn btn-danger" onClick={this.pickAMushroomEvent}>PICK MUSHROOM</button>
        <Basket basket={basket}/>
        <Forest mushrooms={mushrooms}/>
      </div>
    );
  }
}

export default App;
