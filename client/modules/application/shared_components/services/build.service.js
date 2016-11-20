
/**
 * This service communicates with stubbed backend and exposes list of builds. 
 */

/**
 * BuildService: This service implements all the apis related to builds. It fetches all the builds and firewalls
 *                by using HTTP requests. This services implements a function getList.
 *
 * getList:
 *      return: It returns a promise that will be resovled when builds data is available.
 */
 
export default class Build {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getList() {
        var deffered = this.$q.defer();

        this.$http.get('/builds').then((response) => {
            if (response.data.status === 'success') {
                deffered.resolve(response.data.data);
            } else {
                deffered.reject('Error');
            }
        }, (response) => {
            if (response.data.status === 'error') {
                deffered.reject(response.data.error);
            }
        });

        return deffered.promise;
    }
}
