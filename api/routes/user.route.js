const { Router } = require('express');

module.exports = ({UserController}) => {
  const router = Router();

  router.get('/', UserController.getUsers.bind(UserController));
  router.get('/:id', UserController.getUser.bind(UserController));
  router.post('/', UserController.createUsers.bind(UserController));
  router.put('/:id', UserController.updateUsers.bind(UserController));
  router.delete('/:id', UserController.deleteUser.bind(UserController));

  return router;
}