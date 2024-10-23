import { FC } from 'react';
import { TileLayer, ZoomControl, Marker } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IProps } from './PromotionContactsVisicomMap.types';
import { StyledMapContainer } from './PromotionContactsVisicomMap.styled';
import PromotionContactsVisicomMapController from '@PromotionDetailsPageComponents/PromotionContactsVisicomMapController';
import { usePromotionContactsVisicomMap } from '@/hooks';

const PromotionContactsVisicomMap: FC<IProps> = ({
  activeShopNum,
  shops,
  setActiveShop,
}) => {
  const {
    mapCenter,
    ukraineBounds,
    tileLayerUrl,
    zoomControlPosition,
    tileLayerAttribution,
    customActiveMarkerIcon,
    customMarkerIcon,
  } = usePromotionContactsVisicomMap();

  return (
    <StyledMapContainer
      center={mapCenter}
      zoom={12}
      minZoom={5}
      zoomControl={false}
      maxBounds={ukraineBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url={tileLayerUrl}
        attribution={tileLayerAttribution}
        subdomains='123'
        tms
      />
      <ZoomControl position={zoomControlPosition} />
      <PromotionContactsVisicomMapController
        activeShopNum={activeShopNum}
        shops={shops}
      />
      {shops.map(
        ({ shop_num: shopNum, geo_lat: geoLat, geo_long: geoLong }) => {
          const isActiveShop = activeShopNum === shopNum;
          const icon = isActiveShop ? customActiveMarkerIcon : customMarkerIcon;
          const markerPosition: LatLngExpression = {
            lat: Number(geoLat),
            lng: Number(geoLong),
          };

          const onMarkerClick = () => {
            setActiveShop(shopNum);
          };

          const eventHandlers = {
            click: onMarkerClick,
          };

          return (
            <Marker
              icon={icon}
              key={shopNum}
              position={markerPosition}
              eventHandlers={eventHandlers}
            ></Marker>
          );
        }
      )}
    </StyledMapContainer>
  );
};

export default PromotionContactsVisicomMap;
