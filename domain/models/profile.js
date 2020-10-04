class Profile {
  constructor(){
    this.permissions = [];
  }
  id = '';
  name = '';
  active = true;
  add(permission){
    this.permissions.push(permission);
  }

}

module.exports = Profile;