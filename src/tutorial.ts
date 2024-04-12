console.log("======= TypeScript practice playground========")

//Union types allow us to setup multiple types

let tax: number | string = 10
tax = 100;
// console.log(tax)

tax = "$10";
// console.log(tax)

//literal value types allow us to only allow certain values for a variable

let requestStatus: "pending" | "success" |"error" = "pending";

// requestStatus = "404" , will give us a warning

//the type any will let us use any type, this is how js usually works
//make sure you have a good reason to use the type of any...
let notSure:any = 4;

// notSure = "now it is a string";
// notSure = false

//if we just initialize a variable without a value ts will default to any
let random; // this will be of the type "any"


/**Practical Example */

const books: string[] = ['1984', 'Brave New World', 'Fahrenheit 451']

//we need to use undefined because ts is not sure if this for sure will be a string at this time
let foundBook: string | undefined;

for(let book of books){
    if(book === '1984'){
        foundBook = book;
        break;
    }
}
//Then ts will add the optional chaining of ? if foundBook is indeed a string
// console.log(foundBook?.length)

/**Functions
 * In typescript, functions can have typed parameters and return values, which provides static 
 * type checking and autocompletion support
 */

function sayHi(name: string) {
    console.log(`Hello there ${name.toUpperCase()}!!!`);
  }
  
  sayHi('john');
//   sayHi(3) // Argument of type 'number' is not assignable to parameter of type 'string'
//   sayHi('peter', 'random'); //Expected 1 arguments, but got 2.
  

//Function returns : we can set the type we are expected to return, in this case we use :number after the params
  function calculateDiscount(price: number): number {
    // price.toUpperCase(); //Property 'toUpperCase' does not exist on type 'number'
    const hasDiscount = true;
    if (hasDiscount) {
      return price;
    //   return 'Discount Applied'; //2 errors Unreachable code detected, Type 'string' is not assignable to type 'number'
    }
    return price * 0.9;
  }
  
  const finalPrice = calculateDiscount(200);
//   console.log(finalPrice);
  
//   // "any" example
//   function addThree(number: any) {
//     let anotherNumber: number = 3;
//     return number + anotherNumber;
//   }
//   const result = addThree(2);
//   const someValue = result;
  
// the code below will cause a run time error
//   someValue.myMethod(); // Uncaught TypeError: someValue.myMethod is not a function