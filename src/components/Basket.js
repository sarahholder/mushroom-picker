import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../helpers/propz/mushroomShape';
import Mushroom from './Mushroom';

class Basket extends React.Component {
  static propType = {
    mushroom: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { basket } = this.props;
    const buildBasket = basket.map((mushroom, index) => (
      <Mushroom key={`selectedMushroom${index + 1}`} mushroom={mushroom}/>
    ));
    return (
    <div className="Basket d-flex flex-wrap">
      {buildBasket}
    </div>
    );
  }
}

export default Basket;
