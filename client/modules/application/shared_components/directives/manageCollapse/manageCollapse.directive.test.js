
import { module, inject } from 'angular-mocks';
import DirectiveModule from '../directives.module';

describe('ManageCollapse Directive', function () {

    var $compile,
        $rootScope;

    beforeEach(module(DirectiveModule.name));

    beforeEach(inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
    }));

    it('should be defined', function () {
        $rootScope.collapse = false;
        var html = `
            <div id="accordion">
                <a data-toggle="collapse" data-parent="#accordion">
                    Click
                </a>
                <div manage-collapse></div>
            </div>
        `;
        var element = $compile(html)($rootScope);
        $rootScope.$digest();
        expect(element.scope().collapse).toBe(false);
    });
});