import "./Board.css";
import Card from "./Card";
import TierOneDeck from "./TierOneDeck";
import TierTwoDeck from "./TierTwoDeck";
import TierThreeDeck from "./TierThreeDeck";

import shuffleArray from "./helperFunctions";

function Board() {
  /*
  background image

  */

  const tempGemLibrary = {
    red: "🔴",
    green: "🟢",
    blue: "🔵",
    black: "⚫",
    white: "⚪",
  };

  const sampleBlankCard = {
    points: "X",
    gem: "red",
    cost: [
      { quantity: 1, gem: "red" },
      { quantity: 1, gem: "blue" },
      { quantity: 1, gem: "green" },
      { quantity: 1, gem: "black" },
      { quantity: 1, gem: "white" },
    ],
  };

  const deckOne = shuffleArray([...TierOneDeck]);
  const deckTwo = shuffleArray([...TierTwoDeck]);
  const deckThree = shuffleArray([...TierThreeDeck]);

  let rowOne = deckOne.slice(0, 4);
  let rowTwo = deckTwo.slice(0, 4);
  let rowThree = deckThree.slice(0, 4);

  // console.log("This is deck One", deckOne);

  return (
    <div className="Board">
      <div className="Nobles"></div>
      <div className="Decks"></div>
      <div className="AvailableCards">
        <div className="row" id="row3">
          <div className="deck">
            <Card card={sampleBlankCard} />
          </div>
          {rowThree.map((card) => {
            return <Card card={card} />;
          })}
        </div>
        <div className="row" id="row2">
          <div className="deck">
            <Card card={sampleBlankCard} />
          </div>
          {rowTwo.map((card) => {
            return <Card card={card} />;
          })}
        </div>
        <div className="row" id="row1">
          <div className="deck">
            <Card card={sampleBlankCard} />
          </div>
          {rowOne.map((card) => {
            return <Card card={card} />;
          })}
        </div>
      </div>
      <div className="AvailableCoins"></div>
      <div className="PlayerArea"></div>
      <div className="OtherPlayerArea"></div>
    </div>
  );
}

export default Board;
