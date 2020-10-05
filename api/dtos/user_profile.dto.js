const userprofile = require("../../dal/models/userprofile");

class UserProfileDto {
  id = '';
  userId = '';
  profileId = '';
  active = true;
}

module.exports = UserProfileDto;