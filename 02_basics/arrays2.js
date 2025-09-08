const marvel_heros = ["Thor", "Captain America", "Hulk"];
const dc_heros = ["SuperMan", "Batman", "Flash"];

// marvel_heros.push(dc_heros); // avoid such merging
// console.log(marvel_heros)
// console.log(marvel_heros[3]) //to access 3rd element of marvel_heros
// console.log(marvel_heros[3][1]) //to access 1st elemet of 3rd element of marvel_heros

// marvel_heros.concat(dc_heros);
// console.log(marvel_heros); // same hoga push jaisa

// to properly concatinate store the concatinated value in another variable
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); 
