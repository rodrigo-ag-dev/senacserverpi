const { insert, update, pull, remove } = require("./defaultController")

module.exports = {
    async insert(req, res) {
        return insert('student', req, res, ['name'])
    },
    async update(req, res) {
        return update('subject', req, res, [])
    },
    async pull(req, res) {
        return pull('subject', req, res)
    },
    async remove(req, res) {
        return remove('subject', req, res)
    }
}