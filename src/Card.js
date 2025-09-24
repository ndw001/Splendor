import "./Card.css";
import Cost from "./Cost";

function Card({ card, onClick }) {
  if (!card) return null;
  const { points, gem, cost } = card;
  const tempGemLibrary = {
    red: "🔴",
    green: "🟢",
    blue: "🔵",
    black: "⚫",
    white: "⚪",
  };
  let sampleCost = [
    { quantity: 3, gem: "green" },
    { quantity: 2, gem: "black" },
  ];

  return (
    <div className="Card" onClick={onClick}>
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
