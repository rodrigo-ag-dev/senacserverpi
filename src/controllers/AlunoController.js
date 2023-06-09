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
            const file = path.join(process.cwd(), 'images', req.params.id)
            if (fs.existsSync(file)) {
                const base64 = "data:image/gif;base64," + fs.readFileSync(file, 'base64')
                return res.status(200).send({ "imagem": base64 });
            } else {
                const noFile = path.join(process.cwd(), 'images', 'no image.jpg')
                if (fs.existsSync(noFile)) {
                    const base64 = "data:image/gif;base64," + fs.readFileSync(noFile, 'base64')
                    return res.status(200).send({ "imagem": base64 });
                } else
                    return res.status(512).send({ "error": `File ${noFile} not found` });
            }
        } catch (err) {
            console.log(err);
        }
    }
}
