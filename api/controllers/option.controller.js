const mapper = require('automapper-js');
const { UserDto } = require('../dtos');


class OptionController {
  constructor({OptionService}){
    this._optionService = OptionService;
  }

  async getOptions(req, res) {
    let options = await this._optionService.getAll();
    options = options.map(user => mapper(UserDto, user));

    return res.send({
      payload: options
    });
  }

  async getOption(req, res){
    const { id } = req.params;
    let option = await this._optionService.get(id);

    if(!option) {
      return res.status(404).send();
    }

    option = mapper(UserDto, option);
    return res.send({
      payload: option
    })

  }

  async createOption(req, res) {
    const { body } = req;
    const createdOption = await this._optionService.create(body);
    const option = mapper(UserDto, createdOption);

    return res.status(201).send({
      payload: option
    });
  }

  async updateOption(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._optionService.update(id, body);

    return res.status(204).send();
  }

  async deleteOption(req, res){
    const { id } = req.params;

    await this._optionService.delete(id);
    
    return res.status(204).send();
  }


}

module.exports = OptionController;