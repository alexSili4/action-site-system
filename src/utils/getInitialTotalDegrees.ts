const getInitialTotalDegrees = (maxSpins: number): number => {
  const randomSpins = Math.floor(Math.random() * maxSpins) + maxSpins;
  const initialTotalDegrees = randomSpins * 360;

  return initialTotalDegrees;
};

export default getInitialTotalDegrees;
