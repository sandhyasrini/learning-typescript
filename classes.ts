// Creating a class in Typescript and shorthand initialisation for objects inside a calss

// Public and private access modifiers.
// Public allows us to access an object from anywhere whereas private can be accessed only from within the class

abstract class People {
  constructor(
    protected readonly id: number,
    protected name: string,
    protected nationality: string,
    public userId: string
  ) {}

  displayDetails() {
    console.log(
      `The details are ${this.id}, ${this.name}, ${this.nationality}, ${this.userId}`
    );
  }

  abstract getNameOfCountry(): void;
}

class Person1 extends People {
  getNameOfCountry(): void {
    console.log(`Indian`);
  }
}

const Indian1 = new Person1(1, 'Sandhya', 'Indian', 'sandhya1');

Indian1.userId = '10000';

Indian1.displayDetails();

Indian1.getNameOfCountry()

//This portion covers inheritance, use of protected variables from parent class, getters and setters

class Indian extends People {
  constructor(
    id: number,
    name: string,
    nationality: string,
    userId: string,
    private state: string
  ) {
    super(id, name, nationality, userId);
  }

  getNameOfCountry(): void {
    console.log(`Indian`);
  }

  get IndianDetails() {
    return `The details are ${this.id}, ${this.name}, ${this.nationality}, ${this.userId}`;
  }
  set IndianDetails(value) {
    this.nationality = value;
  }
}

const Person2 = new Indian(1, 'Sandhya', 'Indian', 'sandy15', 'TN');
console.log(Person2.IndianDetails);
Person2.IndianDetails = 'German';
console.log(Person2.IndianDetails);

// Creating a static variable

// Static variables are like constants that are created within a class and can be accessed using the class name directly without having to create an instance of the class
//eg: Math.PI

class USA extends People {
  static states: number = 50;

  getNameOfCountry(): void {
    console.log(`American`)
  }

  get details() {
    return `The details are ${this.id}, ${this.name}, ${this.nationality}, ${this.userId}`;
  }
}

const Person3 = new USA(1, 'Sam', 'American', 'sam01');
Person3.displayDetails();

console.log(`the number of states in USA are, ${USA.states}`);
