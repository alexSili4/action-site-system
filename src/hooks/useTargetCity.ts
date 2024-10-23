import { useCitiesStore } from '@/store/store';
import useCityId from './useCityId';
import { selectCities } from '@/store/cities/selectors';
import { ICity } from '@/types/city.types';

const useTargetCity = (): ICity | undefined => {
  const cityId = useCityId();

  const cities = useCitiesStore(selectCities);
  const targetCity = cities.find(({ id }) => id === Number(cityId));

  return targetCity;
};

export default useTargetCity;
