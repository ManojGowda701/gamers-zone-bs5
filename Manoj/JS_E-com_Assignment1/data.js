let products_list = [
    {
      "id": 1,
      "name": "Doodad",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "47.76",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 2,
      "name": "Widget",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "44.12",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 3,
      "name": "Doohickey",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "22.31",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 4,
      "name": "Widget",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "97.90",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 5,
      "name": "Thingamajig",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "34.53",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 6,
      "name": "Doodad",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "33.63",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 7,
      "name": "Widget",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "29.33",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 8,
      "name": "Doohickey",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "86.01",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 9,
      "name": "Gadget",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "23.62",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 10,
      "name": "Gadget",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "67.51",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 11,
      "name": "Thingamajig",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "94.87",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 12,
      "name": "Doodad",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "92.66",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 13,
      "name": "Widget",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "37.73",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 14,
      "name": "Thingamajig",
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "price": "17.66",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 15,
      "name": "Gadget",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "78.40",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 16,
      "name": "Gadget",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "29.98",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 17,
      "name": "Doodad",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "74.57",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 18,
      "name": "Doodad",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "66.22",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 19,
      "name": "Doohickey",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "45.03",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 20,
      "name": "Whatchamacallit",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "72.43",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 21,
      "name": "Doohickey",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "86.23",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 22,
      "name": "Doodad",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "56.76",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 23,
      "name": "Doohickey",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "77.45",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 24,
      "name": "Thingamajig",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "92.24",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 25,
      "name": "Gadget",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "69.51",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 26,
      "name": "Widget",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "31.19",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 27,
      "name": "Doohickey",
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "price": "43.89",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 28,
      "name": "Widget",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "45.73",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 29,
      "name": "Doohickey",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "36.56",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 30,
      "name": "Doohickey",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "19.49",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 31,
      "name": "Doohickey",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "81.21",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 32,
      "name": "Whatchamacallit",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "46.86",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 33,
      "name": "Whatchamacallit",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "24.94",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 34,
      "name": "Doodad",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "87.38",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 35,
      "name": "Doodad",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "80.23",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 36,
      "name": "Doohickey",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "77.99",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 37,
      "name": "Gadget",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "73.24",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 38,
      "name": "Gadget",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "66.88",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 39,
      "name": "Whatchamacallit",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "31.87",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 40,
      "name": "Widget",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "43.64",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 41,
      "name": "Doodad",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "78.02",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 42,
      "name": "Widget",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "68.52",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 43,
      "name": "Whatchamacallit",
      "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "price": "63.20",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    },
    {
      "id": 44,
      "name": "Gadget",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "73.46",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 45,
      "name": "Whatchamacallit",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "62.03",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 46,
      "name": "Thingamajig",
      "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "price": "90.26",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 47,
      "name": "Thingamajig",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "25.42",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70"
    },
    {
      "id": 48,
      "name": "Doodad",
      "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "price": "27.76",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 49,
      "name": "Widget",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "price": "85.29",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70"
    },
    {
      "id": 50,
      "name": "Whatchamacallit",
      "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "price": "18.59",
      "imageURL": "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"
    }
  ]


  function createCard(cardInfo) {
    const card = $('<div class="card"></div>');
    const cardBody = $('<div class="card-body"></div>');

    // const idElement = $('<h5 class="card-title"></h5>').text(cardInfo.id);   //Depends on criteria
    const nameElement = $('<h5 class="card-title"></h5>').text(cardInfo.name);
    const imageElement = $('<img class="card-img-top" alt="Card image">').attr('src', cardInfo.imageURL);
    // const imageURLElement = $('<p class="card-img-top" src=" "></p>').text(cardInfo.imageURL);
    const descriptionElement = $('<p class="card-text"></p>').text(cardInfo.description);
    const priceElement = $('<p class="card-text"></p>').text('Price :' + " " + cardInfo.price);
    const addToCartButton = $('<button type="button" class="btn btn-primary">Add to Cart</button>');

    cardBody.append( nameElement, imageElement, descriptionElement, priceElement, addToCartButton);
    card.append(cardBody);

    return card;
  }

  // Function to add cards to the container
  function addCardsToContainer(cards) {
    const cardContainer = $('#cardContainer');
    // cardContainer.empty(); // Clear the container if needed

    cards.forEach(function(cardInfo) {
      const card = createCard(cardInfo);
      cardContainer.append(card);
    });
  }

  // Call the function to add cards to the container when the document is ready
  $(document).ready(function() {
    addCardsToContainer(products_list);
  });

   // Function to add CSS classes for flexbox layout
   function setFlexLayout() {
    const cardContainer = $('#cardContainer');
    cardContainer.addClass('d-flex flex-row flex-wrap');
    cardContainer.children('.card').addClass('flex-fill m-2');
  }

  // Call the function to apply flexbox layout when the document is ready
  $(document).ready(function() {
    setFlexLayout();
  });
