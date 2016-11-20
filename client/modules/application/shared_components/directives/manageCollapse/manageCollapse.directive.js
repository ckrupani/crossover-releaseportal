
/**
 * This directive updates the collapse status on data 
 */
export default function() {
    return {
        restrict: 'A',
        link(scope, element, attrs) {

            $('#accordion').on('hidden.bs.collapse', (e) => {
                if (scope.$index === +e.target.id) {
                    scope.build.collapse = false;
                    scope.$apply();
                }
            });

            $('#accordion').on('shown.bs.collapse', (e) => {
                if (scope.$index === +e.target.id) {
                    scope.build.collapse = true;
                    scope.$apply();
                }
            });
        }
    };
};