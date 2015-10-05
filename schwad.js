//TODO ; NEED TO RESOLVE THE RENDERING ISSUE WHEN I COME BACK

// 1. Set up global namespace object

var MYAPP = {};
MYAPP.myReturn = [];
console.log(MYAPP.myReturn);
MYAPP.mySubSpace = {};
MYAPP.otherSubSpace = {};
MYAPP.renderResult = function(input, index){
 var myDiv = document.getElementById('my-display');
 var newElement = document.createElement('p');
    if (typeof input == "object"){
        newElement.innerHTML = (index + 1) + ". " + JSON.stringify(input)
        myDiv.appendChild(newElement);
        console.log(input)
    } else {
        newElement.innerHTML =  (index + 1) + ". " + input.toString();
        myDiv.appendChild(newElement);
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

//4. Using constructors to set prototypes

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

myNewObj = new SchwadConstructor("okay", suchTime());
myNewObj.timeToChange("it is different now");

MYAPP.myReturn.push(myNewObj);

//5.

////////////////////////////////////////////////

// functional chunk of code to render below; if it won't post gives warning and chunks to console log..

for(i = 0; i < MYAPP.myReturn.length; i++){
   MYAPP.renderResult(MYAPP.myReturn[i], i);
}

// execute
//console.log(typeof //MYAPP.mySubSpace.myProp.__proto__);
//MYAPP.renderResult(america.army);