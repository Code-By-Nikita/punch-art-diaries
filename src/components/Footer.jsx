import React from 'react';
import { FaFacebook, FaInstagram, FaSnapchat, FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import "../style/footerStyle.css";

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="footer-container">
          {/* First Column - About the Store */}
          <div className="footer-column">
            <div className="heading-container">
              <h3>More About Punch Art Diaries</h3>
            </div>
            <p>At Punch Art Diaries, we specialize in handcrafted punch needle art products, including <strong> pouches, cushion covers, wall hangings, frames, hoops, and aprons</strong>. Each piece is lovingly crafted with attention to detail, bringing warmth and charm to your home.

What makes us unique?<b>Customization!</b> We create products tailored to your specific needs and style, ensuring every item is one-of-a-kind.

Add a personal touch to your space with our beautiful, handmade creations. 🌸✨</p>
          </div>

          {/* Second Column - Follow Us */}
          <div className="footer-column">
            <div className="heading-container">
              <h3>Follow Us</h3>
            </div>
            <div className="social-icons">
              <ul>
                <li><a href="https://facebook.com"><FaFacebook size={20} />Facebook</a></li>
                <li><a href="https://www.instagram.com/punch_art_diaries/"><FaInstagram size={20} />Instagram</a></li>
                <li><a href="https://snapchat.com"><FaSnapchat size={20} />Snapchat</a></li>
                <li><a href="https://www.linkedin.com/in/nikita-choudhary3194/"><FaLinkedin size={20} />LinkedIn</a></li>
                <li><a href="https://github.com/Code-By-Nikita"><FaGithub size={20} />GitHub</a></li>
              </ul>
            </div>
          </div>

          {/* Third Column - Contact Us */}
          <div className="footer-column">
            <div className="heading-container">
              <h3>Contact Us</h3>
            </div>
            <div className="contact-icons">
              <ul>
                <li><a href="mailto:contact@punchartdiaries.com"><FaEnvelope size={20} />Email : punchartdiaries@gmail.com</a></li>
                <li><a href="https://maps.google.com?q=Your+Store+Address"><FaMapMarkerAlt size={20} />Address : M-101, Veena Nagar, Indore</a></li>
                <li><a href="tel:+1234567890"><FaPhoneAlt size={20} />Phone : 9168515339</a></li>
                <li><a href="https://t.me/yourtelegram"><FaTelegramPlane size={20} />Telegram : Punch_Art_Diaries</a></li>
                <li><a href="https://wa.me/yourwhatsapp"><FaWhatsapp size={20} />WhatsApp : 9172392918</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        Copyright &copy; Code-By-Nikita | All rights reserved
      </div>
    </>
  );
};

export default Footer;
