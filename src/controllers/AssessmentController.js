const { pagination } = require("./Pagination")
const connection = require('../database/connection.js')
const { insert, update, remove } = require("./DefaultController")

const pull = async (req, res) => {
  const data = async () => {
    const { idstudent } = req.query
    const { idsubject } = req.params
    const sql = () => connection('assessment')
      .select('assessment.idassessmenttype', 'assessment_type.description', 'assessment.value', 'assessment_type.weight')
      .join('assessment_type', 'assessment_type.id', 'assessment.idassessmenttype')
      .orderBy('assessment.idassessmenttype')

    if (idsubject && !idstudent)
      return await sql().where({ idsubject })
    else if (idsubject && idstudent)
      return await sql().where({ idsubject, idstudent })
    else
      return await sql()
  }
  return res.status(201).json(await data())
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
    return pull(req, res)
  },
  async remove(req, res) {
    return remove('assessment', req, res)
  }
}