"use strict";
class People {
    id;
    name;
    nationality;
    constructor(id, name, nationality) {
        this.id = id;
        this.name = name;
        this.nationality = nationality;
    }
    displayDetails() {
        console.log(`The details are ${this.id}, ${this.name}, ${this.nationality}`);
    }
}
const Indian = new People(1, 'Sandhya', 'Indian');
Indian.displayDetails();
