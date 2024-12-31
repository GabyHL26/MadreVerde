import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

// Importación de las imágenes locales
import dionaea1 from "./images/dionaea1.jpg";
import dionaea2 from "./images/dionaea2.jpg";
import sarracenaLeucophyla from "./images/sarracena_leucophyla.jpg";
import sarracenaLeucophylaAngle from "./images/sarracena_leucophyla_angle.jpg";
import sarracenaPurpurea from "./images/sarracena_purpurea.jpg";
import nepentheMirabilis from "./images/nepenthe_mirabilis.jpg";
import pinguiculaAgnata from "./images/pinguicula_agnata.jpg";
import droseraHercules from "./images/drosera_hercules.jpg";

const carnivoras = [
  {
    id: 1,
    image: dionaea1,
    name: "Dionaea Muscipula",
    scientificName: "Dionaea muscipula",
    family: "Droseraceae",
    description: "Atrapa insectos con sus hojas activas y vibrantes.",
  },
  {
    id: 2,
    image: dionaea2,
    name: "Dionaea Muscipula",
    scientificName: "Dionaea muscipula",
    family: "Droseraceae",
    description: "Atrapa insectos con sus hojas activas y vibrantes.",
  },
  {
    id: 3,
    image: sarracenaLeucophyla,
    name: "Sarracena Leucophyla",
    scientificName: "Sarracena leucophyla",
    family: "Sarraceniaceae",
    description: "Planta carnívora de hojas grandes y coloridas.",
  },
  {
    id: 4,
    image: sarracenaLeucophylaAngle,
    name: "Sarracena Leucophyla Angle",
    scientificName: "Sarracena leucophyla",
    family: "Sarraceniaceae",
    description: "Planta que utiliza sus hojas tubulares para atrapar insectos.",
  },
  {
    id: 5,
    image: sarracenaPurpurea,
    name: "Sarracena Purpurea",
    scientificName: "Sarracena purpurea",
    family: "Sarraceniaceae",
    description: "Planta con una estructura tubular que atrae y captura presas.",
  },
  {
    id: 6,
    image: nepentheMirabilis,
    name: "Nepenthes Mirabilis",
    scientificName: "Nepenthes mirabilis",
    family: "Nepenthaceae",
    description: "Planta trepadora con jarros que atrapan insectos.",
  },
  {
    id: 7,
    image: pinguiculaAgnata,
    name: "Pinguicula Agnata",
    scientificName: "Pinguicula agnata",
    family: "Lentibulariaceae",
    description: "Planta con hojas pegajosas que capturan insectos.",
  },
  {
    id: 8,
    image: droseraHercules,
    name: "Drosera Hercules",
    scientificName: "Drosera hercules",
    family: "Droseraceae",
    description: "Planta que usa pelos pegajosos para atrapar presas.",
  },
];

const Carnivoras = () => {
  const [likes, setLikes] = useState({});
  const [likedPlants, setLikedPlants] = useState([]);

  const handleLike = (plantId) => {
    setLikedPlants((prev) =>
      prev.includes(plantId) ? prev.filter((id) => id !== plantId) : [...prev, plantId]
    );
    setLikes((prev) => ({
      ...prev,
      [plantId]: (prev[plantId] || 0) + (likedPlants.includes(plantId) ? -1 : 1),
    }));
  };

  return (
    <div>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" gutterBottom sx={{ color: "#D4AF37" }}>
          Plantas Carnívoras
        </Typography>
        <Grid container spacing={4}>
          {carnivoras.map((plant) => (
            <Grid item xs={12} sm={6} md={4} key={plant.id}>
              <Card>
                <CardMedia component="img" height="200" image={plant.image} alt={plant.name} />
                <CardContent>
                  <Typography variant="h6" sx={{ color: "#71733C" }}>
                    {plant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Nombre científico:</strong> {plant.scientificName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Familia:</strong> {plant.family}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    {plant.description}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
                    <IconButton onClick={() => handleLike(plant.id)}>
                      {likedPlants.includes(plant.id) ? <Favorite color="error" /> : <FavoriteBorder />}
                    </IconButton>
                    <Typography variant="body2">{likes[plant.id] || 0} Likes</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Carnivoras;
