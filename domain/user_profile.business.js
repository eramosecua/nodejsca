const BaseBusiness = require('./base.business');
const { UserProfile } = require('./models');

class UserProfileBusiness extends BaseBusiness {
  constructor({ UserProfileRepository }){
    super(UserProfileRepository, UserProfile)
  }
}

module.exports = UserProfileBusiness;