const BaseRepository = require("./base.repository");


class SubjectRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Subject");
  }

  create(entity) {
    return this._db[this.entity].create(entity, {
      include: [
        {
        model: this._db['Section'], 
        as: 'sections'
      }
    ]
    });
  }

}

module.exports = SubjectRepository;