const express = require('express');
const path = require('path')

const app = express();
const PORT = 3030;

/* RUTA CSS E IMG */
app.use(express.static('public')) //ruteo los recursos estaticos

/* RUTAS */

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))


app.listen(PORT,() => console.log(`Server running in http://localhost:${PORT}`));