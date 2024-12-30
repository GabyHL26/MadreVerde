import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// Datos de las plantas en el "hospital"
const hospitalData = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    name: "Philodendro Brasil",
    scientificName: "Philodendron hederaceum",
    family: "Araceae",
    description: "Esta planta está en proceso de recuperación debido a la falta de luz.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300",
    name: "Venus Atrapamoscas",
    scientificName: "Dionaea muscipula",
    family: "Droseraceae",
    description: "Recuperando su energía después de ser descuidada por mucho tiempo.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300",
    name: "Ceropegia Sordida",
    scientificName: "Ceropegia sordida",
    family: "Apocynaceae",
    description: "Necesita cuidados constantes para restablecerse completamente.",
  },
  // Agrega más plantas según sea necesario
];

const Hospital = () => {
  return (
    <div className="hospital-de-plantas">
      <Grid container spacing={3} justifyContent="center">
        {hospitalData.map((plant) => (
          <Grid item xs={12} sm={6} md={4} key={plant.id}>
            <Card className="planta-card">
              <img
                src={plant.image}
                alt={plant.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" color="#71733C">
                  {plant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {plant.scientificName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Familia: {plant.family}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {plant.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Hospital;
