import React from "react";
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";

const Hospital = ({ plants }) => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#262422" }}>
      <Typography variant="h5" sx={{ color: "#D4AF37", marginBottom: "20px" }}>
        Hospital de Plantas
      </Typography>
      <Grid container spacing={3}>
        {plants.map((plant) => (
          <Grid item xs={12} sm={6} md={4} key={plant.id}>
            <Card sx={{ backgroundColor: "#3B3A36", color: "#fff", borderRadius: "10px" }}>
              <CardMedia
                component="img"
                image={plant.image}
                alt={`Imagen de ${plant.name}`}
                sx={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  height: "200px",
                  width: "200px",
                  margin: "auto",
                  marginTop: "10px",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#71733C" }}>
                  {plant.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Historia:</strong> {plant.story}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <strong>Estado de recuperación:</strong> {plant.recoveryStatus}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Hospital.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      story: PropTypes.string.isRequired,
      recoveryStatus: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Hospital;
