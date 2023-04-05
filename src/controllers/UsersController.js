const crypto = require('crypto')
const connection = require('../database/connection.js')

module.exports = {
    async index(req, res) {
        const data = await connection('users').select('*').orderBy('name')
        return res.json(data)
    },

    async delete(req, res) {
        const { id } = req.params
        const incident = await connection('users').where('id', id).first()
        if (!incident.id)
            return res.status(401).json({ error: 'Operação não permitida.' })

        await connection('users').where('id', id).delete()

        return res.status(204).send()
    },

    async create(req, res) {
        const { name, email, password, whatsapp, city, uf } = req.body
        const id = crypto.randomBytes(4).toString('HEX')
        await connection('users').insert({ id, name, email, password, whatsapp, city, uf })
        return res.json({ id })
    }
}