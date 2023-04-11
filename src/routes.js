const express = require('express')
const authMiddleware = require('./middlewares/auth.js')

const UsersController = require('./controllers/UsersController.js')
const SessionController = require('./controllers/SessionController.js')
const SubjectController = require('./controllers/SubjectController.js')
const StudentController = require('./controllers/StudentController.js')
const TeacherController = require('./controllers/TeacherController.js')
const AssessmentController = require('./controllers/AssessmentController.js')

const routes = express()
routes.use(express.json())

routes.post('/session', SessionController.create)

routes.use(authMiddleware)

routes.get('/users', UsersController.index)
routes.post('/users', UsersController.create)
routes.delete('/users/:id', UsersController.delete)

routes.get('/subject/:id', SubjectController.pull)
routes.get('/subject', SubjectController.pull)
routes.delete('/subject/:id', SubjectController.remove)
routes.post('/subject', SubjectController.insert)
routes.put('/subject', SubjectController.update)

routes.get('/student/image/:id', StudentController.image)
routes.get('/student/:id', StudentController.pull)
routes.get('/student', StudentController.pull)
routes.delete('/student/:id', StudentController.remove)
routes.post('/student', StudentController.insert)
routes.put('/student', StudentController.update)

routes.get('/teacher/:id', TeacherController.pull)
routes.get('/teacher', TeacherController.pull)
routes.delete('/teacher/:id', TeacherController.remove)
routes.post('/teacher', TeacherController.insert)
routes.put('/teacher', TeacherController.update)

routes.get('/assessment/subject/:id', AssessmentController.pullSubject)
routes.get('/assessment/:id', AssessmentController.pull)
routes.get('/assessment', AssessmentController.pull)
routes.delete('/assessment/:id', AssessmentController.remove)
routes.post('/assessment', AssessmentController.insert)
routes.put('/assessment', AssessmentController.update)

module.exports = routes