function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

//This function uses type assertion to bypass type checking. 
//This is generally discouraged because it can lead to runtime errors if the assertion is incorrect.
function processData(data: any): number {
    return (data as number) * 2; // Type assertion
}
let result3 = processData(5) // result3 is 10
let result4 = processData('hello'); // result4 is NaN. This is a runtime error which won't be caught by the compiler.