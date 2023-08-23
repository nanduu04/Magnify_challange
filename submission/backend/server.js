const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/db');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
    const { name, id } = req.query;

    db.getData((err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        } else {
            if (name || id) {
                const filteredData = data.filter(item => item.name === name || item.employee_id === id);
                res.json({ success: true, data: filteredData });
            } else {
                res.json({ success: true, data });
            }
        }
    });
});


app.post('/api/submit', (req, res) => {
    const data = req.body;

    db.saveData(data, (err) => {
        if (err) {
            console.error(err);
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
