const BaseRepository = require('./base.repository');

class Profile extends BaseRepository {
  constructor({db}){
    super(db, 'Profile');
  }
}

module.exports = Profile;