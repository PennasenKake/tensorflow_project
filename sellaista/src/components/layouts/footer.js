import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="logo1-container">
        <Link to="/">
          <img className="logo1" src="th.jpg" alt="Logo" />
        </Link>
      </div>
      <div className="links-container">
        <li><a href="/contact">Ota yhteyttä</a></li>
        <li><a href="/kayttoehdot">Käyttöehdot</a></li>
      </div>
      <div className="footer-content">
        <p>© 2025 TensonFlow Palvelin. Kaikki oikeudet pidätetään.</p>

      </div>
    </footer>
  );
}

export { Footer };
