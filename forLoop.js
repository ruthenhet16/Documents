
// for loop
for(let counter = 5; counter <11; counter++){
  console.log(counter);
}
// looping in reverse
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter --){
  console.log(counter);
}
// looping through arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}
// Nested loops
let bobsFollowers = ['Ruth','Lily','Juan','Flores'];
let tinasFollowers = ['Ruth','Lily','Ester'];
let mutualFollowers = [];
for( let i = 0;i<bobsFollowers.length;i++){
  for(let j=0;j<tinasFollowers.length;j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
     mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(mutualFollowers);

// the while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)]; // give us # index cards
  console.log(currentCard);
} // from 0 to 3

// do while statements
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do{
  cupsAdded++;
}
while(cupsAdded < cupsOfSugarNeeded);

// the break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i = 0; i < rapperArray.length;i++){
  console.log(rapperArray[i]);

  if(rapperArray[i] === 'Notorious B.I.G.'){


  break;
  }

}
console.log("And if you don't know, now you know.");
