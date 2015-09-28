/**

The MIT License (MIT)

Copyright (c) 2014 Rafael Garrido Romero

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/rgarom/angular-visualize-directive

*/

angular.module('angular-visualize-directive', [])
    .directive('visualize', function() {

        return {
            restrict: 'E',
            transclude: true,
            scope: {
                resource: '=',
                params: '='
            },
            template: '<div ng-transclude></div>',
            link: function (scope, element, attrs) {
                if (angular.isDefined(scope.resource)) {
                    var opts = {
                      lines: 13, // The number of lines to draw
                      length: 0, // The length of each line
                      width: 3, // The line thickness
                      radius: 8, // The radius of the inner circle
                      corners: 1, // Corner roundness (0..1)
                      rotate: 0, // The rotation offset
                      direction: 1, // 1: clockwise, -1: counterclockwise
                      color: '#000', // #rgb or #rrggbb or array of colors
                      speed: 1.2, // Rounds per second
                      trail: 10, // Afterglow percentage
                      shadow: false, // Whether to render a shadow
                      hwaccel: false, // Whether to use hardware acceleration
                      className: 'spinner', // The CSS class to assign to the spinner
                      zIndex: 2e9, // The z-index (defaults to 2000000000)
                      top: '50%', // Top position relative to parent
                      left: '50%' // Left position relative to parent
                    };
                    var target = document.getElementById(element[0].id);
                    var spinner = new Spinner(opts).spin(target);			

                    /* Configure your jasperserver connection */
                    visualize(
                    {
                        auth: {
                            name: "jasperadmin",
                            password: "jasperadmin",
                            organization: "organization_1"
                        }
                    },

                    function (v) {
                        v("#"+element[0].id).report({resource:scope.resource,params: scope.params});
                        spinner.stop();
                    },

                    function (err) {
                        alert("Auth error! Server said: " + err.message);
                    });
                }
            }
        }
}); 
