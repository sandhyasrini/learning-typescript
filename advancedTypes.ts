// Discriminated Unions

// Discriminiated Unions are used in cases where there needs a description for each of the types in the union
// so as to identify the type and make it easier for us, the developers to do type checking.

//---------------------------------------EXAMPLE-------------------------------------------------------


interface Bird {
    type: 'Bird'; // Here the type is added to make this a discriminated Union 
    // because each interface can have a different key for speed based on the species 
    flyingSpeed: number;
}

interface Whale {
    type: 'Whale';
    swimmingSpeed: number;
}

type animal = Bird | Whale;

function animalSpeed(animal: animal)
{
    switch(animal.type)
    {
        case 'Bird':
            return animal.flyingSpeed
            break;
        case 'Whale':
            return animal.swimmingSpeed
            break;
    }
}

console.log(animalSpeed({type: 'Bird', flyingSpeed: 10}))


// Optional Chaining

// This is used to check if a key is present in interfaces. This is mostly used in cases where we
// cannot define the type in advance, like in cases where the object is returned from an API

//--------------------------------------------EXAMPLE--------------------------------------------


interface optionalChaining
{
    type?: string
    name: string
}

const data : optionalChaining = {name: 'test'}

function checkType(userData: optionalChaining) {
    return userData?.type ? userData?.type : 'common' //Using ?. to check if the key exists
}

console.log(checkType(data))

//Type casting

// When we are sure of a type of a data that we get but in cases where typescript is unable to predict it,
// we can typecase the data to the type we know in which we will receive it

//----------------------------------------------EXAMPLE------------------------------------------

