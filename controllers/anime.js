const express = require('express');
const router = express.Router();
require('dotenv').config();

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
        console.log('ANIME', data);
        return data;
    } catch (error) {
        console.warn(error);
    }
};

router.get('/', async (req, res) => {
    const anime = await apiCall();
    res.send(anime);
});

module.exports = router;
