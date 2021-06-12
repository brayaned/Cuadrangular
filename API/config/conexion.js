const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    port: 3306,
    database: 'liga'
});

conexion.connect((err) =>{
    if(err){
        console.log('Error en la conexion: ' + err)
    }else{
        console.log('Conexion a base de datos exitosa');
    }
});

module.exports = conexion;
