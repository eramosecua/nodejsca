const BaseService = require('./base.service');

class OptionService extends BaseService {
  constructor({OptionBusiness}){
    super(OptionBusiness);
  }
}

module.exports = OptionService;