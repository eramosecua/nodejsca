const BaseService = require('./base.service');

class UserProfileService extends BaseService {
    constructor({UserProfileBusiness}) {
      super(UserProfileBusiness)
    }
}

module.exports = UserProfileService;