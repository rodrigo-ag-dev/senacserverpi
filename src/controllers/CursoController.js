const connection = require('../database/connection.js')
const { insert, update, pull, remove } = require("./DefaultController")

module.exports = {
    async insert(req, res) {
        return insert('curso', req, res, ['descricao', 'semestre'])
    },
    async update(req, res) {
        return update('curso', req, res, [])
    },
    async pull(req, res) {
        return pull('curso', req, res)
    },
    async pullDisciplina(req, res) {
        const { id } = req.params
        const { semestre } = req.query

        const where = { "curso_disciplina.codigo": id }
        if (semestre)
            where.semestre = semestre

        const data = await connection('curso_disciplina')
            .select('curso_disciplina.codigo_disciplina', 'disciplina.descricao')
            .join('disciplina', 'disciplina.codigo', 'curso_disciplina.codigo_disciplina')
            .where(where)
            .orderBy('curso_disciplina.semestre', 'curso_disciplina.codigo_disciplina')
        return res.status(200).json(data)
    },
    async remove(req, res) {
        return remove('curso', req, res)
    }
}