const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'sislogin'
});

connection.connect( function (err){
    console.log("Conexão com o MySQL criada com sucesso!");
});

connection.query("SELECT email, senha FROM usuarios", function (err, rows, fields){
    if (!err) {
        console.log("Resultado:", rows);
    }else{
        console.log('Erro: Consulta não realizada com sucesso!');
    }
});