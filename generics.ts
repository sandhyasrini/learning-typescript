// GENERICS IN TYPESCRIPT

// Generics, as the name suggests, are generic types that is created using 2 or more typescript types
// They offer more flexibility in assigning types and catching errors which is not usually identified
// by the primitive types offered in typescript

//----------------------------------------Default Generic types EXAMPLE------------------------------------

const arr: Array<string> = []; // Array is a cefault generic type

//Promise is a default generic type which takes the return type of the promise object
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => resolve('promise resolved'), 1000);
});

promise.then((data) => {
  console.log(data.length); // calling length property doesn't throw error because ts knows for sure that the return type is a string
});



//------------------------------------CREATING A GENERIC FUNCTION-------------------------------------

// Here we have created a generic Type which takes 2 values, both of type Object
// The type of the subtype can be assigned by extending the type that you want
// Like below: T extends object (or) T extends string
// By extending the type we are creating a CONSTRAINT on the type
function combineObjects<T extends object, U extends object> (obj1: T, obj2: U) { 
    return Object.assign(obj1, obj2)
}

const result = combineObjects({name: 'Sandhya'}, {profession: 'Developer'})
console.log(result)



//----------------------------------Another cool example!--------------------------------------------
interface propertyLength {
    length: number
}

function returnSize<T extends propertyLength>(data: T) {
    return data.length //Here the function would not know the type of data and would complain when trying to access length property
    // To avoid the error we have extended the type with an interface which has a length property
    // TS would now know the input must have a length property
}

console.log(returnSize('sandhya'))
console.log(returnSize([1,2,4]))
// returnSize(2) // This would throw an error



//------------------------------Example with KeyOf in Generics---------------------------------------------

function getValueByKey<T extends object, U extends keyof T>(obj : T, key: U)
{
    return obj[key] // Throws error because TS doesn't know if key is present in the object
    // To overcome this we extend the key type to be a keyof object type
}

console.log(getValueByKey({name: 'Sandhya'}, 'name'))
// getValueByKey({name: 'Sandhya'}, 'age') // This will throw an error



