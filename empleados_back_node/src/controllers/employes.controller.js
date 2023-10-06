import { pool } from '../db.js'

export const getEmpleados = async (req, res) => {
    try {
        //throw new Error("Error de Conexion a la BD")
        const [rows] = await pool.query('SELECT * FROM employee')
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ mesagge: "Algo Fue Mal" })
    }


}

export const getEmpleado = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({ mesagge: "Empleado no encontrado" })
        res.json(rows);
    } catch (error) {
        return res.status(500).json({ mesagge: "Algo Fue Mal" })
    }

}

export const createEmpleados = async (req, res) => {
    const { name, salary, picture } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO employee (name,salary,picture) values(?,?,?)', [name, salary, picture])
        //console.log(req.body)
        res.send({
            id: rows.insertId,
            name,
            salary,
            picture
        });
    } catch (error) {
        return res.status(500).json({ mesagge: "Algo Fue Mal" })
    }

}

export const deleteempleados = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id=?', [req.params.id])

        if (result.affectedRows <= 0) return res.status(404).json({
            message: "Empleado no Eliminado"
        })

        res.send(204);

    } catch (error) {
        return res.status(500).json({ mesagge: "Algo Fue Mal" })
    }

}

export const updateEmpleados = async (req, res) => {
    const { id } = req.params
    const { name, salary, picture } = req.body
    try {
        const [result] = await pool.query('UPDATE employee set name = IFNULL(?,name) , salary = IFNULL(?,salary),picture = IFNULL(?,picture) WHERE id = ?', [name, salary, picture, id])

        if (result.affectedRows === 0) return res.status(404).json({
            message: "Empleado no Encontrado"
        })

        const [rows] = await pool.query('SELECT * FROM employee WHERE id=?', [id])
        res.send(rows[0]);

    } catch (error) {
        return res.status(500).json({ mesagge: "Algo Fue Mal" })
    }

}

