const getFormattedCode = (code: string): string => {
  const formattedCode = code
    .split('')
    .map((item, index) => {
      const isLastSymbolOfPart = index && index % 4 === 0;

      return isLastSymbolOfPart ? `-${item}` : item;
    })
    .join('');

  return formattedCode;
};

export default getFormattedCode;
