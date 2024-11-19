import React from 'react'
import '../Styles/Footer.css'


export default function Footer() {
  return (
    <div>
        <link rel="stylesheet" to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>

<footer>
  <div className="footer-container">
    <div className="footer-column">
      <h3>About the store</h3>
      <ul>
        <li><a to="/">Home</a></li>
        <li><a to="/">Become a customer</a></li>
        <li><a to="/">About us</a></li>
        <li><a to="/">FAQ</a></li>
        <li><a to="/">Return policy</a></li>
        <li><a to="/">Contact us</a></li>
      </ul>
    </div>
    <div className="footer-column">
      <h3>Language</h3>
      <div className="languages">
        <a to="/" data-lang="de">Deutsch</a>
        <a to="/" data-lang="en" className="active">English</a>
        <a to="/" data-lang="es">Español</a>
        <a to="/" data-lang="fr">Français</a>
        <a to="/" data-lang="id">Indonesian</a>
        <a to="/" data-lang="it">Italian</a>
        <a to="/" data-lang="nl">Nederlands</a>
        <a to="/" data-lang="pl">Polnisch</a>
        <a to="/" data-lang="pt">Português</a>
        <a to="/" data-lang="ru">русский</a>
        <a to="/" data-lang="vi">Tiếng Việt</a>
        <a to="/" data-lang="tr">Türkçe</a>
      </div>
    </div>

    <div className="footer-column">
      <h3>Get in touch</h3>
      <div className="social-icons">
        <a to="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a to="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a to="/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <a to="/">Terms of purchase</a>
    <a to="/">Security and privacy</a>
    <a to="/">Newsletter</a>
  </div>
</footer>
      
    </div>
  )
}
