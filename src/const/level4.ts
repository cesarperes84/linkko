import rotationValues from "./rotationValues";

const level4 = [
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
  [
    { pos: 1, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 11, status: false, rotation: rotationValues[1] },
    { pos: 11, status: false, rotation: rotationValues[1] },
    { pos: 14, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
  ],
  [
    { pos: 1, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 11, status: false, rotation: rotationValues[1] },
    { pos: 11, status: false, rotation: rotationValues[1] },
    { pos: 13, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
];

export default level4;
