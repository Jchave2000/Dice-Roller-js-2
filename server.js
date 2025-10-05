const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Dice API
app.get('/roll', (req, res) => {
    const dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    res.json({ dice });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
