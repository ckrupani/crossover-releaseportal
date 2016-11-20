
import 'angular-mocks';
import BuildService from './build.service';

describe('Build Service', () => {

    let buildService = {},
        $httpBackend,
        fetchedList = [{
            type: 'build',
            name: 'Tenrox-R1_1235',
            owner: '',
            time: '4/18/2014 10:00am',
            state: 'Pending',
            metrics: {
                percentComplete: 0,
                state: 'Pending'
            },
            build: {
                percentComplete: 0,
                state: 'Pending'
            },
            unitTest: {
                percentComplete: 0,
                state: 'Pending'
            },
            functionalTest: {
                percentComplete: 0,
                state: 'Pending'
            }
        }];

    beforeEach(inject(function ($http, $q, _$httpBackend_) {
        buildService = new BuildService($http, $q);
        $httpBackend = _$httpBackend_;
    }));

    describe('getList function', () => {
        it('should fetch list of all builds and firewalls from api', () => {
            $httpBackend.when('GET', '/builds')
                    .respond(200, {status: 'success', data: fetchedList});
                
            buildService.getList().then((response) => {
                expect(response).toEqual(fetchedList);
            });

            $httpBackend.flush();
        });
        it('should return error when status is not success', () => {
            $httpBackend.when('GET', '/builds')
                    .respond(200, {status: 'error', data: fetchedList});
                
            buildService.getList().then((response) => {
            }, (errorMsg) => {
                expect(errorMsg).toBe('Error');
            });

            $httpBackend.flush();
        });
        it('should return error message when api is down', () => {
            $httpBackend.when('GET', '/builds')
                    .respond(500, {status: 'error', error: 'Server down'});
                
            buildService.getList().then((response) => {
            }, (errorMsg) => {
                expect(errorMsg).toBe('Server down');
            });

            $httpBackend.flush();
        });
    });
});