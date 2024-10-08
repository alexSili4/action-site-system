import { GetTargetLocation, IGetLocationInfo } from '@/types/city.types';

const getTargetLocation = ({
  cities,
  cityId,
}: IGetLocationInfo): GetTargetLocation =>
  cities.find(({ id }) => id === cityId);

export default getTargetLocation;
