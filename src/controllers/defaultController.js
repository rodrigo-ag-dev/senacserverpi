const { pagination } = require("./Pagination")
const connection = require('../database/connection.js')

const insert = async (table, req, res, requiredFields) => {
  if (requiredFields && requiredFields.length > 0) {
    let required = []
    let exists = false
    for (const e in requiredFields) {
      for (const key in req.body)
        exists = exists || (requiredFields[e].toUpperCase() == key.toUpperCase())
      if (!exists)
        required.push(requiredFields[e])
      exists = false
    }
    if (required != '')
      return res.status(406).json({ "message": "Os campos a seguir são obrigatórios: ".concat(required.toString().replaceAll(',', ', ')) })
  }
  return res.status(201).send()
}

const update = async (table, req, res, requiredFields) => {
  return res.status(202).send()
}

const pull = async (table, req, res, filter = null) => {
  const data = async () => {
    const { id } = req.params
    const { name, fields } = req.query
    const sql = () => connection(table).select(fields ? fields : '*').orderBy('name')
    if (id)
      return await sql().where({ id })
    else if (name)
      return await sql().where('name', 'like', `%${name}%`)
    else if (filter)
      return await sql().where(filter)
    else
      return await sql()
  }
  return await pagination(await data(), req, res)
}

const remove = async (table, req, res) => {
  const { id } = req.params
  const incident = await connection(table).select('id').where({ id }).first()
  if (!incident || !incident.id)
    return res.status(404).json({ error: 'Código não encontrado.' })
  await connection(table).where({ id }).delete()
  return res.status(204).send()
}

module.exports = { insert, update, pull, remove }