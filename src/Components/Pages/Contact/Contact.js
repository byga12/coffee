import React from "react";
import s from "../About/About.module.css";
import l from "./Contact.module.css"
import { FaFacebook,FaInstagram,FaTwitterSquare } from "react-icons/fa";
import photo from '../../../assets/granos-de-cafe-1.jpg'
import Title from '../../Title/Title';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';



const Contact = () => {
  return( <div>
    <Title imageUrl={photo} titleText='Franquicias'/>
        <div className={s.container}>
      <div className={s.aboutus}>
        <section className={s.first_section}>
        Dejanos tus comentarios o sugerencias para mejorar la experiencia en nuestros locales!<br></br>
        También podés llamarnos sin cargo al 0800-999-3000 o escribirnos un mail a sugerencias@devffee.com.ar
        </section>
        <div className={l.container}>
        
           <p>Motivo de contacto</p> 
             <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Motivo de Contacto" id="fullWidth"  variant="filled"  />
            </Box>
           <p>Mensaje</p> 
           <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Mensaje" id="fullWidth" variant="filled" />
            </Box>
           <p>Nombre y apellido</p> 
           <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Nombre y apellido" id="fullWidth" variant="filled" />
            </Box>
           <p>Telefono</p> 
           <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Telefono" id="fullWidth" variant="filled"  />
            </Box>
           <p>Email</p> 
           <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <TextField fullWidth label="Email" id="fullWidth"  variant="filled"/>
            </Box>

            <Button variant="contained" sx={{color:'white', background:'black', position: 'relative', left: '80%'}} >Enviar</Button>
        </div>

        <h1>Redes</h1> 
        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 4">
           
                <FaFacebook className={l.icons} />
               
            </Box>
            <Box gridColumn="span 4">
                <FaInstagram className={l.icons} />
            </Box>
            <Box gridColumn="span 4">
                  <FaTwitterSquare className={l.icons}/>
            </Box>
            
          </Box>
    </Box>

         
             
      </div>
    </div>
    </div>
  );
};

export default Contact;
