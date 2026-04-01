const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/ambil-data-font', (req, res) => {
    try {
        // process.cwd() adalah cara terbaik di Vercel untuk mencari root folder
        const filePath = path.join(process.cwd(), 'public', 'fonts.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        res.setHeader('Content-Type', 'application/json');
        res.send(jsonData);
    } catch (error) {
        res.status(500).json({ error: "File fonts.json tidak ditemukan" });
    }
});

module.exports = app;
