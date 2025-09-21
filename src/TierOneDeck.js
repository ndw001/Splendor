const TierOneDeck = [
  // 1st cycle - efficient
  { points: 0, gem: "red", cost: [{ quantity: 3, gem: "blue" }] },
  { points: 0, gem: "blue", cost: [{ quantity: 3, gem: "green" }] },
  { points: 0, gem: "green", cost: [{ quantity: 3, gem: "black" }] },
  { points: 0, gem: "black", cost: [{ quantity: 3, gem: "white" }] },
  { points: 0, gem: "white", cost: [{ quantity: 3, gem: "red" }] },
  // 2nd cycle - efficient 1 pt
  { points: 1, gem: "red", cost: [{ quantity: 4, gem: "white" }] },
  { points: 1, gem: "blue", cost: [{ quantity: 4, gem: "red" }] },
  { points: 1, gem: "green", cost: [{ quantity: 4, gem: "blue" }] },
  { points: 1, gem: "black", cost: [{ quantity: 4, gem: "green" }] },
  { points: 1, gem: "white", cost: [{ quantity: 4, gem: "black" }] },
  // 3rd cycle - one of each
  {
    points: 0,
    gem: "red",
    cost: [
      { quantity: 1, gem: "green" },
      { quantity: 1, gem: "blue" },
      { quantity: 1, gem: "black" },
      { quantity: 1, gem: "white" },
    ],
  },
  {
    points: 0,
    gem: "green",
    cost: [
      { quantity: 1, gem: "red" },
      { quantity: 1, gem: "blue" },
      { quantity: 1, gem: "black" },
      { quantity: 1, gem: "white" },
    ],
  },
  {
    points: 0,
    gem: "blue",
    cost: [
      { quantity: 1, gem: "red" },
      { quantity: 1, gem: "green" },
      { quantity: 1, gem: "black" },
      { quantity: 1, gem: "white" },
    ],
  },
  {
    points: 0,
    gem: "black",
    cost: [
      { quantity: 1, gem: "red" },
      { quantity: 1, gem: "green" },
      { quantity: 1, gem: "blue" },
      { quantity: 1, gem: "white" },
    ],
  },
  {
    points: 0,
    gem: "white",
    cost: [
      { quantity: 1, gem: "red" },
      { quantity: 1, gem: "green" },
      { quantity: 1, gem: "blue" },
      { quantity: 1, gem: "black" },
    ],
  },
  // 4 cycle - 1/2/2 1 pt
];

export default TierOneDeck;
