import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>TravelWeb</h4>
          <p>Discover the world with us.</p>
        </div>

        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow us</h4>
          <div className="footer-social">
            <span>🌍</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2023 TravelWeb. All rights reserved. Privacy Policy | Cookies | Terms
      </div>
    </footer>
  )
}

export default Footer
