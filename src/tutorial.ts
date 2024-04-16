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
  
  // sayHi('john');
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


//Functions - rest parameters example

function sum(message:string, ...numbers:number[]):string{

  let total = numbers.reduce((previous, current)=> previous + current )

  return `${message} ${total}`
}

// console.log(sum('The total is:', 1,2,3,4,5))


/**What type should we return if we are not returning anything from the function?
 * We should return the void type
 */

function logMessage(message: string):void{
  console.log(message);
  // return 'hello world'; 
  // if we do try to return somthing after setting the return type to void
  //TS will give us a warning that: Type 'string' is not assignable to type 'void'

}

// logMessage("Hello, TypeScript")

//Function - Using Objects as Function Parameters

function createEmployee({ id }: { id: number }) {
  return { id, isActive: id % 2 === 0 };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
// console.log(first, second);

// alternative
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);
}

const newStudent = {
  id: 5,
  name: 'tucker',
};

// createStudent(newStudent);



/**Type Alias
 * A type alias in TS is a new name or shorthand for an existing type, making it easier to reuse complex types.
 * However, it's important to note that it doesn't create a new unique type - it's just an alias. All the same
 * rules apply to the aliased type, including the ability to mark properties as optional or readonly.
 * 
 * type aliases are primarily used for type checking. They do not compile to any code on their own in JS;
 * they are used purely by TypeScript to ensure types are correct during development.
 */

//'type is the keyword here, and then 
type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = 'hello'; // This is valid
value = 123; // This is also valid

type Theme = 'light' | 'dark'; // Type alias for theme

let theme: Theme;
theme = 'light'; // This is valid
theme = 'dark'; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme('dark'); // This will set the theme to 'dark'


/**Intersection Types
 * In TS an intersection type is a way of combining multiple types into one.
 * This means that an object of an intersection type will have all the properties
 * of TypeA and all the properties of TypeB. It's a way of creating a new type that
 * merges the properties of existing types.
*/
// type Book = {id:number, name:string, price:number}
// type DiscountedBook = Book & {discount:number}

// const book1:Book={
//   id:1, 
//   name: "Harry Potter and the Sorcer's Stone",
//   price: 15
// }

// const book2:Book={
//   id:2, 
//   name: "Harry Potter and the Chamber of Secrets",
//   price: 18
// }

// const discountBook:DiscountedBook = {
//   id:2, 
//   name: "Harry Potter and the Prisoner of Azkaban",
//   price: 18,
//   discount: 0.15,
// }

/**Interfaces
 * An interface declaration is another way to name an object type
 * 
 * Type aliases and interfaces are very similar, and in many cases you can choose between them freely. 
 * Almost all features of an interface are available in type, the key distinction is that a type cannot 
 * be re-opened to add new properties vs an interface which is always extendable.
 * 
 */

interface Book{
  readonly isbn:number,
  title: string,
  author: string,
  genre?:string
  //method blueprint but not the actual logic
  printAuthor():void;
  printTitle(message:string):string;
}


const deepWork: Book = {
  isbn:123,
  title:"deep work",
  author: "cal newport",
  genre:"self-help",
  //inside of the instance we can setup the actual method and just follow the blueprint
  //making sure we set the type if we are returning anything
  printAuthor(){
    console.log(this.author)
  },
  printTitle(message:string){
    return `${this.title} ${message}`
  }
}

// deepWork.printAuthor()
// console.log(deepWork.printTitle("is a really good book"))

