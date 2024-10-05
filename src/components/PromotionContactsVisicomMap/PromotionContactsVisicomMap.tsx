import { FC } from 'react';
import { TileLayer, Marker, ZoomControl } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IProps } from './PromotionContactsVisicomMap.types';
import { StyledMapContainer } from './PromotionContactsVisicomMap.styled';
import MarkerIcon from '@/icons/contacts-map/marker.svg?raw';
import { ClassNames } from '@/constants';

const PromotionContactsVisicomMap: FC<IProps> = ({ setActiveMarker }) => {
  // TODO fix component and constants
  const tileLayerUrl = `https://tms{s}.visicom.ua/2.0.0/planet3/base/{z}/{x}/{y}.png?key=${
    import.meta.env.VITE_VISICOM_API_KEY
  }`;
  const tileLayerAttribution =
    "<a href='https://sun.agency' target='_blank' rel='noopener noreferrer'>Зроблено Сонцем ●</a>";

  const markers = [
    { id: 1, position: [50.4501, 30.5234], popupText: 'Киев' },
    { id: 2, position: [49.8383, 24.0232], popupText: 'Львов' },
    { id: 3, position: [48.9226, 24.7103], popupText: 'Ивано-Франковск' },
  ];

  const customMarkerIcon = new L.DivIcon({
    html: MarkerIcon,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    className: ClassNames.markerWrap,
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
      {markers.map(({ position, id }) => {
        const markerPosition: LatLngExpression = {
          lat: position[0],
          lng: position[1],
        };

        const onMarkerClick = () => {
          setActiveMarker(id);
        };

        return (
          <Marker
            icon={customMarkerIcon}
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
