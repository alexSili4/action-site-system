import { generalSettings } from '@/constants';
import { LatLngExpression } from 'leaflet';

const getTargetCityCenter = (data: string): LatLngExpression => {
  const coordinates = data.split(generalSettings.coordinatesSeparator);

  return [Number(coordinates[0]), Number(coordinates[1])];
};

export default getTargetCityCenter;
