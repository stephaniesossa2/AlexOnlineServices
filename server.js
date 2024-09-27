const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname)));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ajoute la route "/about"
app.get('/about', (req, res) => {
    res.send('À propos de notre service !');
});

// Démarrage du serveur
app.listen(port, () => {
    console.log('Démarrage du serveur...');
    console.log(`Serveur en écoute sur le port ${port}`);
});
