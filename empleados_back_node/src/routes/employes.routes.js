import { Router } from "express"
import {getEmpleados,createEmpleados,updateEmpleados,deleteempleados,getEmpleado} from '../controllers/employes.controller.js'

//Crear un grupo de Rutas
const router = Router()

router.get('/empleados', getEmpleados);
router.get('/empleados/:id', getEmpleado);
router.post('/empleados', createEmpleados);
//router.put('/empleados/:id', updateEmpleados);
router.patch('/empleados/:id', updateEmpleados);
router.delete('/empleados/:id', deleteempleados);

export default router;