// Function Declaration
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.

// function checkDriverAge() {
//   var age = prompt('How old are you?');

//   if (Number(age) < 18) {
//     alert('Sorry, you are too yound to drive this car. Powering off');
//   } else if (Number(age) > 18) {
//     alert('Powering On. Enjoy the ride!');
//   } else if (Number(age) === 18) {
//     alert('Congratulations on your first year of driving. Enjoy the ride!');
//   }
// }

// checkDriverAge();

// Function Expression
//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
// uses anonymous function
var checkDriverAge = function () {
  var age = prompt('How old are you?');

  if (Number(age) < 18) {
    alert('Sorry, you are too yound to drive this car. Powering off');
  } else if (Number(age) > 18) {
    alert('Powering On. Enjoy the ride!');
  } else if (Number(age) === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!');
  }
};

checkDriverAge();
