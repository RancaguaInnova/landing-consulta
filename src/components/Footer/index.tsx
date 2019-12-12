import React from "react"
import "./styles.css"
import { FaWhatsapp } from 'react-icons/fa';
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <h6 className="text-center" style={{ marginBottom: 0, paddingTop: "0.8rem" }}>
        Mas información al <span ><a href="https://wa.me/56977595314" className="linkWhite"><FaWhatsapp size={24} ></FaWhatsapp> +569 77595314</a></span>
      </h6>
    </div>
  )
}

export default Footer
