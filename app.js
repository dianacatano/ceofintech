import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';

const app = express();

// Conexión base de datos 
const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/ceofintech_DB'; 
// mongodb+srv://ceofintech:grupo04@cluster0.bqkpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const uri = 'mongodb+srv://ceofintech:grupo04@cluster0.bqkpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 
const options = {useNewUrlParser: true, useUnifiedTopology:true};
mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB'); },
    err => { err }
  );

//Middlewares
app.use(morgan('tiny')); //Nos sirve para pintar las peticiones HTTP request que se solicitan a nuestro aplicación.
app.use(cors()); //Para realizar solicitudes de un servidor externo e impedir el bloqueo por CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Trabajar con solicitudes www-form
// app.use(express.static(path.join(__dirname, 'public'))); // Para acceder al directorio actual 

//Rutas
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/suscriber'));
app.use('/api', require('./routes/contact'));
app.use('/api', require('./routes/dollarex'));
app.use('/api', require('./routes/uvrrate'));
app.use('/api', require('./routes/uvtrate'));

// app.get('/', function (req, res) {
//     res.send('Hello World!'); 
// }); 

// Middleware para Vue.js router modo history 
const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

//Puerto
app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), function () { 
    console.log('Example app listening on port '+ app.get('puerto')); 
});
// app.listen(3000, function () { 
//     console.log('El servidor escucha por el puerto 3000'); 
// });
