import rotationValues from "./rotationValues";

const level3 = [
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
  [
    { pos: 1, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 11, status: false, rotation: rotationValues[1]  },
    { pos: 11, status: false, rotation: rotationValues[1]  },
    { pos: 22, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1]  },
  ],
  [
    { pos: 1, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 11, status: false, rotation: rotationValues[1]  },
    { pos: 11, status: false, rotation: rotationValues[1]  },
    { pos: 22, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1]  },
  ],
  [
    { pos: 1, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1] },
    { pos: 11, status: false, rotation: rotationValues[1]  },
    { pos: 11, status: false, rotation: rotationValues[1]  },
    { pos: 22, status: false, rotation: rotationValues[Math.floor(Math.random() * 3) + 1]  },
  ],
  [
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
    { pos: 0, status: true, rotation: 0 },
  ],
];

export default level3;
