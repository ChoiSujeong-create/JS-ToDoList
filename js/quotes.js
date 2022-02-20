const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: " J.K. Rowling",
  },
  {
    quote:
      "I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.",
    author: "Virginia Woolf",
  },
  {
    quote: "Well-behaved women seldom make history.",
    author: "Laurel Thatcher Ulrich",
  },
  {
    quote:
      "I, with a deeper instinct, choose a man who compels my strength, who makes enormous demands on me, who does not doubt my courage or my toughness, who does not believe me naïve or innocent, who has the courage to treat me like a woman.",
    author: "Anaïs Nin",
  },
  {
    quote: "There are no good girls gone wrong - just bad girls found out.",
    author: "Mae West",
  },
  {
    quote:
      "When a man gives his opinion, he's a man. When a woman gives her opinion, she's a bitch",
    author: "Bette Davis",
  },
  {
    quote: "Better to be strong than pretty and useless.",
    author: "Lilith Saintcrow",
  },
  {
    quote:
      "As a woman I have no country. As a woman I want no country. As a woman, my country is the whole world.",
    author: "Virginia Woolf",
  },
  {
    quote: "A woman without a man is like a fish without a bicycle.",
    author: "Irina Dunn",
  },
  {
    quote: "I hate men who are afraid of women's strength.",
    author: "Anaïs Nin",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
