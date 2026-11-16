// Predict and explain first...

// Why will an error occur when this program runs?
// =============> This program will throw a SyntaxError because the parameter "decimalNumber" is already declared in the function signature and cannot be redeclared with "const" inside the function body.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> First, JavaScript throws a SyntaxError during parsing because "decimalNumber" is declared both as a parameter and with "const". Second, even without that redeclaration, calling "console.log(decimalNumber)" at line 15 would throw a ReferenceError because "decimalNumber" is locally scoped inside the function.

// Finally, correct the code to fix the problem
// =============> function convertToPercentage(decimalNumber) { const percentage = `${decimalNumber * 100}%`; return percentage; } console.log(convertToPercentage(0.5));