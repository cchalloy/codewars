// https://www.codewars.com/kata/568018a64f35f0c613000054

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
