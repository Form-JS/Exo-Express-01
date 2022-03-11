const express = require('express');
const homeRouter = require('./routes/home-router');

// Variable de configuration
const port = 8080;

// Création du serveur
const app = express();

// Config du server
app.set('view engine', 'ejs');
app.set('views', './views');

// Ajout des routes
app.use(homeRouter);

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});