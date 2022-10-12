const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        "What is your favourite programming language \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n(Write option number)"
      )
    );

    // register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(answer);
    this.displayResult();
  },

  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll result are ${this.answers}`);
    }
  },
};

poll.registerNewAnswer();

poll.displayResult();
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResult.call({ answers: [1, 2, 3, 4] }, "string");
