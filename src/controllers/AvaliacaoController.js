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

const pullHistory = async (req, res) => {
  const data = async () => {
    const { id } = req.params
    const { codigo_aluno, semestre, semestreexceto, semestreanteriores } = req.query

    var where = {}
    var where2 = ''
    var whereNot = {}

    if (id)
      where[`curso_disciplina.codigo`] = id

    if (semestre)
      where[`curso_disciplina.semestre`] = semestre

    if (semestreexceto)
      whereNot[`curso_disciplina.semestre`] = semestreexceto

    if (semestreanteriores)
      where2 += `curso_disciplina.semestre < ${semestreanteriores}`

    const notaSql = connection('avaliacao')
      .sum(connection.raw('avaliacao.nota * tipo_avaliacao.peso'))
      .join('tipo_avaliacao', 'tipo_avaliacao.codigo', 'avaliacao.codigo_tipo_avaliacao')
      .where({ "codigo_aluno": codigo_aluno })
      .where(connection.raw('codigo_disciplina = curso_disciplina.codigo_disciplina'))
      .as('nota')

    const mainSql = connection('curso_disciplina')
      .select('curso_disciplina.*', 'disciplina.descricao', notaSql)
      .join('disciplina', 'disciplina.codigo', 'curso_disciplina.codigo_disciplina')
      .where(where)
      .where(connection.raw(where2))
      .whereNot(whereNot)
      .orderBy('curso_disciplina.semestre', 'desc')
      .orderBy('disciplina.descricao')

    return await mainSql
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
  async pullHistory(req, res) {
    return pullHistory(req, res)
  },
  async remove(req, res) {
    return remove('avaliacao', req, res)
  }
}