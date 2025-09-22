const TierTwoDeck = [
  // 1st cycle - efficient 2pt
  { points: 2, gem: "red", cost: [{ quantity: 5, gem: "red" }] },
  { points: 2, gem: "blue", cost: [{ quantity: 5, gem: "blue" }] },
  { points: 2, gem: "green", cost: [{ quantity: 5, gem: "green" }] },
  { points: 2, gem: "black", cost: [{ quantity: 5, gem: "black" }] },
  { points: 2, gem: "white", cost: [{ quantity: 5, gem: "white" }] },
  // 2nd cycle - efficient 3pt
  { points: 3, gem: "red", cost: [{ quantity: 6, gem: "red" }] },
  { points: 3, gem: "blue", cost: [{ quantity: 6, gem: "blue" }] },
  { points: 3, gem: "green", cost: [{ quantity: 6, gem: "green" }] },
  { points: 3, gem: "black", cost: [{ quantity: 6, gem: "black" }] },
  { points: 3, gem: "white", cost: [{ quantity: 6, gem: "white" }] },
  // 3rd cycle - 2pt/5/3
  {
    points: 2,
    gem: "red",
    cost: [
      { quantity: 5, gem: "green" },
      { quantity: 3, gem: "white" },
    ],
  },
  {
    points: 2,
    gem: "green",
    cost: [
      { quantity: 3, gem: "red" },
      { quantity: 5, gem: "white" },
    ],
  },
  {
    points: 2,
    gem: "blue",
    cost: [
      { quantity: 5, gem: "red" },
      { quantity: 3, gem: "black" },
    ],
  },
  {
    points: 2,
    gem: "black",
    cost: [
      { quantity: 3, gem: "green" },
      { quantity: 5, gem: "blue" },
    ],
  },
  {
    points: 2,
    gem: "white",
    cost: [
      { quantity: 3, gem: "blue" },
      { quantity: 5, gem: "black" },
    ],
  },
  // 4 cycle - 1pt/3/2/2
  {
    points: 1,
    gem: "red",
    cost: [
      { quantity: 3, gem: "green" },
      { quantity: 2, gem: "blue" },
      { quantity: 2, gem: "white" },
    ],
  },
  {
    points: 1,
    gem: "green",
    cost: [
      { quantity: 2, gem: "red" },
      { quantity: 2, gem: "black" },
      { quantity: 3, gem: "white" },
    ],
  },
  {
    points: 1,
    gem: "blue",
    cost: [
      { quantity: 2, gem: "red" },
      { quantity: 2, gem: "green" },
      { quantity: 3, gem: "black" },
    ],
  },
  {
    points: 1,
    gem: "black",
    cost: [
      { quantity: 2, gem: "green" },
      { quantity: 3, gem: "blue" },
      { quantity: 2, gem: "white" },
    ],
  },
  {
    points: 1,
    gem: "white",
    cost: [
      { quantity: 3, gem: "red" },
      { quantity: 2, gem: "blue" },
      { quantity: 2, gem: "black" },
    ],
  },
  // 5th cycle - 1pt/3/3/2
  {
    points: 1,
    gem: "red",
    cost: [
      { quantity: 3, gem: "green" },
      { quantity: 3, gem: "blue" },
      { quantity: 2, gem: "black" },
    ],
  },
  {
    points: 1,
    gem: "green",
    cost: [
      { quantity: 3, gem: "blue" },
      { quantity: 2, gem: "black" },
      { quantity: 3, gem: "white" },
    ],
  },
  {
    points: 1,
    gem: "blue",
    cost: [
      { quantity: 2, gem: "red" },
      { quantity: 3, gem: "green" },
      { quantity: 3, gem: "white" },
    ],
  },
  {
    points: 1,
    gem: "black",
    cost: [
      { quantity: 3, gem: "red" },
      { quantity: 2, gem: "blue" },
      { quantity: 3, gem: "white" },
    ],
  },
  {
    points: 1,
    gem: "white",
    cost: [
      { quantity: 3, gem: "red" },
      { quantity: 2, gem: "green" },
      { quantity: 3, gem: "black" },
    ],
  },
];

export default TierTwoDeck;
