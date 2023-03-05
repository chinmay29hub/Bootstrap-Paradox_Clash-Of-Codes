import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import image_1 from "../assests/1.jpeg"

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
          />
          <Marker position={[19.1156882, 72.8397201]} icon={markerIcon}>
            <Popup>
              <img src={ image_1 } alt='profile' />
              <p>Name : John Smith</p>
              <p>Traveling To : Rajasthan</p>
              <p>Interests : Photography, Explore new places</p>
              <p>Max Expense : 11000</p>
            </Popup>
          </Marker>
          <Marker position={[19.1296882, 72.8397201]} icon={markerIcon}>
            <Popup>
              <img src={ image_1 } alt='profile' />
              <p>Name : John Smith</p>
              <p>Traveling To : Rajasthan</p>
              <p>Interests : Photography, Explore new places</p>
              <p>Max Expense : 11000</p>
            </Popup>
          </Marker>
          <Marker position={[19.2296882, 72.9397201]} icon={markerIcon}>
            <Popup>
              <img src={ image_1 } alt='profile' />
              <p>Name : John Smith</p>
              <p>Traveling To : Rajasthan</p>
              <p>Interests : Photography, Explore new places</p>
              <p>Max Expense : 11000</p>
            </Popup>
          </Marker>
          <Marker position={[19.1296882, 72.9497201]} icon={markerIcon}>
            <Popup>
              <img src={ image_1 } alt='profile' />
              <p>Name : John Smith</p>
              <p>Traveling To : Rajasthan</p>
              <p>Interests : Photography, Explore new places</p>
              <p>Max Expense : 11000</p>
            </Popup>
          </Marker>
          <Marker position={[19.1135882, 72.9399201]} icon={markerIcon}>
            <Popup>
              <img src={ image_1 } alt='profile' />
              <p>Name : John Smith</p>
              <p>Traveling To : Rajasthan</p>
              <p>Interests : Photography, Explore new places</p>
              <p>Max Expense : 11000</p>
            </Popup>
          </Marker>
        </MapContainer>
  </div>
);

}