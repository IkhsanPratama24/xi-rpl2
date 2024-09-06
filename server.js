const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint untuk mengupdate konten
app.post('/api/update-content', (req, res) => {
    const data = req.body; // Data yang dikirim dari web admin
    // Simpan atau proses data sesuai kebutuhan
    res.json({ status: 'success', data: data });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
