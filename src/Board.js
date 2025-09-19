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
    { points: 0, gem: "red", cost: [{ quantity: 3, gem: "green" }] },
    { points: 0, gem: "blue", cost: [{ quantity: 3, gem: "black" }] },
    {
      points: 0,
      gem: "black",
      cost: [
        { quantity: 2, gem: "white" },
        { quantity: 1, gem: "blue" },
      ],
    },
    { points: 0, gem: "red", cost: [{ quantity: 3, gem: "white" }] },
    { points: 1, gem: "green", cost: [{ quantity: 4, gem: "blue" }] },
  ];

  return (
    <div className="Board">
      <div className="Nobles"></div>
      <div className="Decks"></div>
      <div className="AvailableCards">
        <Card />
      </div>
      <div className="AvailableCoins"></div>
      <div className="PlayerArea"></div>
      <div className="OtherPlayerArea"></div>
    </div>
  );
}

export default Board;
