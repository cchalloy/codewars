const whoseMove = (lastPlayer, win) => {
  return win ? lastPlayer : lastPlayer === 'black' ? 'white' : 'black';
}

console.log(whoseMove("black", false))
console.log(whoseMove("white", false))
console.log(whoseMove("white", true))
console.log(whoseMove("black", true))


// diff solution
function whoseMove1(lastPlayer, win) {
  lastPlayer === "black" ? nextPlayer = "white" : nextPlayer = "black";
  return win ? lastPlayer : nextPlayer;
}