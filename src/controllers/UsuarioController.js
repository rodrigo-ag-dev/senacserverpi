const crypto = require('crypto')
const connection = require('../database/connection.js')

module.exports = {
    async index(req, res) {
        const data = await connection('usuario').select('*').orderBy('nome')
        return res.json(data)
    },

    async delete(req, res) {
        const { id } = req.params
        const incident = await connection('usuario').where('id', id).first()
        if (!incident.id)
            return res.status(401).json({ error: 'Operação não permitida.' })

        await connection('usuario').where('id', id).delete()

        return res.status(204).send()
    },

    async create(req, res) {
        const { nome, email, password, fone, cidade, uf } = req.body
        const id = crypto.randomBytes(4).toString('HEX')
        await connection('usuario').insert({ id, nome, email, password, fone, cidade, uf })
        return res.json({ id })
    }
}