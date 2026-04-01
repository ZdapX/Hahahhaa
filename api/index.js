const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/ambil-data-font', (req, res) => {
    try {
        const filePath = path.join(process.cwd(), 'public', 'fonts.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(jsonData);
    } catch (error) {
        res.status(500).json({ error: "Data tidak ditemukan" });
    }
});

module.exports = app;
