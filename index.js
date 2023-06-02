require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Home page!');
});

app.listen(3003, () => {
    console.log("Explorin' the Grand Line!");
});
