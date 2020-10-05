const BaseRepository = require('./base.repository');

class UserProfileRepository extends BaseRepository {
  constructor({db}){
    super(db, 'UserProfile')
  }
}

module.exports = UserProfileRepository;