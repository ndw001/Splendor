const TierThreeDeck = [
  // 1st cycle - efficient
  { points: 4, gem: "red", cost: [{ quantity: 7, gem: "green" }] },
  { points: 4, gem: "blue", cost: [{ quantity: 7, gem: "black" }] },
  { points: 4, gem: "green", cost: [{ quantity: 7, gem: "white" }] },
  { points: 4, gem: "black", cost: [{ quantity: 7, gem: "red" }] },
  { points: 4, gem: "white", cost: [{ quantity: 7, gem: "blue" }] },
  // 2nd cycle - efficient +1pt/+3
  {
    points: 5,
    gem: "red",
    cost: [
      { quantity: 7, gem: "white" },
      { quantity: 3, gem: "blue" },
    ],
  },
  {
    points: 5,
    gem: "blue",
    cost: [
      { quantity: 7, gem: "red" },
      { quantity: 3, gem: "black" },
    ],
  },
  {
    points: 5,
    gem: "green",
    cost: [
      { quantity: 7, gem: "blue" },
      { quantity: 3, gem: "green" },
    ],
  },
  {
    points: 5,
    gem: "black",
    cost: [
      { quantity: 7, gem: "green" },
      { quantity: 3, gem: "red" },
    ],
  },
  {
    points: 5,
    gem: "white",
    cost: [
      { quantity: 7, gem: "black" },
      { quantity: 3, gem: "white" },
    ],
  },
  // 3rd cycle - 5/3335
  {
    points: 5,
    gem: "red",
    cost: [
      { quantity: 3, gem: "green" },
      { quantity: 5, gem: "blue" },
      { quantity: 3, gem: "black" },
      { quantity: 3, gem: "white" },
    ],
  },
  {
    points: 5,
    gem: "green",
    cost: [
      { quantity: 5, gem: "red" },
      { quantity: 3, gem: "blue" },
      { quantity: 3, gem: "black" },
      { quantity: 3, gem: "white" },
    ],
  },
  {
    points: 5,
    gem: "blue",
    cost: [
      { quantity: 3, gem: "red" },
      { quantity: 5, gem: "green" },
      { quantity: 3, gem: "black" },
      { quantity: 3, gem: "white" },
    ],
  },
  {
    points: 5,
    gem: "black",
    cost: [
      { quantity: 3, gem: "red" },
      { quantity: 3, gem: "green" },
      { quantity: 3, gem: "blue" },
      { quantity: 5, gem: "white" },
    ],
  },
  {
    points: 5,
    gem: "white",
    cost: [
      { quantity: 3, gem: "red" },
      { quantity: 3, gem: "green" },
      { quantity: 3, gem: "blue" },
      { quantity: 5, gem: "black" },
    ],
  },
  // 4 cycle - 4pt/336
];

export default TierThreeDeck;
