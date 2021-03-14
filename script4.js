var generateBtn = document.querySelector("#generate");

var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

var upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]

var number = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]

var specialChar = ["!", "@", "#,", "$", "%", "^", "&", "//", "(", ")", "_", "~", ":" ,";" , "?" ]

function setLength(){ 
 let passwordLength = prompt("Please select a password length between 8 and 128 characters.");
 if (passwordLength < 8) {
     alert("must be at least 8"); 
 } 
 if (passwordLength > 128){
     alert("must be less than 128"); 
 }    
 if (passwordLength == NaN || null || undefined) {
     alert("must be a number"); 
 } console.log(passwordLength);
} setLength(); 

function makeSecure(){
offerLowerCase = confirm( "include lowercase?"); 
offerUpperCase = confirm( "include uppercase?"); 
offerNumber = confirm( "include number?"); 
offerSpecialChar = confirm( "include special characters?"); 

if (offerLowerCase === false && offerUpperCase === false &&
    offerNumber === false && offerSpecialChar === false) {
        alert( "secure passwords require a combination of Lowercase, Uppercase, Number, and Special Characters."); 
        //return; 
    } 
}makeSecure();

/*for (let i = 0; i < lowerCase.length; i++){
     
}

for (let i = 0; i < upperCase.length; i++){
    
}

for (let i = 0; i < number.length; i++){
     
}

for (let i = 0; i < specialChar.length; i++) {
    
}*/

//generates one random character from each array
let randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
console.log(randomLowerCase); 

let randomUpperCase = upperCase[Math.floor(Math.random()*upperCase.length)]; 
console.log(randomUpperCase); 

let randomNumber = number[Math.floor(Math.random()*number.length)]; 
console.log(randomNumber); 

let randomSpecialChar = specialChar[Math.floor(Math.random()*specialChar.length)]; 
console.log(randomSpecialChar); 

randomOptions = [randomLowerCase, randomUpperCase, randomNumber, randomSpecialChar]; 


for (let i=0; i < randomOptions.length; i++){
    console.log(randomOptions); //same array of 4 different characters 4 times
} for (j = 0; j < randomLowerCase.length; j++){
    console.log(randomLowerCase); //one from lowerCase
}
//need to generate a random from each, then push into an array, up to the length of the password
//gens one, push one, from each array (total 4); repeat up to the length of the array
//gen, push, xlength (as a loop?)