const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react"
});


app.get('/users', (req, res) => {
  const sql = "SELECT email, username, password FROM login";
  
  db.query(sql, (err, data) => {
    if (err) {
      console.error('DB error:', err);
      return res.json({ message: "Database error" });
    }
    
    console.log('Users fetched:', data.length);
    res.json(data);  // Возвращаем массив пользователей
  });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values = [req.body.username, req.body.password];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json({ message: "Error" });
        }

        if (data.length > 0) {
            // пользователь найден
            return res.json({ message: "Login Successfully"});
        } else {
            // пользователь не найден
            return res.json({ message: "User was not found"});
        }
    });
});

app.post('/register', (req, res) => {
    const { email, username, password } = req.body;
    
    // Проверяем, существует ли пользователь
    const checkSql = "SELECT * FROM login WHERE username = ?";
    db.query(checkSql, [username], (err, checkData) => {
        if (err) {
            return res.json({ message: "Error" });
        }
        
        if (checkData.length > 0) {
            return res.json({ message: "User already exists" });
        }
        
        // Создаем нового пользователя
        const insertSql = "INSERT INTO login (email, username, password) VALUES (?, ?, ?)";
        db.query(insertSql, [email, username, password], (err, result) => {
            if (err) {
                console.error('Insert error:', err);
                return res.json({ message: "Registration failed" });
            }
            
            res.json({ message: "User registered successfully" });
        });
    });
});

app.listen(8081, () => {
    console.log("Listening...");
})