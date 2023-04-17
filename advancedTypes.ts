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

