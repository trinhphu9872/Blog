const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello NodeJS")
})

app.listen(PORT, () => {
    console.log(`This app render in port local with http://localhost:${PORT}`);
})