const fs = require('fs')
const path = require('path');
const { insert, update, pull, remove } = require("./DefaultController")

module.exports = {
    async insert(req, res) {
        return insert('aluno', req, res, ['nome', 'email', 'password', 'cidade', 'uf', 'fone', 'codigo_curso'])
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
            const file = path.join('.', 'images', req.params.id)
            console.log(file)
            if (fs.existsSync(file)) {
                console.log('base64')
                const base64 = "data:image/gif;base64," + fs.readFileSync(file, 'base64')
                console.log(base64)
                return res.status(200).send({ "imagem": base64 });
            } else {
                console.log('file not found')
                const base64 = "data:image/gif;base64," + fs.readFileSync('./images/no image.jpg', 'base64')
                console.log(base64)
                return res.status(200).send({ "imagem": base64 });
            }
        } catch (err) {
            console.log(err);
        }
    }
}
