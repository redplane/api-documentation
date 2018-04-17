module.exports = function(ngModule){
    require('./personal')(ngModule);
    require('./report')(ngModule);
    require('./shared')(ngModule);
};