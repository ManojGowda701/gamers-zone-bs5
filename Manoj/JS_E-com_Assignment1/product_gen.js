// Function to generate a random product name
function getRandomProductName() {
    const products = ["Widget", "Gadget", "Thingamajig", "Doodad", "Doohickey", "Whatchamacallit"];
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

// Function to generate a random product description
function getRandomProductDescription() {
    const descriptions = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];
    const randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex];
}

// Function to generate a random product price between 10 and 100
function getRandomProductPrice() {
    return (Math.random() * 90 + 10).toFixed(2);
}

// Function to generate a random image URL (replace with actual image URLs)
function getRandomImageURL() {
    const imageUrls = [
        "https://rukminim2.flixcart.com/image/832/832/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/kk76wsw0/power-hand-tool-kit/7/t/z/06012161f8-bosch-original-imafzhdecykvgm2w.jpeg?q=70",
        // Add more image URLs here
    ];
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

// Generate an array of 50 products
const products = [];
for (let i = 1; i <= 50; i++) {
    const product = {
        id: i,
        name: getRandomProductName(),
        description: getRandomProductDescription(),
        price: getRandomProductPrice(),
        imageURL: getRandomImageURL()
    };
    products.push(product);
}

// Convert the products array to JSON format
const productsJSON = JSON.stringify(products);

console.log(productsJSON);
