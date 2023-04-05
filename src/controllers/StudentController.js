const fs = require('fs')
const { insert, update, pull, remove } = require("./defaultController")
const { decodeBase64 } = require('bcryptjs')

module.exports = {
    async insert(req, res) {
        return insert('student', req, res, ['name', 'email', 'password', 'city', 'uf', 'whatsapp'])
    },
    async update(req, res) {
        return update('student', req, res, [])
    },
    async pull(req, res) {
        return pull('student', req, res)
    },
    async remove(req, res) {
        return remove('student', req, res)
    },
    async image(req, res) {
        try {
            const path = './images/'.concat(req.params.id)
            if (fs.existsSync(path)) {
                const base64 = "data:image/gif;base64," + fs.readFileSync(path, 'base64')
                return res.status(200).send({ "image": base64 });
            } else {
                const base64 = "data:image/gif;base64," + fs.readFileSync('./images/no image.jpg', 'base64')
                return res.status(200).send({ "image": base64 });
            }
        } catch (err) {
            console.log(err);
        }
    }
}
