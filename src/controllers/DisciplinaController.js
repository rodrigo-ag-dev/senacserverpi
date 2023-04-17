const { insert, update, pull, remove } = require("./DefaultController")

module.exports = {
    async insert(req, res) {
        return insert('disciplina', req, res, ['nome'])
    },
    async update(req, res) {
        return update('disciplina', req, res, [])
    },
    async pull(req, res) {
        return pull('disciplina', req, res)
    },
    async pullSemestre(req, res) {
        const data = async () => {
            const { id } = req.params
            const { codigo_disciplina, semestre } = req.query

            return connection('curso_disciplina')
                .select(fields ? fields : '*')
                .where('')
                .orderBy('codigo')
        }
        return await pagination(await data(), req, res)
    },
    async remove(req, res) {
        return remove('disciplina', req, res)
    }
}