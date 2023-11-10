class sentence {
  constructor(data) {
    this.data = data;
  }

  wordCount() {
    return this.data.split(" ").length;
  }

  hasLetter(letter) {
    return this.data.indexOf(letter) !== -1;
  }

  letterCount(letter) {
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === letter) {
        count++;
      }
    }
    return count;
  }

  stats() {
    const object = {};
    const words = this.data.split(" ");
    words.forEach((word) => {
      if (object[word] === undefined) {
        object[word] = 0;
      }
      object[word]++;
    });
    return object;
  }
}
const data = prompt(
  "create a sentence",
  "I am a very successful Business Man in uganda"
);
const s1 = new sentence(data);
console.log(s1.wordCount());
console.log(s1.hasLetter("s"));
console.log(s1.hasLetter("j"));
console.log(s1.letterCount("a"));
console.log(s1.stats());
