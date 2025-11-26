/**
 * @author William
 * @version 1.0.0
 * @date 2025-11-25
 * @fileoverview Print a right-angled number triangle using nested loops.
 */

// INPUT: number of rows
const numberOfRows: number = Number(prompt("How many rows would you like? "));

// PROCESS: build and print the triangle
for (let row: number = 1; row <= numberOfRows; row++) {
  let line: string = "";

  // Build each row
  for (let num: number = 1; num <= row; num++) {
    line += `${num} `;
  }

  // OUTPUT: row of numbers
  console.log(`${line}`);
}

console.log("\nDone.");
