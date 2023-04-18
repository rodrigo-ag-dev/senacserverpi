const connection = require('../database/connection.js')
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
    async remove(req, res) {
        return remove('disciplina', req, res)
    }
}