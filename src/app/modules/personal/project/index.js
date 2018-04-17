module.exports = function(ngModule){
    require('./project.controller')(ngModule);
    require('./project.route')(ngModule);
};