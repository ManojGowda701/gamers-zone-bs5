// Object Literal Notation
const person = {
    name: "Rocky",
    age: 30,
    greet: function () {
        console.log("Hey Rocky");
    }
};
// Adv
const gamersZone = {
    name: "Gamers Zone",
    location: "City X",
    games: ["Game A", "Game B", "Game C"],
    isOpen: true,
    showLocation: function () {
        console.log("Location: " + this.location);
    },
    showGames: function () {
        console.log("Games available:");
        for (let i = 0; i < this.games.length; i++) {
            console.log("- " + this.games[i]);
        }
    },
    toggleOpen: function () {
        this.isOpen = !this.isOpen;
        console.log("Zone is now " + (this.isOpen ? "open" : "closed") + ".");
    }
};

console.log(gamersZone.name);        // Gamers Zone
gamersZone.showLocation();           // Location: City X
gamersZone.showGames();
// Games available:
// - Game A
// - Game B
// - Game C
gamersZone.toggleOpen();             // Zone is now closed.


const keys = Object.keys(gamersZone);
console.log(keys);  // ["name", "location", "games", "isOpen", "showLocation", "showGames", "toggleOpen"]

const values = Object.values(gamersZone);
console.log(values);
// ["Gamers Zone", "City X", ["Game A", "Game B", "Game C"], true, ƒ, ƒ, ƒ]

const entries = Object.entries(gamersZone);
console.log(entries);
// [["name", "Gamers Zone"], ["location", "City X"], ["games", ["Game A", "Game B", "Game C"]],
//  ["isOpen", true], ["showLocation", ƒ], ["showGames", ƒ], ["toggleOpen", ƒ]]

console.log(gamersZone.hasOwnProperty("name"));  // true
console.log(gamersZone.hasOwnProperty("toString"));  // false


const target = {};
const source = { prop1: "value1", prop2: "value2" };
Object.assign(target, source);
console.log(target);  // { prop1: "value1", prop2: "value2" }

Object.freeze(gamersZone);
gamersZone.name = "New Name";
console.log(gamersZone.name);  // Gamers Zone


const obj1 = { prop: "value" };
const obj2 = { prop: "value" };
console.log(Object.is(obj1, obj2));  // false

// seal
const gamer = {
    name: "Rishabh",
    score: 100,
};

console.log(gamer.name); // John

Object.seal(gamer);

gamer.name = "Rakshit";
gamer.age = 25;
delete gamer.score;

console.log(gamer.name); // Jane
console.log(gamer.age); // undefined
console.log(gamer.score); // 100 (unchanged)

// Trying to add a new property will be ignored
console.log(gamer); // { name: 'Jane', score: 100 }
