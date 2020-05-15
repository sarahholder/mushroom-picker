import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../helpers/propz/mushroomShape';

class Mushroom extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushroom } = this.props;

    let icon = '';
    if (mushroom.isMagic) {
      icon = <i className="fas fa-magic"></i>;
    } else if (mushroom.isPoisonous) {
      icon = <i className="fas fa-radiation-alt"></i>;
    } else if (mushroom.isDeadly) {
      icon = <i className="fas fa-skull-crossbones"></i>;
    }

    return (
      <div className="Mushroom col-3">
        <div className="card">
          <img className="card-img-top" src={mushroom.imgUrl} alt={mushroom.name}/>
          <div className="card-body">
            <h2>{icon}</h2>
            <h3 className="card-title">{mushroom.name}</h3>
            <p className="card-text">Description: {mushroom.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
