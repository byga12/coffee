import React from "react";
import Title from "../../Title/Title";
import photo from "../../../assets/granos-de-cafe-1.jpg";
import ImagenSlider from "../../ImagenSlider/ImagenSlider";
import { SliderData } from "../../ImagenSlider/SliderData";
import s from "../About/About.module.css";
import { FaStore } from "react-icons/fa";

const Sucursales = () => {
  return (
    <div>
      <Title imageUrl={photo} titleText="Sucursales" />
      <div style={{ marginTop: "4rem" }}>
        <ImagenSlider slides={SliderData}></ImagenSlider>
      </div>
      <div className={s.container}>
        <div className={s.aboutus}>
          <section className={s.first_section}>
            <h1>Lugares:</h1>
          </section>
          <ul>
            <li>CABA </li>
            <ul>
              <FaStore /> Obeliso - calle : le noris 4394
            </ul>
            <ul>
              <FaStore /> Floresta - calle: Hector ludeña 023
            </ul>
            <ul>
              <FaStore /> Caballito - calle los nogales 5438
            </ul>
            <li>Buenos Aires</li>
            <ul>
              <FaStore /> Mar Del Plata - Calle : le noris 4394
            </ul>
            <ul>
              <FaStore /> Lomas de Zamora - calle: Hector ludeña 023
            </ul>
            <ul>
              <FaStore /> Lanus - calle los nogales 5438
            </ul>

            <li>Interior Del Pais</li>
            <ul>
              <FaStore /> Santa fe Capital- calle : provincinini 4523
            </ul>
            <li>Proximamente</li>
            <ul>
              <FaStore /> Sucursal Plaza de Mayo
            </ul>
            <ul>
              <FaStore /> Sucursal Bahia blanca
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sucursales;
