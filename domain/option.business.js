const BaseBusiness = require('./base.business');
const { Option } = require('./models');

class OptionBusiness extends BaseBusiness {
  constructor({OptionRepository}){
    super(OptionRepository, Option);
  }

}

module.exports = OptionBusiness;