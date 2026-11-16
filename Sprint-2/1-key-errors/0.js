// Predict and explain first...
//  =============> This function will throw a SyntaxError because the variable "str" is already declared as a function parameter, and you cannot use "let" to redeclare it in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("hello");
// =============> The error occurs because the identifier "str" is already bound to the function's parameter. Declaring a new variable with "let str" in the same block causes a redeclaration conflict, preventing JavaScript from running the code.
// =============> function capitalise(str) { return `${str[0].toUpperCase()}${str.slice(1)}`; }

