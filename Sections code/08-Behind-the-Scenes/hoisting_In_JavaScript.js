// Function declaration

paly(); // because there are stord in the variable ennvironment even before the code starts executing
// it is because of hoisting ..
function paly() {
  console.log("HAHAHAHA I'm Playing now 🏃‍♂️");
}

// ------------------------------------------------------ //

// var variables
// console.log(name); // Hoisting here work in different way
// var name = 'Moaz Ashraf Abdelghany';

// ------------------------------------------------------ //

// let / const

// console.log(name); // Hoisting here not work
let name = 'Moaz Ashraf Abdelghany';

// --------------------------------------------//

// Function expression using var -> Undefined
getName();
var getName = function () {
  console.log('My names is Moaz');
};

// Function expression using let / const ->
// Cannot access 'getName' before initialization
getName();
let getName = function () {
  console.log('My names is Moaz');
};
