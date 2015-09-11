// ! ! !
// Three Bugs

var Atticus = {
              name: "Atticus",
              id: "2405",
              annualSalary: "47000",
              rating: 3
            };
var Jem = {
            name: "Jem",
            id: "62347", 
            annualSalary: "63500",
            rating: 4
          };
var Boo = {
          name:"Boo",
          id: "11435",
          annualSalary: "54000",
          rating: 3
        };
var Scout = {
            name: "Scout",
            id: "6243",
            annualSalary: "74750",
            rating: 5
          };

var myList = [Atticus, Jem, Boo, Scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < myList.length; i++){
  //added array[i] in the calculateSTI
	myList[i] = calculateSTI(myList[i]);
 	newEl = document.createElement('li');
  console.log(myList[i]);

  //adding .join will help serapte the array. You can put commas, ands, or pipes in the parameters.
	newText = document.createTextNode(myList[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}


function calculateSTI(employee){
  var newObject = {};

  newObject.name = employee.name;

  var employeeNumber = employee.id;
  var baseSalary = employee.annualSalary;
  var reviewScore = employee.rating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObject.id = bonus;
  //added parseInt  Math.round - communicates what your doing
  newObject.annualSalary = parseInt(baseSalary * (1.0 + bonus));
  //add
  newObject.rating = Math.round(baseSalary * bonus);
  console.log(newObject.name + " " + newObject.id + " " + newObject.annualSalary + " " + newObject.rating);
  return newObject;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  //removed - 1; returning with additional math is bad practice
  return basePercent;
}


function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}

