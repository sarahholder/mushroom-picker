import React from 'react';
import PropTypes from 'prop-types';
import mushroomShape from '../helpers/propz/mushroomShape';
import BasketMushroom from './BasketMushroom';

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
      <BasketMushroom key={`basket-${mushroom.id}`} mushroom={mushroom}/>
    ));
    return (
    <div className="Basket">
          {
            basket.length === 0 ? (
              <div className="p-5">
              <h3 className="p-1">Help Mario fill his basket by clicking the <strong>[PICK MUSHROOM]</strong> button.</h3>
              <h3 className="p-1">Gather one each of the 15 normal mushrooms and <strong> WIN!</strong></h3>
              <h3 className="p-1">Pick the PSILOCYBE magical mushroom and get all 15 mushrooms added to you basket for an INSTANT WIN!</h3>
              <h3 className="p-1">BEWARE of the dangerous mushrooms. Pick a poisonous mushroom and two mushrooms from the basket will die.</h3>
              <h3 className="p-1">Pick a deadly mushroom and <strong>ALL</strong> mushrooms in the basket will die.</h3>
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
