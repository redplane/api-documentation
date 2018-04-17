module.exports = function(ngModule){
  ngModule.service('$template', function($http, $templateCache){

      //#region Methods

      /*
      * Get personal CV report.
      * */
      this.getPersonalCvReportHtmlTemplate = function(){

          var personalCvTemplate = $templateCache.get('personalCv');
          if (personalCvTemplate)
              return new Promise(function(resolve, reject){
                  resolve(personalCvTemplate);
              });

          var url = '/assets/report/personal-cv.html';
          return $http.get(url)
              .then(function(getPersonalCvTemplateResponse){
                  var getPersonalCvReportTemplateResult = getPersonalCvTemplateResponse.data;
                  $templateCache.put('personalCv', getPersonalCvReportTemplateResult);
                  return getPersonalCvReportTemplateResult;
              });
      };

      //#endregion
  });
};