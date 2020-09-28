class UserController {
  constructor(){}

  sayHello(req, res) {
    return res.send({message: 'hello world'});
  }
}

module.exports = UserController;