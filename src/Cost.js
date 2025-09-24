import "./Cost.css";

function Cost(props) {
  const tempGemLibrary = {
    red: "🔴",
    green: "🟢",
    blue: "🔵",
    black: "⚫",
    white: "⚪",
  };

  return (
    <div className="Cost">
      {props.costs.map((cost) => {
        return (
          <div className="cost">
            <div className="quantity">{cost.quantity}</div>
            &nbsp;
            <div className="gem">{tempGemLibrary[cost.gem]}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cost;
