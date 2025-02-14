import { bigCities } from '@/constants';

const getIsBitCity = (city: string) => {
  const isBigCity = bigCities.some(
    (bigCity) => bigCity.toLocaleLowerCase() === city.toLocaleLowerCase()
  );

  return isBigCity;
};

export default getIsBitCity;
