"use strict";
/* BASICS OF TYPESCRIPT

This file covers the types available in typescript */
let message = "Hello World";
console.log(message);
// Typescript is a way to refer to the different properties and functions a value has
// Types in typescript
/* Primitive */
const myName = "Sandhya";
const myAge = 27;
const isFemale = true;
const children = null;
const favoriteCities = [
    "Coimbatore",
    "London",
    "Paris",
    "Stuttgart",
    "Bangalore",
];
// Type declaration for return value of function
function getFullname() {
    return "Sandhya Srinivasan";
}
/* Type inference occurs when you initialize variables, set parameter default values, and determine function return types.


TypeScript uses the best common type algorithm to select the best candidate types that are compatible with all variables.


TypeScript also uses contextual typing to infer types of variables based on the locations of the variables. */
//void type
function addSomething() {
    let c = 1 + 2;
    // do something
    console.log(c);
}
addSomething();
console.log(getFullname());
let newName = "Changed name from Sandhya to Swetha";
console.log(newName);
let input;
input = 100; // valid
input = "Hi"; // valid
// input = false; // Compiler error
/* STRING LITERAL TYPE

The string literal type is useful to limit a possible string value in a variable.

The string literal types can combine nicely with the union types to define a finite set of string literal values for a variable

*/
let mouseEvent;
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
let allowedEvent;
allowedEvent = "click"; // valid
allowedEvent = "dblclick"; // valid
allowedEvent = "mouseup"; // valid
allowedEvent = "mousedown"; // valid
// allowedEvent = 'mouseover'; // compiler error
// creating functions
//Optional parameters
function add(x, y, z) {
    if (typeof z !== "undefined")
        return x + y + z;
    return x + y;
}
console.log(add(1, 3));
console.log(add(1, 2, 3));
// default parameters
function addDefault(x = 2, y) {
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
    name;
    id;
    last_name;
    constructor(name, id, last_name) {
        this.name = name;
        this.id = id;
        this.last_name = last_name;
        this.name = name;
        this.id = id;
        this.last_name = last_name;
    }
    getFullName() {
        return `${this.name} ${this.last_name}`;
    }
}
const empl = new Employee("Sandhya", 354020, "Srinivasan");
console.log(empl.getFullName());
//Readonly
//Readonly is similar to const in functions. Value once assigned cannot be reassigned
class Person {
    birthDate;
    constructor(birthDate) {
        this.birthDate = birthDate;
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
    get first_name() {
        return this._first_name;
    }
    set first_name(value) {
        this._first_name = value;
    }
    _first_name = '';
}
const newStudent = new Student();
newStudent.first_name = 'Sandhya';
console.log(newStudent.first_name);
//Second example
class newPerson {
    _age = 0;
    _firstName = '';
    _lastName = '';
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(theFirstName) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(theLastName) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let second = new newPerson();
second.firstName = 'John';
second.lastName = ' Doe';
console.log(second.getFullName());
// Inheritance
class programmer extends Employee {
    salary;
    constructor(name, age, last_name, salary) {
        super(name, age, last_name);
        this.salary = salary;
    }
    getDetails() {
        return `${this.salary} ${this.name} ${this.last_name}`;
    }
}
const myself = new programmer('Nitish', 27, 'Ram', 70000);
console.log(myself.salary);
