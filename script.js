// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase ="abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric ="0123456789";
var special ="!$^&*=+_?";
//var choices =[lowerCase, upperCase, numeric, special];
//var userChoices =[];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function generatePassword(length) {
  //var lowerCase ="abcdefghijklmnopqrstuvwxyz";
  //var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //var numeric ="0123456789"
  //var special ="!$^&*-=+_?"
  //var choices =[lowerCase, upperCase, numeric, special];
  //var password ="";
  //var passwordArray =Array(length);

  //for(i=0; i<length; i++) {
      //userChoices =choices[Math.floor(Math.random() *choices.length)]
      //var randomChar =userChoices.charAt(Math.floor(Math.random()*userChoices.length));
      //password += randomChar;
      //passwordArray.push(randomChar);
 // }
//}
//how to set min8 max128?
//declar variables, series prompts; validate*input,generate when allmatch??//
//array of types, generated random together, slice out length when specified?or splice? loop?//

var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()__+=?";
var userChoices = [];
//empty to store user choice
//how to choose pw length min 8 max128?
//lower 26, upper 26, num 10, sp =76, 128/76=1.68421053

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  

function writePassword() {
    var userOptions = prompt ("Choose between 8 and 128 characters")
    if (userOptions <8 || userOptions >128){
        alert("try again: between 8 and 128")
    };
    if(userOptions >=8 && userOptions <=128){
        var chooseLowerCase = confirm("Lowercase"); 
        var chooseUpperCase = confirm("Uppercase");
        var chooseNumeric = confirm("Number");
        var chooseSpecial = confirm("Special Character");
    }
    if(chooseLower == false && chooseUpper == false && chooseNumeric == false && chooseSpecial == false){
    alert("Required");
  }
    else if (chooseLower && chooseUpper && chooseNumeric && chooseSpecial){
      userOptions = lowerCase.concat(upperCase, numeric, special);
    }
//else smash the whole thing because none of it works...*sad face* sadder face* *saddest face*