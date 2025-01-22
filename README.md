# TypeScript Type Assertion Bug

This repository demonstrates a common issue in TypeScript: using type assertions to bypass type checking. While type assertions can be useful in some situations, they can also lead to runtime errors if the assertion is incorrect. This example shows a function that uses a type assertion to treat any input as a number, which can cause unexpected behavior if the input is not actually a number.

## Bug
The `processData` function uses a type assertion `(data as number)` to treat the input `data` as a number regardless of its actual type. If the input is not a number, this will lead to a runtime error.

## Solution
The solution involves using type guards or conditional logic to check the type of the input before performing any operations. This ensures type safety and prevents runtime errors.

## How to reproduce
1. Clone the repository.
2. Run `tsc bug.ts` to compile the code.
3. Run `node bug.js`. Observe the unexpected result.
4. Run `tsc bugSolution.ts` to compile the corrected code.
5. Run `node bugSolution.js` to see the corrected behavior.