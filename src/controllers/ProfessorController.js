const { insert, update, pull, remove } = require("./DefaultController")

module.exports = {
    async insert(req, res) {
        return insert('professor', req, res, ['nome', 'email', 'password', 'cidade', 'uf', 'fone'])
    },
    async update(req, res) {
        return update('professor', req, res, [])
    },
    async pull(req, res) {
        return pull('professor', req, res)
    },
    async remove(req, res) {
        return remove('professor', req, res)
    }
}