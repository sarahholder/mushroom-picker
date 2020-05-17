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
      <div className="Mushroom justify-content-middle">
        <div className="card forestCard p-3">
          <img className="card-img-top img-responsive fit-image" src={mushroom.imgUrl} alt={mushroom.name}/>
          <div className="card-body m-0 p-0">
            <h3>{icon}</h3>
            <h4>{mushroom.name}</h4>
            <p>{mushroom.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
