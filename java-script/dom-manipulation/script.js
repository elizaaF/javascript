let button = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    person: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving."
  },
  {
    person: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world."
  },
  {
    person: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
  },
  {
    person: "Steve Jobs",
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
  },
  {
    person: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing."
  },
  {
    person: "Eleanor Roosevelt",
    quote: "No one can make you feel inferior without your consent."
  },
  {
    person: "Nelson Mandela",
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
  },
  {
    person: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop."
  },
  {
    person: "Henry Ford",
    quote: "Whether you think you can, or you think you can’t—you’re right."
  },
  {
    person: "Mark Twain",
    quote: "The secret of getting ahead is getting started."
  }
];

button.addEventListener('click', function(){
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
  
});
