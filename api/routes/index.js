const {Router} = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const compression = require("compression");

module.exports = ({
  CourseRoutes, 
  StudentRoutes, 
  TeacherRoutes,
  SubjectRoutes}) => {
    
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

    router.use('/api', apiRoute)

    return router;
};