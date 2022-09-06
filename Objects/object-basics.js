/** --- --- ---- ----> OBJECT DECLARATION  <--- --- --- --- --- */
const myKey = 'key';
const website = {
    name : 'Algoexpert',
    rating : 5,
    founders : ['Clement', 'Antoine'],
    isAwesome: true,
    'multi word key': 0,
    [myKey]: 1234
};

/** using object literals for declaration of objects */
const obj = new Object();
obj.name = "Marvin";
console.log(obj);

/** OBJECT DECLARATION USING A CONSTRUCTOR */
function Website(name, rating, founders){
    this.name = name;
    this.rating = rating;
    this.founders = founders;
}

const frontEndExpert = new Website("Kobe", "Bean", 'Bryant');
console.log(frontEndExpert);


/** OBJECT ACCESS  */
console.log(website.name);
console.log(website['rating']);

/** CHECK IF KEY EXISTS */
// Checks if a given key is in the object
console.log('founders' in website);
// An alternative way of checking if object is in string, use this one
console.log(website.hasOwnProperty('name'));

/** --- --- ---- --- DECLARING A METHOD INSIDE AN OBJECT --- --- --- --- */
const player = {
    name: 'Ronaldo',
    rating: 100,
    country: 'Portugal',
    position: 'Winger',
    printAlternatives() {
        console.log('There are no alternatives ')
    },
    get getRating() {
        return this.rating;
    },
    set setRating(score) {
        this.rating = score;
    }
}
// This line invokes an error
// console.log(player.setRating(15));
console.log(player.getRating);

/** -- --- ---- ---OBJECT INHERITANCE --- --- --- ---*/
const retired = {
    foo : "bar",
    league : "MLS",
    [Symbol('id')]: 0,
    __proto__ : player
}

// object iteration methods
console.log(Object.keys(retired));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// !!!!!!!!!!!!!!!!!!!!!!  GET THIS METHOD RIGHT !!!!!!!!!!!!!!!

/** Object iteration - method 1 */
Object.entries(obj).forEach(function(value){
    console.log(value);
})
console.log("-----------------------------------------------");

Object.entries(player).forEach(function([key , value]){
    console.log(key. value);
})

/** Object iteration - method 2 */
for (key in player)
    console.log(player[key]);
