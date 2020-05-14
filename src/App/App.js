import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest';

class App extends React.Component {
  state = {
    mushrooms: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }

  render() {
    const { mushrooms } = this.state;

    return (
      <div className="App">
        <h1>MUSHROOM MANIA</h1>
        <Forest mushrooms={mushrooms}/>
      </div>
    );
  }
}

export default App;
