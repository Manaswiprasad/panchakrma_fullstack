import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin, Phone } from 'lucide-react';

// Fix for default marker icon in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function MapCenters() {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/centers');
        setCenters(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCenters();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-8 animate-fade-in flex flex-col" style={{ minHeight: 'calc(100vh - 200px)'}}>
      <div className="bg-white p-8 rounded-t-3xl shadow-xl z-10 relative">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-4 flex items-center justify-center gap-3">
          <MapPin size={32} /> Verified Panchakarma Centers in India
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          For critical symptoms, home remedies are often not enough. Visit verified experts for formal detox procedures like Vamana, Virechana, or Basti under clinical supervision.
        </p>
      </div>

      <div className="flex-grow shadow-2xl rounded-b-3xl overflow-hidden border border-gray-200 bg-gray-50 relative min-h-[500px]">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-ayurveda"></div>
          </div>
        ) : (
          <MapContainer center={[22.3511148, 78.6677428]} zoom={5} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {centers.map((center) => (
              <Marker key={center.id} position={[center.latitude, center.longitude]}>
                <Popup className="custom-popup">
                  <div className="p-2">
                    <h3 className="font-bold text-lg text-green-900 mb-1">{center.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{center.address}</p>
                    <p className="flex items-center gap-2 text-sm font-semibold text-ayurveda-dark">
                      <Phone size={14} /> {center.contactNumber}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
}
