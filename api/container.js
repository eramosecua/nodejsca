const { 
    asClass, 
    createContainer, 
    asFunction, 
    asValue } = require('awilix');
const StartUp = require('./startup');    
const Server = require('./server');
const {UserController} = require('../api/controllers');
const Routes = require('../api/routes');
const UserRoutes = require('../api/routes/user.routes');
const config = require("../config/environments");
const { UserService } = require('../services');
const { UserRepository } = require('../dal/repositories');
const db = require('../dal/entities');
const { UserBusiness } = require('../domain');

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton()
  })
  .register({
    UserController: asClass(UserController).singleton()
  })
  .register({
      config: asValue(config)
  })
  .register({
      UserRoutes: asFunction(UserRoutes).singleton()
  })
  .register({
    UserService: asClass(UserService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton()
  })
  .register({
    db: asValue(db)
  })
  .register({
    UserBusiness: asClass(UserBusiness).singleton()
  })
  ;

module.exports = container;