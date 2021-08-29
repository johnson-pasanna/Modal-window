'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('button clicked');
  });

// react to a click on each of these 3 buttons now we have to attach the event handler to each of these 3 buttons now. we create a loop which loops over the 3 buttons and added event listencer hence when the user click on the button this triggers the event listerner function

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const player1 = [game.players[0]];
// // console.log(player1);
// const player2 = [game.players[1]];
// // console.log(player2);

// const [gk, ...fieldPlayers] = game.players[0];
// // console.log(gk);
// // console.log(fieldPlayers);

// const allPlayer = [...game.players[0], ...game.players[1]];
// // console.log(allPlayer);
// const [...players1final] = [
//   ...game.players[0],
//   'Thiago',
//   'Coutinho',
//   'Perisic',
// ];
// // con

// const { team1, x, team2 } = game.odds;
// console.log(team1);
// console.log(x);
// console.log(team2);

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.score

const printGoals = function() {
  console.log(`Total no of goals That were scored in toatl `);

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');