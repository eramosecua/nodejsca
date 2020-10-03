class Subject {
  constructor(){
    this.sections = [];
  }
    id = 0;
    name = '';

    addSection(section){
      this.sections.push(section);
    }
  }
  
  module.exports = Subject;