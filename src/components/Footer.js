import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="developer">
        <a href="https://www.instagram.com/dongjune_k10/">
          <i class="fab fa-instagram-square"></i>
        </a>
        <a href="https://github.com/Donggoolosori/newtab_todo_react">
          <i class="fab fa-github-square"></i>
        </a>
        <a href="https://www.facebook.com/dongjune.k10/">
          <i class="fab fa-facebook-square"></i>
        </a>
      </div>
      <div className="copyRight">&copy; dongjune</div>
    </div>
  );
};

export default Footer;
