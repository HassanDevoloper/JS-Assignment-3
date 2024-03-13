
                           //chap 9 to 11

 //Q:1.Write a program to take “city” name as input from user. If 
//user enters “Karachi”,welcome the user like this: 
//“Welcome to city of lights”

//var cityName = prompt("Enter your city name");

//if (cityName.toLowerCase() === "karachi") {
           // console.log("welcome to the city of light") }
  
  //Q:2.Write a program to take “gender” as input from user. If the
//user is male, give the message: Good Morning Sir. If the
//user is female, give the message: Good Morning Ma’am.

                         // -------Ans--------

 // var Gender = prompt("Enter Gender male/female");
  // if (Gender === "male") {
           //console.log ("Good morning sir");
  // }
  //else if (Gender === "female") {
           // console.log ("Good morning ma'am");
  //  } 
  // else {
   //  console.log ("Invalid input.please Enter gender male or female");
  // } 
  
   //Q:3. Write a program to take input color of road traffic signal
  //from the user & show the message according to this table:

                           // -------Ans---------

// var signalColor = prompt("Enter the name of Traffic signal color red/yellow/green");                     

 //if (signalColor === "red") {
   // console.log("Must Stop");
 //}
 // else if (signalColor === "yellow") {
   // console.log("Ready to move");
 //}
 // else if (signalColor === "green") {
   // console.log("move now");
  //}
  //else {
  //   console.log("Invalid color.please enter signal color red/yellow/green");
 // }
          
   // Q:5.Run this script, & check whether alert message would be
  // displayed or not. Record the outputs.
    /*a. var a = 4;
   if (++a === 5){
   alert("given condition for variable a is true");
   }
 b. var b = 82;
 if (b++ === 83){
 alert("given condition for variable b is true");
 }
 c. var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }

 d. var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }
 
 e. if (true){
 alert("True");
 }
 if (false){
 alert("False");
 }

 f. if("car" < "cat"){
  alert("car is smaller than cat");
  }
                            --------Ans---------
           
 
 
             Alert: "given condition for variable a is true"
             Alert: "condition 2 is true"
             Alert: "condition 4 is true"
             Alert: "The cost equals"
             Alert: "True"
             Alert: "car is smaller than cat"
 
 
 
 Q:6. Write a program to take input the marks obtained in three
 subjects & total marks. Compute & show there resulting
 percentapge on your page. Take percentage & compute 
 grade as per following table:
 Show the total marks, marks obtained, percentage, grade &
 remarks like:
 
  

  var sub1 = parseInt(prompt("Enter the marks of subject 1:"));

  var sub2 = parseInt(prompt("Enter the marks of subject 2:"));

  var sub3 = parseInt(prompt("Enter the marks of subject 3 "));

  var totalMarks = parseInt(prompt("Enter the total marks:"));

  var obtainMarks = sub1 + sub2 + sub3;
  var percentage = (obtainMarks / totalMarks) * 100;

  var grade;
  if(percentage >= 80){
     grade = 'A+';
  }
  else if(percentage >= 70) {
     grade = 'A';
  }
  else if(percentage >= 60) {
     grade = 'B';
  }
  else{
     grade = 'fail';
  }

   var remarks;
  if(grade === 'A+'){
    remarks = 'Excellent';
  }
  else if(grade === 'A') {
    remarks = 'Good';
  }
  else if(grade === 'B') {
    remarks = 'you need to improve';
  }
  else{
    remarks = 'Poor';
  }
  document.write("<h2>Marks sheet</h2>")
  document.write("Total Marks:" +
  totalMarks + "<br>");

  document.write("Marks Obtained:" + obtainMarks + "<br>");

  document.write("Percentage:" + percentage.toFixed(2) + "%" + "<br>");

  document.write("Grade:" + grade + "<br>");
  document.write("Remarks:" + remarks + "<br>");

      Q:7.Guess game:
   Store a secret number (ranging from 1 to 10) in a variable.
   Prompt user to guess the secret number.
   a. If user guesses the same number, show “Bingo! Correct answer”.
   b. If the guessed number +1 is the secret number, show
  “Close enough to the correct answer”.

                              -------Ans------
                   
  var secretNumber = 6;
  var guessNumber = parseInt(prompt("Guess the secret number (between 1 and 10):"));
  
  if(secretNumber === guessNumber){
    alert("Bingo! Correct answer")
  } 
  else if(secretNumber === guessNumber + 1){
  alert("Close enough to the correct answer.")
  }
  else{
    alert("Try again")
  }

      Q:8.Write a program to check whether the given number is
      divisible by 3. Show the message to the user if the number
      is divisible by 3.

                         --------Ans--------

  var userInput = prompt("Enter the number");
  
  if(userInput % 3 === 0) {
    console.log("The number is divisible by 3");
  }else{
    console.log("The number is not divisible by 3");
  }

      Q:9. Write a program that checks whether the given input is an
      even number or an odd number.

                          -------Ans-------

  var num = prompt("Enter the number:");
  
  if(num % 2 === 0){
       document.write("The number is even.");
  }
  else{
       document.write("The number is add.")
  }

      Q:10. Write a program that takes temperature as input and
      shows a message based on following criteria
      a. T > 40 then “It is too hot outside.”
      b. T > 30 then “The Weather today is Normal.”
      c. T > 20 then “Today’s Weather is cool.”
      d. T > 10 then “OMG! Today’s weather is so Cool.”

                           -------Ans--------
      
  var Temperature = prompt("Enter the today temperature:");
   if(Temperature > 40) {
         console.log("It is too hot outside.");
   }
   else if(Temperature > 30) {
         console.log("The weather today is normal.");
   }
   else if(Temperature > 20) {
         console.log("Today's weather is cool.");
   } 
   else if(Temperature >10) {
         console.log("OMG! Today weather is so cool.");
   }
   else{
         console.log("Today weather is very cold.");
   }
   
   Q:11. Write a program to create a calculator for +,-,*, / & %
   using if statements. Take the following input:
   a. First number
   b. Second number
   c. Operation (+, -, *, /, %)
   Compute & show the calculated result to user.

                             --------Ans--------

     var num1 = parseInt(prompt("Enter the first number"));
     var num2 = parseInt(prompt("Enter the second number"));

     var operation = prompt("Enter the operation (+, -, *, /, %)");

     var Result;
      if(operation === '+') {
         Result = num1 + num2;
      }
      else if(operation === '-') {
        Result = num1 - num2;
      }
      else if(operation === '*') {
        Result = num1 * num2;
      }
      else if(operation === '/') {
        Result = num1 / num2;
      }
      else if(operation === '%') {
        Result = num1 % num2;
      }
      else{
        Result = "invalid operation!";
      }

      console.log("Result:", Result);*/

                       /*  chap:12 To 11

  Q:1.Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122).

         ------Ans------

var input = prompt("Enter the input character");
if(input >= 0 && input <= 9){
  document.write("The input is     number");
}
 else if(input >= 65 && input <= 90){
  document.write("The input is     uppercase letter");
 }
else if(input >= 97 && input <= 122){
  document.write("The input is     lowercase letter");
}
else{
  document.write("The input is     special character");
}

Q:2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.

         -----Ans------

var num1 = parseInt(prompt("Enter the first number"));
var num2 = parseInt(prompt("Enter the second number"));
if(num1 > num2){
  document.write("The first number is greater than the second number");
}
else if(num1 < num2){
  document.write("The second number is greater than the first number");
}
else if(num1 === num2){
  document.write("The first number is equal to the second number");
}
else{
  document.write("Invalid input");
}
Q:3.Write a program that takes input a number from user & 
state whether the number is positive, negative or zero.

         -----Ans------

var num = parseInt(prompt("Enter the number"));
if(num > 0){
  document.write("The number is positive");
}
else if(num < 0){
  document.write("The number is negative");
}
else if(num === 0){
  document.write("The number is zero");
}
else{
  document.write("Invalid input");
}

Q:4. Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise.  

         -----Ans------

// Input a character from the user
var char = prompt("Enter a character:").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(true);
} else {
    console.log(false);
}

Q5.Write a program that
  a. Store correct password in a JS variable.
  b. Asks user to enter his/her password
  c. Validate the two passwords:
  i. Check if user has entered password. If not, then 
  give message “ Please enter your password”
  ii. Check if both passwords are same. If they are 
  same, show message “Correct! The password you 
  entered matches the original password”. Show 
  “Incorrect password” otherwise.

         -----Ans------

var correctPassword = "hassan123";

var userPassword = prompt("Enter your password");
if (userPassword === null){
  document.write("Please enter your password");
}
else if(userPassword === correctPassword){
  document.write("Correct! The password you entered matches the original password");
}
else{
  document.write("Incorrect password");
}

Q:6.This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}

         -----Ans------

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


Q:7. Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements

        -----Ans------

var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

if (time >= 0 && time < 1200) {
    console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
    console.log("Good evening!");
} else if (time >= 2000 && time < 2400) {
    console.log("Good night!");
} else {
    console.log("Invalid time input.");
}*/



                      
