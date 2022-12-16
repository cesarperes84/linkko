import rotationValues from "./rotationValues";

const level2 = [
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 4, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 9, status: false, rotation: rotationValues[1] },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 9, status: false, rotation: rotationValues[1] },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 9, status: false, rotation: rotationValues[1] },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 23, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1]  },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
];

export default level2;
