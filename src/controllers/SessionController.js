const jwt = require('jsonwebtoken')
const connection = require('../database/connection.js')
const authConfig = require('../config/auth.json')

module.exports = {
    async create(req, res) {
        const { email, password } = req.headers
        const reg = await connection('users')
            .where('email', email)
            .select(['id', 'password'])
            .first()
        if (!reg)
            return res.status(401).json({ error: 'Usuário não encontrado!' })
        if (password.localeCompare(reg.password, undefined, { sensitivity: 'accent' }) > 0)
            return res.status(401).json({ error: 'Senha inválida!' })
        reg.password = undefined
        const token = jwt.sign({ id: res.id }, authConfig.secret, { expiresIn: '9999 years' })
        return res.send({ reg, token })
    },
}