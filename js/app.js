/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
// Event listener for starting the game once the start button is clicked
document.querySelector('#btn__reset').addEventListener('click', event => {
   game = new Game();
   game.startGame();   
});

// Event listener for the on-screen keyboard 
document.querySelector('#qwerty').addEventListener('click', event => {
   if(event.target.matches('button')){
      game.handleInteraction(event.target);
   } 
})

// Event listener for the physical keyboard
document.addEventListener('keydown', event => {
   if(document.querySelector('#overlay').style.display ==='none'){
      if(event.keyCode >= 65 && event.keyCode <= 90) {
         game.handleInteraction(game.keyboardToButton(event.key));
      }
   }
})