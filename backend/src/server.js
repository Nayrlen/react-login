import cors from 'cors';
import { createConnection } from 'mysql2';
import express, { json } from 'express';
const app = express();

{ header: 'Access-Control-Allow-Credentials: true' };
{ header: 'Access-Control-Allow-Origin: http://localhost:3001' };
{ header: 'Access-Control-Allow-Methods: GET,OPTIONS,PATCH,DELETE,POST,PUT' };
{ header: 'Access-Control-Allow-Headers: X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' }; 

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
                res.send(result);
            }else{
                res.send({message: "E-mail e/ou senha incorretos"})
            }
        }
    });

});


app.use(json());
app.use(cors());

app.listen(3000, () => {
    console.log('Listening on port 3000');
});