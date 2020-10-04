class Operation {
    constructor(){
      this.children = [];
    }
    id = '';
    name = '';
    parentId = '';
    optionId = '';
    add(operation){
      this.children.push(operation);
    }
}
  
module.exports = Operation