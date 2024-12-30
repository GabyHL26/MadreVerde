import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Gallery from './pages/Gallery';
import Hospital from './pages/Hospital'; // Renombrado

// Datos de las plantas categorizadas
const plants = [
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
    name: "Venus Atrapamoscas",
    scientificName: "Dionaea muscipula",
    family: "Droseraceae",
    description: "Atrapa insectos con sus hojas activas y vibrantes.",
  },
  // Agrega más plantas según sea necesario
];

// Datos de plantas en el hospital
const hospitalPlants = [
  {
    id: 1,
    image: "https://via.placeholder.com/150", // Imagen placeholder
    name: "Ceropegia Sordida",
    story: "Rescatada de una plaga de hormigas, ahora en proceso de recuperación.",
    recoveryStatus: "En recuperación",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150", // Imagen placeholder
    name: "Ixora Coccinea",
    story: "Planta que fue rescatada del abandono y ahora florece maravillosamente.",
    recoveryStatus: "Recuperada y floreciendo",
  },
  // Agrega más plantas del hospital según sea necesario
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h1>Madre Verde</h1>
        </header>

        <main>
          <h2>Bienvenidos a la Galería de Plantas</h2>
          <Gallery plants={plants} />

          {/* Sección Hospital de Plantas */}
          <div className="hospital-de-plantas">
            <h2>Hospital de Plantas</h2>
            <p className="hospital-description">
              En esta sección quiero compartir el proceso de recuperación de plantas que han llegado a mí de distintas formas. Algunas fueron rescatadas, otras recibieron cuidados urgentes o se encontraron en condiciones difíciles. A través de tiempo, paciencia y atención, estas plantas están en el camino hacia su recuperación, y este será su diario de vida. Aquí podrás seguir su progreso y cómo, con el paso del tiempo, pueden salir adelante y florecer.
            </p>
            <Hospital plants={hospitalPlants} /> {/* Usando Hospital en lugar de Gallery */}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
