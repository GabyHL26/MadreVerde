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
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    name: "Dionaea Muscipula",
    scientificName: "Dionaea muscipula",
    family: "Droseraceae",
    description: "La famosa Venus atrapamoscas, que atrapa insectos con sus hojas.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300",
    name: "Sarracena Leucophyla",
    scientificName: "Sarracenia leucophyla",
    family: "Sarraceniaceae",
    description: "Planta con jarras en forma de trompeta que atraen y atrapan presas.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300",
    name: "Sarracena Purpúrea",
    scientificName: "Sarracenia purpurea",
    family: "Sarraceniaceae",
    description: "Jarras purpuras que capturan insectos de manera eficiente.",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/300",
    name: "Nepenthe Mirabilis",
    scientificName: "Nepenthes mirabilis",
    family: "Nepenthaceae",
    description: "Planta trepadora con jarras grandes para atrapar presas.",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/300",
    name: "Pinguicula Agnata",
    scientificName: "Pinguicula agnata",
    family: "Lentibulariaceae",
    description: "Planta carnívora de hojas pegajosas que atrapan insectos pequeños.",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/300",
    name: "Drosera Hercules",
    scientificName: "Drosera hercules",
    family: "Droseraceae",
    description: "Planta con hojas cubiertas de tentáculos pegajosos que atrapan presas.",
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
const renderSection = (title, plants, handleLike, likedPlants, likes) => (
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

              {/* Corazones para votar */}
              <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center' }}>
                <IconButton
                  onClick={() => handleLike(plant.id)}
                  color={likedPlants.includes(plant.id) ? 'error' : 'default'}
                >
                  {likedPlants.includes(plant.id) ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
                <Typography variant="body2" className="color3">{likes[plant.id] || 0} Likes</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const Gallery = () => {
  // Estado para gestionar los "likes" de las plantas
  const [likes, setLikes] = useState({});
  const [likedPlants, setLikedPlants] = useState([]);

  const handleLike = (plantId) => {
    // Si ya le han dado like, quitar el like
    if (likedPlants.includes(plantId)) {
      setLikedPlants(likedPlants.filter((id) => id !== plantId));
      setLikes({ ...likes, [plantId]: likes[plantId] - 1 });
    } else {
      // Si no le han dado like, agregar el like
      setLikedPlants([...likedPlants, plantId]);
      setLikes({ ...likes, [plantId]: (likes[plantId] || 0) + 1 });
    }
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="fixed" sx={{ backgroundColor: "#262422", top: 0, left: 0, right: 0, zIndex: 1200 }}>
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              color: "#D4AF37", // Dorado para el texto
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            MADRE VERDE
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Cuerpo dividido en dos partes */}
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: '100px', padding: '0 20px' }}>
        
        {/* Columna izquierda: Blog */}
        <Box sx={{ flex: 1, padding: '0 20px' }}>
          <Typography variant="h4" gutterBottom className="color1">
            Blog de Madre Verde
          </Typography>
          <Typography variant="body1" className="color3" paragraph>
            Bienvenidos al blog de Madre Verde. Aquí encontrarás consejos sobre el cuidado de plantas, historias de jardinería y mucho más. 
            Mantente conectado y descubre la belleza de la naturaleza en cada rincón de tu hogar.
          </Typography>
        </Box>

        {/* Columna derecha: Galería */}
        <Box sx={{ flex: 2, padding: '0 20px' }}>
          {renderSection("Philodendros", philodendros, handleLike, likedPlants, likes)}
          {renderSection("Plantas Carnívoras", carnivoras, handleLike, likedPlants, likes)}
          {renderSection("Suculentas", suculentas, handleLike, likedPlants, likes)}
          {renderSection("Cactus", cactus, handleLike, likedPlants, likes)}
          {renderSection("Anturios", anturios, handleLike, likedPlants, likes)}
        </Box>
      </Box>

      {/* Footer fijo */}
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
          Síguenos en nuestras redes sociales para más contenido:
          <br />
          <IconButton color="inherit" component={Link} href="https://instagram.com">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" component={Link} href="https://music.com">
            <MusicNote />
          </IconButton>
        </Typography>
      </footer>
    </div>
  );
};

export default Gallery;
