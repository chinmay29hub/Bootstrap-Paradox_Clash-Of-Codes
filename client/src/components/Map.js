import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map () {
    const markerIcon = new L.Icon({
        iconUrl: require('./location.png'),
        iconRetinaUrl: require('./location.png'),
        iconAnchor: [25, 41],
        // popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(40, 50),
        className: 'leaflet-div-icon'
    });
    
      return (
  <div id="map">
  <MapContainer style={{ position : "relative", height : "100vh", width : "100%", outline : "none" }} center={[19.1156882, 72.8397201]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
          />
          <Marker position={[19.1156882, 72.8397201]} icon={markerIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
  </div>
);

}