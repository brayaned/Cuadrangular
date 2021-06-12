require('./config/conexion');

const express = require('express');
const { prependListener } = require('./config/conexion');
const port = (3000);
const app = express();


//tipos de dato permitidos
app.use(express.json())

app.set('port', port); 
app.use('/api', require('./rutas'));

//servidor configurado por express
app.listen(app.get('port'), (err) =>{
    if(err){
        console.log('Error al iniciar el servidor');
    }else{
        console.log('Servidor iniciado...');
    }
});

