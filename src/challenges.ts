// /**Challenge:
//  * Create a variable of type string and try to invoke a string method on it
//  * 
//  * Create a variable of type number and try to perform a mathematical operation
//  * on it
//  *
//  * Create a variable of type boolean and try to perform a logical operation on it.
//  * 
//  * Try to assign a value of a different type to each of these variables and observe
//  * the TypeScript compiler's response.
//  * 
//  * You can use type annotation or inference 
//  */

// // console.log("======CHALLENGE 1 START=======");

// // let someStr: string = "Hello world";
// // console.log(someStr.toUpperCase());

// // let someNum: number = 10;
// // console.log(Math.floor(Math.random() * someNum));

// // let someBoolean: boolean = true;
// // if(someBoolean === true){
// //     console.log("This is typescript");
// // }

// // //Trying to assign different types:

// // // someStr = 2
// // // someNum = false
// // // someBoolean = "hello world"


// // console.log("======CHALLENGE 1 END=======");

// /**Challenge 2: Unions
//  * 
//  * Create a variable orderStatus of type "processing" |"shipped" | "delivered"
//  * and assign it the value of "processing". Then try to assign it the values "shipped"
//  * and "delivered"
//  * 
//  * Create a variable discount of the type number | string and assign it the value 20
//  * Then try to assign it the value "20%" 
//  */

// let orderStatus: "processing" | "shipped" | "delivered" = "processing"
// // console.log(orderStatus);

// orderStatus = "shipped";
// // console.log(orderStatus);

// orderStatus = "delivered";
// // console.log(orderStatus);

// let discount: number | string = 20;
// // console.log(discount)

// discount = "20%"
// // console.log(discount)

// /**Challenge 3: Arrays 
//  * 
//  * Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.
//  * 
//  * Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.
//  * 
//  * Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it.
//  * 
// */

// let temperatures: number[] = [1,2,3,4,5];
// // temperatures.push("ten") // will give us an error here

// let colors: string[] = ["green", "black", "red"];
// // colors.push(false) // will also give us an error due to the wrong type

// let mixedArr: (number | string)[] = [1,"two",3,"four", 5];
// // mixedArr.push(true) // will also give us an error because only string and number types can be added

// /**Challenge 4: Objects
//  * 
//  * Create an object bike of type { brand: string, year: number } and assign it some values. 
//  * Then, try to assign a string to the year property.
//  * 
//  * Create an object laptop of type { brand: string, year: number } and try to assign an object 
//  * with missing year property to it.
//  * 
//  * Create an array products of type { title: string, price?: number }[] and assign it some values. 
//  * Then, try to add an object with a price property of type string to it.
//  */

// let bike:{ brand: string, year: number } = { brand: "Huffy", year: 2024 }
// // bike = { brand: "Harley", year: "number" } // this will throw an error because the year can only be a number type 


// let pc: { brand: string, year: number }  = { brand: "Apple", year: 2024 } 
// // laptop = { brand: "Dell" } // will give us an error because the year property is missing

// let product1 = { title: "Laptop", price: 1000 }
// let product2 = { title: "Shoes", price: 99 }
// let product3 = { title: "Notepad", price: 7 }
// let product4 = { title: "Pen" }

// let productsList: { title: string, price?: number }[] = [product1 , product2 ,product3, product4 ]

// // console.log(productsList)

// /**Challenge 4: Functions
//  * 
//  * Create a new array of names
//  * 
//  * Write a new function that checks if a name is in the array
//  * This function should take a name as a parameter and return a boolean.
//  * 
//  * Use this function to check if various names are in your array and log the results.
//  * 
//  */

// let names: string[] = ["John", "Jane","Jacob"]

// function foundName(name:string):boolean{
//   return names.includes(name);
// }

// // console.log(foundName("Tucker") === false)
// // console.log(foundName("John") === true)

// /**Functions Using Union Types as Function Parameters
//  * 
//  * Challenge: Create a function named processInput that accepts a parameter of 
//  * a union type string | number. The function should behave as follows:
//  * 
//  * If the input is of type number, the function should multiply the number by 2
//  * and log the result to the console.
//  * 
//  * If the input is of type string, the function should convert the string to uppercase
//  * and log the result to the console.
//  * 
//  */

// function processInput(input:(string | number)):(string | number){
//   if(typeof(input) ==="string"){
//     return  input.toUpperCase()
//   }else{
//       return input * 2;
//   }
   
// }


// // console.log(processInput("Help me")) //"HELP ME"
// // console.log(processInput(21)) // 42


// /**Functions Challenge 2:
//  * Create a function named processData that accepts two parameters:
//  * 
//  * The first parameter, input, should be a union type that can be either
//  * a string or a number.
//  * 
//  * The second parameter, config, should be an object with a reverse property
//  * of type boolean, by default it "reverse" should be false
//  * 
//  * The function should behave as follows:
//  * If input is of type number, the function should return the square of the number.
//  * If input is of type string, the function should return the string in the uppercase.
//  * If the reverse property on the config object is true, and the input is a string,
//  * the function should return the reverse string in uppercase.
//  * 
// */

// function processData(input:(string|number), config:{reverse:boolean} = {reverse:false} ):(string|number){
//   if(typeof(input) ==="number") return input * input;
//   else if(typeof(input)==="string" && config.reverse === true) return input.split("").reverse().join("").toUpperCase();
//   else return input.toUpperCase()

// }

// // console.log(processData("Typescript", {reverse:true}))
// // console.log(processData("Typescript"))
// // console.log(processData(100))

// /**Challenge: Type Alias
//  * 
//  * Define the Employee type: create a type employee with properties id(number), 
//  * name(string), and department(string)
//  * 
//  * Define the Manager type: create a type manager with properties id(number),
//  * name(string), and employees(an array of Employee)
//  * 
//  * Create a Union Type: Define a type Staff that is a union of Employee and Manager
//  * 
//  * Create the printStaffDetails function: 
//  * This function should accept a parameter of type Staff. 
//  * Inside the function, use a type guard to check if the "employees" property exists in the second passed object. 
//  * If it does, print a message indicating that the person is a manager
//  * and the number of the employees they manage. If it doesn't, print a message indicating that the 
//  * person is an employee and the department they belong to
//  * 
//  * Create Employee and Manager objects: Create two Employee objects. One named Alice and the second
//  * named Steve. Also create a Manager object named Bob, who manages Alice and Steve.
//  * 
//  * Test the function: Call the printStaffDetails function with Alice and Bob as arguments and verify the output.
//  */

// // type Employee = {id:number, name:string, department:string};
// // type Manager = {id:number, name:string,employees:Employee[]};
// // type Staff = (Employee | Manager)


// // const alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };
// // const steve: Employee = { id: 1, name: 'Steve', department: 'HR' };
// // const bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };

// // function printStaffDetails(staff:Staff):void{
// //   //How can we check whether the staff object is the employee or the manager
// //   //Cannot use type of here because they are both are equal to an object.
// //   //So we need to use a property that is specific to the object we are checking for.
// //   if("employees" in staff){
// //     console.log(`${staff.name} is a manager, and manges ${staff.employees.length} employees`);
// //   } else{
// //     console.log(`${staff.name} is an employee, who works in the ${staff.department} department`)
// //   }

// // }

// // printStaffDetails(alice)
// // printStaffDetails(steve)
// // printStaffDetails(bob)

// /**Challenge
//  * Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
//  * Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
//  * Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
//  * Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
//  * 
//  * Also inside the interface, define any methods that the object should have. 
//  * In this case, we have upgradeRam, which is a function that takes a number and returns a number.
//  * Now that we have our interface, we can create an object that adheres to this interface. 
//  * This object should have all the properties defined in the interface (except for optional ones, which
//  * are... optional), and the methods should be implemented.
//  * 
//  * Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
//  */

// interface Computer{
//   readonly id:number,
//   brand: string,
//   ram:number,
//   storage?:number,
//   upgradeRam(increase:number):number
// }

// const laptop: Computer = {
//   id: 1,
//   brand: 'random brand',
//   ram: 8, // in GB
//   upgradeRam(amount: number) {
//     this.ram += amount;
//     return this.ram;
//   },
// };

// laptop.storage = 256; // assigning value to optional property

// // console.log(laptop.upgradeRam(4)); // upgrades RAM by 4GB
// // console.log(laptop);

// /** Interface Challenge - Part 1
// Define the Person interface Start by defining a Person interface with a name property of type string.

// Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.

// Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.

// Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide 
// which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.

// Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
// */

// interface Person{
//   name:string
// }

// interface DogOwner{
//   dogName:string
// }

// interface Manager extends Person, DogOwner{
//   managePeople():void,
//   delegateTasks():void
// }

// const employee: Person | DogOwner | Manager = getEmployee();
// // console.log(employee)

// function getEmployee(): Person |DogOwner | Manager {
//   const random = Math.random();
//   if(random < 0.33){
//     return {name:"john"}
//   } else if(random < 0.66){
//   return {
//     name: "sarah",
//     dogName:"rex",
//   }
// } else{
//   return {
//     name: "bob",
//     managePeople:()=>console.log("Managing people..."),
//     delegateTasks:()=>console.log("Delegating tasks...")
//   }
// }
// }


// /**Challenge - Part 2
// A type predicate in TypeScript is a special kind of return type for a function that not only returns a boolean, but also asserts that the argument is of a specific type if the function returns true. It's typically used in user-defined type guard functions to narrow down the type of a variable within a certain scope. The syntax is arg is Type, where arg is the function argument and Type is the type you're checking for.

// Define the isManager function Define a function called isManager that takes an object of type Person | DogOwner | Manager and returns a boolean. This function should check if the managePeople method exists on the object, and return true if it does and false if it doesn't. The return type of this function should be a type predicate: obj is Manager.
// Run your code to see if it works as expected. If employee is a Manager, you should see the output of the delegateTasks method in the console. If employee is a Person or DogOwner, there should be no output. */

// // function isManager(obj: Person | DogOwner | Manager): boolean {
// //   return 'managePeople' in obj;
// // }

// function isManager(obj: Person | DogOwner | Manager): obj is Manager {
//   return 'managePeople' in obj;
// }

// if (isManager(employee)) {
//   employee.delegateTasks();
// }

// /**Enum Challenge
//  * Define an enum named UserRole with members Admin, Manager, and Employee.
//  * Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
//  * Define a function named createUser that takes a User object as its parameter and returns a User object.
//  * Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.
//  */

// // enum UserRole {
// //   Admin,
// //   Manager,
// //   Employee
// // }

// // type User = {
// //   id:number,
// //   name:string,
// //   role:UserRole,
// //   contact: [string, string] // Tuple [email, phone]
// // }

// // function createUser(input:User):User{
// //   return input
// // }
// // console.log(createUser({
// //   id:1,
// //   name:"John Doe",
// //   role: UserRole.Admin,
// //   contact:["john.doe@test.com", "123-456-7890"],
// // }));


// //Challenge "typeof" guard:
// /**Define the function checkValue that takes one parameter value of type ValueType.
// Inside the function, use an if statement to check if value is of type string. If it is, log value converted to lowercase and then return from the function.
// If value is not a string, use another if statement to check if value is of type number. If it is, log value formatted to two decimal places and then return from the function.
// If value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
// Finally, call the checkValue function with value as the argument.
//  */

// type ValueType = string | number | boolean;

// let value: ValueType;
// const random = Math.random();
// value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;
// function checkValue(value: ValueType) {
//   if (typeof value === 'string') {
//     console.log(value.toLowerCase());
//     return;
//   }
//   if (typeof value === 'number') {
//     console.log(value.toFixed(2));
//     return;
//   }
//   console.log(`boolean: ${value}`);
// }

// // checkValue(value);