const getShouldShowPrizesWheel = (actionType: number): boolean => {
  const shouldShowPrizesWheel = actionType === 1 || actionType === 3;

  return shouldShowPrizesWheel;
};

export default getShouldShowPrizesWheel;
