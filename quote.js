var quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    }
  ];
  
  function generateRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.querySelector("blockquote");
    var authorElement = document.querySelector("p");
    var { quote, author } = quotes[randomIndex];
    quoteElement.textContent = `"${quote}"`;
    authorElement.textContent = `- ${author}`;
  }
  
  var generateButton = document.getElementById("generate-btn");
  generateButton.addEventListener("click", generateRandomQuote);
  
  // Generate a quote on page load
  generateRandomQuote();
  