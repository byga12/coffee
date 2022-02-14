import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import s from "./LeafletMap.module.css";

const LeafletMap = ({ center }) => {
  return (
    <MapContainer center={center} zoom={12} className={s.map_container}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};
export default LeafletMap;
