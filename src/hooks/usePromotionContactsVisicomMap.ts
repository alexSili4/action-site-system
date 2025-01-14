import { theme } from '@/constants';
import useMediaQuery from './useMediaQuery';
import MarkerIcon from '@/icons/contacts-map/marker.svg?raw';
import { ClassNames } from '@/constants';
import L, { LatLngBoundsExpression, LatLngExpression } from 'leaflet';
import { IUsePromotionContactsVisicomMap } from '@/types/hooks.types';
import useTargetCity from './useTargetCity';
import { getTargetCityCenter } from '@/utils';

const usePromotionContactsVisicomMap = (): IUsePromotionContactsVisicomMap => {
  const targetCity = useTargetCity();
  const isDesktop = useMediaQuery(theme.breakpoints.desktop);
  const zoomControlPosition = isDesktop ? 'bottomleft' : 'bottomright';
  const tileLayerUrl = `https://tms{s}.visicom.ua/2.0.0/world,ua/base/{z}/{x}/{y}.png?key=${
    import.meta.env.VITE_VISICOM_API_KEY
  }`;
  const tileLayerAttribution =
    "<a href='https://sun.agency' target='_blank' rel='noopener noreferrer'>Зроблено Сонцем ●</a>";

  const targetCityCenter = getTargetCityCenter(targetCity?.coordinates);
  const defaultMapCenter: LatLngExpression = [50.4501, 30.5234];
  const mapCenter = targetCity?.coordinates
    ? targetCityCenter
    : defaultMapCenter;
  const ukraineBounds: LatLngBoundsExpression = [
    [44.38, 22.14],
    [52.38, 40.23],
  ];

  const customMarkerIcon = new L.DivIcon({
    html: MarkerIcon,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    className: ClassNames.markerWrap,
  });

  const customActiveMarkerIcon = new L.DivIcon({
    html: MarkerIcon,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    className: ClassNames.activeMarkerWrap,
  });

  return {
    mapCenter,
    ukraineBounds,
    tileLayerUrl,
    zoomControlPosition,
    tileLayerAttribution,
    customActiveMarkerIcon,
    customMarkerIcon,
  };
};

export default usePromotionContactsVisicomMap;
