import { Router } from "express"
import {testbd} from '../controllers/index.controller.js'

//Crear un grupo de Rutas

const router = Router()


//Probando la Conexion a Mysql

router.get('/testbd',testbd)

export default router