const checkDogs = function (dogsJulia, dogsKate) {
  let dogsJuliaCopy = [...dogsJulia];
  dogsJuliaCopy = dogsJuliaCopy.slice(1, -2);
  console.log(dogsJuliaCopy);
  const dogsJuliaAnDogsKate = [...dogsJuliaCopy, ...dogsKate];

  dogsJuliaAnDogsKate.forEach(function (age, i) {
    const adultOrPuppy =
      age > 3 ? `is an adult and is ${age} years old` : " is still a puppy 🐕";
    console.log(`Dog number ${i + 1}  ${adultOrPuppy}`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
