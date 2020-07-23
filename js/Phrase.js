/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();   
    }

    /**
     * Display phrase on a game board
    */
    addPhraseToDisplay() {
        const unorderedList = document.querySelector('ul');
        [...this.phrase].forEach(letter => {
            const listItem = document.createElement('li');
            if(letter !== ' '){ 
                listItem.classList.add(`hide`);
                listItem.classList.add(`letter`);
                listItem.classList.add(`${letter}`);
                listItem.innerHTML = letter;
                unorderedList.appendChild(listItem);
            } else {
                listItem.classList.add(`space`);
                listItem.innerHTML = ' ';
                unorderedList.appendChild(listItem);
            }
        })
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */    
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        const ulChildren = document.querySelector('ul').children;
        for (let i = 0; i < ulChildren.length; i += 1) {
            if (ulChildren[i].className.slice(-1) === letter && ulChildren[i].className !== 'space') {
                ulChildren[i].classList.remove('hide');
                ulChildren[i].classList.add('show');
            }
        }
    }

 }