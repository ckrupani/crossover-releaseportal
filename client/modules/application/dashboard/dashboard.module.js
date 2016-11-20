/*global angular*/

/**
 * Module dependencies.
 */
import routeConfig from './dashboard.route.config';
import Controller from './dashboard.controller';

/**
 * Following module contains logic related to dashboard view. It shows list of builds an firewalls that are fetched using
 * Build service. When user clicks a build, it shows extra information about that build.
 * 
 * config: It defines dashboard route.
 *
 * controller: It declares the controller of the view.
 */

export default angular.module('Dashboard', [])
.config(routeConfig)
.controller('DashboardCtrl', Controller);
