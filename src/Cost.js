function Cost(props) {
  console.log("this is props.costs", props.costs);

  // useEffect

  return (
    <div className="Cost">
      {props.costs.map((cost) => {
        return (
          <div className="cost">
            <div className="quantity">{cost.quantity}</div>
            <div className="gem">{cost.gem}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cost;
