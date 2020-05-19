const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const getNormalMushrooms = () => {
  const normalMushrooms = [];
  const mushroomsNow = getMushrooms();
  mushroomsNow.forEach((item) => {
    if (item.isDeadly === false && item.isPoisonous === false && item.isMagic === false) {
      normalMushrooms.push(item);
    }
  });
  return normalMushrooms.length;
};

const getBasketTotal = (normalTotal) => {
  let totalMushroomsInBasket = 0;
  const totalNormalMushrooms = normalTotal;
  basket.forEach((item) => {
    totalMushroomsInBasket += item.quantity;
  });
  if (totalMushroomsInBasket === totalNormalMushrooms) {
    console.log('TOTAL BASKET REACH 15');
    basket = [];
  }
};
// const checkForWin = (mushrooms, basket) => {
//   const isTrue(arr, arr2) {
//     arr.every(i => arr2.includes(i));
//   }
//   console.log(isTrue())
// }

const pickedPoisonousMushroom = (passedInTotal) => {
  const total = passedInTotal;
  if (total >= 3) {
    const mushroomToDie1 = basket[Math.floor(Math.random() * basket.length)];
    const mushroomToDieIndex1 = basket.indexOf(mushroomToDie1);
    if (mushroomToDie1.quantity > 1) {
      mushroomToDie1.quantity -= 1;
      const mushroomToDie2 = basket[Math.floor(Math.random() * basket.length)];
      const mushroomToDieIndex2 = basket.indexOf(mushroomToDie2);
      if (mushroomToDie2.quantity > 1) {
        mushroomToDie2.quantity -= 1;
      } else {
        basket.splice(mushroomToDieIndex2, 1);
      }
    } else {
      basket.splice(mushroomToDieIndex1, 1);
      const mushroomToDie2 = basket[Math.floor(Math.random() * basket.length)];
      const mushroomToDieIndex2 = basket.indexOf(mushroomToDie2);
      if (mushroomToDie2.quantity > 1) {
        mushroomToDie2.quantity -= 1;
      } else {
        basket.splice(mushroomToDieIndex2, 1);
      }
    }
  } else {
    basket = [];
  }
};

const pickedMagicMushroom = (normalTotal) => {
  mushrooms.forEach((item) => {
    if (item.isDeadly === false && item.isPoisonous === false && item.isMagic === false) {
      runBasketCheck(item);
    }
  });
  getBasketTotal(normalTotal);
};

const runBasketCheck = (mushroom, normalTotal) => {
  const totalBasketLength = basket.length;
  const selectedMushroom = mushroom;
  const findSelected = basket.findIndex((x) => x.id === selectedMushroom.id);
  if (findSelected >= 0) {
    basket[findSelected].quantity += 1;
  } else {
    selectedMushroom.quantity = 1;
    basket.push(selectedMushroom);
  }
  if (totalBasketLength === normalTotal) {
    console.log('YOU WIN');
    basket = [];
  }
  getBasketTotal(mushroom, normalTotal);
};

const pickAMushroom = () => {
  const total = getBasketTotal();
  const normalTotal = getNormalMushrooms();
  console.log('this is the normalTotal', normalTotal);
  const pickedMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  if (pickedMushroom.isPoisonous) {
    console.log('AHHHHHH Picked Poison Mushroom');
    pickedPoisonousMushroom(total);
  } else if (pickedMushroom.isDeadly) {
    console.log('Deadly Mushroom killed all others');
    basket = [];
  } else if (pickedMushroom.isMagic) {
    console.log('picked magical mushroom');
    pickedMagicMushroom(pickedMushroom, normalTotal);
  } else {
    runBasketCheck(pickedMushroom, normalTotal);
  }
  return pickedMushroom;
};

export default
{
  getMushrooms,
  getBasket,
  pickAMushroom,
  getBasketTotal,
  getNormalMushrooms,
};