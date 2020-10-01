const { 
    asClass, 
    createContainer, 
    asFunction, 
    asValue } = require('awilix');
const StartUp = require('./startup');    
const Server = require('./server');
const Routes = require('../api/routes');

const config = require("../config/environments");

const db = require('../dal/models');

const CourseRoutes = require('../api/routes/course.route');
const StudentRoutes = require('../api/routes/student.route');
const TeacherRoutes = require('../api/routes/teacher.route');
const SubjectRoutes = require('../api/routes/subject.route');

const {CourseController, StudentController, TeacherController, SubjectController} = require('../api/controllers');

const { CourseService, StudentService, TeacherService, SubjectService  } = require('../services');

const { CourseRepository, StudentRepository, TeacherRepository, SubjectRepository } = require('../dal/repositories');

const { CourseBusiness, StudentBusiness, TeacherBusiness, SubjectBusiness } = require('../domain');

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    CourseController: asClass(CourseController).singleton(),
    StudentController: asClass(StudentController).singleton(),
    TeacherController: asClass(TeacherController).singleton(),
    SubjectController: asClass(SubjectController).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    CourseRoutes: asFunction(CourseRoutes).singleton(),
    StudentRoutes: asFunction(StudentRoutes).singleton(),
    TeacherRoutes: asFunction(TeacherRoutes).singleton(),
    SubjectRoutes: asFunction(SubjectRoutes).singleton()
  })
  .register({
    CourseService: asClass(CourseService).singleton(),
    StudentService: asClass(StudentService).singleton(),
    TeacherService: asClass(TeacherService).singleton(),
    SubjectService: asClass(SubjectService).singleton()
  })
  .register({
    CourseRepository: asClass(CourseRepository).singleton(),
    StudentRepository: asClass(StudentRepository).singleton(),
    TeacherRepository: asClass(TeacherRepository).singleton(),
    SubjectRepository: asClass(SubjectRepository).singleton()
  })
  .register({
    db: asValue(db)
  })
  .register({
    CourseBusiness: asClass(CourseBusiness).singleton(),
    StudentBusiness: asClass(StudentBusiness).singleton(),
    TeacherBusiness: asClass(TeacherBusiness).singleton(),
    SubjectBusiness: asClass(SubjectBusiness).singleton()
  })
  ;

module.exports = container;