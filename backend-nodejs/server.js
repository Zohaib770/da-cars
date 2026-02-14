require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const logger = require('./config/logger');

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:5173',  // frontend react
    'http://localhost:5000'   // backend nodejs
  ],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Verbindung
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB verbunden');
  })
  .catch(err => {
    console.error('MongoDB Verbindungsfehler:', err.message);
  });


// Routes
const autoRoutes = require('./routes/autoRoutes');
const benutzerRoutes = require('./routes/benutzerRoutes');
const kontaktRoutes = require('./routes/kontaktRoutes');
const kfzRoutes = require('./routes/kfzRoutes');
const profilRoutes = require('./routes/profilRoutes');

app.use('/api/auto', autoRoutes);
app.use('/api/benutzer', benutzerRoutes);
app.use('/api/kontakt', kontaktRoutes);
app.use('/api/Kfzaufbereitungpreise', kfzRoutes);
app.use('/api/profil', profilRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    logger.info(`Server läuft auf Port ${PORT}`);
});