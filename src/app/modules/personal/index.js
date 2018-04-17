module.exports = function(ngModule){
    require('./master-layout')(ngModule);
    require('./summary')(ngModule);
    require('./technical-skill')(ngModule);
    require('./project')(ngModule);
};