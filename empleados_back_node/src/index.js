//console.log("Bienvenidos desde mi BacKend")
import express from "express";
//Traer el Pool de Conexiones -- Modulo
import { pool } from './db.js'
//Imnportar las rutas
import indexRoutes from './routes/index.routes.js'

//Creando un servidor basico
const app = express()

//Creando ENDPOINTS  utilizando los 4 Verbos
app.get('/empleados', (req, res) => res.send("Obteniendo data de Empleados DEMO"));
app.post('/empleados', (req, res) => res.send('Creando el empleado'));
app.put('/empleados', (req, res) => res.send('Actualizando Empleados'));
app.delete('/empleados', (req, res) => res.send('Eliminando Empleados'));

//Utiliando las Rutas
app.use(indexRoutes);

//Probando la conexion a Mysql desde una operacion de BD
// app.get('/testbd', async (req, res) => {
//     const [result] = await pool.query('SELECT 1 + 1 as result');
//     res.json(result);
// })

//Puerto que funcioana nuestro servidor
app.listen(3000)