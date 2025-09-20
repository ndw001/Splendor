import "./Board.css";
import Card from "./Card";

function Board() {
  /*
  background image

  HEADER:
  - top left Points
  - top right Gem

  Bottom Left, Cost
  - Color circle and cost, gem next to it

  */

  // sample deck of tier 1 cards
  // points, gem, cost
  const sampleDeck = [
    //row1
    [
      { points: 1, gem: "red", cost: [{ quantity: 3, gem: "green" }] },
      { points: 1, gem: "blue", cost: [{ quantity: 3, gem: "black" }] },
      {
        points: 1,
        gem: "black",
        cost: [
          { quantity: 2, gem: "white" },
          { quantity: 1, gem: "blue" },
        ],
      },
      { points: 1, gem: "red", cost: [{ quantity: 3, gem: "white" }] },
      { points: 2, gem: "green", cost: [{ quantity: 4, gem: "blue" }] },
    ],
    //row2
  ];

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

  return (
    <div className="Board">
      <div className="Nobles"></div>
      <div className="Decks"></div>
      <div className="AvailableCards">
        {sampleDeck.map((row) => {
          return (
            <div className="row">
              <div className="deck">
                <Card card={sampleBlankCard} />
              </div>
              <Card card={row[0]} />
              <Card card={row[1]} />
              <Card card={row[2]} />
              <Card card={row[3]} />
            </div>
          );
        })}
      </div>
      <div className="AvailableCoins"></div>
      <div className="PlayerArea"></div>
      <div className="OtherPlayerArea"></div>
    </div>
  );
}

export default Board;
