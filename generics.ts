
//Without generics
function logAndReturn(value: number | string): number | string {
    console.log(value);
    return value;
}

const numberResult: string | number = logAndReturn(42);
const stringResult: string | number = logAndReturn("Baboo Kumar Heerani");

console.log(numberResult);
console.log(stringResult);

//with Generaics 
function logAndReturn<T>(value: T): T {
  console.log(value);
  return value;
}

const numberResult: string | number = logAndReturn(42);
const stringResult: string | number = logAndReturn("Baboo Kumar Heerani");

console.log(numberResult);
console.log(stringResult);
