window.onload = init;
var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];
const quotes = [
    {
        quote: "I attribute my success to this: I never gave or took any excuse.",
        author: "- Florence Nightingale"
    },
    {
        quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
        author: "- Erma Bombeck"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "- Albert Einstein"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "- Wayne Gretzky"
    },
    {
        quote: "I try to create sympathy for my characters, then turn the monsters loose.",
        author: "- Stephen King"
    },
    {
        quote: "It's none of their business that you have to learn to write. Let them think you were born that way.",
        author: "- Ernest Hemingway"
    },
    {
        quote: "Most writers regard the truth as their most valuable possession, and therefore are most economical in its use.",
        author: "- Mark Twain"
    },
    {
        quote: "To produce a mighty book, you must choose a mighty theme.",
        author: "- Herman Melville"
    },
    {
        quote: "It is perfectly okay to write garbage—as long as you edit brilliantly.",
        author: "- C.J. Cherryh"
    },
    {
        quote: "It took me fifteen years to discover I had no talent for writing, but I couldn't give it up because by that time I was too famous.",
        author: "- Robert Benchley"
    },
    {
        quote: "A blank piece of paper is God's way of telling us how hard it to be God.",
        author: "- Sidney Sheldon"
    },
    {
        quote: "Not that the story need be long, but it will take a long while to make it short.",
        author: "- Henry David Thoreau"
    },
    {
        quote: "First, find out what your hero wants, then just follow him!",
        author: "- Ray Bradbury"
    }
]
function init() {
    generateQuote();
}
function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuoteData = quotes[randomIndex];

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + '"' + randomQuoteData.quote.replace(/ /g, "%20") + '" ' + randomQuoteData.author.replace(/ /g, "%20");

    document.getElementById("tweet-quote").href = twitterLink;

    document.getElementById('text').innerHTML = randomQuoteData.quote;
    document.getElementById('author').innerHTML = randomQuoteData.author;

}