const db_pg = require('./config/db');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.get('/customers/Name', async (req, res) => {
    try {
        const data = await db_pg.query('SELECT * FROM customers');
        res.json(data.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในฝั่งเซิร์ฟเวอร์' });
    }
});    
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});