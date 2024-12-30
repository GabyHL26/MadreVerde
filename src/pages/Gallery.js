import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box, AppBar, Toolbar, IconButton, Link } from "@mui/material";
import { Instagram, MusicNote } from '@mui/icons-material';

// Datos de las plantas categorizadas
const philodendros = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    name: "Philodendro Brasil",
    scientificName: "Philodendron hederaceum",
    family: "Araceae",
    description: "Hojas vibrantes y saludables con un crecimiento constante.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    name: "Philodendro Imperial",
    scientificName: "Philodendron 'Imperial Red'",
    family: "Araceae",
    description: "Nuevas hojas y raíces tras meses de cuidado.",
  },
];

const carnivoras = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    name: "Venus Atrapamoscas",
    scientificName: "Dionaea muscipula",
    family: "Droseraceae",
    description: "Atrapa insectos con sus hojas activas y vibrantes.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    name: "Nepenthes",
    scientificName: "Nepenthes alata",
    family: "Nepenthaceae",
    description: "Increíbles jarras que capturan presas.",
  },
];

const suculentas = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    name: "Echeveria",
    scientificName: "Echeveria elegans",
    family: "Crassulaceae",
    description: "Forma de roseta, perfecta y compacta.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    name: "Sedum Morganianum",
    scientificName: "Sedum morganianum",
    family: "Crassulaceae",
    description: "Conocida como 'Cola de burro'.",
  },
];

const cactus = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    name: "Cactus San Pedro",
    scientificName: "Echinopsis pachanoi",
    family: "Cactaceae",
    description: "Columnar y de rápido crecimiento.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    name: "Mammillaria",
    scientificName: "Mammillaria spinosissima",
    family: "Cactaceae",
    description: "Pequeños cactus con flores delicadas.",
  },
];

const anturios = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    name: "Anturio Rojo",
    scientificName: "Anthurium andraeanum",
    family: "Araceae",
    description: "Flores brillantes y hojas grandes.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    name: "Anturio Rosa",
    scientificName: "Anthurium scherzerianum",
    family: "Araceae",
    description: "Elegante y delicado.",
  },
];

// Función para renderizar cada sección de plantas
const renderSection = (title, plants) => (
  <Box sx={{ marginBottom: 4 }}>
    <Typography variant="h5" gutterBottom className="color1">
      {title}
    </Typography>
    <Grid container spacing={4}>
      {plants.map((plant) => (
        <Grid item xs={12} sm={6} md={4} key={plant.id}>
          <Card className="card">
            <CardMedia component="img" height="200" image={plant.image} alt={plant.name} />
            <CardContent>
              <Typography variant="h6" className="color2">{plant.name}</Typography>
              <Typography variant="body2" className="color3">
                <strong>Nombre científico:</strong> {plant.scientificName}
              </Typography>
              <Typography variant="body2" className="color3">
                <strong>Familia:</strong> {plant.family}
              </Typography>
              <Typography variant="body2" className="color5" sx={{ marginTop: 1 }}>
                {plant.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Gallery = () => {
  return (
    <div>
      {/* Header */}
      <AppBar position="sticky" sx={{ backgroundColor: "#542638" }}>
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              color: "#e86f9e",
              textAlign: "center",  // Centrado
              fontStyle: "italic"   // Cursiva
            }}
          >
            MADRE VERDE
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Cuerpo dividido en dos partes */}
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: '20px', padding: '0 20px' }}>
        
        {/* Columna izquierda: Blog */}
        <Box sx={{ flex: 1, padding: '0 20px' }}>
          <Typography variant="h4" gutterBottom className="color1">
            Blog de Madre Verde
          </Typography>
          <Typography variant="body1" className="color3" paragraph>
            Bienvenidos al blog de Madre Verde. Aquí encontrarás consejos sobre el cuidado de plantas, historias de jardinería y mucho más. 
            Mantente al tanto de nuestras últimas novedades y aprende a cuidar tus plantas favoritas.
          </Typography>
          <Typography variant="body1" className="color3" paragraph>
            En este blog exploramos temas como el cultivo de plantas carnívoras, las suculentas, y cómo las plantas tropicales pueden transformar tu hogar.
          </Typography>
        </Box>
        
        {/* Columna derecha: Galería */}
        <Box sx={{ flex: 2, padding: '0 20px' }}>
          <Typography variant="h4" gutterBottom className="color1">
            Galería de Avances
          </Typography>
          {renderSection("Philodendros", philodendros)}
          {renderSection("Plantas Carnívoras", carnivoras)}
          {renderSection("Suculentas", suculentas)}
          {renderSection("Cactus", cactus)}
          {renderSection("Anturios", anturios)}
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#4dab8c", padding: "20px 0", marginTop: "40px" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ color: "#fff", marginBottom: "10px" }}>
            Síguenos en redes sociales!!
          </Typography>
          <IconButton href="https://www.instagram.com/" target="_blank" sx={{ color: "#fff", margin: "0 10px" }}>
            <Instagram />
          </IconButton>
          <Typography variant="body1" sx={{ color: "#fff", marginTop: "10px" }}>
            <Link href="https://www.tiktok.com/" target="_blank" sx={{ color: "#fff", textDecoration: "none" }}>
              <MusicNote sx={{ marginRight: "8px" }} /> Síguenos en TikTok
            </Link>
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Gallery;
