let basket = [];

const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Psilocybe',
    description: 'magic',
    imgUrl: 'https://www.mariowiki.com/images/thumb/a/a4/GoldenMushroomMK8.png/1200px-GoldenMushroomMK8.png',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
    isNormal: false,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_happy_message.wav',
  },
  {
    id: 'mushroom2',
    name: 'Purple Jellydisc',
    description: 'trippy',
    imgUrl: 'https://www.pngkey.com/png/full/94-946683_purple-mario-mushroom-mario-bros-purple-mushroom.png',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
    isNormal: false,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_ungh.wav',
  },
  {
    id: 'mushroom3',
    name: 'Witches\' Butter',
    description: 'psychedilic',
    // eslint-disable-next-line max-len
    imgUrl: 'https://vignette.wikia.nocookie.net/mario/images/d/da/1206px-SMP_Poison_Mushroom.png/revision/latest?cb=20190506154457',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
    isNormal: false,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_oof.wav',
  },
  {
    id: 'mushroom4',
    name: 'Bitter Poisonpie',
    description: 'mind-expanding',
    imgUrl: 'https://vignette.wikia.nocookie.net/super-mario-kart-racing/images/9/97/Poison_Mushroom_-_Super_Mario_Kart.png/revision/latest?cb=20170502002407',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
    isNormal: false,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_hurt.wav',
  },
  {
    id: 'mushroom5',
    name: 'Funeral Bell',
    description: 'death-dealing',
    imgUrl: 'https://vignette.wikia.nocookie.net/mariobrosfanon/images/4/4c/20101027014858%21PoisonMushroom-1-.png/revision/latest?cb=20120604154053',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
    isNormal: false,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_game_over.wav',
  },
  {
    id: 'mushroom6',
    name: 'Dewdrop Dapperling',
    description: 'friendly',
    imgUrl: 'https://i.pinimg.com/originals/88/bb/df/88bbdf4b6c0d0eb503ffbcdc8e6e48b4.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_yippee.wav',
  },
  {
    id: 'mushroom7',
    name: 'Pink Disco',
    description: 'pleasant',
    imgUrl: 'https://vignette.wikia.nocookie.net/ssb/images/0/0f/Toadette-Official-Artwork-NSMBUD.png/revision/latest?cb=20190404223130',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_coin.wav',
  },
  {
    id: 'mushroom8',
    name: 'Cinnamon Jellybaby',
    description: 'plain',
    imgUrl: 'https://www.mariowiki.com/images/thumb/9/94/MushroomMarioKart8.png/1206px-MushroomMarioKart8.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_blue_coin.wav',
  },
  {
    id: 'mushroom9',
    name: 'Barometer Earthstar',
    description: 'starry',
    imgUrl: 'https://www.freeiconspng.com/uploads/mushroom-icon-29.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_1-up.wav',
  },
  {
    id: 'mushroom10',
    name: 'Bonfire Cauliflower',
    description: 'fiery',
    imgUrl: 'https://vignette.wikia.nocookie.net/mario/images/b/bf/Mega_Mushroom_MTUS.png/revision/latest?cb=20180114232455',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_red_coin_jp.wav',
  },
  {
    id: 'mushroom11',
    name: 'Bug Sputnik',
    description: 'sad',
    imgUrl: 'https://webstockreview.net/images/mushroom-clipart-blue-mushroom-5.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_red_coin_3.wav',
  },
  {
    id: 'mushroom12',
    name: 'Hairy Parachute',
    description: 'falling',
    imgUrl: 'https://www.mariowiki.com/images/thumb/8/85/Parabomb_NSMBUD.png/1200px-Parabomb_NSMBUD.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_spinning_heart.wav',
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
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_haha.wav',
  },
  {
    id: 'mushroom14',
    name: 'Destroying Angel',
    description: 'saint',
    imgUrl: 'https://www.pinclipart.com/picdir/big/421-4213258_paragoomba-in-flight-mushroom-head-mario-clipart.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_yahoo.wav',
  },
  {
    id: 'mushroom15',
    name: 'Mint Mildew',
    description: 'lifesaver',
    imgUrl: 'https://www.mariowiki.com/images/thumb/b/b4/1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png/1200px-1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_boing.wav',
  },
  {
    id: 'mushroom16',
    name: 'Whiskery Milkcap',
    description: 'fun',
    imgUrl: 'https://www.mariowiki.com/images/thumb/a/a9/Yellow_Toad_New_Super_Mario_Bros_U_Deluxe.png/1200px-Yellow_Toad_New_Super_Mario_Bros_U_Deluxe.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_waha.wav',
  },
  {
    id: 'mushroom17',
    name: 'The Pretender',
    description: 'shifty',
    imgUrl: 'https://webstockreview.net/images/clipart-clouds-mario-bros-19.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_hoohoo.wav',
  },
  {
    id: 'mushroom18',
    name: 'Chicken of the Woods',
    description: 'spooky',
    imgUrl: 'https://webstockreview.net/images/clipart-man-welding-15.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_hoo.wav',
  },
  {
    id: 'mushroom19',
    name: 'Pancake Crust',
    description: 'playful',
    imgUrl: 'https://www.pinclipart.com/picdir/big/152-1525495_nintendo-clipart-mario-mushroom-toad-mario-bros-png.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_red_coin_7.wav',
  },
  {
    id: 'mushroom20',
    name: 'Hairy Nuts Disco',
    description: 'nutty',
    imgUrl: 'https://www.mariowiki.com/images/thumb/d/d2/New_Super_Mario_Bros._U_Deluxe_Super_Acorn.png/1200px-New_Super_Mario_Bros._U_Deluxe_Super_Acorn.png',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
    isNormal: true,
    sound: 'https://themushroomkingdom.net/sounds/wav/sm64/sm64_spotted_by_goomba.wav',
  },
];
const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const emptyBasket = () => {
  basket = [];
};

const getNormalMushrooms = () => {
  const normalMushrooms = [];
  const normalForestMushrooms = getMushrooms();
  normalForestMushrooms.forEach((mushroom) => {
    if (mushroom.isNormal === true) {
      normalMushrooms.push(mushroom);
    }
  });
  return normalMushrooms.length;
};

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

const gathered = (mushroom) => {
  new Audio(mushroom.sound).play();
  const selectedMushroom = mushroom;
  const totalNormalMushrooms = getNormalMushrooms();
  let fullBasket = false;
  const findSelected = basket.findIndex((x) => x.id === selectedMushroom.id);
  if (findSelected >= 0) {
    basket[findSelected].quantity += 1;
  } else {
    selectedMushroom.quantity = 1;
    basket.push(selectedMushroom);
  }
  if (basket.length === totalNormalMushrooms) {
    fullBasket = true;
    new Audio('https://themushroomkingdom.net/sounds/wav/sm64/sm64_high_score.wav').play();
  }
  return fullBasket;
};

const pickedMagicMushroom = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isPoisonous === false && mushroom.isDeadly === false && mushroom.isMagic === false) {
      const findSelected = basket.findIndex((x) => x.id === mushroom.id);
      if (findSelected >= 0) {
        basket[findSelected].quantity += 1;
      } else {
        const newMush = mushroom;
        newMush.quantity = 1;
        basket.push(mushroom);
      }
    }
  });
};

const pickAMushroom = () => {
  const forestMushrooms = mushrooms.length;
  const totalInBasket = basket.length;
  const pickedMushroom = mushrooms[Math.floor(Math.random() * forestMushrooms)];
  if (pickedMushroom.isPoisonous) {
    pickedPoisonousMushroom(totalInBasket);
    new Audio(pickedMushroom.sound).play();
  } else if (pickedMushroom.isDeadly) {
    new Audio(pickedMushroom.sound).play();
    basket = [];
  } else if (pickedMushroom.isMagic) {
    pickedMagicMushroom();
    new Audio(pickedMushroom.sound).play();
  } else {
    gathered(pickedMushroom);
  }
  return pickedMushroom;
};

export default
{
  getMushrooms,
  getBasket,
  pickAMushroom,
  getNormalMushrooms,
  gathered,
  emptyBasket,
};
