import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../helpers/propz/mushroomShape';
import Mushroom from './Mushroom';
import '../styles/index.scss';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { mushrooms } = this.props;
    const buildForest = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));
    return (
      <div>
        <h2 className="m-5">Pick a Mushroom If you Dare</h2>
          <div className="Forest d-flex flex-wrap justify-content-center align-items-center">
            {buildForest}
        </div>
      </div>
    );
  }
}

export default Forest;
