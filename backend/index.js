const db_pg = require('./config/db');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     res.setHeader(
//         "Access-Control-Allow-Origin",
//         "*"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PUT, DELETE, OPTIONS"
//     );
//     next();
// })
app.use(express.json());
app.use(cors());
app.get('/customers/', async (req, res) => {
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