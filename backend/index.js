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
app.patch('/customers/:id', async (req, res) => {
    const customersID = parseInt(req.params.id);
    const { name, lastname, address, telephone } = req.body;
    try {
        const data = await db_pg.query(`UPDATE customers SET name = $1, lastname = $2, address = $3, telephone = $4 WHERE id = $5 RETURNING *`, [name, lastname, address, telephone, customersID]);
        res.status(200).json({ message: "อัปเดตสำเร็จ", data: data.rows[0] })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});
app.post('/customers/', async (req, res) => {
    const { id, name, address, telephone } = req.body;
    try {
        const data = await db_pg.query(`INSERT INTO customers (id, name, lastname, address, telephone) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [id, name, lastname, address, telephone]);
        res.status(201).json({ massage: "เพิ่มข้อมูลสำเร็จ"})
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});
app.listen(PORT, () => {

});