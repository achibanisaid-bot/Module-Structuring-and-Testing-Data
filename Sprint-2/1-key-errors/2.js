
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> This will throw a SyntaxError because a function declaration cannot use a number literal as a parameter name. Parameters must be valid identifiers (variable names).
function square(3) {
    return num * num;
}
console.log(square);

// =============> SyntaxError: Unexpected number / Missing parameter name
// =============> explain this error message here
// =============> The error occurs because JavaScript expects a parameter name (an identifier like "num") inside the parentheses, not a fixed value like "3". A function parameter acts as a placeholder for incoming arguments.
// Finally, correct the code to fix the problem
// =============> function square(num) { return num * num; } console.log(square(3));



