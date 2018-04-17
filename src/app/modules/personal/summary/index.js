module.exports = function(ngModule){
    require('./summary.controller')(ngModule);
    require('./summary.route')(ngModule);
};