import { useState } from "react";

const Quotes = ({ quotes }) => {
  let id;
  let hue;
  let pastelColor;

  const [randomID, setRandomID] = useState(1);
  const [randomColor, setRandomColor] = useState("");

  //set random number to id
  const handleText = () => {
    id = Math.floor(Math.random() * (quotes.length - 1) + 1);
    setRandomID(id);
  };

  //set random color
  const handleColor = () => {
    hue = Math.floor(Math.random() * 360);
    pastelColor = "hsl(" + hue + ", 70%, 80%)";
    setRandomColor(pastelColor);
  };

  return (
    <div className="App" style={{ backgroundColor: `${randomColor}` }}>
      <div className="container" id="quote-box">
        {quotes
          .filter((quote) => randomID === quote.id)
          .map((quote) => (
            <div key={quote.id}>
              <div id="text">
                <i
                  className="fas fa-quote-left "
                  style={{ color: `${randomColor}` }}
                ></i>{" "}
                {quote.text}
              </div>
              <div id="quote-author">
                <span id="author">-{quote.author}</span>
              </div>
            </div>
          ))}
        <div className="buttons">
          <a
            href="https://twitter.com/intent/tweet?text=Quote"
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: `${randomColor}` }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://tumblr.com/"
            id="tumblr-quote"
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: `${randomColor}` }}
          >
            <i className="fab fa-tumblr"></i>
          </a>
          <button
            id="new-quote"
            onClick={() => {
              handleText();
              handleColor();
            }}
            style={{ backgroundColor: `${randomColor}` }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
