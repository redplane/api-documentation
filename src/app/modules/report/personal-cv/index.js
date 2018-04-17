module.exports = function(ngModule){
    require('./personal-cv.controller')(ngModule);
    require('./personal-cv.route')(ngModule);
};