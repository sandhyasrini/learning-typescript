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



