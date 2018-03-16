(function(angular) {
    'use strict';

    angular
        .module('dedojr')
        .directive('caseEnter', caseEnter);

    caseEnter.$inject = [];

    function caseEnter() {
        return function(scope, element, attrs) {
            element.bind('keypress', function(event) {
                if (event.which == 13) {
                    event.preventDefault();
                    var fields = angular.element('form:eq(0),body').find('input:not([disabled]), textarea:not([disabled]), select:not([disabled])');
                    var index = fields.index(this);
                    if (index > -1 && (index + 1) < fields.length) {
                        fields.eq(index + 1).focus();
                    }
                }
            });
        };
    };
})(window.angular);
