/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
     * Creates phrases for use in game
     * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrasesArr = [];
        const listOfPhrases = ['Life is like a box of chocolates', 'Until we meet again', 'I am what I am', 'More power to you', 'Hitch Your Wagon to a Star'];
        for(let i = 0; i < 5; i += 1){
            let phraseObject = new Phrase(listOfPhrases[i]);
            phrasesArr.push(phraseObject);
        }
        return phrasesArr;
    };

    
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * (this.phrases.length))];
    };    

    /**
     * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };

    // Logic and branching of the user interaction to the game
    handleInteraction() {

    }
}