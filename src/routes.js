const express = require('express')
const authMiddleware = require('./middlewares/auth.js')

const SessionController = require('./controllers/SessionController.js')
const UsuarioController = require('./controllers/UsuarioController.js')
const AlunoController = require('./controllers/AlunoController.js')
const ProfessorController = require('./controllers/ProfessorController.js')
const DisciplinaController = require('./controllers/DisciplinaController.js')
const AvaliacaoController = require('./controllers/AvaliacaoController.js')
const MaterialController = require('./controllers/MaterialController.js')
const CursoController = require('./controllers/CursoController.js')

const routes = express()
routes.use(express.json())

routes.post('/session', SessionController.create)

routes.use(authMiddleware)

routes.get('/usuario', UsuarioController.index)
routes.post('/usuario', UsuarioController.create)
routes.delete('/usuario/:id', UsuarioController.delete)

routes.get('/aluno/imagem/:id', AlunoController.image)
routes.get('/aluno/:id', AlunoController.pull)
routes.get('/aluno', AlunoController.pull)
routes.delete('/aluno/:id', AlunoController.remove)
routes.post('/aluno', AlunoController.insert)
routes.put('/aluno', AlunoController.update)

routes.get('/professor/:id', ProfessorController.pull)
routes.get('/professor', ProfessorController.pull)
routes.delete('/professor/:id', ProfessorController.remove)
routes.post('/professor', ProfessorController.insert)
routes.put('/professor', ProfessorController.update)

routes.get('/disciplina/:id', DisciplinaController.pull)
routes.get('/disciplina', DisciplinaController.pull)
routes.delete('/disciplina/:id', DisciplinaController.remove)
routes.post('/disciplina', DisciplinaController.insert)
routes.put('/disciplina', DisciplinaController.update)

routes.get('/avaliacao/historico/:id', AvaliacaoController.pullHistory)
routes.get('/avaliacao/:id', AvaliacaoController.pull)
routes.get('/avaliacao', AvaliacaoController.pull)
routes.delete('/avaliacao/:id', AvaliacaoController.remove)
routes.post('/avaliacao', AvaliacaoController.insert)
routes.put('/avaliacao', AvaliacaoController.update)

routes.get('/material/disciplina/:idsubject', MaterialController.pullDisciplina)
routes.get('/material/:id', MaterialController.pull)

routes.get('/curso/:id', CursoController.pull)
routes.get('/curso/disciplina/:id', CursoController.pullDisciplina)


module.exports = routes