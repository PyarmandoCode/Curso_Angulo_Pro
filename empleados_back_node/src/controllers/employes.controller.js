import { pool } from '../db.js'

export const getEmpleados = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows);
}

export const getEmpleado = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
    if (rows.length <= 0) return res.status(404).json({ mesagge: "Empleado no encontrado" })
    res.json(rows);
}

export const createEmpleados = async (req, res) => {
    const { name, salary, picture } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name,salary,picture) values(?,?,?)', [name, salary, picture])
    //console.log(req.body)
    res.send({
        id: rows.insertId,
        name,
        salary,
        picture
    });
}

export const deleteempleados = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id=?', [req.params.id])

    if (result.affectedRows <= 0) return res.status(404).json({
        message: "Empleado no Eliminado"
    })

    res.send(204);
}

export const updateEmpleados = async (req, res) => res.send('Actualizando Empleados');

