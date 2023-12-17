import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const BookingMap = () => {
     return (
          <div className='map'>
               <MapContainer
                    center={[4.8472226, 6.974604]}
                    zoom={13}
                    scrollWheelZoom={false}
                    className='map'
               >
                    <TileLayer
                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker position={[51.505, -0.09]}>
                         <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable.
                         </Popup>
                    </Marker>
               </MapContainer>
          </div>
     );
};

export default BookingMap;
