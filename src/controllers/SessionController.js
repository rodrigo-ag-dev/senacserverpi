const jwt = require('jsonwebtoken')
const connection = require('../database/connection.js')
const authConfig = require('../config/auth.json')

module.exports = {
    async create(req, res) {
        const { email, password } = req.headers
        if (!email)
            return res.status(401).json({ error: 'Informe um e-mail.' })
        if (!password)
            return res.status(401).json({ error: 'Informe a senha.' })

        const reg = await connection('usuario')
            .join('aluno', 'aluno.codigo', 'usuario.codigo')
            .select(['usuario.codigo', 'aluno.nome', 'usuario.password', 'aluno.imagem'])
            .where('email', email)
            .first()
        if (!reg)
            return res.status(401).json({ error: 'Usuário não encontrado!' })
        if (password.localeCompare(reg.password, undefined, { sensitivity: 'accent' }) > 0)
            return res.status(401).json({ error: 'Não autorizado, verifique o usuário e a senha.' })
        reg.password = undefined
        const token = jwt.sign({ id: res.id }, authConfig.secret, { expiresIn: '9999 years' })
        return res.send({ reg, token })
    },
}