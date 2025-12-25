import { GetTargetLocation, IGetLocationInfo } from '@/types/city.types';

const getTargetLocation = ({
  cities,
  cityId,
}: IGetLocationInfo): GetTargetLocation =>
  Array.isArray(cities) ? cities.find(({ id }) => id === cityId) : undefined;

export default getTargetLocation;
