const TierOneDeck = [
  // 1st cycle - efficient
  { id: 1, points: 0, gem: "red", cost: [{ quantity: 3, gem: "blue" }] },
  { id: 2, points: 0, gem: "blue", cost: [{ quantity: 3, gem: "green" }] },
  { id: 3, points: 0, gem: "green", cost: [{ quantity: 3, gem: "black" }] },
  { id: 4, points: 0, gem: "black", cost: [{ quantity: 3, gem: "white" }] },
  { id: 5, points: 0, gem: "white", cost: [{ quantity: 3, gem: "red" }] },
  // 2nd cycle - efficient 1 pt
  { id: 6, points: 1, gem: "red", cost: [{ quantity: 4, gem: "white" }] },
  { id: 7, points: 1, gem: "blue", cost: [{ quantity: 4, gem: "red" }] },
  { id: 8, points: 1, gem: "green", cost: [{ quantity: 4, gem: "blue" }] },
  { id: 9, points: 1, gem: "black", cost: [{ quantity: 4, gem: "green" }] },
  { id: 10, points: 1, gem: "white", cost: [{ quantity: 4, gem: "black" }] },
  // 3rd cycle - one of each
  {
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    points: 0,
    gem: "white",
    cost: [
      { quantity: 1, gem: "red" },
      { quantity: 1, gem: "green" },
      { quantity: 1, gem: "blue" },
      { quantity: 1, gem: "black" },
    ],
  },
  // 4th cycle - 1/2/2 1 pt
  {
    id: 16,
    points: 0,
    gem: "red",
    cost: [
      { quantity: 2, gem: "green" },
      { quantity: 2, gem: "blue" },
      { quantity: 1, gem: "black" },
    ],
  },
  {
    id: 17,
    points: 0,
    gem: "green",
    cost: [
      { quantity: 2, gem: "blue" },
      { quantity: 2, gem: "black" },
      { quantity: 1, gem: "white" },
    ],
  },
  {
    id: 18,
    points: 0,
    gem: "blue",
    cost: [
      { quantity: 1, gem: "red" },
      { quantity: 2, gem: "green" },
      { quantity: 2, gem: "white" },
    ],
  },
  {
    id: 19,
    points: 0,
    gem: "black",
    cost: [
      { quantity: 2, gem: "red" },
      { quantity: 1, gem: "blue" },
      { quantity: 2, gem: "white" },
    ],
  },
  {
    id: 20,
    points: 0,
    gem: "white",
    cost: [
      { quantity: 2, gem: "red" },
      { quantity: 1, gem: "green" },
      { quantity: 2, gem: "black" },
    ],
  },
];

export default TierOneDeck;
