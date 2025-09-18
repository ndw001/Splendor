import "./Card.css";
import Cost from "./Cost";

function Card() {
  /*

  background image

  HEADER:
  - top left Points
  - top right Gem

  Bottom Left, Cost
  - Color circle and cost, gem next to it

  */

  let sampleCost = [
    { quantity: 3, gem: "green" },
    { quantity: 2, gem: "black" },
  ];

  return (
    <div className="Card">
      <div className="header">
        <div className="Points">3</div>
        <div className="Gem">🔴</div>
      </div>
      <div className="bottom">
        <Cost costs={sampleCost} />
      </div>
    </div>
  );
}

export default Card;
