import { generalSettings } from '@/constants';
import { StringOrNull } from '@/types/types';
import { LatLngExpression } from 'leaflet';

const getTargetCityCenter = (data?: StringOrNull): LatLngExpression => {
  const cityCoordinates = data ?? generalSettings.coordinatesSeparator;
  const coordinates = cityCoordinates.split(
    generalSettings.coordinatesSeparator
  );
  const result: LatLngExpression = [
    Number(coordinates[0]),
    Number(coordinates[1]),
  ];

  return result;
};

export default getTargetCityCenter;
