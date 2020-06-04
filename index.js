const express = require ('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const PUERTO = process.env.PORT | 3000;

let pintoresRouter = require('./routes/pintor')

const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use('/', pintoresRouter);
/*La cadena de conexion con mongo */
mongoose.promise = global.promise;
const cadena = 'mongodb+srv://hector:Enero2003@carmonahector4-g-aoqrr.mongodb.net/video?retryWrites=true&w=majority'
mongoose.connect(cadena,{userNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('conexion establecida');
    })
    .catch(err=> console.log(err));
    /*Arrancar el servidor web*/
    app.listen(PUERTO, ()=>{
console.log('escuchando el puerto...')
    });
