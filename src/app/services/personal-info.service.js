'use strict';

module.exports = function(ngModule){
    ngModule.service('$personalInfo', function ($http, apiUrlConstant) {

        //#region Properties

        // Main personal objectives.
        var objectives = null;

        // Personal summaries.
        var summaries = null;

        // Personal certificates.
        var certificates = null;

        // Technical skills.
        var technicalSkills = null;

        // Experienced projects.
        var projects = null;

        // Get api url.
        var apiUrlPersonal = apiUrlConstant.personal;

        //#endregion

        //#region Methods

        /*
        * Find personal missions which should be archived in future.
        * */
        this.getAboutMe = function () {
            if (objectives != null) {
                return Promise.resolve(objectives);
            }

            // Build url to fetch data from.
            var url = apiUrlConstant.baseUrl + '/' + apiUrlPersonal.getAboutMe;
            var promise = $http.get(url);
            promise.then(function (x) {
                objectives = x;
            });

            return promise;
        };

        /*
        * Find personal summary information.
        * */
        this.getProfessionalSummaries = function () {

            // Summaries have been loaded before.
            if (summaries != null)
                return Promise.resolve(summaries);

            var url = apiUrlConstant.baseUrl + '/' + apiUrlPersonal.getProfessionalSummaries;
            var promise = $http.get(url);
            promise.then(function success(x){
                summaries = x;
            });

            return promise;
        };

        /*
        * Find list of certificates.
        * */
        this.getCertificates = function () {

            if (certificates != null)
                return Promise.resolve(certificates);

            var url = apiUrlConstant.baseUrl + '/' + apiUrlPersonal.getCertificates;
            var promise = $http.get(url);
            promise.then(function success(x){
                certificates = x;
            });

            return promise;
        };

        /*
        * Find personal technical skills.
        * */
        this.getTechnicalSkills = function () {
            if (technicalSkills != null)
                return Promise.resolve(technicalSkills);

            var url = apiUrlConstant.baseUrl + '/' + apiUrlPersonal.getTechnicalSkills;
            var promise = $http.get(url);
            promise.then(function success(x){
                technicalSkills = x;
            });

            return promise;
        };

        /*
        * Find personal projects.
        * */
        this.getProjects = function () {

            if (projects != null)
                return Promise.resolve(projects);

            var url = apiUrlConstant.baseUrl + '/' + apiUrlPersonal.getProjects;
            var promise = $http.get(url);
            promise.then(function success(x){
                projects = x;
            });

            return promise;
        };

        /*
        * Get personal interests.
        * */
        this.getInterests = function(){
            var url = apiUrlConstant.baseUrl + '/' + apiUrlConstant.personal.getInterests;
            return $http.get(url);
        };

        /*
        * Get full profile information.
        * */
        this.getFullProfile = function(){

            // Promises which need resolving.
            var promises = [];

            // Buffer information.
            var buffer = {};

            var pGetAboutMePromise = this.getAboutMe()
                .then(function(getAboutMeResponse){
                    var getAboutMeResult = getAboutMeResponse.data;
                    buffer['aboutMe'] = getAboutMeResult;
                });
            promises.push(pGetAboutMePromise);

            var pGetProfessionalSummariesPromise = this.getProfessionalSummaries()
                .then(function(getProfessionalSummariesResponse){
                    var getProfessionalSummariesResult = getProfessionalSummariesResponse.data;
                    buffer['professionalSummaries'] = getProfessionalSummariesResult;
                });
            promises.push(pGetProfessionalSummariesPromise);

            var pGetCertificatesPromise = this.getCertificates()
                .then(function(getCertificatesResponse){
                    var getCertificatesResult = getCertificatesResponse.data;
                    buffer['certificates'] = getCertificatesResult;
                });
            promises.push(pGetCertificatesPromise);

            var pGetTechnicalSkillsPromise = this.getTechnicalSkills()
                .then(function(getTechnicalSkillsResponse){
                    var getTechnicalSkillsResult = getTechnicalSkillsResponse.data;
                    buffer['technicalSkills'] = getTechnicalSkillsResult;
                });
            promises.push(pGetTechnicalSkillsPromise);

            var pGetProjectsPromise = this.getProjects()
                .then(function(getProjectsResponse){
                    var getProjectsResult = getProjectsResponse.data;
                    buffer['projects'] = getProjectsResult.projects;
                });
            promises.push(pGetProjectsPromise);

            var pGetInterestsPromise = this.getInterests()
                .then(function(getInterestsResponse){
                    var getInterestsResult = getInterestsResponse.data;
                    if (!getInterestsResult)
                        throw 'No interests have been found.';

                    buffer['interests'] = getInterestsResult.interests;
                });
            promises.push(pGetInterestsPromise);

            return Promise.all(promises)
                .then(function(){
                    return buffer;
                });

        };
        //#endregion
    });
};
