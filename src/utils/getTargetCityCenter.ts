import { generalSettings } from '@/constants';
import { LatLngExpression } from 'leaflet';

const getTargetCityCenter = (data?: string): LatLngExpression => {
  const cityCoordinates = data ?? generalSettings.coordinatesSeparator;
  const coordinates = cityCoordinates.split(
    generalSettings.coordinatesSeparator
  );
  const result: LatLngExpression = [
    Number(coordinates[0]),
    Number(coordinates[1]),
  ];

  console.log(result);
  return result;
};

export default getTargetCityCenter;
