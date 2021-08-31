
const hobbies = ['Apple','Orange','Mango'];
console.log(hobbies);
const famousSayings = ['Fortune favors the brave.',
'A joke is a very serious thing.',
'Where there is love there is life.'];
// accessing elements in the array
var listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// update element in the array
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];


const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] ='Mayo';
console.log(condiments);
condiments = ['Mayo'];
utensils[3] ='Spoon'; // we can change the contents of a const array, but can not reassign a new array.
console.log(utensils);

// the length of property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
//the push method() allows to add items
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('Apple','Pie');
console.log(chores);
//the.pop() method remove items from an array
//const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];


//console.log(chores);
//const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);

groceryList.unshift('popcorn');

console.log(groceryList);

// slice the list
console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex);
// find the index
// array and function
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);
//Nested array
const numberClusters = [[1,2],[3,4],[5,6]];

const target = numberClusters[2][1];
