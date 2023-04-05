const cors = require('cors')
const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor rodando na porta ', process.env.PORT || 3333, '!')
})