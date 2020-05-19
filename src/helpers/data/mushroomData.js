let basket = [];

const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Psilocybe',
    description: 'magical',
    imgUrl: 'https://www.mariowiki.com/images/thumb/a/a4/GoldenMushroomMK8.png/1200px-GoldenMushroomMK8.png',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Purple Jellydisc',
    description: 'trippy',
    imgUrl: 'https://www.pngkey.com/png/full/94-946683_purple-mario-mushroom-mario-bros-purple-mushroom.png',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Witche\'s Butter',
    description: 'psychedilic',
    // eslint-disable-next-line max-len
    imgUrl: 'https://vignette.wikia.nocookie.net/mario/images/d/da/1206px-SMP_Poison_Mushroom.png/revision/latest?cb=20190506154457',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Bitter Poisonpie',
    description: 'mind-expanding',
    imgUrl: 'https://vignette.wikia.nocookie.net/super-mario-kart-racing/images/9/97/Poison_Mushroom_-_Super_Mario_Kart.png/revision/latest?cb=20170502002407',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Funeral Bell',
    description: 'death-dealing',
    imgUrl: 'https://vignette.wikia.nocookie.net/mariobrosfanon/images/4/4c/20101027014858%21PoisonMushroom-1-.png/revision/latest?cb=20120604154053',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom6',
    name: 'Dewdrop Dapperling',
    description: 'friendly',
    imgUrl: 'https://i.pinimg.com/originals/88/bb/df/88bbdf4b6c0d0eb503ffbcdc8e6e48b4.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Pink Disco',
    description: 'pleasant',
    imgUrl: 'https://vignette.wikia.nocookie.net/ssb/images/0/0f/Toadette-Official-Artwork-NSMBUD.png/revision/latest?cb=20190404223130',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Cinnamon Jellybaby',
    description: 'plain',
    imgUrl: 'https://www.mariowiki.com/images/thumb/9/94/MushroomMarioKart8.png/1206px-MushroomMarioKart8.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Barometer Earthstar',
    description: 'starry',
    imgUrl: 'https://www.freeiconspng.com/uploads/mushroom-icon-29.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Bonfire Cauliflower',
    description: 'fiery',
    imgUrl: 'https://vignette.wikia.nocookie.net/mario/images/b/bf/Mega_Mushroom_MTUS.png/revision/latest?cb=20180114232455',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Bug Sputnik',
    description: 'sad',
    imgUrl: 'https://webstockreview.net/images/mushroom-clipart-blue-mushroom-5.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Hairy Parachute',
    description: 'falling',
    imgUrl: 'https://www.mariowiki.com/images/thumb/8/85/Parabomb_NSMBUD.png/1200px-Parabomb_NSMBUD.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Goblet Parachute',
    description: 'crafty',
    // eslint-disable-next-line max-len
    imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd9b85bb-f709-41fb-8666-da35e37527e0/ddfc873-a102ad52-b30b-49d9-9f95-27a751652ccc.png/v1/fill/w_1280,h_1146,strp/propeller_mushroom___mario_kart_wii_by_hammerbro101_ddfc873-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE0NiIsInBhdGgiOiJcL2ZcL2NkOWI4NWJiLWY3MDktNDFmYi04NjY2LWRhMzVlMzc1MjdlMFwvZGRmYzg3My1hMTAyYWQ1Mi1iMzBiLTQ5ZDktOWY5NS0yN2E3NTE2NTJjY2MucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.bSgtJt0K6qygYTwsatTAt86Lp0f5qdVujLK6dRT3i2E',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Destroying Angel',
    description: 'saint',
    imgUrl: 'https://www.pinclipart.com/picdir/big/421-4213258_paragoomba-in-flight-mushroom-head-mario-clipart.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Mint Mildew',
    description: 'lifesaver',
    imgUrl: 'https://www.mariowiki.com/images/thumb/b/b4/1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png/1200px-1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Whiskery Milkcap',
    description: 'fun',
    imgUrl: 'https://www.mariowiki.com/images/thumb/a/a9/Yellow_Toad_New_Super_Mario_Bros_U_Deluxe.png/1200px-Yellow_Toad_New_Super_Mario_Bros_U_Deluxe.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'The Pretender',
    description: 'shifty',
    imgUrl: 'https://webstockreview.net/images/clipart-clouds-mario-bros-19.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Chicken of the Woods',
    description: 'spooky',
    imgUrl: 'https://webstockreview.net/images/clipart-man-welding-15.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Pancake Crust',
    description: 'playful',
    imgUrl: 'https://www.pinclipart.com/picdir/big/152-1525495_nintendo-clipart-mario-mushroom-toad-mario-bros-png.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Hairy Nuts Disco',
    description: 'nutty',
    imgUrl: 'https://www.mariowiki.com/images/thumb/d/d2/New_Super_Mario_Bros._U_Deluxe_Super_Acorn.png/1200px-New_Super_Mario_Bros._U_Deluxe_Super_Acorn.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];
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
  console.log('This is the array of normal mushrooms', normalMushrooms.length);
  return normalMushrooms.length;
};

const getBasketTotal = () => {
  let totalMushroomsInBasket = 0;
  basket.forEach((item) => {
    totalMushroomsInBasket += item.quantity;
  });
  console.log('this is the total number mushrooms in basket', totalMushroomsInBasket);
  // checkForWin();
  return totalMushroomsInBasket;
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
  getBasketTotal();
};

const pickedMagicMushroom = () => {
  mushrooms.forEach((item) => {
    if (item.isDeadly === false && item.isPoisonous === false && item.isMagic === false) {
      runBasketCheck(item);
    }
  });
  getBasketTotal();
};

const youWin = () => {
  console.log('YOU WIN');
};

const runBasketCheck = (mushroom) => {
  const totalBasketLength = basket.length;
  const selectedMushroom = mushroom;
  const findSelected = basket.findIndex((x) => x.id === selectedMushroom.id);
  if (findSelected >= 0) {
    basket[findSelected].quantity += 1;
  } else {
    selectedMushroom.quantity = 1;
    basket.push(selectedMushroom);
  }
  console.log('this is the total basket.length', totalBasketLength);
  if (totalBasketLength === 14) {
    youWin();
  }
  getBasketTotal();
};

const pickAMushroom = () => {
  const total = getBasketTotal();
  const normalTotal = getNormalMushrooms();
  console.log('this is the normalTotal', normalTotal);
  console.log('this is the total number of normal mushrooms', normalTotal);
  const pickedMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  if (pickedMushroom.isPoisonous) {
    console.log('AHHHHHH Picked Poison Mushroom');
    pickedPoisonousMushroom(total);
  } else if (pickedMushroom.isDeadly) {
    console.log('Deadly Mushroom killed all others');
    basket = [];
  } else if (pickedMushroom.isMagic) {
    console.log('picked magical mushroom');
    pickedMagicMushroom();
  } else {
    runBasketCheck(pickedMushroom);
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
