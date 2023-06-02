const express = require('express');
const router = express.Router();
require('dotenv').config();

const clientID = process.env.MAL_CLIENT_ID;

const apiCall = async () => {
    try {
        const url = 'https://api.myanimelist.net/v2';
        const response = await fetch(`${url}/manga?q=one&limit=10`, {
            headers: {
                'X-MAL-CLIENT-ID': clientID,
            },
        });
        const { data } = await response.json();
        console.log('MANGA', data);
        return data;
    } catch (error) {
        console.warn(error);
    }
};

router.get('/', async (req, res) => {
    const manga = await apiCall();
    res.send(manga);
});

module.exports = router;
