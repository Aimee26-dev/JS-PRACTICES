//Declare a variable firstName and initialize it with the value 'Lata'
const firstName = 'Lata';

//Which value does x have after execution of the following code?
//let x = 'Geeta';

//Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'
let flower = 'rose';
let tree = 'maple';

//Which value does x have after execution of the following code?
//let x = 'Tic';
//x = 'Tac';
//x = 'Toe';

//Which value does x have after execution of the following code?  
/*let x = 'Laurel';
let y = 'Hardy';
let z = 'y';
x = z;*/

//Define a function hello that returns 'Hello world
function hello(){
    return "Hello world!";
  }

  //Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'
  function a(){
    return 'Hello a!';
  }
  function b(){
    return 'Hello b!';
  }

//Define a function greet returning the value  'Haydo!'   Declare a variable salutation Call the function greet and assign the result of the call to the variable salutation.
function greet(){
  return "Haydo!";
}
let salutation = greet;

/*Exercice 9
function hello(){
  return "Hi!";
}
let x = hello();*/

//Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'
function echo(Greta){
  return "Greta";
}

function echo(CO2){
  return "CO2";
}

/*Exercice 11
function reply(phrase){
  return phrase;
}
let x = reply("How do you do?");*/

//Write a function greet having one parameter and returning 'Hello <parameter>!'.Example: greet('Ada') should return 'Hello Ada!' and greet('Grace') should return 'Hello Grace!'
function greet(Ada){
  return 'Hello Ada';
}
console.log(greet());

function greet(Grace){
  return 'Hello Grace';
}
console.log(greet());

/*Que vaux la valeur de x
function whereIs(name){
  return 'where is'+ ' ' + name + '?';
}
let x = whereIs('Aimerance');
console.log(x);*/

//Which value does x have after execution of the following code?   
function hi(name){
  return 'Hi' + name + '!';
}
let h1 = hi('Selva');
let h2 = hi('Pola');
let x = h1 + ' ' + h2;
console.log(x);

//Write a function  shout 
function shout(Fire){
  return 'FireFire';
}
console.log(shout());

/*La valeur de x
function double(name){
  return name + ' and ' + ' ' + name;
}
let x = double('Roy');
console.log(x);*/

//Write a function length
function length(sun){
  return 'sun';
}
console.log(length().length);


//Write a function firstChar 
function firstChar(RosaParks){
  return 'R';
}
console.log(firstChar());
