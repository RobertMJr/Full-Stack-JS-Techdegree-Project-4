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

    /**
     * Checks for winning move 
     * @return {boolean} True if game has been won, false if game wasn't won
     */
    checkForWin() {
        return [...document.querySelector('ul').children].filter(item => item.className !== 'space').every(elem => [...elem.classList].includes('show'));
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
     */
    removeLife() {
        [...document.querySelector('ol').children][this.missed].firstElementChild.setAttribute('src', "images/lostHeart.png");
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
            this.resetBoard();
        }
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        if (gameWon){
            document.querySelector('#overlay').style.display = '';
            document.querySelector('.start').className = 'win';
            document.querySelector('#game-over-message').innerHTML = 'Congratulations! You won!';
        } else {
            document.querySelector('#overlay').style.display = '';
            document.querySelector('.start').className = 'lose';
            document.querySelector('#game-over-message').innerHTML = 'Sorry, better luck next time!';
        }
    }

    /**
     * Handles on screen keyboard button clicks 
     * @param {HTMLButtonElement} button - The clicked button element
     */
    handleInteraction(button) {
        button.disabled = true;
        if (!this.activePhrase.checkLetter(button.innerHTML)){
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button.innerHTML);
            if(this.checkForWin()){
                this.gameOver(true);
                this.resetBoard();
            }
        }
    }

    /**
     * Resets the board  by
     * removing al li elements from the Phrase 'ul' element
     * enabling all the onscreen keyboard buttons and removing their 'chosen'/ 'wrong' class
     * resetting the heart images
     */
    resetBoard(){
        let ulLastChild = document.querySelector('ul').lastElementChild;
        while (ulLastChild) {
            document.querySelector('ul').removeChild(ulLastChild);
            ulLastChild = document.querySelector('ul').lastElementChild;
        }
        
    }
}