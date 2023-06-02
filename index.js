require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const clientID = process.env.MAL_CLIENT_ID;

const apiCall = async () => {
    try {
        const url =
            'https://api.myanimelist.net/v2/anime/10357?fields=rank,mean,alternative_titles';
        const response = await fetch(url, {
            headers: {
                'X-MAL-CLIENT-ID': clientID,
            },
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.warn(error);
    }
};

apiCall();

app.get('/', (req, res) => {
    res.send('Home page!');
});

app.listen(3003, () => {
    console.log("Explorin' the Grand Line!");
});
