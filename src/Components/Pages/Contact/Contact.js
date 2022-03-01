import React from 'react';
import s from "../About/About.module.css";
import l from "./Contact.module.css"
import { FaFacebook,FaInstagram,FaTwitterSquare } from "react-icons/fa";


const Contact = () => {
  return <div>
        <div className={s.container}>
      <div className={s.aboutus}>
        <section className={s.first_section}>
        Dejanos tus comentarios o sugerencias para mejorar la experiencia en nuestros locales!<br></br>
        También podés llamarnos sin cargo al 0800-999-3000 o escribirnos un mail a sugerencias@devffee.com.ar
        </section>
        <div className={l.container}>
           <p>Motivo de contacto</p> 
           <input></input>
           <p>Mensaje</p> 
           <input></input>
           <p>Nombre y apellido</p> 
           <input></input>
           <p>Telefono</p> 
           <input></input>
           <p>Email</p> 
           <input></input>
        </div>
        <h1>Redes</h1> 
        <FaFacebook>
        </FaFacebook>
        <FaInstagram></FaInstagram>
        <FaTwitterSquare></FaTwitterSquare>
      </div>
    </div>

  </div>;
};

export default Contact;
