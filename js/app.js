/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
// Event listener for starting the game
document.querySelector('#btn__reset').addEventListener('click', event => {
   game = new Game();
   game.startGame();   
});

// Event listener for the on-screen keyboard 
document.querySelector('#qwerty').addEventListener('click', event => {
   if(event.target.matches('button')){
      console.log(event.target);
      game.handleInteraction(event.target);
   } 
})

// Event listener for physical keyboard
document.querySelector('body').addEventListener('keyup', event => {
   if(event.keyCode >= 65 && event.keyCode <= 90) {
      game.handleInteraction(game.keyboardToButton(event.key));
   }
})