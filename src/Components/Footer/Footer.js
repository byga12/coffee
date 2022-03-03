import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import s from "./Footer.module.css";

function Copyright() {
  return (
    <Typography
      variant="body1"
      color="text.secondary"
      sx={{ alignSelf: "center" }}
    >
      {"Copyright © "}
      Devffee {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: "#DFD2C6",
        // scrollSnapAlign: "start",
      }}
    >
      <Container maxWidth="sm" className={s.container} sx={{ display: "flex" }}>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/aboutus">Nosotros</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/store">Sucursales</Link>
          </li>
          <li>
            <Link to="/franchises">Franquicias</Link>
          </li>
        </ul>
        <Copyright />
      </Container>
    </Box>
  );
}
