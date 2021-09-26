import React from 'react';
import './Footer.css';
import payment from '../../resource/images/payment_method.png'

const Footer = () => {
    return (
        <div className="footer-container">
           <div className="footer-body">
          <div className="footer-info">
               <a href="">About Us</a>
               <a href="">Contact Info</a>
               <a href="">Terms &#38; Conditions</a>
               <a href="">Privacy Policy</a>
           </div>
          <div className="info-container">
           <div className="footer-address">
               <p><i class="fas fa-phone-alt"></i> Call-us : +880 174 0000 999</p>
               <p><i class="fas fa-envelope"></i> Email : supportbike @ bike.com</p>
               <p><i class="fas fa-map-marker-alt"></i> Address : dhaka-1216,Bangladesh</p>
           </div>
           <div className="payment-img">
               <img src={payment} alt="" />
           </div>
           </div>
           </div>
           <div className="following-area">
               <h3>Follow Us</h3>
               <div className="social-icon">
                   <a href=""><i class="fab fa-facebook-f"></i></a>
                   <a href=""><i class="fab fa-twitter"></i></a>
                   <a href=""><i class="fab fa-instagram"></i></a>
                   <a href=""><i class="fab fa-youtube"></i></a>
                   <a href=""><i class="fab fa-pinterest-p"></i></a>
               </div>
           </div>
           <marquee>Copyright © 2021 simplysamiul-bike.com</marquee>
        </div>
    );
};

export default Footer;