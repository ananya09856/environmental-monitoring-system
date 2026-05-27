const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const latestData = {

    temperature: 28,
    humidity: 65,
    air: 120,
    battery: 90,
    solar: 180

};

app.get('/data', (req, res) => {

    res.json(latestData);

});

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});