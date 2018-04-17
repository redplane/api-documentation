module.exports = function(ngModule){
    ngModule.constant('apiUrlConstant', {

        baseUrl: '',

        project: {
            getProjects: 'assets/data/projects.json'
        },

        certificate:{
            getCertificates: 'assets/data/certificates.json'
        },

        personal:{
            getInterests: 'assets/data/personal-interests.json',
            getTechnicalSkills: 'assets/data/skills.json',
            getWorkingExperience: 'assets/data/working-experience.json',
            getAboutMe: 'assets/data/about-me.json',
            getProfessionalSummaries: 'assets/data/professional-summary.json',
            getCertificates: 'assets/data/certificates.json',
            getProjects: 'assets/data/projects.json'
        }
    });
};