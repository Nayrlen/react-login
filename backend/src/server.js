import cors from 'cors';
import { createConnection } from 'mysql2';
import express, { json } from 'express';
const app = express();
const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'sislogin'
});

app.post('/login', (req, res) => {

    const email = req.body.email;
    const senha = req.body.senha;

    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";

    db.query(sql, [email, senha], (err, result) => {
        if(err) {
            req.setEncoding({err: err});
        }else{
            if (result.lenght > 0) {
                result.send(result);
            }else{
                result.send({message: "E-mail e/ou senha incorretos"})
            }
        }
    });

});

app.use(json());
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Origin, X-Api-Key, X-Requested-With, Accept, Authorization");
    next();
})


app.listen(3000, () => {
    console.log('Listening on port 3000');
});