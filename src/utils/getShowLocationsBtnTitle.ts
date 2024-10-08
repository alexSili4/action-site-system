import { Messages } from '@/constants';
import getTargetLocation from './getTargetLocation';
import {
  IGetLocationInfo,
  IGetShowLocationsBtnTitle,
} from '@/types/city.types';

const getShowLocationsBtnTitle = ({
  cities,
  cityId,
}: IGetLocationInfo): IGetShowLocationsBtnTitle => {
  const targetLocation = getTargetLocation({
    cities,
    cityId,
  });

  const showLocationsBtnTitle = targetLocation?.name ?? Messages.selectedCity;
  const isSelectedCity = Boolean(targetLocation);

  return { showLocationsBtnTitle, isSelectedCity };
};

export default getShowLocationsBtnTitle;
