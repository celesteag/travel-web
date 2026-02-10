import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Contact.css'

function Contact() {
  return (
    <main className="contact">
      <h1>Contact Us</h1>

      <section className="contact-container">
        <div className="contact-map">
          <MapContainer
            center={[48.8566, 2.3522]}
            zoom={5}
            style={{ height: '300px', width: '100%' }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[48.8566, 2.3522]}>
              <Popup>Our main office</Popup>
            </Marker>
          </MapContainer>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  )
}

export default Contact
