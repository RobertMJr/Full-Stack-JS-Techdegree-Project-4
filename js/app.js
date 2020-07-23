/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game;
 document.querySelector('#btn__reset').addEventListener('click', event => {
    game = new Game();
    game.startGame();   
 });

 document.querySelector('#qwerty').addEventListener('click', event => {
    if(event.target.matches('button')){
      game.handleInteraction(event.target);
    }
    
 })