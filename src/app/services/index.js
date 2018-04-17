module.exports = function (ngModule) {
    require('./personal-info.service')(ngModule);
    require('./template.service')(ngModule);
};