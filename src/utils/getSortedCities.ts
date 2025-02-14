import { Cities } from '@/types/city.types';
import getIsBitCity from './getIsBitCity';

const getSortedCities = (cities: Cities): Cities => {
  const sortedCities = [...cities].sort(
    ({ name: prevCityName }, { name: nextCityName }) => {
      const isPrevBigCity = getIsBitCity(prevCityName);
      const isNextBigCity = getIsBitCity(nextCityName);

      return Number(isNextBigCity) - Number(isPrevBigCity);
    }
  );

  return sortedCities;
};

export default getSortedCities;
