const db_pg = require('./config/db')

app.get('/customers', async (req, res) => {
    try {
        const data = await db_pg.query('SELECT * FROM customers');
        res.json(data.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในฝั่งเซิร์ฟเวอร์' });
    }
});         