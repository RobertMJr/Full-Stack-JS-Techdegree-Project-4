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
        const listOfPhrases = ['Life is like a box of chocolates', 'Until we meet again', 'I am what I am', 'More power to you', 'Hitch Your Wagon to a Star'];
        return listOfPhrases.map(phraseItem => new Phrase(phraseItem));
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
            document.querySelector('#overlay').className = 'win';
            document.querySelector('#game-over-message').innerHTML = 'Congratulations! You won!';
        } else {
            document.querySelector('#overlay').style.display = '';
            document.querySelector('#overlay').className = 'lose';
            document.querySelector('#game-over-message').innerHTML = 'Sorry, better luck next time!';
        }
    }

    /**
     * Handles on screen keyboard button clicks 
     * @param {HTMLButtonElement} button - The clicked button element
     */
    handleInteraction(button) {
        if(button.disabled === true){
            return;
        }
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
        document.querySelector('#phrase ul').innerHTML = '';
        document.querySelectorAll('.keyrow > button').forEach(button => {
            button.disabled = false;
            button.className = 'key';
        })
        document.querySelectorAll('.tries img').forEach(liElement => {
            liElement.setAttribute('src', "images/liveHeart.png");
        })
    }

    /** 
     * Identifies the element from the on-screen keyboard that corresponds to the pressed key on the physical keyboard and returns it
     * @param {event.key} key - The key that was pressed on the keyboard
     * @return {HTMLButtonElement} - The button corresponding to the key that was pressed
     */ 
    keyboardToButton(key) {
       const buttonArr = ([...document.querySelectorAll('.keyrow > button')].filter(button => button.textContent === key));
       return buttonArr[0];
    }
}