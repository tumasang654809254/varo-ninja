/*function fun(myArr){
    var result = 'i am ' + age + 'years old';
    console.log(result);
}
var age = prompt('How old are you?');
fun(myArr);

function SumNumbers(a, b){
    var sum = (a + b);
    console.log(sum);
}
SumNumbers(10 , 30);

function fun(val) {
    var myProduct = ('lord')

    var newProduct = 'yes ' + myProduct;
    console.log(newProduct); 
}
fun(val);

//while loop

var num = 0;

while (num > 100){
    num+=1;
    console.log(num);
};

for ( let num = 0; num > 100; num++){
    console.log(num)
};

for (let num = 10; num < 1000; num++){
    console.log(num)
};

let names = 'Tumasang';
let moreNames = 'Tumasang/nNdeh/nFofang';

console.log(names.length);
console.log(names.indexOf(s));
console.log(names.charAt(3));
console.log(names(3));
console.log(names.replace('mas','cas'));
console.log(names.split(','));
console.log(names.split(' '));
console.log(names.slice(2,4));
console.log(names.toLocaleLowerCase());
console.log(names.toLocaleUpperCase());
    console.log(names.toLowerCase());
    console.log(names.toUpperCase());

var fruits = ['banana', 'apple','pineapple','mango','pear'];
fruits = new Array('banana', 'apple','pineapple','mango','pear');

fruits[2] = 'watermelon';
console.log(fruits);

var i = 0;
while (i <= fruits.length){
    i += 1;
    console.log(fruits[i])
};

for (i = 0; i <= fruits.length; i++){
    console.log(fruits[i])
}

console.log(fruits.toString()); //converts the arrays to strings
console.log(fruits.join('*'));
console.log(fruits.pop());
console.log(fruits.push());
console.log(fruits[5]);
fruits(fruits.length) = new fruits;//same as push 
console.log(fruits)
fruits.shift();
console.log(fruits);
fruits.unshift('gwava');
console.log(fruits);

let vegetables = ['carrots','tomatoes','asparagus','brocolli'];

let allGrocerris = fruits.concat(vegetables);
comsole.log(allGrocerris);
console.log(allGrocerris.slice(1, 3));
console.log(allGrocerris.reverse());

let SomeNumbers = [5,12,30,5,8,90,20,54,34,64,5,90,34];
console.log(SomeNumbers.sort(function(a, b) {return(a-b)}));
console.log(SomeNumbers.sort(function(a, b) {return(b-a)}));

let emptyArray = new Array();
for (let num =0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray);

let anEmptyArray = [];
for (let num =10; num >= 0; i--){
    anEmptyArray.push(i);
}
console.log(anEmptyArray);

let car = {
    name : 'vox',
    model: 'version2022',
    year: 2022,

    carInformation: function(){
        this.name + "/n " + this.model + "/n " + this.year;
    }
};

console.log(car.name);

car.name = 'Mercedez'; //change value.
console.log(car.name);

car.model++;
console.log(car.model);

console.log(carInformation);*/

//let MyAge = 23

//console.log(MyAge);

//let MyAge = 23;
//let humanDogRatio = 7;

//let MyDogAge = MyAge * humanDogRatio;
//console.log(MyDogAge);

/*let count = 50
console.log(count);

count = coutn + 50
console.log(count);

count = count - 75
console.log(count);

count = count + 45
console.log(45);

function MYnumber(){

    console.log(42)
}
MYnumber()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function LapTimes(){

    let SumLapTimes = lap1 + lap2 + lap3;
    console.log(SumLapTimes)
}

LapTimes();

let lapsCompleted = 0

function LapTimes(){

    lapsCompleted = lapsCompleted + 1

}

LapTimes()
LapTimes()
LapTimes()

console.log(lapsCompleted)*


//COUNT EXERCISE

//document.getElementById("increment-btn")
document.getElementById("count-el").innerText = 5
let countEl = document.getElementById("count-el")
console.log(countEl)

document.addEventListener('onclick')

let count = 0

function incrementCount(){
    count = count + 1
    countEl.innerHTML = count;

    //console.log(count)
}
incrementCount();

function save(){
    console.log(count)
}
save()

let userName = "per";
let message = "you have three new notifications";
let messageToUser = message + " " + userName + "!";

console.log(messageToUser);

let greetings = "Hi my name is";
let name = "TUMASANG";
let myGreeting = greetings + " " + name + 

console.log(myGreeting);

console.log (4 + 5) // 9
console.log("4" + 5)//45
console.log(10 + "50")//1050
console.log("100" + "100")//100100

document.getElementById("welcome_el")

let welcomeEl = document.getElementById("welcome_el")

let name = "TUMASANG"
let greetings = "Welcome back "

welcomeEl.innerText = greetings + name;

welcomeEl.innerText += "imoji"*/


//exercise
//grab the save_el paragrapg  and store it in the var saveEl.


/*let countEl = document.getElementById("count_el")
let saveEl = document.getElementById("save_el")

let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr

    countEl.textContent = 0
}


let firstName = Tumasang
let lastName = Fofang

fullName = firstName + lastName
console.log(fullName)

let myPoints = 3

    function add3Points(){
        myPoints += 3
    }

    function remove1Point(){
        myPoints -= 1
    }
    add3Points
    add3Points
    add3Points
    remove1Point
    remove1Point(1)

    console.log(myPoints)

    //purchase button

   let errorParagraph = document.getElementById("error")

   function purchace(){
       console.log("button clicked")
       errorParagraph.textContent = "Something went wrong please try again"
   }

   //calculator

  let sumEl = document.getElementById("sum-el")

  let num1 = 8
  let num2 = 2

  function add(){
      let result = num1 + num2
      sumEl.textContent = "sum " + result
  }

  
  function subtract(){
    let result = num1 + num2
    sumEl.textContent = "sum " + result
}


function divide(){
    let result = num1 + num2
    sumEl.textContent = "sum " + result
}


function multiply(){
    let result = num1 + num2
    sumEl.textContent = "sum " + result
}

//blackjack card

let firstCard = 4
let secondCard = 8

let sum = firstCard + " " + secondCard

if (sum < 21){
    console.log(" Do you want to add a card ?")
}else if (sum === 21){
    console.log("wohoo: you've got blackjack")
}else {
    console.log("you're out of the game")
}

// enter the club

let age = 22

if (age < 21){
    console.log("You cannot enter the club")
}else{
    console.log("welcom")
}

//Birthday card from the King

let age = 100

if (age > 100){
    console.log("Not eligeble")
}else if(age === 100){
    console.log("Here is your birthday card from the king")
}else {
    console.log("Not eligeble, you've gotten one already")
}

//Arrays

let experience = ["CEO at Scrimba", "Front end developer at Xenata", "People counter at Norsta"]

console.log(experience[0])
console.log(experience[1])
console.log(experience[2])
console.log(experience.length)

let mySelf = ["Tumasang Ndeh Fofang", 23, true]

let message = [
    "Hey how's it going?",
    "I'm great, thanks! how about you?",
    "All good, been working on my Profolio today"
]
let newMessage = "Same here"
message.push(newMessage)
message.pop(newMessage)*/
//Blackjack if/else statements

messageEl = document.getElementById("message-el")
sumEl = document.getElementById("sum-el")
cardsEl = document.getElementById("cards-el")

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let message = ""
let hasBlackjack = false
let IsAlive = true

function getRandomCard(){
    return Math.floor( math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

function startGame(){
    renderGame()
}

function renderGame(){
    
    cardsEl.textContent = "Cards"
    for (let i =0; i < cards.length; i++){
        cardsEl.textContent += cards[i] 
      }
    
    sumEl.textContent = "Sum: " + sum

if(sum <= 20){
    message = "Do you want to draw a new card ?"
}else if(sum === 21){
    message = "You have won a Blackjack"
    hasBlackjack = true
}else{
    message =               
    IsAlive = false
}
messageEl.textContent = message
}

function newCard(){
    if (IsAlive === true && hasBlackjack === false){

        message = "Drawing a new card from the Deck"
        let card = getRandomCard()
        sum += card
        //cards.push(Card)
        renderGame()
    }
}



/*for (let count = 10; count < 11; count += 1)

for(let i = 10; i <101; i += 10){
   console.log(i)
}


for (let i = 5; i < card.length; i += 1){
    console.log(cards[i])
}

let sentence = ["hello ", "my ", "name ", "is ", "Tumasang " ]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.lenght; i += 1){
    greetingEl.textContent += sentence[i] + " " 
}

//GetTotalTime

let player1Time = 100
let player2Time = 200

function GetTotalTime(){
    return player1Time + player2Time 
}
let totalTime = GetTotalTime()
console.log(totalTime)*/

//function roll dice

/*function rollDice(){
    let randomNumber = math.floor(math.random()*6) + 1
    return randomNumber={}
}
console.log(rollDice())*/


//logical operator

let hasSolvedChallenge = false
let hasHintsLeft = false

if(hasSolvedChallenge ===false && hasHintsLeft === false){
    showSolution()
}
function showSolution(){
    console.log(showSolution)
}

let likesDocumenaries = true
let likesStartups = false

if(likesDocumenaries === true || likesStartups === false){
    recomendMovie()
}