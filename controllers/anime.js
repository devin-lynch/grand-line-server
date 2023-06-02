const express = require('express');
const router = express.Router();
require('dotenv').config();

const clientID = process.env.MAL_CLIENT_ID;

router.get('/', (req, res) => {
    res.send('Anime');
});

module.exports = router;
