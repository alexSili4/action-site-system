import { FC } from 'react';
import { TileLayer, ZoomControl, Marker } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IProps } from './PromotionContactsVisicomMap.types';
import { StyledMapContainer } from './PromotionContactsVisicomMap.styled';
import MarkerIcon from '@/icons/contacts-map/marker.svg?raw';
import { ClassNames } from '@/constants';
import PromotionContactsVisicomMapController from '@/components/PromotionContactsVisicomMapController';

const PromotionContactsVisicomMap: FC<IProps> = ({
  setActiveMarker,
  activeMarkerId,
  markers,
}) => {
  // TODO fix component and constants
  const tileLayerUrl = `https://tms{s}.visicom.ua/2.0.0/planet3/base/{z}/{x}/{y}.png?key=${
    import.meta.env.VITE_VISICOM_API_KEY
  }`;
  const tileLayerAttribution =
    "<a href='https://sun.agency' target='_blank' rel='noopener noreferrer'>Зроблено Сонцем ●</a>";

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

  return (
    <StyledMapContainer
      center={[50.4501, 30.5234]}
      zoom={10}
      zoomControl={false}
    >
      <TileLayer
        url={tileLayerUrl}
        attribution={tileLayerAttribution}
        maxZoom={18}
        subdomains='123'
        tms
      />
      <ZoomControl position='bottomright' />
      <PromotionContactsVisicomMapController
        activeMarkerId={activeMarkerId}
        markers={markers}
      />
      {markers.map(({ position, id }) => {
        const isActiveMarker = activeMarkerId === id;
        const markerPosition: LatLngExpression = {
          lat: position[0],
          lng: position[1],
        };

        const onMarkerClick = () => {
          setActiveMarker(id);
        };

        return (
          <Marker
            icon={isActiveMarker ? customActiveMarkerIcon : customMarkerIcon}
            key={id}
            position={markerPosition}
            eventHandlers={{
              click: onMarkerClick,
            }}
          ></Marker>
        );
      })}
    </StyledMapContainer>
  );
};

export default PromotionContactsVisicomMap;
