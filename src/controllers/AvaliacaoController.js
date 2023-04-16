const connection = require('../database/connection.js')
const { insert, update, remove } = require("./DefaultController")

const pull = async (req, res) => {
  const data = async () => {
    const { codigo_aluno } = req.query
    const { id } = req.params
    const sql = () => connection('avaliacao')
      .select('avaliacao.codigo', 'tipo_avaliacao.descricao', 'avaliacao.nota', 'tipo_avaliacao.peso')
      .join('tipo_avaliacao', 'tipo_avaliacao.codigo', 'avaliacao.codigo_tipo_avaliacao')
      .orderBy('avaliacao.codigo_tipo_avaliacao')

    if (id && !codigo_aluno)
      return await sql().where({ "avaliacao.codigo_disciplina": id })
    else if (id && codigo_aluno)
      return await sql().where({ "avaliacao.codigo_disciplina": id, codigo_aluno })
    else
      return await sql()
  }
  return res.status(201).json(await data())
}

module.exports = {
  async insert(req, res) {
    return insert('avaliacao', req, res, ['descricao'])
  },
  async update(req, res) {
    return update('avaliacao', req, res, [])
  },
  async pull(req, res) {
    return pull(req, res)
  },
  async pullDisciplina(req, res) {
    return pull(req, res)
  },
  async remove(req, res) {
    return remove('avaliacao', req, res)
  }
}