import React from "react";
import Map from "components/map";
import Bases from "components/Bases";
import Vote from "components/Vote";
import Header from "components/Header";
import Footer from "components/Footer";
import "./styles.css";
import dotenv from "dotenv";
dotenv.config();

const Home: React.FC = () => {
  function openForm() {
    window.open("/voluntarios", "_blank");
  }
  return (
    <div>
      <Header />

      <div className="container mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing, elit varius erat
          justo cras, urna nostra convallis consequat molestie. In vitae cum
          quam taciti at ac cursus donec aliquet, tincidunt auctor et non
          nascetur facilisis condimentum tortor phasellus, scelerisque mollis
          penatibus id turpis metus dis pretium.
        </p>
        <hr />

        <Vote />
        <hr />
        <Bases />
        <hr />
        <Map />
        <hr />
        <div className="mt-5">
          <h4 className="title">INSCRIPCIÓN DE VOLUNTARIOS</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing, elit varius erat
            justo cras, urna nostra convallis consequat molestie. In vitae cum
            quam taciti at ac cursus donec aliquet, tincidunt auctor et non
            nascetur facilisis condimentum tortor phasellus, scelerisque mollis
            penatibus id turpis metus dis pretium.
          </p>
          <div>
          <button className="btn btn-danger btn-lg" onClick={openForm}>
            Inscripción de voluntarios
          </button></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
