# JavaScript Functions Complete Sprint

## Sprint Overview
**Duration:** 1-2 Weeks  
**Topic:** Introduction to JavaScript Functions with Comprehensive Practice  
**Level:** Beginner to Intermediate

---

## Learning Objectives

By the end of this sprint, you will be able to:
- Understand what functions are and why they're essential in programming
- Declare and define functions in JavaScript
- Invoke/call functions correctly
- Work with parameters and arguments
- Distinguish between function declarations, function expressions, and arrow functions
- Understand function scope and variable visibility
- Write reusable, modular code using functions
- Solve real-world problems using functions

---

## Day 1: Understanding Functions & Basic Practice

### Morning Session: What Are Functions?

**Key Concept:** Functions are reusable groups of instructions that perform specific tasks.

**The Coffee Shop Analogy:**
Think about the instruction "go get me a coffee." For a human, this is simple. But for a computer, we need to break it down into explicit steps:
1. Walk downstairs
2. Go onto the street
3. Turn to the right
4. Walk until you see the coffee sign
5. Go inside
6. Ask the barista for coffee
7. Give barista 2€
8. Wait till barista gives you coffee
9. Walk back
10. Give me the coffee

Instead of repeating all these steps every time, we can group them under one label: "getCoffee()"

### Afternoon Session: Basic Requirements (Part 1)

#### Exercise 1: My First Function
Write a function called `myFirstFunction` that takes no parameters and does nothing, then invoke the function.

```javascript
function myFirstFunction(){
   //Write your code here 
} 

myFirstFunction()
```

#### Exercise 2: Hello World
Write a function called `helloWorld` that prints "Hello World" to the console and invoke it. HINT: Use "console.log()".

```javascript
function helloWorld() { 
   //Write your code here
} 

helloWorld() // -> "Hello World"
```

#### Exercise 3: Return Five
Write a function called `returnFive` that takes no parameters and returns the number 5 when invoked.

```javascript
function returnFive() {
   //Write your code here 
}

returnFive() // -> 5
```

#### Exercise 4: Hello World Again
Write a function called `helloWorldAgain` that takes no parameters and returns the string "Hello World Again" when invoked.

```javascript
function helloWorldAgain() {
   //Write your code here 
}

helloWorldAgain() // -> "Hello World Again"
```

#### Exercise 5: Return Parameter
Write a function called `returnParameter` that takes one parameter and returns the parameter when invoked.

```javascript
function returnParameter(parameter) {
   //Write your code here 
}

returnParameter(1) // -> 1 
returnParameter(2) // -> 2 
returnParameter("Hi") // -> "Hi"
```

---

## Day 2: Working with Parameters

### Morning Session: Understanding Parameters & Arguments

**Key Concept:** Parameters represent values that may be different every time our function runs.

**Important Distinction:**
- **Parameters:** Variables in the function definition
- **Arguments:** Actual values passed when calling the function

### Afternoon Session: Basic Requirements (Part 2)

#### Exercise 6: Add Function
Write a function called `add` that takes two numbers as parameters and when invoked adds them together then returns the result.

```javascript
function add(firstNumber, secondNumber) {
   //Write your code here 
}

add(1,1) // -> 2
add(2,2) // -> 4
```

#### Exercise 7: Subtract Function
Write a function called `subtract` that takes two numbers as parameters and when invoked subtracts them from each other then returns the result.

```javascript
function subtract(firstNumber, secondNumber) {
   //Write your code here 
}

subtract(2,1) // -> 1
subtract(3,3) // -> 0
subtract(1,2) // -> -1
```

#### Exercise 8: Multiply Function
Write a function called `multiply` that takes two numbers as parameters and when invoked multiplies them together then returns the result.

```javascript
function multiply(firstNumber, secondNumber) {
   //Write your code here 
}

multiply(2,3) // -> 6
multiply(5,5) // -> 25
```

#### Exercise 9: String Length
Write a function called `stringLength` that takes a string as a parameter and when invoked returns the length of the string as a number. HINT: use ".length".

```javascript
function stringLength(string) {
   //Write your code here 
}

stringLength("Hello") // -> 5
stringLength("Hi") // -> 2
```

#### Exercise 10: Concatenate Two Strings
Write a function called `concatTwoStrings` that takes two strings as parameters and returns a combined (concatenated) string when invoked.

```javascript
function concatTwoStrings(firstString, secondString) {
   //Write your code here 
}

concatTwoStrings("Hello", "World") // -> "HelloWorld"
concatTwoStrings("Cute", "Kitty") // -> "CuteKitty"
```

#### Exercise 11: Full Name
Write a function called `fullName` that takes two strings as parameters and when invoked returns a combined (concatenated) string as full name with a white space in between.

```javascript
function fullName(firstName, lastName) {
   //Write your code here 
}

fullName("Benjamin", "Franklin") // -> "Benjamin Franklin"
fullName("Steven", "Paul") // -> "Steven Paul"
```

---

## Day 3: More Practice - Intermediate Level

### Morning Session: Mathematical Functions

#### Exercise 1: Square Function
Write a function called `square` that takes a number as a parameter, squares it and returns the result.

```javascript
function square(number) {
   //Write your code here 
}

square(5) // -> 25
square(3) // -> 9
```

#### Exercise 2: Cube Function
Write a function called `cube` that takes a number as a parameter, cubes it and returns the result.

```javascript
function cube(number) {
   //Write your code here 
}

cube(3) // -> 27
cube(2) // -> 8
```

#### Exercise 3: Character at Index
Write a function called `charAtIndex` that takes a string and an integer as parameters and returns the character at the index of the number. HINT: Use ".charAt".

```javascript
function charAtIndex(string, number) {
   //Write your code here 
}

charAtIndex("Hello", 2) // -> "l"
charAtIndex("World", 0) // -> "W"
```

#### Exercise 4: Add Four Numbers
Write a function called `addFourNums` that takes four numbers as four parameters and returns the summation of the numbers.

```javascript
function addFourNums(num1, num2, num3, num4) {
   //Write your code here 
}

addFourNums(1,1,1,1) // -> 4
addFourNums(1,2,3,4) // -> 10
```

### Afternoon Session: Geometry Functions

#### Exercise 5: Rectangle Perimeter
Write a function called `perimeterRect` that takes a numerical width and length as parameters and returns the perimeter of the rectangle.

```javascript
function perimeterRect(width, length) {
   //Write your code here 
}

perimeterRect(5, 10) // -> 30
perimeterRect(3, 7) // -> 20
```

#### Exercise 6: Rectangle Area
Write a function called `areaRect` that takes a numerical width and length as parameters and returns the area of the rectangle.

```javascript
function areaRect(width, length) {
   //Write your code here 
}

areaRect(5, 10) // -> 50
areaRect(3, 7) // -> 21
```

#### Exercise 7: Triangle Perimeter
Write a function called `perimeterTriangle` that takes the numerical length of each side as parameters and returns the perimeter of the triangle.

```javascript
function perimeterTriangle(side1, side2, side3) {
   //Write your code here 
}

perimeterTriangle(3, 4, 5) // -> 12
perimeterTriangle(5, 5, 5) // -> 15
```

#### Exercise 8: Triangle Area
Write a function called `areaTriangle` that takes the numerical base and height of a triangle as parameters and returns the area of the triangle.

```javascript
function areaTriangle(base, height) {
   //Write your code here 
   // Formula: (base * height) / 2
}

areaTriangle(10, 5) // -> 25
areaTriangle(6, 8) // -> 24
```

#### Exercise 9: Triple Area
Write a function called `tripleArea` that takes the numerical width and length of a rectangle as parameters and returns the rectangle's area, multiplied by 3.

```javascript
function tripleArea(width, length) {
   //Write your code here 
}

tripleArea(5, 10) // -> 150
tripleArea(3, 7) // -> 63
```

---

## Day 4: Advanced Practice

### Morning Session: Circle Calculations & Conversions

#### Exercise 1: Circle Perimeter
Write a function called `perimeterOfCircle` that takes the numerical radius of a circle as a parameter and returns the perimeter. HINT: Use "Math.PI" in your function.

```javascript
function perimeterOfCircle(radius) {
   //Write your code here 
   // Formula: 2 * π * radius
}

perimeterOfCircle(3) // -> 18.85
perimeterOfCircle(5) // -> 31.42
perimeterOfCircle(8) // -> 50.27
```

#### Exercise 2: Circle Area
Write a function called `areaOfCircle` that takes the numerical radius of a circle as a parameter and returns the area.

```javascript
function areaOfCircle(radius) {
   //Write your code here 
   // Formula: π * radius²
}

areaOfCircle(3) // -> 28.27
areaOfCircle(5) // -> 78.54
areaOfCircle(8) // -> 201.06
```

#### Exercise 3: Inches to Centimeters
Write a function called `inchesToCentimeters` that takes a numerical length in inches as a parameter and returns the equivalent value in centimeters.

```javascript
function inchesToCentimeters(inches) {
   //Write your code here 
   // 1 inch = 2.54 cm
}

inchesToCentimeters(3) // -> 7.62
inchesToCentimeters(4) // -> 10.16
inchesToCentimeters(10) // -> 25.4
```

#### Exercise 4: Centimeters to Inches
Write a function called `centimetersToInches` that takes a numerical length in centimeters as a parameter and returns the equivalent value in inches.

```javascript
function centimetersToInches(centimeters) {
   //Write your code here 
   // 1 cm = 0.393701 inches
}

centimetersToInches(10) // -> 3.93701
centimetersToInches(12) // -> 4.72441
centimetersToInches(16) // -> 6.29921
```

### Afternoon Session: Time & Money Calculations

#### Exercise 5: Total Seconds Converter
Write a function called `totalSecondsConverter` which takes three numerical parameters "hours", "minutes", "seconds" and returns the total number in seconds.

```javascript
function totalSecondsConverter(hours, minutes, seconds) {
   //Write your code here 
}

totalSecondsConverter(0,3,4) // -> 184
totalSecondsConverter(1,0,7) // -> 3607
totalSecondsConverter(1,1,5) // -> 3665
```

#### Exercise 6: Bill Total
Write a function called `billTotal` which takes in a number, and returns the total with a 9.875% tax as well as 20% tip calculated.

```javascript
function billTotal(number) {
   //Write your code here 
}

billTotal(15) // -> 19.48
billTotal(20) // -> 25.975
```

#### Exercise 7: Convert to Kilometers
Write a function called `convertToKilometers` which takes a number of miles as a parameter, and returns that number multiplied by 1.60934 (an accepted approximation of 1 mile in kilometers).

```javascript
function convertToKilometers(miles) {
   //Write your code here 
}

convertToKilometers(5) // -> 8.0467
convertToKilometers(9) // -> 14.48406
```

---

## Day 5: Debugging & Extra Challenges

### Morning Session: Fix the Errors

#### Challenge 1: Fix These Functions
Fix the errors in the following functions:

```javascript
// Error 1:
func square1"x" {
return x * x ;
} 

// Error 2:
functionsquare2 x)
return x * x ;
}

// Error 3:
function (x) square3 {
return x * x;
}

// TODO: Rewrite all three functions correctly
```

### Afternoon Session: Problem Solving

#### Challenge 2: Find the Largest
Write a JavaScript program that accepts two integers and displays the larger.

```javascript
function largest(num1, num2) {
  // TODO: your work goes here
}

largest(5, 10) // -> 10
largest(15, 8) // -> 15
largest(7, 7) // -> 7
```

#### Challenge 3: Add Function
Create a function called 'add'.
- Tell it to accept two arguments (number1 and number2)
- Tell it to return a sum of number1 and number2
- Call the function passing numbers 2 and 3 as arguments

```javascript
function add(number1, number2) {
  // TODO: your work goes here
}

add(2, 3) // -> 5
```

#### Challenge 4: Subtract Function
Create a function named 'subtract'.
- Tell it to accept 2 arguments, number1 and number2
- Subtract number2 from number1 then return that value
- Call it with the numbers 5 and 1

```javascript
function subtract(number1, number2) {
  // TODO: your work goes here
}

subtract(5, 1) // -> 4
```

#### Challenge 5: Temperature Converter
To convert Celsius to Fahrenheit, use the formula: F = C × 1.8 + 32

Write a function that converts temperature from Celsius to Fahrenheit.

```javascript
function convertTemp(celsius) {
  // TODO: your work goes here
}

convertTemp(12) // -> 53.6
convertTemp(0) // -> 32
convertTemp(100) // -> 212
```

#### Challenge 6: Capitalize String
Create a function called `capitalize` that takes the name of your favorite food and returns the same food with the first letter being capitalized.

```javascript
function capitalize(food) {
  // TODO: your work goes here
  // HINT: Use string methods like charAt() and slice()
}

capitalize("pizza") // -> "Pizza"
capitalize("burger") // -> "Burger"
```

#### Challenge 7: Billing Calculator
Create a function called `billing` that takes 3 item prices and helps you do the following:
- The price is the sum of all items
- The tip is 15% of the price
- The total to pay is price + tip
- The function should return a formatted string

NOTE: Use toFixed() with the number of decimal points you want. For example, if total equals 3.9860, then total.toFixed(2) would return "3.99".

```javascript
function billing(item1, item2, item3) {
  // TODO: your work goes here
}

billing(10.25, 3.99, 7.15) 
// -> "your total is $24.60. thank you for the $3.20 tip"
```

#### Challenge 8: Awesome Message
Here is an awesome message:
"Hi, my name is Julia. I love cats. In my spare time, I like to play video games."

Declare a function that takes three variables for each part of the sentence that changes (firstName, interest, and hobby). Use your variables and string concatenation to create your own awesome message.

```javascript
function awesomeMessage(firstName, interest, hobby) {
  // TODO: your work goes here
}

awesomeMessage("Julia", "cats", "play video games")
// -> "Hi, my name is Julia. I love cats. In my spare time, I like to play video games."

awesomeMessage("Ahmed", "soccer", "read books")
// -> "Hi, my name is Ahmed. I love soccer. In my spare time, I like to read books."
```

---

## Day 6: Function Expressions & Arrow Functions

### Morning Session: Function Expressions

**Function Expression Syntax:**
```javascript
let sayHi = function() {
    console.log("Hello");
};

sayHi(); // Call it like a normal function
```

**Practice: Convert to Function Expressions**

Convert your previous functions to function expressions. For example:

```javascript
// Function Declaration
function add(a, b) {
    return a + b;
}

// Function Expression
let add = function(a, b) {
    return a + b;
};
```

### Afternoon Session: Arrow Functions

**Arrow Function Syntax:**
```javascript
let func = (arg1, arg2, ...argN) => expression;
```

**Examples:**

**One parameter, simple expression (implicit return):**
```javascript
let square = num => num * num;
console.log(square(5)); // 25
```

**Multiple parameters:**
```javascript
let add = (a, b) => a + b;
console.log(add(3, 4)); // 7
```

**Multiline statements (explicit return):**
```javascript
let calculate = (x, y) => {
    let sum = x + y;
    let product = x * y;
    return sum + product;
};
```

**Practice: Convert to Arrow Functions**

Convert at least 5 of your previous functions to arrow function syntax.

---

## Day 7: Function Scope & Best Practices

### Morning Session: Understanding Scope

**Three Types of Scope:**

**1. Global Scope:**
```javascript
let globalVar = "I'm global!";

function myFunc() {
    console.log(globalVar); // Accessible here
}

console.log(globalVar); // Accessible here too
```

**2. Function Scope:**
```javascript
function helpMe() {
    let msg = "I'm local to helpMe";
    console.log(msg); // Works!
}

helpMe();
console.log(msg); // Error! msg is not defined
```

**3. Block Scope:**
```javascript
{
    let PI = 3.14159;
    let circ = 2 * PI * 5;
    console.log(circ); // Works inside block
}

console.log(PI); // Error! PI is not defined outside block
```

### Afternoon Session: Code Review & Refactoring

**Best Practices:**
1. Use descriptive function names
2. Keep functions focused on one task
3. Use proper indentation
4. Add comments for complex logic
5. Keep variable scope as local as possible
6. Use consistent naming conventions (camelCase)

**Practice:**
Review all your functions from this week and:
- Improve naming where needed
- Add helpful comments
- Ensure proper scope usage
- Refactor for better readability

---

## Sprint Deliverables

### Required Submissions:

1. **Basic Exercises File** (`basic-exercises.js`)
   - All exercises from Day 1-2
   - Well-commented code

2. **Intermediate Exercises File** (`intermediate-exercises.js`)
   - All exercises from Day 3
   - Include test cases with console.log()

3. **Advanced Exercises File** (`advanced-exercises.js`)
   - All exercises from Day 4-5
   - Show your problem-solving approach

4. **Refactored Functions File** (`refactored-functions.js`)
   - At least 10 functions rewritten as arrow functions
   - Improved naming and comments

5. **Reflection Document** (`reflection.md`)
   - Which exercises were most challenging?
   - What did you learn about functions?
   - How will you use functions in future projects?

---

## Self-Assessment Checklist

By the end of this sprint, you should be able to answer YES to all of these:

- [ ] I can write a function declaration with correct syntax
- [ ] I can call/invoke a function properly
- [ ] I understand the difference between parameters and arguments
- [ ] I can use the return statement effectively
- [ ] I can work with multiple parameters
- [ ] I can use string methods in functions (.length, .charAt, etc.)
- [ ] I can perform mathematical operations in functions
- [ ] I can use Math.PI and other built-in objects
- [ ] I can debug syntax errors in functions
- [ ] I can write function expressions
- [ ] I can write arrow functions
- [ ] I understand global, function, and block scope
- [ ] I can format strings with variables
- [ ] I can use toFixed() for number formatting
- [ ] I can break down complex problems into smaller functions

---

## Exercise Solutions Guide

### Tips for Solving:

**For Mathematical Functions:**
1. Identify the formula needed
2. Write it in pseudo code first
3. Translate to JavaScript
4. Test with the provided examples

**For String Functions:**
1. Research the string methods you might need
2. Understand what the method returns
3. Combine methods if necessary
4. Test with different inputs

**For Debugging:**
1. Check for missing keywords (function, return)
2. Look for syntax errors (parentheses, quotes)
3. Verify parameter names
4. Test each fix individually

---

## Common Mistakes to Avoid

1. **Forgetting to return a value**
   ```javascript
   // Wrong
   function add(a, b) {
       a + b; // No return!
   }
   
   // Correct
   function add(a, b) {
       return a + b;
   }
   ```

2. **Calling vs. Referencing**
   ```javascript
   greet;     // Wrong - just references the function
   greet();   // Correct - calls the function
   ```

3. **Parameter vs. Argument confusion**
   ```javascript
   // Parameters in definition
   function greet(name) { }
   
   // Arguments when calling
   greet("Ahmed");
   ```

4. **Scope issues**
   ```javascript
   function test() {
       let x = 10; // Local variable
   }
   console.log(x); // Error! x doesn't exist here
   ```

5. **String concatenation spacing**
   ```javascript
   // Missing space
   firstName + lastName // "JohnDoe"
   
   // With space
   firstName + " " + lastName // "John Doe"
   ```

---

## Bonus Challenges

Once you complete all exercises, try these:

1. **Calculator Function**
   Create a function that takes an operation (+, -, *, /) and two numbers, then performs the operation.

2. **Grade Calculator**
   Create a function that takes a score (0-100) and returns a letter grade (A, B, C, D, F).

3. **Age Calculator**
   Create a function that takes a birth year and returns the current age.

4. **Password Validator**
   Create a function that checks if a password is at least 8 characters long.

5. **Array Average**
   Create a function that calculates the average of numbers in an array.

---

## Additional Resources

**Practice Platforms:**
- FreeCodeCamp - JavaScript Functions Section
- Codewars - Function Challenges (8 kyu to 7 kyu)
- Exercism - JavaScript Track
- HackerRank - JavaScript Practice

**Reading:**
- MDN Web Docs: Functions
- JavaScript.info: Functions
- Eloquent JavaScript: Chapter 3 - Functions

**Videos:**
- Traversy Media - JavaScript Functions
- The Net Ninja - JavaScript Functions Tutorial
- Programming with Mosh - JavaScript Functions

---

## Daily Schedule Suggestion

**Morning (2 hours):**
- Review concepts (30 min)
- Work on new exercises (90 min)

**Afternoon (2 hours):**
- Complete remaining exercises (60 min)
- Test and debug (30 min)
- Document and refactor (30 min)

**Evening (30 min):**
- Review what you learned
- Plan tomorrow's work
- Ask questions in study groups

---

## Tips for Success

1. **Start Simple** - Get basic version working first
2. **Test Frequently** - Use console.log() to check your work
3. **Read Error Messages** - They tell you what's wrong
4. **Use Pseudo Code** - Plan before coding
5. **Practice Daily** - Consistency beats intensity
6. **Ask for Help** - Don't struggle alone for hours
7. **Review Others' Solutions** - Learn different approaches
8. **Celebrate Progress** - Every solved exercise is progress!

---

## Progress Tracker

Track your completion:

### Day 1-2: Basic Requirements
- [ ] Exercise 1-5 (No parameters)
- [ ] Exercise 6-11 (With parameters)

### Day 3: More Practice
- [ ] Exercise 1-4 (Math & Strings)
- [ ] Exercise 5-9 (Geometry)

### Day 4: Advanced
- [ ] Exercise 1-4 (Circles & Conversions)
- [ ] Exercise 5-7 (Time & Money)

### Day 5: Extra Challenges
- [ ] Fix the errors
- [ ] Challenge 2-8

### Day 6: Expressions & Arrow Functions
- [ ] Convert 5+ functions to expressions
- [ ] Convert 5+ functions to arrow functions

### Day 7: Review & Refactor
- [ ] Code review
- [ ] Documentation
- [ ] Reflection

---

**Happy Coding! 🚀**

Remember: Functions are the foundation of JavaScript programming. Master these exercises, and you'll be ready to build amazing applications!

---

## Need Help?

If you're stuck:
1. Read the error message carefully
2. Check the syntax examples above
3. Test with simpler inputs first
4. Break the problem into smaller steps
5. Review the lecture slides
6. Ask your instructor or peers

You've got this! 💪
