const posCenterX = (position = "absolute") => {
  return `
    position: ${position};
    left: 50%;
    transform: translateX(-50%);
  `;
};

const posCenterY = (position = "absolute") => {
  return `
    position: ${position};
    top: 50%;
    transform: translateY(-50%);
  `;
};

const posCenter = (position = "absolute") => {
  return `
    position: ${position};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
};

export const position = {
  posCenterX,
  posCenterY,
  posCenter,
};
