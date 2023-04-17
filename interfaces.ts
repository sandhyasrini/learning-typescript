// Implementing an interface

interface Details {
  name: string;
  dob: string;
  nationality: string;
}


class Detail implements Details {
  constructor(
    public name: string,
    public dob: string,
    public nationality: string,
    private newName: string // This is allowed because the basic rule for TypeScript’s structural type system is that x is compatible with y if y has at least the same members as x
  ) {}
}

const StudentDetails = new Detail('Sandhya', '15.02.1995', 'Indian', 'SandhyaSrini');


let checkTypeCompatibility: Details = {
    name: 'Sandhya',
    dob: 'wedwe',
    nationality: 'wewe'
}

let PersonalDetails: {name: string, dob: string} = {
    name: 'Sandhya',
    dob: '28323'
}

let NewDetails = {
    name: 'Sandhya',
    dob: '28323',
    nationality: 'INdian',
    state: 'TN'
}


PersonalDetails = checkTypeCompatibility; // This is working because of Structural typing
// Structural typing is where typescript will accept variables when the assigned value is a subtype of the base type
// Structural typing is a way of relating types based solely on their members. This is in contrast with nominal typing.

const compatibility: Details = NewDetails

console.log(PersonalDetails)
console.log(NewDetails)
