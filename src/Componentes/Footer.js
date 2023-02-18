import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";


const Footer = () => (
  <div className="Footer">
    <section className="terminos">
      <ul>
        <li>
          <a href="">Política y Privacidad</a>
        </li>
        <li>
          <a href="">Terminos y Condiciones</a>
        </li>
        <li class="copy">Copyright © 2023 derechos reservados a CF</li>
      </ul>
    </section>
    <section className="contacto"> 
    <b> <a>Contáctanos!</a>  </b>
    <FaEnvelope className="Iconos_navbar_mssg" />
    </section>
  </div>
);

export default Footer;
