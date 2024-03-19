// url https://www.codewars.com/kata/529adbf7533b761c560004e5/train/javascript

function fibonacci(n) {
  // Private memoization cache
  const memo = {};

  // Recursive function with memoization
  function fib(n) {
    // If the value is already cached, return it
    if (memo[n] !== undefined) {
      return memo[n];
    }

    // Base cases
    if (n === 0 || n === 1) {
      return n;
    }

    // Calculate Fibonacci number recursively
    memo[n] = fib(n - 1) + fib(n - 2);

    // Return the calculated value
    return memo[n];
  }

  // Return the result of the recursive function
  return fib(n);
}

// Example usage:
