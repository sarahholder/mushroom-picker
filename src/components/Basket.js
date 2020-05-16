import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../helpers/propz/mushroomShape';
import Mushroom from './Mushroom';

class Basket extends React.Component {
  static propType = {
    mushroom: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
  // let functionCalls = 0;
  // const countFunction = () => {
  //   functionCalls += 1;
  //   return functionCalls;
  // };
    const { basket } = this.props;
    const buildBasket = basket.map((mushroom, index) => (
      // <Mushroom key={`selectedMushroom + ${countFunction()}`} id={`selectedMushroom${countFunction()}`} mushroom={mushroom}/>
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));
    return (
    <div className="Basket d-flex flex-wrap">
      {buildBasket}
    </div>
    );
  }
}

export default Basket;
