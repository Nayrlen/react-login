const cors = require('cors');
const createConnection = require('mysql2');
const express = require('express');
const app = express();
const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'sislogin'
});

app.post('/login', (req, res) => {

    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";

    db.query(sql, [req.body.email, req.body.senha], (err, data) => {
        data = user.find(user => user.email === email && user.senha === senha);
        if(data) {
            return res.status(200).json(user);
        }else{
            return res.status(401).json({ message: 'Credenciais inválidas'});
        }
    });

});

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(3000, () => {
    console.log('Listening on port 3000');
});