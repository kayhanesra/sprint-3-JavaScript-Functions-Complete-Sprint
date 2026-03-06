//Day 1//Exercise 1
function myFirstFunction(){
   
} 

myFirstFunction()
//Exercise 2
function helloWorld() { 
   console.log("Hello World")
} 

helloWorld() 
//Exercise 3
function returnFive() {
    return 5
}

returnFive()
console.log(returnFive())

//Exercise 4
function helloWorldAgain() {
   return "Hello World Again"
}

helloWorldAgain() 
console.log(helloWorldAgain())

//Exercise 5
function returnParameter(parameter) {
   return parameter
}

console.log(returnParameter(1))
console.log(returnParameter(2))  
console.log(returnParameter("Hi"))

//Day 2// Exercise 6
function add(firstNumber, secondNumber) {
   return firstNumber +secondNumber
}

console.log((add(1,1))) 
console.log((add(2,2))) 

//Exercise 7
function subtract(firstNumber, secondNumber) {
   return firstNumber - secondNumber 
}

console.log((subtract(2,1))) 
console.log((subtract(3,3))) 
console.log((subtract(1,2))) 

//Exercise 8
function multiply(firstNumber, secondNumber) {
   return firstNumber * secondNumber 
}

console.log((multiply(2,3))) 
console.log((multiply(5,5))) 

//Exercise 9
function stringLength(string) {
   return string.length 
}

console.log(stringLength("Hello")) 
console.log(stringLength("Hi"))

//Exercise 10
function concatTwoStrings(firstString, secondString) {
   return firstString + " " + secondString
}

console.log(concatTwoStrings("Find", "Job"))

//Exercise 11
function fullName(firstName, lastName) {
   return firstName+ " "+ lastName 
}

console.log(fullName("Theodoros", "Markomanolakis"))

//Day 3// Exercise 1
function square(number) {
   return number * number 
}

console.log(square(43)) 

// Exercise 2
function cube(number) {
   return number * number * number 
}

console.log(cube(36)) 
console.log(cube(17))

// Exercise 3
function charAtIndex(string, number) {
   return string.charAt(number) // we can make "return string[number]" method
}
console.log(charAtIndex("SocialHackersAcademy", 6))

//Exercise 4
function addFourNums(num1, num2, num3, num4) {
   return num1+ num2+ num3+ num4 ; 
}
console.log(addFourNums(2,5,6,7))

// Exercise 5
function perimeterRect(width, length) {
   return 2 * (width + length); //Bu egzersiz, gerçek dünyadaki bir problemi (geometri) koda dökmeni istiyor. Bir dikdörtgenin çevresini hesaplamak için formülümüz şudur: iki kenarı topla ve 2 ile çarp. 
}
console.log(perimeterRect(5, 10))

//Exercise 6
function areaRect(width, length) {
   return width * length
}
console.log(areaRect(6, 8))

//Exercise 7
function perimeterTriangle(side1, side2, side3) {
   return side1 + side2 + side3
}
console.log(perimeterTriangle(2,5,7))

//Exercise 8
function areaTriangle(base, height) {
   return (base* height) / 2
}
console.log (areaTriangle(6,5))

//Exercise 9
function tripleArea(width, length) {
   return (width * length) * 3
}
console.log(tripleArea(1,2))

//Day 4// Exercise 1
function perimeterOfCircle(radius) {
   return 2 * Math.PI * radius
}
console.log(perimeterOfCircle(6))

//Exercise 2
function areaOfCircle(radius) {
   return Math.PI * (radius ** 2)
}
console.log(areaOfCircle(9))

//Exercise 3
function inchesToCentimeters(inches) {
   return inches * 2.54
}
console.log(inchesToCentimeters(1))

//Exercise 4
function centimetersToInches(centimeters) {
   return centimeters * 0.393701
   
}
console.log(centimetersToInches(10))

//Exercise 5
function totalSecondsConverter(hours, minutes, seconds) {
   return (hours *3600) + (minutes *60) + seconds
}
console.log(totalSecondsConverter(0,3,4))

//Exercise 6
function billTotal(number) {
   let taxRate = 9.875 / 100
   let tipRate = 20 / 100
   let taxAmount = number * taxRate;
   let tipAmount = number * tipRate ; 
   return number + taxAmount+ tipAmount
}

console.log(billTotal(15)) 
console.log(billTotal(20))

//Exercise 7
function convertToKilometers(miles) {
   return miles * 1.60934
}
console.log(convertToKilometers(5))

//Day 5// Exercise 1
// Error 1:
function square1(x) {
return x * x ;
} 

// Error 2:
function square2 (x) {
return x * x ;
}

// Error 3:
function  square3 (x) {
return x * x;
}

// Challenge 2:
function largest(num1, num2) {
  if (num2> num1) {
return num2
} else {
   return num1
}
}

console.log(largest(5, 10)) 
console.log(largest(15, 8)) 
console.log(largest(7, 7))

// Challenge 3:
function add(number1, number2) {
  return number1 + number2
}

console.log(add(2, 3))

// Challenge 4:
function subtract (number1,number2) {
   return number1 - number2
}
console.log(subtract(5,1))
console.log(subtract(1,5))

// Challenge 5:
function convertTemp(celsius) {
  return (celsius * 1.8) + 32
}
console.log(convertTemp(12)) 
console.log(convertTemp(0)) 
console.log(convertTemp(100))

// Challenge 6:
function capitalize(food) {
  return food.charAt(0).toUpperCase() + food.slice(1)
}

console.log(capitalize("pizza")) 
console.log(capitalize("burger")) 

// Challenge 7:
function billing(item1, item2, item3) {
   let price = item1 + item2 + item3
   let tip = price * 0.15
   let total = price + tip
   return "your total is $" + total.toFixed(2) + ". thank you for the $" + tip.toFixed(2) + " tip"
}

console.log(billing(10.25, 3.99, 7.15))

// Challenge 8:
function awesomeMessage(firstName, interest, hobby) {
  return "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + "."
}
console.log(awesomeMessage("Esra","cats", "skating"))

//Day 6
 //Convert at least 5 of your previous functions to arrow function syntax.

let inchesToCentimeters = inches => inches * 2.54
let add = (a,b) => a+b
let subtract = (number1, number2) => number1 - number2
let largest = (num1, num2) => num1 > num2 ? num1 : num2