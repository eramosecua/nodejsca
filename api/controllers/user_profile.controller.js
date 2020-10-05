const mapper = require("automapper-js");
const { UserProfileDto } = require('../dtos'); 

class UserProfileController {
  constructor({UserProfileService}){
    this._userProfileService = UserProfileService;
  }

  async getUserProfiles(req, res){
    let profiles = await this._userProfileService.getAll();
    profiles = profiles.map(profile => mapper(UserProfileDto, profile));
    return res.send({
      payload: profiles
    });
  }

  async getUserProfile(req,res){
    const { id } = req.params;
    let profile = await this._userProfileService.get(id);
    if(!profile){
      return res.status(404).send();
    }

    profile = mapper(UserProfileDto, profile);
    return res.send({
      payload: profile
    })
  }

  async createUserProfile(req, res) {
    const { body } = req;
    const createdProfile = await this._userProfileService.create(body);
    const profile = mapper(UserProfileDto, createdProfile);
    return res.status(201).send({
      payload: profile
    });
  }

  async updateUserProfile(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._userProfileService.update(id, body);
    return res.status(204).send();
  }

  async deleteUserProfile(req, res) {
    const { id } = req.params;

    await this._userProfileService.delete(id);
    return res.status(204).send();
  }

}

module.exports = UserProfileController