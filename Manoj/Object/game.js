// game.js
class Game {
    constructor(title, genre, platform, releaseDate, description) {
        this.title = title;
        this.genre = genre;
        this.platform = platform;
        this.releaseDate = releaseDate;
        this.description = description;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Genre: ${this.genre}`);
        console.log(`Platform: ${this.platform}`);
        console.log(`Release Date: ${this.releaseDate}`);
        console.log(`Description: ${this.description}`);
        console.log('----------------------');
    }
}

export default Game;
