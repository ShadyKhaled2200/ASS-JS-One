
var quotes=[
    {
        text:"''It is our choices, Harry, that show what we truly are, far more than our abilities.''",
        author:"-- J.K. Rowling",
    },
    {
        text:"''A friend is someone who knows all about you and still loves you.''",
        author:"-- Elbert Hubbard",
    },
    {
        text:"''If you can't explain it to a six year old, you don't understand it yourself.''",
        author:" -- Albert Einstein",
    },
    {
        text:"''Everything you can imagine is real.''",
        author:" -- Pablo Picasso",
    },
    {
        text:"''We don't see things as they are, we see them as we are.''",
        author:" -- Anais Nin",
    },
    {
        text:"''I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.''",
        author:"-- Dr. Seuss",
    },
    {
        text:"''That which does not kill us makes us stronger.''",
        author:"-- Friedrich Nietzsche",
    },
    {
        text:"''If you judge people, you have no time to love them.''",
        author:"-- Mother Teresa",
    },
    {
        text:"''It is never too late to be what you might have been''",
        author:"-- George Eliot",
    },
    
];




  var quoteBtn =  document.getElementById('quoteBtn');
  var quoteText =   document.getElementById('quoteText');
  var quoteAuthor =   document.getElementById('quoteAuthor');


var currentRandom;
function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * quotes.length);

  while (randomNumber === currentRandom) {
    randomNumber = Math.floor(Math.random() * quotes.length);
  }
  currentRandom = randomNumber;
  return randomNumber;
}

function getRandomQuotes() {
    var randomQuotes = quotes[getRandomNumber()];
    quoteText.innerHTML = randomQuotes.text;
    quoteAuthor.innerHTML = randomQuotes.author;
  }

  quoteBtn.onclick = getRandomQuotes;









// function myfunc(){

//   var  emailInput = document.getElementById('emailInput');
//   var  nameInput = document.getElementById('nameInput');
//   var  domainInput = document.getElementById('domainInput');

// var email = emailInput.value;

// var atIndex = email.indexOf('@');



// // if(atIndex != -1){
// if(email.includes('@') == true){
//     var name = emailInput.value.slice(0, atIndex);
//     nameInput.value = name;
//     domainInput.value = email.slice(atIndex+1);


// }else{
//     alert("plz write correct email");
// }



