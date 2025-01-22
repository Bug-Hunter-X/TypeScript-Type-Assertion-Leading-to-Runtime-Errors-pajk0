function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

//This function uses type guards to check whether the input is a number before performing any operation.
function processData(data: any): number {
    if (typeof data === 'number') {
        return data * 2; 
    } else {
        return 0; // Handle non-number input appropriately
    }
}
let result3 = processData(5); // result3 is 10
let result4 = processData('hello'); // result4 is 0