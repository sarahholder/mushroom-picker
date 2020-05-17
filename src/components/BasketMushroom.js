import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../helpers/propz/mushroomShape';
import '../styles/index.scss';

class BasketMushroom extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushroom } = this.props;

    return (
      <div className="Mushroom">
        <div className="card mushroomCard">
          <p>{mushroom.name}</p>
          <img className="card-img-top" src={mushroom.imgUrl} alt={mushroom.name}/>
          <p className="card-text">{mushroom.quantity}X</p>
          </div>
        </div>
    );
  }
}

export default BasketMushroom;
