const fs = require('fs')
const { insert, update, pull, remove } = require("./DefaultController")

module.exports = {
    async insert(req, res) {
        return insert('aluno', req, res, ['nome', 'email', 'password', 'cidade', 'uf', 'fone'])
    },
    async update(req, res) {
        return update('aluno', req, res, [])
    },
    async pull(req, res) {
        return pull('aluno', req, res)
    },
    async remove(req, res) {
        return remove('aluno', req, res)
    },
    async image(req, res) {
        try {
            const path = './images/'.concat(req.params.id)
            if (fs.existsSync(path)) {
                const base64 = "data:image/gif;base64," + fs.readFileSync(path, 'base64')
                return res.status(200).send({ "imagem": base64 });
            } else {
                const base64 = "data:image/gif;base64," + fs.readFileSync('./images/no image.jpg', 'base64')
                return res.status(200).send({ "imagem": base64 });
            }
        } catch (err) {
            console.log(err);
        }
    }
}