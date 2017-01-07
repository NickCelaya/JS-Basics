//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name) {
  if (name === "Tyler"){
    return true;
  } else {
    return false;
  }
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  function getName(){
    var person = prompt("What is your name");
    return (person);
  }


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome() {
    var saying = "Welcome, " + getName();
    alert(saying);
  }

//////////////////PROBLEM 4////////////////////


//What is the difference between arguments and parameters?

  function myName(){
    return ("parameter === are names in the function description" && "arguments are the real values being passed to and recieved by the function ");
  }
myName();

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  function newMyName(){
    return("falsey" === "false", 0, "", "null", "undefined", "NaN");
  }
newMyName();
//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){
    return ("Nick");
  }
// myName();


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn(){
    return (
      function (){
        return("Nick");
      }
    );
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
