import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box, AppBar, Toolbar, IconButton, Link } from "@mui/material";
import { Instagram, MusicNote, Favorite, FavoriteBorder } from '@mui/icons-material';

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

// Función para renderizar cada sección de plantas
const renderSection = (title, plants, handleLike, likes) => (
  <Box sx={{ marginBottom: 4 }}>
    <Typography variant="h5" gutterBottom sx={{ color: "#262422" }}>
      {title}
    </Typography>
    <Grid container spacing={4}>
      {plants.map((plant) => (
        <Grid item xs={12} sm={6} md={4} key={plant.id}>
          <Card>
            <CardMedia component="img" height="200" image={plant.image} alt={plant.name} />
            <CardContent>
              <Typography variant="h6" sx={{ color: "#262422" }}>
                {plant.name}
              </Typography>
              <Typography variant="body2">
                <strong>Nombre científico:</strong> {plant.scientificName}
              </Typography>
              <Typography variant="body2">
                <strong>Familia:</strong> {plant.family}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {plant.description}
              </Typography>

              {/* Corazones para votar */}
              <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => handleLike(plant.id)}
                  color={likes[plant.id] ? 'error' : 'default'}
                >
                  {likes[plant.id] ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <Typography variant="body2">{likes[plant.id] || 0} Likes</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Header = () => (
  <AppBar position="fixed" sx={{ backgroundColor: "#71733C", top: 0, left: 0, right: 0, zIndex: 1200 }}>
    <Toolbar>
      <Typography
        variant="h4"
        sx={{
          flexGrow: 1,
          color: "#F2EFDC", // Color claro para el título
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        MADRE VERDE
      </Typography>
    </Toolbar>
  </AppBar>
);

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#262422',
      color: '#fff',
      padding: '20px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1200,
    }}
  >
    <Typography variant="body1" align="center">
      Síguenos en nuestras redes sociales para más contenido!
      <br />
      <IconButton color="inherit" component={Link} href="https://instagram.com">
        <Instagram />
      </IconButton>
      <IconButton color="inherit" component={Link} href="https://music.com">
        <MusicNote />
      </IconButton>
    </Typography>
  </footer>
);

const Gallery = () => {
  // Estado para gestionar los "likes" de las plantas
  const [likes, setLikes] = useState({});

  const handleLike = (plantId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [plantId]: prevLikes[plantId] ? prevLikes[plantId] - 1 : 1,
    }));
  };

  return (
    <div>
      <Header />

      {/* Cuerpo dividido en dos partes */}
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: '100px', padding: '0 20px' }}>
        
        {/* Columna izquierda: Blog */}
        <Box sx={{ flex: 1, padding: '0 20px' }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#262422" }}>
            Blog de Madre Verde
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#262422" }}>
            Bienvenidos al blog de Madre Verde. Aquí encontrarás consejos sobre el cuidado de plantas, historias de jardinería y mucho más. 
            Mantente conectado y descubre la belleza de la naturaleza en cada rincón de tu hogar.
          </Typography>
        </Box>

        {/* Columna derecha: Galería */}
        <Box sx={{ flex: 2, padding: '0 20px' }}>
          {renderSection("Philodendros", philodendros, handleLike, likes)}
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default Gallery;
