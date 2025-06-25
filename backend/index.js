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

//sale api
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
        await db_pg.query(`UPDATE customers SET name = $1, lastname = $2, address = $3, telephone = $4 WHERE id = $5 RETURNING *`, [name, lastname, address, telephone, customersID]);
        res.status(200).json({ message: "อัปเดตสำเร็จ"})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});
app.post('/customers/', async (req, res) => {
    const { name, lastname, address, telephone } = req.body;
    try {
        await db_pg.query(`INSERT INTO customers (name, lastname, address, telephone) VALUES ($1, $2, $3, $4)`, [name, lastname, address, telephone]);
        res.status(201).json({ massage: "เพิ่มข้อมูลสำเร็จ" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});
app.delete('/customers/:id', async (req, res) => {
    const customersID = parseInt(req.params.id);
    try {
        const data = await db_pg.query(`DELETE FROM customers WHERE id = $1 RETURNING *`, [customersID]);
        res.status(200).json({ message: "ลบข้อมูลสำเร็จ"})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});

//hr api
app.get('/employee/', async (req, res) => {
    try {
        const data = await db_pg.query('SELECT * FROM employee');
        res.json(data.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในฝั่งเซิร์ฟเวอร์' });
    }
});
app.patch('/employee/:id', async (req, res) => {
    const employeeID = parseInt(req.params.id);
    const { name, lastname, address, telephone } = req.body;
    try {
        await db_pg.query(`UPDATE employee SET name = $1, lastname = $2, address = $3, telephone = $4 WHERE id = $5 RETURNING *`, [name, lastname, address, telephone, employeeID]);
        res.status(200).json({ message: "อัปเดตสำเร็จ"})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});
app.post('/employee/', async (req, res) => {
    const { name, lastname, address, telephone } = req.body;
    try {
        await db_pg.query(`INSERT INTO employee (name, lastname, address, telephone) VALUES ($1, $2, $3, $4)`, [name, lastname, address, telephone]);
        res.status(201).json({ massage: "เพิ่มข้อมูลสำเร็จ" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});
app.delete('/employee/:id', async (req, res) => {
    const employeeID = parseInt(req.params.id);
    try {
        const data = await db_pg.query(`DELETE FROM employee WHERE id = $1 RETURNING *`, [employeeID]);
        res.status(200).json({ message: "ลบข้อมูลสำเร็จ"})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});

//admin api
app.get('/user_d/', async (req, res) => {
    try {
        const data = await db_pg.query('SELECT * FROM user_d');
        res.json(data.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'เกิดข้อผิดพลาดในฝั่งเซิร์ฟเวอร์' });
    }
});
app.patch('/user_d/:id', async (req, res) => {
    const userID = parseInt(req.params.id);
    const { name, lastname, address, telephone } = req.body;
    try {
        await db_pg.query(`UPDATE user_d SET name = $1, lastname = $2, address = $3, telephone = $4 WHERE id = $5 RETURNING *`, [name, lastname, address, telephone, userID]);
        res.status(200).json({ message: "อัปเดตสำเร็จ"})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});
app.post('/user_d/', async (req, res) => {
    const { name, lastname, address, telephone } = req.body;
    try {
        await db_pg.query(`INSERT INTO user_d (name, lastname, address, telephone) VALUES ($1, $2, $3, $4)`, [name, lastname, address, telephone]);
        res.status(201).json({ massage: "เพิ่มข้อมูลสำเร็จ" })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});
app.delete('/user_d/:id', async (req, res) => {
    const userID = parseInt(req.params.id);
    try {
        const data = await db_pg.query(`DELETE FROM user_d WHERE id = $1 RETURNING *`, [userID]);
        res.status(200).json({ message: "ลบข้อมูลสำเร็จ"})
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่ง server" });
    }
});

app.listen(PORT, () => {

});