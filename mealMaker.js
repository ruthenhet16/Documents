// emty menu object
const menu = {

// add courses to menu

_courses:{
  appetizers:[], // initialize to empty array
  mains:[],
  desserts:[],

},

get appetizers(){
  return this._courses.appetizers;

}, get mains(){
  return this._courses.mains;

},
get desserts(){
  return this._courses.desserts;

},
set appetizers(appetizers){
  this._courses.appetizers = appetizers;

},
set mains(mains){
   this._courses.mains = mains;
},
set desserts(desserts){
 this._courses.desserts = desserts;
},

get courses() {
  return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,

};
},
 addDishToCourse(courseName,dishName,dishPrice){
    const dish = { name: dishName,
    price: dishPrice
    };
    this._courses[courseName].push(dish)

  },

  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },



  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appitizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
  const totalprice = appetizer.price + main.price + desserts.price;
  return `Your meal is ${appetizer.name},${main.name},${dessert.name} The price is $${totalPrice}.`;
}

};
menu.addDishToCourse('appetizers','Salad',4.00);
menu.addDishToCourse('appetizers','soup',4.00);
menu.addDishToCourse('appetizers','sea weed',3.00);

menu.addDishToCourse('mains','pasta',12.00);
menu.addDishToCourse('mains','steak',16.00);
menu.addDishToCourse('mains','tocos',11.00);

menu.addDishToCourse('desserts','ice cream',4.00);
menu.addDishToCourse('desserts','Chocolate cake',5.00);
menu.addDishToCourse('desserts','rice pudding',4.00);

//let meal = menu.generateRandomMeal();



//console.log(meal);


let meal = menu.generateRandomMeal();

console.log(meal);
