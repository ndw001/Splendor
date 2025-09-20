import "./Card.css";
import Cost from "./Cost";

function Card({ card }) {
  /*

  background image

  HEADER:
  - top left Points
  - top right Gem

  Bottom Left, Cost
  - Color circle and cost, gem next to it

  */
  if (!card) return null;
  const { points, gem, cost } = card;
  const tempGemLibrary = {
    red: "🔴",
    green: "🟢",
    blue: "🔵",
    black: "⚫",
    white: "⚪",
  };

  // console.log("props  ", props.card);
  console.log("HELLO THERE ", points, gem);

  let sampleCost = [
    { quantity: 3, gem: "green" },
    { quantity: 2, gem: "black" },
  ];

  return (
    <div className="Card">
      <div className="header">
        <div className="Points">{points}</div>
        <div className="Gem">{tempGemLibrary[gem]}</div>
      </div>
      <div className="bottom">
        <Cost costs={cost} />
      </div>
    </div>
  );
}

export default Card;
