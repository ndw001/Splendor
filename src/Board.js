import "./Board.css";
import Card from "./Card";
import TierOneDeck from "./TierOneDeck";
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
  let rowOne = deckOne.slice(0, 4);

  console.log("This is deck One", deckOne);

  return (
    <div className="Board">
      <div className="Nobles"></div>
      <div className="Decks"></div>
      <div className="AvailableCards">
        <div className="row">
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
