const { pagination } = require("./Pagination")
const connection = require('../database/connection.js')
const { insert, update, remove } = require("./DefaultController")

const pull = async (req, res) => {
  const data = async () => {
    const { id, idsubject } = req.params
    const sql = () => connection('assessment')
      .select('assessment.idassessmenttype', 'assessment_type.description', 'assessment.value')
      .join('assessment_type', 'assessment_type.id', 'assessment.idassessmenttype')
      .orderBy('assessment.idassessmenttype')

    if (idsubject)
      return await sql().where({ idsubject })
    else if (id)
      return await sql().where({ id })
    else
      return await sql()
  }
  return await pagination(await data(), req, res)
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
  async pullSubject(req, res) {
    req.params.idsubject = req.params.id
    req.params.id = null
    return pull(req, res)
  },
  async remove(req, res) {
    return remove('assessment', req, res)
  }
}