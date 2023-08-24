
// assignment 1
//Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

function takeNunbers(number) {
    if (number>0) {
        console.log("this is a positive number");
    } else if(number<0) {
        console.log("this is a negative number");
    }else{
        console.log("this is zero");
    }    
}
takeNunbers(3)
takeNunbers(-8)
takeNunbers(0)



// assignment 2

// Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number 
// N is the product of all positive integers less than or equal to N.

function calcilateFactorial(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers."
    }else if(number === 0 || number === 1){
      return 1 ; 
    } else {
      let factorial= 1 ;
      for(let i=2 ; i<=number; i++){
        factorial *= i;
      }
      return factorial;
    }
}
console.log(calcilateFactorial(6));
console.log(calcilateFactorial(0));
console.log(calcilateFactorial(-4));


// assignment 3

//Write a JavaScript function that takes two numbers as parameters and returns the larger one.

function compare(a , b) {
  if (a>b) {
    console.log(a);
  }else if(b>a ){
    console.log(b);
  }else{
    console.log("Enter two different number");
  }
}
compare(5 , 8)
compare(20 , 6)




// assignment 4

// Write a JavaScript function that takes a string as a parameter and determines whether it's a
// palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters
// that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).


function isPalindrome(str) {
 
  const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();
  
  const reversedStr = cleanStr.split('').reverse().join('');
  
  return cleanStr === reversedStr;
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("A man, a plan, a canal, Panama!")); 
console.log(isPalindrome("Hello"));
console.log(isPalindrome("12321"));
console.log(isPalindrome("Palindrome"));

// assignment 5

// Write a JavaScript function that takes a positive integer as a parameter and prints all the prime
// numbers less than or equal to that integer. A prime number is a natural number greater than 1
// that is not a product of two smaller natural numbers.

function isPrime(num) {
  if (num <= 1) {
      return false;
  }
  if (num <= 3) {
      return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
      return false;
  }

  let i = 5;
  while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) {
          return false;
      }
      i += 6;
  }

  return true;
}

function printPrimesUpToN(n) {
  for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
          console.log(i);
      }
  }
}

// Test
printPrimesUpToN(30);

// assignment 6

// Write a JavaScript function that simulates a simple calculator. The function should take two
// numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

function calculator (num1 , num2 , operator){
  if (operator === "+") {
    return num1 + num2
  }else if(operator === "-"){
    return num1 - num2
  }else if (operator === "*") {
    return num1 * num2
  }else if (operator === "/") {
    return num1 / num2
    if(num2 !== 0){
      return num1 / num2 ;
    }else {
      return "cannot divided by zero"
    }
  }else{
    return "invalid operator"
  }

}

console.log(calculator(30 , 20 , "+"));
console.log(calculator(30 , 20 , "-"));
console.log(calculator(30 , 20 , "*"));
console.log(calculator(30 , 20 , "/"));

// assignment 7

// Write a JavaScript function that takes a string as a parameter and counts the number of vowels
// (a, e, i, o, u) in the string







