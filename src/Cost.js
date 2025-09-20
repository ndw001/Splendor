import "./Cost.css";

function Cost(props) {
  // console.log("this is props.costs", props.costs);

  // useEffect

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
            <div className="gem">{tempGemLibrary[cost.gem]}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cost;
