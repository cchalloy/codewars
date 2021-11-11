// https://www.codewars.com/kata/59126992f9f87fd31600009b

const whoseMove = (lastPlayer, win) => {
  return win ? lastPlayer : lastPlayer === 'black' ? 'white' : 'black';
}

// other solution
function whoseMove1(lastPlayer, win) {
  lastPlayer === "black" ? nextPlayer = "white" : nextPlayer = "black";
  return win ? lastPlayer : nextPlayer;
}