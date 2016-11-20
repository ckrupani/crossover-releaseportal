/*global angular*/

/**
 * Module dependencies 
 */

import BuildService from './build.service';


/**
 * Following module contains all the services that are required by the app. These services provide
 * common interface to share data across application.
 */

export default angular.module('Services', [])

    .service('Build', BuildService);