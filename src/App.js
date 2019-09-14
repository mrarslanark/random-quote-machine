import React from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let primaryQuote = `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`;
    let quotations = `"${primaryQuote}"`;
    let primaryAuthor = `Bernard M. Baruch`;
    let author = `― ${primaryAuthor}`;
    return (
      <div>
        <h1 className="HeadingStyle">Random Quote Machine</h1>
        <div id="quote-box">
          <p id="text">{quotations}</p>
          <p id="author">{author}</p>
          <div className="InteractionArea">
            <button id="tweet-quote" type="submit">
              <i class="fab fa-twitter"></i>
            </button>
            <button id="new-quote" type="submit">
              New Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const data = [];
