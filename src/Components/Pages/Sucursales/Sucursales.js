import React from 'react';
import Title from '../../Title/Title';
import photo from '../../../assets/granos-de-cafe-1.jpg'
import ImagenSlider from '../../ImagenSlider/ImagenSlider';
import { SliderData } from '../../ImagenSlider/SliderData';
import s from "../About/About.module.css";



const Sucursales = () => {
  return <div>
    <Title imageUrl={photo} titleText='Sucursales'/>
    <ImagenSlider slides={ SliderData}></ImagenSlider>
    <div className={s.container}>
      <div className={s.aboutus}>
        <section className={s.first_section}>
          <h1>
            Lugares:
          </h1>
        </section>
        <ul>
          <li>CABA  </li>
                <ul>Obeliso - calle : le noris    4394</ul>
                <ul>Floresta - calle: Hector ludeña 023</ul>
                <ul>Caballito - calle los nogales 5438</ul>
          <li>Buenos Aires</li>
                <ul>Mar Del Plata - Calle : le noris    4394</ul>
                <ul>Lomas de Zamora - calle: Hector ludeña 023</ul>
                <ul>Lanus - calle los nogales 5438</ul> 

          <li>Interior Del Pais</li>
                <ul>Santa fe Capital- calle :  provincinini   4523</ul> 
          <li>Proximamente</li>
                <ul>Sucursal Plaza de Mayo</ul> 
                <ul>Sucursal Bahia blanca</ul> 
        </ul>
      </div>
    </div>
   

  </div>;
};

export default Sucursales;
