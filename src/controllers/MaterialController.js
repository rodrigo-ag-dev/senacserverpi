const connection = require('../database/connection.js')
const { insert, update, remove } = require("./DefaultController.js")

const pull = async (req, res) => {
  const { idsubject } = req.params

  console.log(req.params)

  const data = async (id) => {
    const sql = () => connection('material').select('*')
    if (id)
      return await sql().where({ "codigo_disciplina": id })
    else
      return await sql()
  }

  const responseData = await data(idsubject)
  if (responseData) {
    const fs = require('fs');
    const path = require('path');
    const responseJson = responseData.map(e => {
      const _path = path.join(__dirname, '../../documents/' + e.arquivo)
      console.log('path', _path)
      if (!fs.existsSync(_path)) {
        return res.status(404).json({ "error": `arquivo ${_path} não encontrado!` })
      } else {
        const base64 = fs.readFileSync(_path, 'base64');
        e.content = base64
        return e
      }
    })
    return res.status(201).send(responseJson)
  } else
    return res.status(404)
}

module.exports = {
  async insert(req, res) {
    return insert('assessment', req, res, ['description'])
  },
  async update(req, res) {
    return update('assessment', req, res, [])
  },
  async pull(req, res) {
    return pull(req, res)
  },
  async pullDisciplina(req, res) {
    return pull(req, res)
  },
  async remove(req, res) {
    return remove('assessment', req, res)
  }
}