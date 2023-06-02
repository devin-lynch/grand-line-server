require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const clientID = process.env.MAL_CLIENT_ID;

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/anime', require('./controllers/anime'));
app.use('/manga', require('./controllers/manga'));

app.listen(3003, () => {
    console.log("Explorin' the Grand Line!");
});
