class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (isNaN(n)) throw new Error("put on a NUMBER!");
    
    if (this.lives === 0) throw new Error("shoot! no more lives!")

    if (n === this.number) return "ok! you got it!";

    if (n !== this.number && this.lives > 0) { // facultatif
      return this.lives -= 1, "nope! try again";
    }
  }
}

let guesser = new Guesser(10, 2);
console.log(guesser.guess(11));
console.log(guesser.guess(9));
console.log(guesser.guess(7));

let guesser2 = new Guesser(10, 2);
console.log(guesser2.guess(11));
console.log(guesser2.guess(10));

let guesser3 = new Guesser(10, 2);
console.log(guesser3.guess("k"));