//TODO ; NEED TO RESOLVE THE RENDERING ISSUE WHEN I COME BACK

// 1. Set up global namespace object

var MYAPP = {};

MYAPP.myReturn = [];

console.log(MYAPP.myReturn);

MYAPP.mySubSpace = {};

MYAPP.otherSubSpace = {};

MYAPP.renderResult = function(input, index, myBoolean){
 var myDiv = document.getElementById('my-display');
 var mySpecialDiv = document.getElementById('my-current');
 var newElement = document.createElement('p');
    if (typeof input == "object"){
      if (myBoolean === true){
        newElement.innerHTML = (index + 1) + ". " + JSON.stringify(input)
        mySpecialDiv.appendChild(newElement);
        console.log(input)
      } else {
        newElement.innerHTML = (index + 1) + ". " + JSON.stringify(input)
        myDiv.appendChild(newElement);
        console.log(input)
      }
    } else {
        if (myBoolean === true){
          newElement.innerHTML = (index + 1) + ". " + JSON.stringify(input)
          mySpecialDiv.appendChild(newElement);
          console.log(input)
        } else {
          newElement.innerHTML =  (index + 1) + ". " + input.toString();
          myDiv.appendChild(newElement);
        }
    }
}

MYAPP.mySubSpace.myProp = "holla";

MYAPP.myReturn.push(MYAPP.mySubSpace.myProp);

// 2. Setting prototypes.
var Country = {
    sovereignty: true,
    army: "oh yeah"
}

var america = {
    population: 300000000,
    president: "obama",
}

Object.setPrototypeOf(america, Country);
MYAPP.myReturn.push(america.__proto__);
//3. Other way to set proto

var mexico = {
    population: 85000000,
    president: "Chavez"
}

mexico.__proto__ = Country;

MYAPP.myReturn.push(mexico.__proto__);

//4. Using constructors

function SchwadConstructor(arg1, func1){
  this.myProp = arg1;
  this.myFunc = func1;
  this.timeToChange = function(input){
    this.myProp = input;
  }
}

function suchTime(){
  return "hello there!";
}

myNewObj = new SchwadConstructor("okay");

MYAPP.myReturn.push(myNewObj.betterProp); //This shows our most recent mod to the constructor at the bottom is pulled up top

//5. Constructor prototyping properly

function SchwadConstructor(arg){
  this.betterProp = arg;
  this.staticishProp = "I like this constructor";
  this.betterFunc = function(){return "I am a function!"};
  var better = "constructor";
}
MYAPP.myReturn.push(SchwadConstructor.prototype.toString());

//6. Building instance object with constructor to show prototypes same as constructor's

var myTestingObject = new SchwadConstructor("bring it on");
console.log(" #6: just to be sure here it is " + myTestingObject.__proto__);
MYAPP.myReturn.push(myTestingObject.__proto__);

//7. If you build a constructor, you can alter its prototype

var checkThisOut = new SchwadConstructor("my arg");
SchwadConstructor.prototype.cackle = function(){
  return "HUEHUEHEUEHUE";
}

MYAPP.myReturn.push(checkThisOut.cackle());

//8. Practice Run

//traditional first

function PlymouthUniSearch(){
    this.yearAtUni = "todo";
    this.degreeStudying = "todo";
    this.currentMarks = "todo";
    this.address = "todo";
    this.mobilePhone = "todo";
    this.emailAddress = "todo";
  }

var nickSchwaderer = new PlymouthUniSearch();
PlymouthUniSearch.prototype.catchphrase = "";

nickSchwaderer.catchphrase = "Pure business";

MYAPP.myReturn.push(nickSchwaderer.catchphrase);

// creative now

var exeterUniSearch = {
  yearAtUni: "todo",
  degreeStudying: "todo",
  currentMarks: "todo",
  address: "todo",
  mobilePhone: "todo",
  emailAddress: "todo",
}

var johnSmith = Object.create( exeterUniSearch );

johnSmith.favoriteTeam = "Exeter City FC";

exeterUniSearch.rivalTeam = "Plymouth Argyle";

MYAPP.myReturn.push(johnSmith.rivalTeam);

//9. Example of bad monkey patching extending something

String.prototype.badMonkey = function(){
  return "DO NOT MONKEY PATCH";
}

MYAPP.myReturn.push("hello there".badMonkey());

//11. global vs local

var thisIsAGlobalVariable = 1515;

function somethingElseLocal() {
  var thisOneIsLocal = 314325;
  return thisOneIsLocal;
}

MYAPP.myReturn.push(thisIsAGlobalVariable + somethingElseLocal());


/*
  1. A new scope is created inside of a function.
  2. A function's scope also has access to any of the scopes from the functions which enclose it.
  3. Functions can only access variables that are in scope (i.e. if you declare variables inside function with "var" they will be hidden")
  --> to check out scope open up dev tools in chrome; click the "line" and then Scope is shown in dev tools

*/

//12. Scope. Variable 'hoisting'

//declare variables at top because they are gonna be hoisted there anyways.

var myFunc = function(){
  var a,b,c,d
  return a
  a=123
}

//MYAPP.myReturn.push(myFunc());

//13. Closures

function myNewSchwadFunc(){
  var betterRespectClosures = "for real";
  function myNewInnerSchwad(){
    return betterRespectClosures;
  }
  myNewInnerSchwad();
}

//14. Example of a closure

var myClosure = function(){
  var localVarClosureStyle = "closures are important";
  return function(){
    return localVarClosureStyle;
  }

}
var myHolder = myClosure();
MYAPP.myReturn.push(myHolder());

//15. Simple beginnings with modules

var mySchwadModule = function(){
  var _privateVariable = "hello"
  var publicVariable = 123

  //this is where you would store the public business and 'getters'
  return {
    publicOne: function(){
      return publicVariable;
    }

  }

}

var myNewModule = mySchwadModule();
MYAPP.myReturn.push(myNewModule.publicOne());

////////////////////////////////////////////////

// functional chunk of code to render below; if it won't post gives warning and chunks to console log..
for(i = 0; i < MYAPP.myReturn.length; i++){
   if (i === (MYAPP.myReturn.length - 1)) {
     MYAPP.renderResult(MYAPP.myReturn[i], i, true);
   } else {
     MYAPP.renderResult(MYAPP.myReturn[i], i, false);
   }
}