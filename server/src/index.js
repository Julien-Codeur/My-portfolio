require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration de base
app.use(express.json());

// Configuration CORS
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Configuration de sécurité
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginEmbedderPolicy: false
}));

// Middleware pour logger les requêtes
app.use((req, res, next) => {
  console.log('=== Nouvelle requête ===');
  console.log('Méthode:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

// Limite de requêtes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
  console.log('=== Requête contact reçue ===');
  console.log('Body:', req.body);
  
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log('Données manquantes:', { name, email, message });
      return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
      `
    };

    console.log('Tentative d\'envoi d\'email...');
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès');
    
    res.status(200).json({ message: 'Message envoyé avec succès' });
  } catch (error) {
    console.error('Erreur détaillée:', error);
    res.status(500).json({ 
      error: 'Erreur lors de l\'envoi du message',
      details: error.message 
    });
  }
});

// Route de test
app.get('/api/test', (req, res) => {
  console.log('Test route appelée');
  res.json({ message: 'Le serveur fonctionne correctement' });
});

app.listen(PORT, () => {
  console.log(`=== Serveur démarré ===`);
  console.log(`Port: ${PORT}`);
  console.log(`URL de test: http://localhost:${PORT}/api/test`);
});