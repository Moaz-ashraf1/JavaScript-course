const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]

// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

// first way
dogs.map(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

// second way
dogs.forEach((dog, index, arr) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) 

const dog = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(`${dog.curFood > dog.recommendedFood ? "Dog eats a lot" : "Dog eats a little"}`);

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).map(dog => dog.owners).flat();
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and 
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
// too little!"

console.log(`"${ownersEatTooMuch.join(" and ")}'s dogs eat too much!" and "${ownersEatTooLittle.join(" and ")}'s eat 
too little!"`);

// 5. Log to the console whether there is any dog eating exactly the amount of food 
// that is recommended (just true or false)

const checkEatingOkay = dogs.some(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood *
  1.10));
console.log(checkEatingOkay);


// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
// portion in an ascending order (keep in mind that the portions are inside the 
// array's objects 

const dogShallowCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogShallowCopy);