module.exports = function (ngModule) {
    ngModule.controller('personalCvReportController',
        function ($scope, $state, $element, $document, $template, $interpolate,
                  urlStateConstant,
                  candidateProfile) {

            $scope.candidateProfile = candidateProfile;
            $scope.urlStateProject = $state.href(urlStateConstant.personalInfo.projects.name, {}, {absolute: true});

            // Collection of accordion status.
            $scope.accordionStatus = {
                bIsInterestOpen: true,
                bIsWhatIKnowOpen: true,
                bIsTakenPartInProjectOpen: true
            };

            console.log(candidateProfile);

            console.log($element);
            //#region Methods

            // Depend on skill point to decide class of progressbar.
            $scope.findProgressbarClass = function (skillPoint) {
                if (skillPoint == null)
                    return "";

                if (skillPoint < 50)
                    return "danger";

                if (50 <= skillPoint && skillPoint <= 60)
                    return "warning";

                if (60 < skillPoint && skillPoint <= 80)
                    return "info";

                return "primary";
            };

            $scope.print = function () {
                //
                // // Find personal profile html.
                var personalProfileHtml = $document[0].getElementById('personalProfile');
                html2canvas(personalProfileHtml, {
                    onrendered: function(canvas) {
                        $scope.downloadCanvas(canvas, 'CV.png');
                    }
                });
            };

            $scope.downloadCanvas = function(canvas, fileName) {
                // get image data and transform mime type to application/octet-stream
                var
                    canvasDataUrl = canvas.toDataURL()
                        .replace(/^data:image\/[^;]*/, 'data:application/octet-stream'),
                    link = document.createElement('a'); // create an anchor tag

                // set parameters for downloading
                link.setAttribute('href', canvasDataUrl);
                link.setAttribute('target', '_blank');
                link.setAttribute('download', fileName);

                // compat mode for dispatching click on your anchor
                if (document.createEvent) {
                    var evtObj = document.createEvent('MouseEvents');
                    evtObj.initEvent('click', true, true);
                    link.dispatchEvent(evtObj);
                } else if (anchor.click) {
                    link.click();
                }
            }
            //#endregion
        });
};