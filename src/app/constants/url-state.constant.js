module.exports = function (ngModule) {
    ngModule.constant('urlStateConstant', {

        personalInfo: {

            masterLayout:{
                name: 'personal-info',
                url: '/personal-info'
            },

            summary:{
                name: 'summary',
                url: '/summary'
            },

            technicalSkill:{
                name: 'technical-skill',
                url: '/technical-skill'
            },

            projects:{
                name: 'projects',
                url: '/projects'
            }
        },

        report: {
            masterLayout: {
                name: 'report',
                url: '/report'
            },
            personalCv:{
                name: 'personal-cv',
                url: '/personal-cv'
            }
        },

        shared: {
            masterLayout:{
                name: 'master-layout'
            }
        }
    })
};