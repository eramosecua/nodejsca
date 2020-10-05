const {Router} = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const compression = require("compression");

module.exports = ({
  CourseRoutes, 
  StudentRoutes, 
  TeacherRoutes,
  SubjectRoutes, 
  UserRoutes,
  ProfileRoutes

}) => {
    
    const router = Router();
    const apiRoute = Router();

    apiRoute
      .use(cors())
      .use(bodyParser.json())
      .use(compression());

    apiRoute.use('/course', CourseRoutes);
    apiRoute.use('/student', StudentRoutes);
    apiRoute.use('/teacher', TeacherRoutes);
    apiRoute.use('/subject', SubjectRoutes);
    apiRoute.use('/user', UserRoutes);
    apiRoute.use('/profile', ProfileRoutes);

    router.use('/api', apiRoute)

    return router;
};