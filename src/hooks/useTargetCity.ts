import { Shops } from '@/types/shop.types';
import useCityId from './useCityId';
import { ICity } from '@/types/city.types';

const useTargetCity = (shops: Shops): ICity | undefined => {
  const cityId = useCityId();

  const targetShop = shops.find(({ city: { id } }) => id === Number(cityId));

  return targetShop?.city ?? shops[0].city;
};

export default useTargetCity;
