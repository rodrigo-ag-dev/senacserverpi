const { insert, update, pull, remove } = require("./defaultController")

module.exports = {
    async insert(req, res) {
        return insert('student', req, res, ['name', 'email', 'password', 'city', 'uf', 'whatsapp'])
    },
    async update(req, res) {
        return update('teacher', req, res, [])
    },
    async pull(req, res) {
        return pull('teacher', req, res)
    },
    async remove(req, res) {
        return remove('teacher', req, res)
    }
}