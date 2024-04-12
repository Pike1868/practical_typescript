/**Challenge:
 * Create a variable of type string and try to invoke a string method on it
 * 
 * Create a variable of type number and try to perform a mathematical operation
 * on it
 *
 * Create a variable of type boolean and try to perform a logical operation on it.
 * 
 * Try to assign a value of a different type to each of these variables and observe
 * the TypeScript compiler's response.
 * 
 * You can use type annotation or inference 
 */

// console.log("======CHALLENGE 1 START=======");

// let someStr: string = "Hello world";
// console.log(someStr.toUpperCase());

// let someNum: number = 10;
// console.log(Math.floor(Math.random() * someNum));

// let someBoolean: boolean = true;
// if(someBoolean === true){
//     console.log("This is typescript");
// }

// //Trying to assign different types:

// // someStr = 2
// // someNum = false
// // someBoolean = "hello world"


// console.log("======CHALLENGE 1 END=======");

/**Challenge 2: Unions
 * 
 * Create a variable orderStatus of type "processing" |"shipped" | "delivered"
 * and assign it the value of "processing". Then try to assign it the values "shipped"
 * and "delivered"
 * 
 * Create a variable discount of the type number | string and assign it the value 20
 * Then try to assign it the value "20%" 
 */

let orderStatus: "processing" | "shipped" | "delivered" = "processing"
// console.log(orderStatus);

orderStatus = "shipped";
// console.log(orderStatus);

orderStatus = "delivered";
// console.log(orderStatus);

let discount: number | string = 20;
// console.log(discount)

discount = "20%"
// console.log(discount)

/**Challenge 3: Arrays 
 * 
 * Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
 * 
 * Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
 * 
 * Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
 * 
*/

let temperatures: number[] = [1,2,3,4,5];
// temperatures.push("ten") // will give us an error here

let colors: string[] = ["green", "black", "red"];
// colors.push(false) // will also give us an error due to the wrong type

let mixedArr: (number | string)[] = [1,"two",3,"four", 5];
// mixedArr.push(true) // will also give us an error because only string and number types can be added

/**Challenge 4: Objects
 * 
 * Create an object bike of type { brand: string, year: number } and assign it some values. 
 * Then, try to assign a string to the year property.
 * 
 * Create an object laptop of type { brand: string, year: number } and try to assign an object 
 * with missing year property to it.
 * 
 * Create an array products of type { title: string, price?: number }[] and assign it some values. 
 * Then, try to add an object with a price property of type string to it.
 */

let bike:{ brand: string, year: number } = { brand: "Huffy", year: 2024 }
// bike = { brand: "Harley", year: "number" } // this will throw an error because the year can only be a number type 


let laptop: { brand: string, year: number }  = { brand: "Apple", year: 2024 } 
// laptop = { brand: "Dell" } // will give us an error because the year property is missing

let product1 = { title: "Laptop", price: 1000 }
let product2 = { title: "Shoes", price: 99 }
let product3 = { title: "Notepad", price: 7 }
let product4 = { title: "Pen" }

let productsList: { title: string, price?: number }[] = [product1 , product2 ,product3, product4 ]

// console.log(productsList)

/**Challenge 4: Functions
 * 
 * Create a new array of names
 * 
 * Write a new function that checks if a name is in the array
 * This function should take a name as a parameter and return a boolean.
 * 
 * Use this function to check if various names are in your array and log the results.
 * 
 */

let names: string[] = ["John", "Jane","Jacob"]

function foundName(name:string):boolean{
  return names.includes(name);
}

// console.log(foundName("Tucker") === false)
// console.log(foundName("John") === true)