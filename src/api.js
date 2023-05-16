const cors = require('cors')
const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor rodando na porta ', process.env.PORT || 3333, '!')
})