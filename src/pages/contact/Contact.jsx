import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Contact.css'

function Contact() {
  const position = [40.4200, -3.7068]

  return (
    <main className="contact">
      <h1>Contact Us</h1>

      <section className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <section className="contact-info">
        <div className="info-cards">
          <div className="info-card">
            <a href="https://maps.google.com/?q=28+Gran+Vía,Madrid,Spain" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaMapMarkerAlt className="icon" />
            </a>
            <h3>Our Location</h3>
            <p>28 Gran Vía<br />Madrid, Spain</p>
          </div>

          <div className="info-card">
            <a href="mailto:contact@yourcompany.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <MdEmail className="icon" />
            </a>
            <h3>Email Us</h3>
            <p>contact@yourcompany.com</p>
          </div>

          <div className="info-card">
            <a href="https://wa.me/34600123456" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaWhatsapp className="icon" />
            </a>
            <h3>Call Us</h3>
            <p>+34 600 123 456</p>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <h2>Find Us Here</h2>
        <MapContainer 
          center={position} 
          zoom={15} 
          scrollWheelZoom={false}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <strong>TravelWeb Office</strong><br />
              28 Gran Vía<br />
              Madrid, Spain
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </main>
  )
}

export default Contact