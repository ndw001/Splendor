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
