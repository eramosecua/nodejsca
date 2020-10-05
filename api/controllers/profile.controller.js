const mapper = require("automapper-js");
const { ProfileDto } = require('../dtos'); 

class ProfileController {
  constructor({ProfileService}){
    this._profileService = ProfileService;
  }

  async getProfiles(req, res){
    let profiles = await this._profileService.getAll();
    profiles = profiles.map(profile => mapper(ProfileDto, profile));
    return res.send({
      payload: profiles
    });
  }

  async getProfile(req,res){
    const { id } = req.params;
    let profile = await this._profileService.get(id);
    if(!profile){
      return res.status(404).send();
    }

    profile = mapper(ProfileDto, profile);
    return res.send({
      payload: profile
    })
  }

  async createProfile(req, res) {
    const { body } = req;
    const createdProfile = await this._profileService.create(body);
    const profile = mapper(ProfileDto, createdProfile);
    return res.status(201).send({
      payload: profile
    });
  }

  async updateProfile(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._profileService.update(id, body);
    return res.status(204).send();
  }

  async deleteProfile(req, res) {
    const { id } = req.params;

    await this._profileService.delete(id);
    return res.status(204).send();
  }

}

module.exports = ProfileController