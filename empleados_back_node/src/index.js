//console.log("Bienvenidos desde mi BacKend")
import express from "express";
//Imnportar las rutas
import indexRoutes from './routes/index.routes.js'
import employesRoutes from './routes/employes.routes.js'

//Creando un servidor basico
const app = express()

//Convertir los datos que le envio al cliente angular JSON

app.use(express.json())

//Utiliando las Rutas
app.use('/api',indexRoutes);
app.use('/api',employesRoutes);


//Puerto que funcioana nuestro servidor
app.listen(3000)