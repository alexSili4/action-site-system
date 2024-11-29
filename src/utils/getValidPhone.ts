const getValidPhone = (phone: string): string => {
  const phoneSymbols = phone.split('');

  const filteredPhoneSymbols = phoneSymbols.filter((item, index) => {
    const isFirstSymbol = index === 0;
    const isPlus = item === '+';
    const isFirstPlus = isFirstSymbol && isPlus;

    const isNumber = !Number.isNaN(Number(item));

    return isFirstPlus || isNumber;
  });

  const validPhone = filteredPhoneSymbols.join('');

  return validPhone;
};

export default getValidPhone;
