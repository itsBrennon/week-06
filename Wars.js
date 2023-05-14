function shuffleDeck(deck) { //shuffle deck function
    for(let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
} 

function dealCards(deck) { //function to deal cards
    const player1 = [];//The 2 players are set up to an Array
    const player2 = [];

 for (let i = 0; i < deck.length; i++) {
    if(i % 2 === 0) {
        player1.push(deck[i]);
    } else {
        player2.push(deck[i]);
    }
}
 return [player1, player2];
}

const deck = Array.from({length: 52 }, (_,i) => i + 1); //deck has 52 cards
shuffleDeck(deck);
const [player1 , player2] = dealCards(deck.slice(0, 26)); //shuffled deck of 26 

console.log(player1);
console.log(player2);

function playGame(player1, player2) { // how the game is ran 
    let score1 = 0;
    let score2 = 0;
 for (let i = 0; i < player1.length; i++) {
    const card1 = player1[i];
    const card2 = player2[i];

 if (card1 > card2) { //The rules
    score1++;
 } else if (card2 > card1){
    score2++;
  }
} 
console.log(`Player 1 score: ${score1}`);
console.log(`Player 2 score: ${score2}`);

if (score1 > score2) {
    console.log('Player 1 Wins!');
} else if (score2 > score1) {
    console.log('Player 2 Wins!')
} else {console.log('Tie!');
}//more rules score1>2 Player 1 wins 
}

playGame(player1, player2); //where we actually start to play game

