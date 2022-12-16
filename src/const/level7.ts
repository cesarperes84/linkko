import rotationValues from "./rotationValues";

const level6 = [
  [
    { pos: 4, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
  [
    { pos: 15, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 12, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 11, status: false, rotation: rotationValues[1] },
    { pos: 14, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 9, status: false, rotation: rotationValues[1] },
    { pos: 0, status: true, rotation: 0 },
    { pos: 9, status: false, rotation: rotationValues[1] },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 9, status: false, rotation: rotationValues[1] },
    { pos: 0, status: true, rotation: 0 },
    { pos: 9, status: false, rotation: rotationValues[1] },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 23, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 0, status: true, rotation: 0 },
    { pos: 23, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
  ],
];

export default level6;
