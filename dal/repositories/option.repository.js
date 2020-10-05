const BaseRepository = require('./base.repository');

class Option extends BaseRepository {
  constructor({db}){
    super(db, 'Option');
  }
}

module.exports = Option;