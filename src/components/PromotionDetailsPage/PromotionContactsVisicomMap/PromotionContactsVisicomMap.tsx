import { FC } from 'react';
import { TileLayer, ZoomControl, Marker } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IProps } from './PromotionContactsVisicomMap.types';
import { StyledMapContainer } from './PromotionContactsVisicomMap.styled';
import PromotionContactsVisicomMapController from '@PromotionDetailsPageComponents/PromotionContactsVisicomMapController';
import { usePromotionContactsVisicomMap } from '@/hooks';

const PromotionContactsVisicomMap: FC<IProps> = ({
  activeMarkerId,
  markers,
  setActiveMarker,
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
      zoom={10}
      minZoom={5}
      zoomControl={false}
      maxBounds={ukraineBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url={tileLayerUrl}
        attribution={tileLayerAttribution}
        maxZoom={18}
        subdomains='123'
        tms
      />
      <ZoomControl position={zoomControlPosition} />
      <PromotionContactsVisicomMapController
        activeMarkerId={activeMarkerId}
        markers={markers}
      />
      {markers.map(({ position, id }) => {
        const isActiveMarker = activeMarkerId === id;
        const icon = isActiveMarker ? customActiveMarkerIcon : customMarkerIcon;
        const markerPosition: LatLngExpression = {
          lat: position[0],
          lng: position[1],
        };

        const onMarkerClick = () => {
          setActiveMarker(id);
        };

        const eventHandlers = {
          click: onMarkerClick,
        };

        return (
          <Marker
            icon={icon}
            key={id}
            position={markerPosition}
            eventHandlers={eventHandlers}
          ></Marker>
        );
      })}
    </StyledMapContainer>
  );
};

export default PromotionContactsVisicomMap;
