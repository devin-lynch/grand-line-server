require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

const clientID = process.env.MAL_CLIENT_ID;

const apiCall = async () => {
    try {
        const url = 'https://api.myanimelist.net/v2';
        const response = await fetch(`${url}/anime?q=one&limit=10`, {
            headers: {
                'X-MAL-CLIENT-ID': clientID,
            },
        });
        const { data } = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.warn(error);
    }
};

apiCall();

app.get('/', async (req, res) => {
    const data = await apiCall();
    res.send(data);
});

app.use('/anime', require('./controllers/anime'));
app.use('/manga', require('./controllers/manga'));

app.listen(3003, () => {
    console.log("Explorin' the Grand Line!");
});
