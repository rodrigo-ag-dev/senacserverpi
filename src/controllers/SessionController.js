const jwt = require('jsonwebtoken')
const connection = require('../database/connection.js')
const authConfig = require('../config/auth.json')

module.exports = {
    async create(req, res) {
        const { email, password } = req.headers
        console.log(email)
        const reg = await connection('users')
            .join('student', 'student.id', 'users.id')
            .select(['users.id', 'student.name', 'users.password', 'student.image'])
            .where('email', email)
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