import { FC, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const PromotionContactsMap: FC = () => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
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

  return (
    <MapContainer center={[50.4501, 30.5234]} zoom={10}>
      <a href='http://'></a>
      <TileLayer
        url={tileLayerUrl}
        attribution={tileLayerAttribution}
        maxZoom={18}
        subdomains='123'
        tms
      />
      {markers.map((marker) => {
        const position: LatLngExpression = {
          lat: marker.position[0],
          lng: marker.position[1],
        };

        const onMarkerClick = () => {
          setActiveMarker(marker.id);
        };

        return (
          <Marker
            key={marker.id}
            position={position}
            eventHandlers={{
              click: onMarkerClick,
            }}
          ></Marker>
        );
      })}
    </MapContainer>
  );
};

export default PromotionContactsMap;
