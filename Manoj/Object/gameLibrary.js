// gameLibrary.js
class GameLibrary {
    constructor() {
        this.games = [];
    }

    addGame(game) {
        this.games.push(game);
    }

    displayGames() {
        this.games.forEach((game) => {
            game.displayInfo();
        });
    }

    searchByTitle(title) {
        const filteredGames = this.games.filter((game) =>
            game.title.toLowerCase().includes(title.toLowerCase())
        );

        if (filteredGames.length === 0) {
            console.log('No games found with that title.');
        } else {
            console.log(`Games found with title '${title}':`);
            filteredGames.forEach((game) => {
                game.displayInfo();
            });
        }
    }
}

export default GameLibrary;
