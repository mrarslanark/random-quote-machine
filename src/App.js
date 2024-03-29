import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0
    };
    this.setRandomNumber = this.setRandomNumber.bind(this);
  }

  setRandomNumber() {
    this.setState({
      randomNumber: randomInt(1, data.length)
    });
  }

  render() {
    var twitterIntentData =
      'https://twitter.com/intent/tweet?text="' +
      data[this.state.randomNumber].quote +
      '" -' +
      data[this.state.randomNumber].author +
      " - " +
      "A tweet from Random Quote Machine by @mrarslanark - A project by @freeCodeCamp";
    return (
      <div>
        <h1 className="HeadingStyle">Random Quote Machine</h1>
        <div id="quote-box">
          <p id="text">" {data[this.state.randomNumber].quote} "</p>
          <p id="author">- {data[this.state.randomNumber].author}</p>
          <div className="InteractionArea">
            <button id="new-quote" type="submit" onClick={this.setRandomNumber}>
              New Quote
            </button>
            <a
              href={twitterIntentData}
              target="_blank"
              rel="noopener noreferrer"
              id="tweet-quote"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <p style={developerStyle}>by Arslan Mushtaq</p>
        </div>
      </div>
    );
  }
}

export default App;

const developerStyle = {
  fontSize: "0.8rem",
  fontStyle: "italic",
  marginTop: "40px"
};

const data = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    author: "Dr. Seuss"
  },
  {
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: "Albert Einstein"
  },
  {
    quote: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch"
  },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.",
    author: "William W. Purkey"
  },
  {
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  }
];

const randomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
