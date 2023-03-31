/*-----Alert-----*/
alert("Thanks for your input!");


/*-----Variables for Strings-----*/
var name = "Mark";
name = "Ace";

var nationality;
nationality = "U.S.";

var floogle = "Mark";
var name = "Mark";
var floogle = "Mark";

var lessonAuthor = "Mark";
var guyWhoKeepsSayingHisOwnName = "Mark";
var x = "Mark";

var lastName = "Smith";
var cityOfOrigin = "New Orleans";
var aussieGreeting = "g'Day";

var nickname = "Bub";

var thanx = "Thanks for your input!"
alert(thanx);

/*----Variables for Numbers----*/
var weight = 150;
var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;

var originalNum = 90;
originalNum = originalNum + 10;

var originalNum = "23";
var newNum = originalNum + 7;

var originalNumber = 23;
var newNumber = originalNumber + 7;

//var 1stPresident = "Washington";//ilegal var never start with number

var prezWhoCame1st = "Washington";

var caseQty = 144;
alert(caseQty);

/*----Variable Names Legal and Illegal----*/

/*----Math expressions: Familiar operators----*/

var popularNumber = 4;

var popularNumber = 2 + 2;

alert(2 + 2);

var popularNumber = 12 - 24;

var popularNumber = 3 * 12;


var num = 10;
var popularNumber = num + 200;

var num = 10;
var anotherNum = 1;
var popularNumber = num + anotherNum;

var whatsLeftOver = 10 % 3;

var whatsLeftOver = 9 % 3;

/*----Math expressions: Unfamiliar operators----*/

num++;

num = num + 1;

num--;

var num = 1;
var newNum = num++;

var num = 1;
var newNum = ++num;

var num = 1;
var newNum = num--;

var num = 1;
var newNum = --num;


/*----Math expressions: Eliminating ambiguity----*/

var totalCost = 1 + 3 * 4;

var totalCost = 1 + (3 * 4);

var totalCost = (1 + 3) * 4;

var resultOfComputation = (2 * 4) * 4 + 2;


resultOfComputation = ((2 * 4) * 4) + 2;

resultOfComputation = (2 * 4) * (4 + 2);


/*----Concatenating text strings----*/


alert("Thanks for your input!");

var message = "Thanks for your input!";
alert(message);

alert("Thanks, " + userName + "!");

var message = "Thanks, ";
var banger = "!";
alert(message + userName + banger);

alert("Thanks, " + "Susan" + "!");

var message = "Thanks, ";
var userName = "Susan";
var banger = "!";
var customMess = message + userName + banger;
alert(customMess);

alert("2" + "2");

alert("2 plus 2 equals " + 2 + 2);

/*----prompts----*/

var spec = prompt("Your species?", "human");

var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);

var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;

/*----if statements----*/

var x = prompt("Where does the Pope live?");
if (x === "Vatican") 
{
alert("Correct!");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) 
{
alert("Correct!");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) 
{
score++;
userIQ = "genius";
alert("Correct!");
}

/*----Comparison operators----*/

/*if (fullName === "Mark" + " " + "Myers") 
{
if (fullName === firstName + " " + "Myers") 
{
if (fullName === firstName + " " + "Myers") 
{
if (fullName === "firstName + " " + lastName)
{
if (totalCost === 81.50 + 135) 
{
if (totalCost === materialsCost + 135) 
{
if (totalCost === materialsCost + laborCost) 
{
if (x + y === a - b)
{
    if (yourTicketNumber !== 487208) {
    alert("Better luck next time.");
    }
    
  
    if (1 >= 0) {
    40
    if (1 >= 1) {
    if (0 <= 1) {
    if (1 <= 1) {*/

/*----if...else and else if statements----*/

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
alert("Correct!");
}

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
alert("Correct!");
}
if (x !== "Vatican") {
alert("Wrong answer");
}

if (x === "Vatican") {
alert("Correct!");
}
else {
alert("Wrong answer");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
alert("Correct!");
}
else {
score--;
userIQ = "problematic";
alert("Incorrect");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
43
alert("Correct!");
}
else if (x === "Rome") {
alert("Incorrect but close");
}
else {
alert("Incorrect");
}