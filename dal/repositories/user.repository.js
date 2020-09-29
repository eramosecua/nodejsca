class UserRepository {
  constructor({db}){
    this._db = db;
  }

  getUsers(){
    return this._db.users.findAll();
  }

  createUser(user){
    return this._db.user.create(user);
  }

}

module.exports = UserRepository