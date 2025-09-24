import React, { useState, useEffect, useRef } from "react";
import "./Board.css";
import Card from "./Card";
import TierOneDeck from "./TierOneDeck";
import TierTwoDeck from "./TierTwoDeck";
import TierThreeDeck from "./TierThreeDeck";

import shuffleArray from "./helperFunctions";

function Board() {
  const [isTakingCoins, setIsTakingCoins] = useState(false);
  const [heldCoins, setHeldCoins] = useState({
    red: 0,
    green: 0,
    blue: 0,
    black: 0,
    white: 0,
    gold: 0,
  });
  const [isTakingCard, setIsTakingCard] = useState(false);

  const [currentRowOne, setCurrentRowOne] = useState([]);
  const [currentRowTwo, setCurrentRowTwo] = useState([]);
  const [currentRowThree, setCurrentRowThree] = useState([]);
  const [currentAvailableCoins, setCurrentAvailableCoins] = useState({
    red: 7,
    green: 7,
    blue: 7,
    black: 7,
    white: 7,
    gold: 5,
  });

  const [playerCoins, setPlayerCoins] = useState({
    red: 0,
    green: 0,
    blue: 0,
    black: 0,
    white: 0,
    gold: 0,
  });
  const [playerCards, setPlayerCards] = useState([]);

  const tempGemLibrary = {
    red: "🔴",
    green: "🟢",
    blue: "🔵",
    black: "⚫",
    white: "⚪",
    gold: "🟡",
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
  const deckTwo = shuffleArray([...TierTwoDeck]);
  const deckThree = shuffleArray([...TierThreeDeck]);

  useEffect(() => {
    setCurrentRowOne(deckOne.slice(0, 4));
    setCurrentRowTwo(deckTwo.slice(0, 4));
    setCurrentRowThree(deckThree.slice(0, 4));
  }, []);

  const takeCoin = (gem) => {
    setIsTakingCoins(true);
    if (gem === "gold") {
      console.log("❌ Gold coins can only be taken by reserving a card");
      return;
    }

    setHeldCoins((prevHeld) => {
      const totalTaken = Object.values(prevHeld).reduce((a, b) => a + b, 0);
      if (totalTaken >= 3) return prevHeld;

      const hasDouble = Object.values(prevHeld).some((count) => count === 2);
      if (hasDouble && prevHeld[gem] === 0) return prevHeld;

      const differentGemsTaken = Object.values(prevHeld).filter(
        (c) => c > 0
      ).length;
      if (differentGemsTaken > 1 && prevHeld[gem] === 1) return prevHeld;

      if (prevHeld[gem] >= 2) return prevHeld;
      if (prevHeld[gem] === 1 && currentAvailableCoins[gem] < 4)
        return prevHeld;

      const newHeld = { ...prevHeld, [gem]: prevHeld[gem] + 1 };
      const newAvailable = {
        ...currentAvailableCoins,
        [gem]: currentAvailableCoins[gem] - 1,
      };

      setCurrentAvailableCoins(newAvailable);

      return newHeld;
    });
  };

  const cancelTakeCoins = () => {
    setCurrentAvailableCoins((prevAvailable) => {
      const restored = { ...prevAvailable };
      for (let gem in heldCoins) {
        restored[gem] += heldCoins[gem];
      }
      return restored;
    });

    setHeldCoins({
      red: 0,
      green: 0,
      blue: 0,
      black: 0,
      white: 0,
      gold: 0,
    });

    setIsTakingCoins(false);
  };

  const confirmTakeCoins = () => {
    setPlayerCoins((prev) => {
      const updated = { ...prev };
      for (let gem in heldCoins) {
        updated[gem] += heldCoins[gem];
      }
      return updated;
    });

    setHeldCoins({
      red: 0,
      green: 0,
      blue: 0,
      black: 0,
      white: 0,
      gold: 0,
    });

    setIsTakingCoins(false);
  };

  return (
    <div className="Board">
      <div className="Nobles"></div>
      <div className="Decks"></div>
      <div className="AvailableCards">
        <div className="row" id="row3">
          <div className="deck">
            <Card card={sampleBlankCard} />
          </div>
          {currentRowThree.map((card) => {
            return <Card card={card} />;
          })}
        </div>
        <div className="row" id="row2">
          <div className="deck">
            <Card card={sampleBlankCard} />
          </div>
          {currentRowTwo.map((card) => {
            return <Card card={card} />;
          })}
        </div>
        <div className="row" id="row1">
          <div className="deck">
            <Card card={sampleBlankCard} />
          </div>
          {currentRowOne.map((card) => {
            return <Card card={card} />;
          })}
        </div>
      </div>
      <div className="AvailableCoins">
        {Object.keys(currentAvailableCoins).map((gem) => {
          const gemId = `Available${gem}`;
          return (
            <div
              className="coinStack"
              id={gemId}
              onClick={(e) => {
                console.log("CLICKED:", gem);

                takeCoin(gem);
              }}
            >
              {currentAvailableCoins[gem]}
              {tempGemLibrary[gem]}
            </div>
          );
        })}
      </div>
      <div className="PlayerArea">
        Your Coins and Cards
        <div className="PlayerCoins">
          {Object.keys(playerCoins).map((gem) => {
            const gemId = `Available${gem}`;
            return (
              <div className="coinStack" id={gemId}>
                {playerCoins[gem]}
                {tempGemLibrary[gem]}
              </div>
            );
          })}
        </div>
        <div className="PlayerCards">
          {isTakingCoins && (
            <div className="coin-actions">
              <button onClick={cancelTakeCoins}>Cancel</button>
              <button onClick={confirmTakeCoins}>Confirm</button>
            </div>
          )}
        </div>
      </div>
      <div className="OtherPlayerArea"></div>
    </div>
  );
}

export default Board;
