import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../helpers/propz/mushroomShape';
import BasketMushroom from './BasketMushroom';

class Basket extends React.Component {
  static propType = {
    mushroom: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { basket } = this.props;
    const { totalNormalMushrooms } = this.props;

    const totalMushroomsInBasket = () => {
      let totalMushrooms = 0;
      basket.forEach((mushroom) => {
        totalMushrooms += mushroom.quantity;
      });
      return totalMushrooms;
    };
    const buildBasket = basket.map((mushroom, index) => (
      <BasketMushroom key={`basket-${mushroom.id}`} mushroom={mushroom}/>
    ));
    return (
      <div className="Basket">
      <div className="d-flex row-cols-1 m-1">
      <p className="m-0 p-0 col-6">Mushroom Types Collected: {basket.length}/{totalNormalMushrooms}</p><p className="col-6 m-0 p-0">Total Mushrooms in Basket: {totalMushroomsInBasket()}</p>
      </div>
          {
            basket.length === 0 ? (
              <div className="p-5">
              <h3 className="p-1">Help Mario fill his basket by clicking the <strong>[PICK MUSHROOM]</strong> button.</h3>
              <h3 className="p-1">Gather one each of the normal mushrooms and <strong>WIN!</strong></h3>
              <h3 className="p-1">Pick the PSILOCYBE magic mushroom and get <strong>ALL</strong> normal mushrooms added to your basket for an INSTANT WIN!</h3>
              <h3 className="p-1">BEWARE of the dangerous mushrooms.</h3>
              </div>
            ) : (<h3>Mushrooms Gathered</h3>)
          }
          <div className="d-flex flex-wrap justify-content-center align-items-center">
          {buildBasket}
        </div>
    </div>
    );
  }
}

export default Basket;
