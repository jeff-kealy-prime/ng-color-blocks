colorBlocks.controller('GameController', ['$scope', 'DataFactory', function($scope, DataFactory) {

console.log('game controller running');
console.log('data factory', DataFactory);
var self = this;
self.colors = DataFactory.colors;
self.streak = DataFactory.streak
// start game
init();


// resets game to the starting state
function init() {
  self.messageText = "";
  self.currentColor = self.colors[randomNumber(0, self.colors.length - 1)];
  self.colorPrompt = 'Can you find the ' + self.currentColor + ' block?'
  if (self.currentColor == undefined) {
    self.colorPrompt = "There are no colors. Refresh the page for some fun!"
  }
}

// click handler for guessing colors
self.handleInput = function(clickedColor) {
  if(clickedColor === self.currentColor) {
    alert('You got it!\n\nNow try another!');
    self.streak++
    init();
  } else {
    self.messageText = 'Oh no! You guessed wrong!';
    self.streak = 0;
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
