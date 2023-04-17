/* BASICS OF TYPESCRIPT

This file covers the types available in typescript */

let message: string = "Hello World";
console.log(message);

// Typescript is a way to refer to the different properties and functions a value has

// Types in typescript
/* Primitive */
const myName: string = "Sandhya";
const myAge: number = 27;
const isFemale: boolean = true;
const children: null = null;
const favoriteCities: string[] = [
  "Coimbatore",
  "London",
  "Paris",
  "Stuttgart",
  "Bangalore",
];

// Type declaration for return value of function
function getFullname(): string {
  return "Sandhya Srinivasan";
}

/* Type inference occurs when you initialize variables, set parameter default values, and determine function return types.


TypeScript uses the best common type algorithm to select the best candidate types that are compatible with all variables.


TypeScript also uses contextual typing to infer types of variables based on the locations of the variables. */

//void type
function addSomething(): void {
  let c = 1 + 2;
  // do something
  console.log(c);
}

addSomething();
console.log(getFullname());

/* NEVER TYPE

The never type contains no value.

The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.

*/

/* UNION TYPE

A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.

*/

/* ALIAS TYPE

Type aliases allow you to create a new name for an existing type. The following shows the syntax of the type alias:

*/

type chars = string;

let newName: chars = "Changed name from Sandhya to Swetha";
console.log(newName);

type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = "Hi"; // valid
// input = false; // Compiler error

/* STRING LITERAL TYPE

The string literal type is useful to limit a possible string value in a variable.

The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable

*/

let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
// mouseEvent = 'mouseover'; // compiler error

/* Combining alias type and string literal */

type AllowedEvent = "click" | "dblclick" | "mouseup" | "mousedown";
let allowedEvent: AllowedEvent;
allowedEvent = "click"; // valid
allowedEvent = "dblclick"; // valid
allowedEvent = "mouseup"; // valid
allowedEvent = "mousedown"; // valid
// allowedEvent = 'mouseover'; // compiler error

// creating functions

//Optional parameters

function add(x: number, y: number, z?: number): number {
  if (typeof z !== "undefined") return x + y + z;

  return x + y;
}

console.log(add(1, 3));
console.log(add(1, 2, 3));

// default parameters

function addDefault(x: number = 2, y: number): number {
  return x + y;
}

console.log(addDefault(undefined, 3));

//CLASSES

/* Access Modifiers 
ts provides us with 3 access modifiers namely
*public
*private
*protected
*/

class Employee {
  constructor(
    protected name: string,
    protected id: number,
    protected last_name: string
  ) {
    this.name = name;
    this.id = id;
    this.last_name = last_name;
  }
  public getFullName() {
    return `${this.name} ${this.last_name}`;
  }
}

const empl = new Employee("Sandhya", 354020, "Srinivasan");
console.log(empl.getFullName());

//Readonly

//Readonly is similar to const in functions. Value once assigned cannot be reassigned

class Person {
  constructor(readonly birthDate: Date) {
    this.birthDate = birthDate;
  }
}

let person = new Person(new Date(1990, 12, 25));
// person.birthDate = new Date(1991, 12, 25); // Compile error

//Getters and Setters

/* 
A getter method returns the value of the property’s value. A getter is also called an accessor.
A setter method updates the property’s value. A setter is also known as a mutator.
*/

class Student {
  public get first_name(): string {
    return this._first_name;
  }
  public set first_name(value: string) {
    this._first_name = value;
  }
  private _first_name: string = '';
}

const newStudent = new Student()
newStudent.first_name = 'Sandhya'
console.log(newStudent.first_name)


//Second example


class newPerson {
    private _age: number = 0;
    private _firstName: string = '';
    private _lastName: string = '';

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let second = new newPerson();
second.firstName = 'John';
second.lastName = ' Doe';

console.log(second.getFullName());


// Inheritance

class programmer extends Employee {
    constructor(
         name: string,
         age: number,
         last_name: string,
         public salary: number) {
            super(name,age, last_name)
        }

        public getDetails() {
            return `${this.salary} ${this.name} ${this.last_name}`
        }
}

const myself = new programmer('Nitish', 27, 'Ram', 70000)
console.log(myself.salary)
