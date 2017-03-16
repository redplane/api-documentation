angular.module("general-info-service", ['api-setting-service'])
    .service('GeneralInfoService', ['ApiSettingService', '$http', function (ApiSettingService, $http) {

        // Find personal missions which should be archived in future.
        this.getPersonalMission = function () {
            return $http.get(ApiSettingService.getPersonalObjectiveLink);
        };

        // Find personal summary information.
        this.getPersonalSummary = function(){
            return $http.get(ApiSettingService.getProfessionalSummaryLink);
        };

        // Find list of certificates.
        this.getCertificates = function(){
            return $http.get(ApiSettingService.getCertificateLink);
        };

        // Find personal technical skills.
        this.getTechnicalSkills = function(){
            return $http.get(ApiSettingService.getPersonalSkillsLink);
        };

        // Find personal projects.
        this.getProjects = function(){
            return $http.get(ApiSettingService.getProjectsLink);
        }
    }]);