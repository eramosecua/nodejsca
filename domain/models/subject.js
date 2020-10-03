class Subject {
  constructor(){
    this._sections = [];
  }
    id = 0;
    name = '';

    addSection(section){
      this._sections.push(section);
    }
  }
  
  module.exports = Subject;